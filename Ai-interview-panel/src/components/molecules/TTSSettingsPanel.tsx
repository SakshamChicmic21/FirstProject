"use client";

import { useState } from "react";
import { AVAILABLE_VOICES } from "@/api/textToSpeech";
import { Volume2, Settings as SettingsIcon } from "lucide-react";

export interface TTSSettings {
  enabled: boolean;
  autoPlay: boolean;
  voiceId: string;
  stability: number;
  similarityBoost: number;
}

interface TTSSettingsPanelProps {
  settings: TTSSettings;
  onSettingsChange: (settings: TTSSettings) => void;
}

export default function TTSSettingsPanel({
  settings,
  onSettingsChange,
}: TTSSettingsPanelProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const updateSetting = <K extends keyof TTSSettings>(
    key: K,
    value: TTSSettings[K],
  ) => {
    onSettingsChange({
      ...settings,
      [key]: value,
    });
  };

  return (
    <div className="glass-card rounded-2xl p-4">
      {/* Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between text-left"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
            <Volume2 className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Voice Settings</h3>
            <p className="text-sm text-slate-400">Text-to-speech preferences</p>
          </div>
        </div>
        <SettingsIcon
          className={`w-5 h-5 text-slate-400 transition-transform ${
            isExpanded ? "rotate-90" : ""
          }`}
        />
      </button>

      {/* Settings Panel */}
      {isExpanded && (
        <div className="mt-6 space-y-6">
          {/* Enable TTS */}
          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium text-slate-300">
                Enable Text-to-Speech
              </label>
              <p className="text-xs text-slate-500">
                Show voice playback buttons
              </p>
            </div>
            <button
              onClick={() => updateSetting("enabled", !settings.enabled)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                settings.enabled ? "bg-purple-600" : "bg-slate-700"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.enabled ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          {/* Auto-Play */}
          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium text-slate-300">
                Auto-Play Questions
              </label>
              <p className="text-xs text-slate-500">
                Automatically read new questions aloud
              </p>
            </div>
            <button
              onClick={() => updateSetting("autoPlay", !settings.autoPlay)}
              disabled={!settings.enabled}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                settings.autoPlay && settings.enabled
                  ? "bg-purple-600"
                  : "bg-slate-700"
              } ${!settings.enabled ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.autoPlay ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          {/* Voice Selection */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Voice Selection
            </label>
            <select
              value={settings.voiceId}
              onChange={(e) => updateSetting("voiceId", e.target.value)}
              disabled={!settings.enabled}
              className="w-full px-3 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {AVAILABLE_VOICES.map((voice) => (
                <option key={voice.id} value={voice.id}>
                  {voice.name} - {voice.description}
                </option>
              ))}
            </select>
          </div>

          {/* Stability Slider */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-slate-300">
                Stability
              </label>
              <span className="text-sm text-slate-400">
                {settings.stability.toFixed(2)}
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={settings.stability}
              onChange={(e) =>
                updateSetting("stability", parseFloat(e.target.value))
              }
              disabled={!settings.enabled}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <p className="text-xs text-slate-500 mt-1">
              Higher = more stable and consistent
            </p>
          </div>

          {/* Similarity Boost Slider */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-slate-300">
                Similarity Boost
              </label>
              <span className="text-sm text-slate-400">
                {settings.similarityBoost.toFixed(2)}
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={settings.similarityBoost}
              onChange={(e) =>
                updateSetting("similarityBoost", parseFloat(e.target.value))
              }
              disabled={!settings.enabled}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <p className="text-xs text-slate-500 mt-1">
              Higher = closer to original voice
            </p>
          </div>

          {/* Info */}
          <div className="p-3 bg-purple-500/10 border border-purple-500/30 rounded-lg">
            <p className="text-xs text-purple-300">
              💡 Tip: For interviews, we recommend Rachels voice with stability
              0.6 and similarity boost 0.8 for the best professional tone.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
