# WebSocket Request/Response Guide

Complete protocol documentation for both WebSocket endpoints with real request/response examples, triggers, and use cases.

---

## 📋 Overview

| Endpoint | Purpose | Audience | Events Received |
|----------|---------|----------|-----------------|
| `/ws/api/interview/{interview_id}` | Candidate violation stream | Candidate (in browser) | `ViolationEvent` only |
| `/ws/api/dashboard/{interview_id}` | Admin monitoring stream | Admin/Proctor (dashboard) | `ViolationEvent` + Status Changes |

---

## 1️⃣ CANDIDATE VIOLATION STREAM

### Connection Request

**Endpoint:** `GET /ws/api/interview/{interview_id}?token=<candidate_access_token>`

**URL Example:**
```
ws://127.0.0.1:8000/ws/api/interview/42?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**cURL Example (WebSocket):**
```bash
# Note: cURL doesn't natively support WebSocket, use websocat or wscat instead
wscat -c "ws://127.0.0.1:8000/ws/api/interview/42?token=YOUR_CANDIDATE_TOKEN"
```

---

### ✅ Success Response (Connection Accepted)

**HTTP Status:** 101 Switching Protocols

**Connection Established - Ready to receive events**

No initial response body. Connection will remain open and stream events as they occur.

---

### ❌ Error Response (Missing/Invalid Token)

**Request:**
```
GET /ws/api/interview/42
(no token parameter)
```

**Response:** 403 Forbidden or Connection Rejected

The server will close the connection immediately if token is not provided or invalid.

---

### 📤 Outgoing Events (Server → Client)

#### 1️⃣ Interview Finished Confirmation

**When:** Candidate successfully finishes the interview via WebSocket.

**Response Body:**

```json
{
    "type": "interview_finished_confirmation",
    "status": "success",
    "message": "Interview finished. Results are being processed."
}
```

---

### 📤 Violation Event - Candidate Receives

**When:** Candidate violates proctoring rules (tab switch, wrong face, etc.)

**Response Body (Server → Client):**

#### Example 1: Tab Switch Violation

```json
{
    "event_type": "violation_detected",
    "interview_id": 42,
    "data": {
        "violation_type": "tab_switch",
        "violation_count": 1,
        "timestamp": "2026-05-05T13:20:15.123456Z",
        "details": "Candidate switched to another tab"
    }
}
```

#### Example 2: Multiple Faces Detected

```json
{
    "event_type": "violation_detected",
    "interview_id": 42,
    "data": {
        "violation_type": "multiple_faces",
        "violation_count": 1,
        "timestamp": "2026-05-05T13:20:20.654321Z",
        "details": "Multiple faces detected in frame"
    }
}
```

#### Example 3: No Face Detected

```json
{
    "event_type": "violation_detected",
    "interview_id": 42,
    "data": {
        "violation_type": "no_face",
        "violation_count": 2,
        "timestamp": "2026-05-05T13:20:25.987654Z",
        "details": "No face detected in video feed"
    }
}
```

#### Example 4: Wrong Candidate/Unauthorized Person

```json
{
    "event_type": "violation_detected",
    "interview_id": 42,
    "data": {
        "violation_type": "wrong_candidate",
        "violation_count": 1,
        "timestamp": "2026-05-05T13:20:30.111111Z",
        "details": "Face recognition failed or unauthorized person detected"
    }
}
```

---

### 🚫 Suspension Event - Candidate Receives (When Threshold Exceeded)

**When:** Candidate accumulates too many violations (default: 3+ warnings)

**Response Body:**

```json
{
    "event_type": "interview_suspended",
    "interview_id": 42,
    "data": {
        "reason": "max_warnings_exceeded",
        "warning_count": 3,
        "max_warnings": 3,
        "last_violation": "tab_switch",
        "suspended_at": "2026-05-05T13:21:00.000000Z"
    }
}
```

---

### 🔄 Client → Server (Messages)

**1. Keep-Alive Heartbeat** (optional):
```json
{
    "type": "ping"
}
```

**2. Candidate Login Notification** (required for dashboard tracking):
The frontend should send this message immediately after the WebSocket connection is established to notify the admin of the candidate's active presence.

```json
{
    "type": "login",
    "email": "candidate@example.com"
}
```

**3. Tab Switch Notification**:
Sent by the frontend when the candidate leaves the interview tab.

```json
{
    "type": "tab_switch",
    "interview_id": 42
}
```

**4. Tab Return Notification**:
Sent by the frontend when the candidate returns to the interview tab.

```json
{
    "type": "tab_return",
    "interview_id": 42
}
```

**5. Finish Interview Notification**:
Sent by the frontend when the candidate manually clicks "Finish Interview". This triggers result processing and notifies the admin.

```json
{
    "type": "finish_interview",
    "interview_id": 42
}
```


---

### ✅ Success Response (Connection Accepted)

**HTTP Status:** 101 Switching Protocols

No initial response. Connection open and ready to receive events.

---

### ❌ Error Response (Invalid Credentials)

**Response:** 403 Forbidden

Connection rejected if token is missing, invalid, or user is not an admin.

---

### 📤 Event Types - Admin Receives

#### 1️⃣ VIOLATION DETECTED EVENT

**When:** Any violation occurs during interview

**Response Body:**

```json
{
    "event_type": "violation_detected",
    "interview_id": 42,
    "data": {
        "violation_type": "tab_switch",
        "violation_count": 1,
        "timestamp": "2026-05-05T13:20:15.123456Z",
        "severity": "warning",
        "details": "Candidate switched to another tab"
    }
}
```

**Violation Types Admin Can Receive:**
- `tab_switch` - Candidate switched to different browser tab
- `multiple_faces` - More than one face in frame
- `no_face` - No face detected in video
- `wrong_candidate` - Face recognition failed or unauthorized person
- `gaze_away` - Candidate not looking at screen (if eye-tracking enabled)
- `connection_unstable` - Network issues or device unstable
- `unauthorized_device` - External input device detected

**Severity Levels:**
- `"info"` - Informational (connection unstable, low audio)
- `"warning"` - Accumulate toward suspension (tab switch, face issues)
- `"critical"` - Immediate suspension (security alerts, unauthorized persons)

---

#### 2️⃣ INTERVIEW STARTED EVENT

**When:** Candidate starts the interview (SCHEDULED → LIVE transition)

**Response Body:**

```json
{
    "event_type": "interview_started",
    "interview_id": 42,
    "data": {
        "status": "LIVE",
        "started_at": "2026-05-05T13:15:00.000000Z",
        "dashboard_data": {
            "live": 1,
            "proctoring_activity": "0.00%",
            "failed_today": 0,
            "passed_today": 0
        }
    }
}
```

---

#### 3️⃣ INTERVIEW SUSPENDED EVENT

**When:** Violation threshold exceeded OR admin manually suspends

**Response Body:**

```json
{
    "event_type": "interview_suspended",
    "interview_id": 42,
    "data": {
        "reason": "max_warnings_exceeded",
        "warning_count": 3,
        "max_warnings": 3,
        "last_violation": "tab_switch",
        "suspension_metadata": {
            "auto_suspended": true,
            "suspended_at": "2026-05-05T13:21:00.000000Z"
        },
        "dashboard_data": {
            "live": 0,
            "proctoring_activity": "100.00%",
            "failed_today": 1,
            "passed_today": 0
        }
    }
}
```

**Possible Suspension Reasons:**
- `"max_warnings_exceeded"` - Accumulated too many violations
- `"critical_violation"` - Single critical violation occurred
- `"manual_suspension"` - Admin manually suspended the interview
- `"security_breach"` - Unauthorized person or device detected

---

#### 4️⃣ INTERVIEW COMPLETED EVENT

**When:** Interview finishes (time expires, candidate submits, etc.)

**Response Body:**

```json
{
    "event_type": "interview_completed",
    "interview_id": 42,
    "data": {
        "result_status": "Pass",
        "completed_at": "2026-05-05T13:45:00.000000Z",
        "dashboard_data": {
            "live": 0,
            "proctoring_activity": "0.00%",
            "failed_today": 0,
            "passed_today": 1
        }
    }
}
```

**Result Status Values:**
- `"Pass"` - Candidate passed evaluation
- `"Fail"` - Candidate failed evaluation
- `"Suspended"` - Candidate was suspended (policy violations)
- `"Incomplete"` - Candidate did not complete

---

#### 5️⃣ INTERVIEW EXPIRED EVENT

**When:** Interview time limit exceeded

**Response Body:**

```json
{
    "event_type": "interview_expired",
    "interview_id": 42,
    "data": {
        "status": "EXPIRED",
        "scheduled_duration_minutes": 30,
        "actual_duration_minutes": 30.5,
        "expired_at": "2026-05-05T13:45:30.000000Z",
        "reason": "duration_timeout"
    }
}
```

---

#### 6️⃣ CANDIDATE CONNECTION EVENTS

**When:** Candidate connects or disconnects from their proctoring stream.

**Candidate Logged In:**
This event is triggered when the candidate sends a `{"type": "login"}` message over the WebSocket.
```json
{
    "event_type": "candidate_logged_in",
    "interview_id": 42,
    "data": {
        "candidate_id": 7,
        "candidate_name": "John Doe",
        "candidate_email": "candidate@example.com",
        "timestamp": "2026-05-05T13:15:00.000000Z",
        "dashboard_data": {
            "live": 1,
            "proctoring_activity": "0.00%",
            "failed_today": 0,
            "passed_today": 0
        }
    }
}
```

**Connection Established:**
```json
{
    "event_type": "candidate_connected",
    "interview_id": 42,
    "data": {
        "timestamp": "2026-05-05T13:15:00.000000Z",
        "dashboard_data": {
            "live": 1,
            "proctoring_activity": "0.00%",
            "failed_today": 0,
            "passed_today": 0
        }
    }
}
```

**Connection Lost:**
```json
{
    "event_type": "candidate_disconnected",
    "interview_id": 42,
    "data": {
        "timestamp": "2026-05-05T13:45:00.000000Z",
        "dashboard_data": {
            "live": 0,
            "proctoring_activity": "0.00%",
            "failed_today": 0,
            "passed_today": 1
        }
    }
}
```

## 📋 Quick Reference Matrix

| Event | Triggered By | Sent To | Payload Contains | Action Required |
|-------|-------------|---------|-----------------|-----------------|
| `violation_detected` | Any policy breach | Candidate + Admin | violation_type, count, details | Show warning (candidate), Log (admin) |
| `interview_started` | Candidate starts interview | Admin only | start_time, duration | Begin monitoring |
| `interview_suspended` | 3+ violations OR critical violation | Admin only | reason, count | Review candidate |
| `interview_completed` | Time expired OR candidate finishes | Admin only | result_status, total_violations | Record result |
| `interview_expired` | Time limit exceeded | Admin only | actual_duration | Auto-complete |

---
