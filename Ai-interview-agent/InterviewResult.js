Table InterviewResult {
  id int [pk]
  interview_id int [
    Table InterviewSession {
      id int [pk]
      access_token varchar [unique]
      admin_id {
        Table User {
          id int [pk]
          email varchar [unique]  
          full_name varchar
          password_hash varchar
          role varchar // enum: admin, super_admin, candidate
          resume_text text
          profile_image varchar // path to uploaded selfie
          profile_image_bytes blob // binary store for selfie
          face_embedding text // JSON string of ArcFace vector
        }
      }
      candidate_id {
        Table User {
          id int [pk]
          email varchar [unique]
          full_name varchar
          password_hash varchar
          role varchar // enum: admin, super_admin, candidate
          resume_text text
          profile_image varchar // path to uploaded selfie
          profile_image_bytes blob // binary store for selfie
          face_embedding text // JSON string of ArcFace vector
        }
    }
      paper_id :{
        Table QuestionPaper {
          id int [pk]
          name varchar
          description text
          admin_id int
          created_at datetime
        }
      }
      schedule_time datetime
      duration_minutes int
      max_questions int
      start_time datetime
      end_time datetime
      status varchar // enum: scheduled, live, completed, expired, cancelled
      total_score float
      current_status varchar // enum: invited, link_accessed, authenticated, enrollment_started, enrollment_completed, interview_active, interview_paused, interview_completed, suspended
      last_activity datetime
      warning_count int
      max_warnings int
      is_suspended boolean
      suspension_reason text
      suspended_at datetime
      enrollment_audio_path varchar
      candidate_name varchar
      admin_name varchar
      is_completed boolean
    }
  ]
  interview_response : [
    Table Answers {
      id int [pk]
      interview_result_id int
      question_id int
      candidate_answer text
      feedback text
      score float
      audio_path varchar
      transcribed_text text
      timestamp datetime
    }  
  ]
  total_score float
  created_at datetime
}