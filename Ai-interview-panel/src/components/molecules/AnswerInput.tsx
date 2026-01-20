"use client";

import { useState, KeyboardEvent, useEffect } from "react";
import { Send, Mic, Keyboard, Loader2, MicOff } from "lucide-react";
import { useSpeechToText } from "@/hooks/useSpeechToText";

interface AnswerInputProps {
  onSendAnswer: (answer: string) => void;
  isLoading: boolean;
}

export default function AnswerInput({
  onSendAnswer,
  isLoading,
}: AnswerInputProps) {
  const [answer, setAnswer] = useState("");
  const [inputMode, setInputMode] = useState<"text" | "voice">("text");

  const {
    isRecording,
    isTranscribing,
    transcript,
    error,
    startRecording,
    stopRecording,
    clearTranscript,
  } = useSpeechToText();

  // Update answer field when transcript changes
  useEffect(() => {
    if (transcript) {
      setAnswer(transcript);
    }
  }, [transcript]);

  const handleSend = () => {
    if (answer.trim() && !isLoading) {
      onSendAnswer(answer);
      setAnswer("");
      clearTranscript();
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const toggleInputMode = () => {
    const newMode = inputMode === "text" ? "voice" : "text";
    setInputMode(newMode);

    // If switching away from voice, stop any active recording
    if (inputMode === "voice" && isRecording) {
      handleStopRecording();
    }
  };

  const handleStartRecording = async () => {
    clearTranscript();
    setAnswer("");
    await startRecording();
  };

  const handleStopRecording = async () => {
    try {
      const text = await stopRecording();
      setAnswer(text);
    } catch (err) {
      console.error("Failed to stop recording:", err);
    }
  };

  const handleSendVoice = async () => {
    if (isRecording) {
      await handleStopRecording();
    }

    if (answer.trim()) {
      onSendAnswer(answer);
      setAnswer("");
      clearTranscript();
    }
  };

  return (
    <div className="glass-card rounded-2xl p-6">
      <div className="flex items-center gap-3 mb-4">
        <button
          onClick={toggleInputMode}
          disabled={isRecording || isTranscribing}
          className={`px-4 py-2 rounded-lg font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed ${
            inputMode === "text"
              ? "bg-purple-600 text-white"
              : "bg-slate-700 text-slate-300 hover:bg-slate-600"
          }`}
        >
          <Keyboard className="w-4 h-4 inline mr-2" />
          Text
        </button>
        <button
          onClick={toggleInputMode}
          disabled={isRecording || isTranscribing}
          className={`px-4 py-2 rounded-lg font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed ${
            inputMode === "voice"
              ? "bg-purple-600 text-white"
              : "bg-slate-700 text-slate-300 hover:bg-slate-600"
          }`}
        >
          <Mic className="w-4 h-4 inline mr-2" />
          Voice
        </button>
      </div>

      {inputMode === "text" ? (
        <div className="flex gap-3">
          <textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your answer here... (Press Enter to send, Shift+Enter for new line)"
            className="flex-1 bg-slate-800/50 border border-purple-500/20 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none min-h-[100px] scrollbar-custom"
            disabled={isLoading}
          />
          <button
            onClick={handleSend}
            disabled={!answer.trim() || isLoading}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:from-slate-700 disabled:to-slate-700 disabled:cursor-not-allowed rounded-xl text-white font-medium transition-all flex items-center gap-2 self-end group"
          >
            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            Send
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {/* Recording Interface */}
          <div className="bg-slate-800/50 border border-purple-500/20 rounded-xl p-8 text-center">
            <div
              className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-4 transition-all ${
                isRecording
                  ? "bg-red-600 animate-pulse shadow-lg shadow-red-500/50"
                  : isTranscribing
                    ? "bg-purple-600 animate-pulse"
                    : "bg-slate-700"
              }`}
            >
              {isTranscribing ? (
                <Loader2 className="w-10 h-10 text-white animate-spin" />
              ) : isRecording ? (
                <Mic className="w-10 h-10 text-white" />
              ) : (
                <MicOff className="w-10 h-10 text-white" />
              )}
            </div>

            <p className="text-slate-300 mb-2 font-medium">
              {isTranscribing
                ? "Transcribing your audio..."
                : isRecording
                  ? "Recording... Speak your answer"
                  : "Ready to record"}
            </p>

            <p className="text-sm text-slate-500 mb-4">
              {isRecording
                ? "Click stop when you're finished speaking"
                : "Click start to begin recording your answer"}
            </p>

            {/* Recording Controls */}
            <div className="flex gap-3 justify-center">
              {!isRecording ? (
                <button
                  onClick={handleStartRecording}
                  disabled={isTranscribing || isLoading}
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:from-slate-700 disabled:to-slate-700 disabled:cursor-not-allowed rounded-xl text-white font-medium transition-all flex items-center gap-2"
                >
                  <Mic className="w-5 h-5" />
                  Start Recording
                </button>
              ) : (
                <button
                  onClick={handleStopRecording}
                  className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-xl text-white font-medium transition-all flex items-center gap-2"
                >
                  <MicOff className="w-5 h-5" />
                  Stop Recording
                </button>
              )}
            </div>

            {/* Error Display */}
            {error && (
              <div className="mt-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                <p className="text-sm text-red-400">⚠️ {error}</p>
              </div>
            )}
          </div>

          {/* Transcript Preview */}
          {answer && (
            <div className="bg-slate-800/50 border border-purple-500/20 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-slate-400 font-medium">
                  Transcribed Text:
                </p>
                <button
                  onClick={() => {
                    setAnswer("");
                    clearTranscript();
                  }}
                  className="text-xs text-purple-400 hover:text-purple-300"
                >
                  Clear
                </button>
              </div>
              <p className="text-white text-sm leading-relaxed max-h-32 overflow-y-auto scrollbar-custom">
                {answer}
              </p>
              <button
                onClick={handleSendVoice}
                disabled={isLoading || isRecording || isTranscribing}
                className="mt-4 w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:from-slate-700 disabled:to-slate-700 disabled:cursor-not-allowed rounded-xl text-white font-medium transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Answer
              </button>
            </div>
          )}
        </div>
      )}

      <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
        <div className="flex-1">
          <p>💡 Tip: Be clear and structured in your responses</p>
        </div>
        <div className="text-right">
          {answer.length > 0 && <span>{answer.length} characters</span>}
        </div>
      </div>
    </div>
  );
}
