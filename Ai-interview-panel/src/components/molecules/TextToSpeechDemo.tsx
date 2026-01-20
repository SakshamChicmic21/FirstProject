"use client";

import { useState } from "react";
import { useTextToSpeech } from "@/hooks/useTextToSpeech";
import { AVAILABLE_VOICES } from "@/api/textToSpeech";
import { Volume2, Loader2, Square } from "lucide-react";

export default function TextToSpeechDemo() {
  const [text, setText] = useState("Please explain closures in JavaScript");
  const [selectedVoice, setSelectedVoice] = useState(AVAILABLE_VOICES[0].id);
  const [stability, setStability] = useState(0.5);
  const [similarityBoost, setSimilarityBoost] = useState(0.8);

  const { speak, stop, isPlaying, isLoading, error } = useTextToSpeech();

  const handleSpeak = () => {
    speak(text, {
      voiceId: selectedVoice,
      stability,
      similarityBoost,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="glass-card p-8 rounded-2xl">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
            Text to Speech Demo
          </h1>
          <p className="text-slate-400 mb-8">Powered by ElevenLabs AI</p>

          {/* Text Input */}
          <div className="mb-6">
            <label className="block text-slate-300 font-medium mb-2">
              Text to Convert
            </label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
              rows={4}
              placeholder="Enter text to convert to speech..."
            />
          </div>

          {/* Voice Selection */}
          <div className="mb-6">
            <label className="block text-slate-300 font-medium mb-2">
              Select Voice
            </label>
            <select
              value={selectedVoice}
              onChange={(e) => setSelectedVoice(e.target.value)}
              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            >
              {AVAILABLE_VOICES.map((voice) => (
                <option key={voice.id} value={voice.id}>
                  {voice.name} - {voice.description}
                </option>
              ))}
            </select>
          </div>

          {/* Voice Settings */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Stability */}
            <div>
              <label className="block text-slate-300 font-medium mb-2">
                Stability: {stability.toFixed(2)}
              </label>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={stability}
                onChange={(e) => setStability(parseFloat(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider"
              />
              <p className="text-sm text-slate-500 mt-1">
                Lower = more variable, Higher = more stable
              </p>
            </div>

            {/* Similarity Boost */}
            <div>
              <label className="block text-slate-300 font-medium mb-2">
                Similarity Boost: {similarityBoost.toFixed(2)}
              </label>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={similarityBoost}
                onChange={(e) => setSimilarityBoost(parseFloat(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider"
              />
              <p className="text-sm text-slate-500 mt-1">
                Lower = more diverse, Higher = more similar to original
              </p>
            </div>
          </div>

          {/* Error Display */}
          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/50 rounded-xl">
              <p className="text-red-400">{error}</p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              onClick={handleSpeak}
              disabled={isLoading || isPlaying || !text.trim()}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:from-slate-700 disabled:to-slate-700 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:transform-none"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Generating...
                </>
              ) : isPlaying ? (
                <>
                  <Volume2 className="w-5 h-5 animate-pulse" />
                  Playing...
                </>
              ) : (
                <>
                  <Volume2 className="w-5 h-5" />
                  Convert to Speech
                </>
              )}
            </button>

            {isPlaying && (
              <button
                onClick={stop}
                className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2"
              >
                <Square className="w-5 h-5" />
                Stop
              </button>
            )}
          </div>

          {/* Info */}
          <div className="mt-8 p-4 bg-slate-800/50 border border-slate-700 rounded-xl">
            <h3 className="text-slate-300 font-semibold mb-2">How to Use:</h3>
            <ol className="text-slate-400 text-sm space-y-1 list-decimal list-inside">
              <li>Enter the text you want to convert to speech</li>
              <li>Select a voice from the dropdown</li>
              <li>Adjust stability and similarity boost settings</li>
              <li>Click to hear the result</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
