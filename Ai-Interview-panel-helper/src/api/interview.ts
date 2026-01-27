import axios from "axios";

const API_BASE_URL = "https://agent-prod.studio.lyzr.ai/v3";
const API_KEY = "sk-default-VWFkXStIV1C7PocgY29qSwHKILnP1AzO";
const AGENT_ID = "696d317ac3a33af8ef060c43";

// Set this to true to use mock responses (useful for testing without API limits)
const USE_MOCK_MODE = false;

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export interface InterviewSession {
  sessionId: string;
  userId: string;
  messages: ChatMessage[];
  status: "active" | "completed" | "paused";
  score?: number;
  feedback?: string;
}

export interface ChatResponse {
  response?: string;
  message?: string;
  status?: string;
  data?: unknown;
}

/**
 * Initialize a new interview session
 */
export const initializeSession = (): string => {
  return `${AGENT_ID}-${generateSessionId()}`;
};

/**
 * Generate a unique session ID
 */
const generateSessionId = (): string => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
};

/**
 * Mock interview responses for testing
 */
const mockResponses: Record<number, string> = {
  0: "Hello! I'm your AI interviewer today. Thank you for applying for the Frontend Developer position. I'm excited to learn more about your experience with JavaScript, TypeScript, and React. Let's begin with an introduction - could you please tell me about your background and what motivated you to apply for this role?",
  1: "That's great to hear! Now, let's dive into some technical questions. Can you explain the difference between var, let, and const in JavaScript? When would you use each one?",
  2: "Excellent explanation! Now, let's talk about React. Could you explain what React hooks are and provide an example of when you've used useState or useEffect in a project?",
  3: "Very good! Let's discuss TypeScript. What are the main benefits of using TypeScript over vanilla JavaScript? Can you give me an example of a situation where TypeScript helped you catch a bug that would have been difficult to find in JavaScript?",
  4: "Great insights! Now I'd like to ask about a challenging situation. Can you describe a time when you had to debug a complex issue in a React application? Walk me through your problem-solving process.",
  5: "Thank you for sharing that experience. Let me ask you about team collaboration. How do you handle code reviews? What do you look for when reviewing someone else's code?",
  6: "Final question: Where do you see yourself in the next 2-3 years in terms of your career growth? What skills are you most interested in developing?\n\nThank you for your thoughtful answers throughout this interview! Let me provide you with comprehensive feedback...",
  7: "## Interview Feedback\n\n**Overall Score: 85/100**\n\n### Strengths:\n✅ Strong technical knowledge of JavaScript fundamentals\n✅ Good understanding of React and modern frontend concepts\n✅ Clear communication and structured answers\n✅ Demonstrated problem-solving abilities\n✅ Good awareness of best practices\n\n### Areas for Improvement:\n⚠️ Could provide more specific project examples\n⚠️ Consider diving deeper into performance optimization techniques\n⚠️ Practice explaining complex concepts more concisely\n\n### Recommendations:\n💡 Work on more real-world TypeScript projects to strengthen your understanding\n💡 Study React performance optimization patterns (memoization, code splitting)\n💡 Practice the STAR method for behavioral questions\n💡 Build a portfolio showcasing your React and TypeScript skills\n\n### Technical Accuracy: 88%\n### Communication: 85%\n### Confidence: 82%\n### Clarity: 85%\n\nGreat job overall! You demonstrated solid technical skills and good communication. Keep practicing and building projects to strengthen your expertise. Good luck with your job search!",
};

let mockResponseIndex = 0;

/**
 * Send a message to the AI Interview Agent
 */
export const sendMessage = async (
  userId: string,
  sessionId: string,
  message: string,
): Promise<ChatResponse> => {
  if (USE_MOCK_MODE) {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const response =
      mockResponses[mockResponseIndex] ||
      "Thank you for your response. Could you elaborate more on that?";
    mockResponseIndex++;

    return {
      response,
      status: "success",
    };
  } else {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/inference/chat/`,
        {
          user_id: userId,
          agent_id: AGENT_ID,
          session_id: sessionId,
          message: message,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": API_KEY,
          },
        },
      );

      return response.data;
    } catch (error) {
      console.error("Error sending message:", error);
      throw error;
    }
  }
};

/**
 * Start a new interview session
 */
export const startInterview = async (
  userId: string,
  sessionId: string,
  role?: string,
  skills?: string[],
): Promise<ChatResponse> => {
  const initialMessage =
    role && skills
      ? `I am applying for ${role} position. My skills include: ${skills.join(", ")}. Please start the interview.`
      : "Please start the interview.";

  return sendMessage(userId, sessionId, initialMessage);
};

/**
 * End the interview and request feedback
 */
export const endInterview = async (
  userId: string,
  sessionId: string,
): Promise<ChatResponse> => {
  if (USE_MOCK_MODE) {
    mockResponseIndex = 7; // Jump to feedback response
  }

  return sendMessage(
    userId,
    sessionId,
    "Please end the interview and provide my overall score, strengths, weaknesses, and improvement suggestions.",
  );
};

/**
 * Get interview history (mock implementation - would be replaced with actual API)
 */
export const getInterviewHistory = async (
  userId: string,
): Promise<InterviewSession[]> => {
  // This would typically fetch from your backend
  // For now, returning from localStorage
  const history = localStorage.getItem(`interview_history_${userId}`);
  return history ? JSON.parse(history) : [];
};

/**
 * Save interview session to history
 */
export const saveInterviewSession = (session: InterviewSession): void => {
  const history = getInterviewHistory(session.userId);
  history.then((h) => {
    const updated = [...h, session];
    localStorage.setItem(
      `interview_history_${session.userId}`,
      JSON.stringify(updated),
    );
  });
};
