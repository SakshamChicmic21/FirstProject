"use client";

import { ChatMessage } from "@/api/interview";
import { Bot, User, Loader2, Volume2, VolumeX } from "lucide-react";
import { RefObject, useState } from "react";
import { useTextToSpeech } from "@/hooks/useTextToSpeech";

interface InterviewPanelProps {
  messages: ChatMessage[];
  currentQuestion: string;
  isLoading: boolean;
  messagesEndRef: RefObject<HTMLDivElement | null>;
  autoPlayVoice?: boolean;
}

export default function InterviewPanel({
  messages,
  isLoading,
  messagesEndRef,
}: InterviewPanelProps) {
  const { speak, stop, isPlaying } = useTextToSpeech();
  const [playingMessageIndex, setPlayingMessageIndex] = useState<number | null>(
    null,
  );

  const handlePlayMessage = (content: string, index: number) => {
    if (playingMessageIndex === index && isPlaying) {
      stop();
      setPlayingMessageIndex(null);
    } else {
      speak(content, {
        voiceId: "EXAVITQu4vr4xnSDxMaL", // Rachel - Professional female voice
        stability: 0.6,
        similarityBoost: 0.8,
      });
      setPlayingMessageIndex(index);
    }
  };

  return (
    <div className="glass-card rounded-2xl p-6 h-[600px] flex flex-col">
      <div className="flex items-center gap-3 mb-4 pb-4 border-b border-white/10">
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
          <Bot className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-white">AI Interviewer</h2>
          <p className="text-sm text-slate-400">
            Ready to evaluate your responses
          </p>
        </div>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto space-y-4 pr-2 scrollbar-custom">
        {messages.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <Bot className="w-16 h-16 text-purple-400 mx-auto mb-4 animate-pulse" />
              <p className="text-slate-400">
                Waiting for the interview to begin...
              </p>
            </div>
          </div>
        ) : (
          messages.map((message, index) => (
            <div
              key={index}
              className={`flex gap-3 animate-slide-in ${
                message.role === "user" ? "flex-row-reverse" : "flex-row"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.role === "user"
                    ? "bg-gradient-to-r from-blue-500 to-cyan-500"
                    : "bg-gradient-to-r from-purple-500 to-pink-500"
                }`}
              >
                {message.role === "user" ? (
                  <User className="w-5 h-5 text-white" />
                ) : (
                  <Bot className="w-5 h-5 text-white" />
                )}
              </div>
              <div
                className={`flex-1 ${
                  message.role === "user" ? "text-right" : "text-left"
                }`}
              >
                <div className="relative group">
                  <div
                    className={`inline-block px-4 py-3 rounded-2xl ${
                      message.role === "user"
                        ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white"
                        : "bg-slate-800/50 text-slate-100 border border-purple-500/20"
                    } max-w-[80%]`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">
                      {message.content}{" "}
                    </p>
                  </div>

                  {/* Voice playback button for AI messages */}
                  {message.role === "assistant" && (
                    <button
                      onClick={() => handlePlayMessage(message.content, index)}
                      className="absolute -right-10 top-2 opacity-0 group-hover:opacity-100 transition-opacity p-2 bg-purple-600 hover:bg-purple-700 rounded-lg"
                      title={
                        playingMessageIndex === index && isPlaying
                          ? "Stop"
                          : "Play"
                      }
                    >
                      {playingMessageIndex === index && isPlaying ? (
                        <VolumeX className="w-4 h-4 text-white" />
                      ) : (
                        <Volume2 className="w-4 h-4 text-white" />
                      )}
                    </button>
                  )}
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  {new Date(message.timestamp).toLocaleTimeString()}
                </p>
              </div>
            </div>
          ))
        )}

        {isLoading && (
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div className="bg-slate-800/50 border border-purple-500/20 px-4 py-3 rounded-2xl">
              <div className="flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin text-purple-400" />
                <span className="text-sm text-slate-400">
                  AI is thinking...
                </span>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>
    </div>
  );
}
