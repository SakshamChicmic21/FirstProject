"use client";

import { useState, useEffect, useRef } from "react";
import {
  initializeSession,
  sendMessage,
  startInterview,
  endInterview,
  ChatMessage,
} from "@/api/interview";
import InterviewPanel from "@/components/molecules/InterviewPanel";
import AnswerInput from "@/components/molecules/AnswerInput";
import FeedbackDisplay from "@/components/molecules/FeedbackDisplay";
import InterviewSetup from "@/components/molecules/InterviewSetup";
import { Mic, MicOff, Video, VideoOff, Phone } from "lucide-react";

export default function InterviewPage() {
  const [userId, setUserId] = useState("");
  const [sessionId, setSessionId] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isInterviewActive, setIsInterviewActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [interviewStarted, setInterviewStarted] = useState(false);
  const [isMicOn, setIsMicOn] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleStartInterview = async (
    email: string,
    role: string,
    skills: string[],
  ) => {
    setUserId(email);
    const newSessionId = initializeSession();
    setSessionId(newSessionId);
    setIsInterviewActive(true);
    setIsLoading(true);

    try {
      const response = await startInterview(email, newSessionId, role, skills);

      const aiMessage: ChatMessage = {
        role: "assistant",
        content:
          response.response ||
          response.message ||
          "Welcome! Let's begin the interview.",
        timestamp: new Date(),
      };

      setMessages([aiMessage]);
      setCurrentQuestion(aiMessage.content);
      setInterviewStarted(true);
    } catch (error) {
      console.error("Error starting interview:", error);
      const errorMessage: ChatMessage = {
        role: "assistant",
        content:
          "Sorry, there was an error starting the interview. Please try again.",
        timestamp: new Date(),
      };
      setMessages([errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendAnswer = async (answer: string) => {
    if (!answer.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      role: "user",
      content: answer,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const response = await sendMessage(userId, sessionId, answer);

      const aiMessage: ChatMessage = {
        role: "assistant",
        content:
          response.response || response.message || "Thank you for your answer.",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
      setCurrentQuestion(aiMessage.content);
    } catch (error) {
      console.error("Error sending answer:", error);
      const errorMessage: ChatMessage = {
        role: "assistant",
        content:
          "Sorry, there was an error processing your answer. Please try again.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEndInterview = async () => {
    setIsLoading(true);

    try {
      const response = await endInterview(userId, sessionId);

      const feedbackMessage: ChatMessage = {
        role: "assistant",
        content:
          response.response ||
          response.message ||
          "Thank you for completing the interview!",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, feedbackMessage]);
      setIsInterviewActive(false);
    } catch (error) {
      console.error("Error ending interview:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleMic = () => {
    setIsMicOn(!isMicOn);
    // Voice API integration will be added here
  };

  const toggleVideo = () => {
    setIsVideoOn(!isVideoOn);
    // Video API integration will be added here
  };

  if (!interviewStarted) {
    return <InterviewSetup onStart={handleStartInterview} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6 glass-card p-4 rounded-2xl">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI Interview Panel
              </h1>
              <p className="text-slate-400 mt-1">Session ID: {sessionId}</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={toggleMic}
                className={`control-btn ${isMicOn ? "bg-purple-600" : "bg-slate-700"}`}
                title={isMicOn ? "Mute" : "Unmute"}
              >
                {isMicOn ? (
                  <Mic className="w-5 h-5" />
                ) : (
                  <MicOff className="w-5 h-5" />
                )}
              </button>
              <button
                onClick={toggleVideo}
                className={`control-btn ${isVideoOn ? "bg-purple-600" : "bg-slate-700"}`}
                title={isVideoOn ? "Stop Video" : "Start Video"}
              >
                {isVideoOn ? (
                  <Video className="w-5 h-5" />
                ) : (
                  <VideoOff className="w-5 h-5" />
                )}
              </button>
              <button
                onClick={handleEndInterview}
                className="control-btn bg-red-600 hover:bg-red-700"
                title="End Interview"
              >
                <Phone className="w-5 h-5 rotate-135" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Interview Panel - Chat History */}
          <div className="lg:col-span-2">
            <InterviewPanel
              messages={messages}
              currentQuestion={currentQuestion}
              isLoading={isLoading}
              messagesEndRef={messagesEndRef}
            />
          </div>

          {/* Sidebar - Feedback */}
          <div className="lg:col-span-1">
            <FeedbackDisplay messages={messages} />
          </div>
        </div>

        {/* Answer Input */}
        <div className="mt-6">
          <AnswerInput onSendAnswer={handleSendAnswer} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
}
