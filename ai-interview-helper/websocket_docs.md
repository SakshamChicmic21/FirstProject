# AI Interview Proctoring — Frontend WebSocket Integration Guide

This document defines the WebSocket API contract between the Frontend (Candidate UI & Admin Panel) and the Backend.

---

## 1. Candidate WebSocket Stream
Connects the candidate's browser to the proctoring pipeline to track active status, lifecycle events, and send AI proctoring violations.

*   **Endpoint URL:** `ws://<backend-url>/ws/api/interview/{interview_id}?token=<ACCESS_TOKEN>`
*   **Protocol:** JSON

### A. Lifecycle Actions (Frontend → Backend)

#### 1. Start Interview
Send this immediately when the candidate clicks the "Start Interview" button.
```json
{
  "type": "start_interview"
}
```
*   **Backend Response (Confirmation):**
    ```json
    {
      "type": "start_interview_confirmation",
      "status": "success"
    }
    ```

#### 2. Finish Interview
Send this when the candidate manually clicks "Submit / Finish Interview".
```json
{
  "type": "finish_interview"
}
```
*   **Backend Response (Confirmation):**
    ```json
    {
      "type": "interview_finished_confirmation",
      "status": "success",
      "message": "Interview finished. Results are being processed."
    }
    ```

---

### B. Proctoring & Tab Switch Messages (Frontend → Backend)
When the frontend's on-device detector (MediaPipe/face-api.js) or browser hooks capture a violation, send a `violation_messages` event.

```json
{
  "event_type": "violation_messages",
  "violation_type": "no_face" | "multiple_faces" | "gaze_away" | "unauthorized_person" | "tab-switch" | "tab-return",
  "details": "User-friendly description or metadata (optional)"
}
```

#### Detailed Types:
| `violation_type` | Trigger Event | Backend Action / Severity |
| :--- | :--- | :--- |
| `tab-switch` | Candidate switches active tab/minimizes window. | **Warning:** Increments the suspension warning counter. |
| `tab-return` | Candidate returns to the interview tab. | Clears warning banner (if tab switch elapsed time is < 30 seconds). |
| `no_face` | No face visible in camera frame. | **Info:** Sends real-time alert UI message; does NOT count towards suspension. |
| `multiple_faces` | More than 1 face visible in frame. | **Info:** Sends real-time alert UI message; does NOT count towards suspension. |
| `gaze_away` | Candidate looking away from the screen. | **Info:** Sends real-time alert UI message; does NOT count towards suspension. |
| `unauthorized_person` | Face does not match the onboarded candidate. | **Info:** Sends real-time alert UI message; does NOT count towards suspension. |

---

### C. Live Proctoring Updates (Backend → Frontend)
The backend sends real-time messages back to the candidate client when a violation occurs. Use the `details` field to display immediate alert/warning banners.

```json
{
  "event_type": "violation_messages",
  "interview_id": 123,
  "violation_type": "tab_switch" | "multiple_faces" | "no_face" | "wrong_candidate" | "gaze_away",
  "details": "Human-readable warning message to show on screen",
  "warning_count": 1,
  "max_warnings": 3,
  "timestamp": "2026-05-27T11:00:00.000Z"
}
```

#### Canonical Messages Sent by Backend in `details`:
*   **Tab Switch Warning (e.g. Warning 1 of 3):**
    > *"Warning 1/3: You switched tabs. Return to the interview page now. 2 more tab switch(es) allowed before suspension."*
*   **Tab Switch Final Warning:**
    > *"⚠️ Final warning (2/3): You switched tabs. One more tab switch will immediately suspend your interview."*
*   **Tab Switch Limit Exceeded (Suspension):**
    > *"Tab switch limit reached (3/3). Your interview is being suspended due to repeated tab switching."*
*   **No Face:**
    > *"No face detected. Please stay visible in front of the camera."*
*   **Multiple Faces:**
    > *"Multiple faces detected. Only the candidate should be visible in the frame."*
*   **Gaze Away:**
    > *"Looking away from the screen detected. Please keep your eyes on the interview screen."*
*   **Identity Mismatch:**
    > *"Unrecognized face detected. Please ensure you are the registered candidate."*

---

## 2. Admin Per-Interview Dashboard Stream
Connects the active proctoring dashboard for a single interview to receive real-time logs and updates for a running session.

*   **Endpoint URL:** `ws://<backend-url>/ws/api/dashboard/{interview_id}?token=<ACCESS_TOKEN>`
*   **Protocol:** JSON

### Real-Time Live Events Sent by Backend:

#### 1. Interview Started
```json
{
  "event_type": "interview_started",
  "data": {
    "interview_id": 123,
    "interview_status": "LIVE",
    "candidate": {
      "candidate_id": 456,
      "candidate_name": "John Doe",
      "candidate_email": "john.doe@example.com"
    },
    "started_at": "2026-05-27T11:00:00.000Z"
  }
}
```

#### 2. Violation Logged (`violation_messages`)
```json
{
  "event_type": "violation_messages",
  "data": {
    "interview_id": 123,
    "interview_status": "LIVE",
    "candidate": {
      "candidate_id": 456,
      "candidate_name": "John Doe",
      "candidate_email": "john.doe@example.com"
    },
    "proctoring_events": {
      "tab_switch_count": 1,
      "warning_count": 1,
      "max_warnings": 3
    },
    "violation_type": "tab_switch",
    "details": "Warning 1/3: You switched tabs...",
    "timestamp": "2026-05-27T11:02:15.000Z"
  }
}
```

#### 3. Interview Automatically Suspended (Violation Threshold Exceeded)
```json
{
  "event_type": "interview_suspended",
  "data": {
    "interview_id": 123,
    "interview_status": "COMPLETED",
    "candidate": {
      "candidate_id": 456,
      "candidate_name": "John Doe"
    },
    "reason": "max_warnings_exceeded",
    "warning_count": 3,
    "max_warnings": 3,
    "last_violation": "tab_switch",
    "suspension_metadata": {
      "auto_suspended": true,
      "suspended_at": "2026-05-27T11:05:00.000Z"
    }
  }
}
```

#### 4. Interview Finished / Calculated Successfully
```json
{
  "event_type": "interview_completed",
  "data": {
    "interview_id": 123,
    "interview_status": "COMPLETED",
    "result_status": "Pass" | "Fail",
    "completed_at": "2026-05-27T11:08:00.000Z"
  }
}
```

---

## 3. Global Admin Dashboard Stream
Listen to this endpoint in the main admin list/dashboard to track multi-session activity and sync metrics in real-time.

*   **Endpoint URL:** `ws://<backend-url>/dashboard/ws?token=<ACCESS_TOKEN>`
*   **Protocol:** JSON

Broadcasts standard updates with live counters whenever a status transition or event occurs across the entire system:
```json
{
  "event_type": "violation_messages" | "interview_started" | "interview_completed" | "interview_expired" | "interview_suspended",
  "data": {
    "interview_id": 123,
    "interview_status": "LIVE",
    "candidate": {
      "candidate_name": "John Doe"
    },
    "dashboard_data": {
      "live": 4,
      "proctoring_activity": "25.00%",
      "failed_today": 2,
      "passed_today": 8
    }
  }
}
```
