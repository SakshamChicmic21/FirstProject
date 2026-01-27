"use client";

import { ChatMessage } from "@/api/interview";
import { Trophy, TrendingUp, AlertCircle, Lightbulb, Star } from "lucide-react";

interface FeedbackDisplayProps {
  messages: ChatMessage[];
}

export default function FeedbackDisplay({ messages }: FeedbackDisplayProps) {
  // Mock performance metrics - will be replaced with actual AI feedback
  const performanceMetrics = {
    technicalAccuracy: 0,
    communication: 0,
    confidence: 0,
    clarity: 0,
  };

  // Calculate metrics based on conversation length
  if (messages.length > 2) {
    const userMessages = messages.filter((m) => m.role === "user").length;
    performanceMetrics.technicalAccuracy = Math.min(85, 60 + userMessages * 5);
    performanceMetrics.communication = Math.min(90, 65 + userMessages * 6);
    performanceMetrics.confidence = Math.min(80, 55 + userMessages * 7);
    performanceMetrics.clarity = Math.min(88, 62 + userMessages * 5);
  }

  const averageScore =
    Object.values(performanceMetrics).reduce((a, b) => a + b, 0) / 4;

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-400";
    if (score >= 60) return "text-yellow-400";
    return "text-red-400";
  };

  const getScoreGradient = (score: number) => {
    if (score >= 80) return "from-green-500 to-emerald-500";
    if (score >= 60) return "from-yellow-500 to-orange-500";
    return "from-red-500 to-rose-500";
  };

  return (
    <div className="space-y-4">
      {/* Overall Score */}
      <div className="glass-card rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center">
            <Trophy className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-white">Performance</h3>
        </div>

        {messages.length > 2 ? (
          <>
            <div className="text-center mb-6">
              <div
                className={`text-5xl font-bold bg-gradient-to-r ${getScoreGradient(averageScore)} bg-clip-text text-transparent mb-2`}
              >
                {averageScore.toFixed(0)}%
              </div>
              <p className="text-slate-400 text-sm">Overall Score</p>
            </div>

            {/* Metrics */}
            <div className="space-y-3">
              <MetricBar
                label="Technical Accuracy"
                value={performanceMetrics.technicalAccuracy}
                icon={<Star className="w-4 h-4" />}
              />
              <MetricBar
                label="Communication"
                value={performanceMetrics.communication}
                icon={<TrendingUp className="w-4 h-4" />}
              />
              <MetricBar
                label="Confidence"
                value={performanceMetrics.confidence}
                icon={<Trophy className="w-4 h-4" />}
              />
              <MetricBar
                label="Clarity"
                value={performanceMetrics.clarity}
                icon={<Lightbulb className="w-4 h-4" />}
              />
            </div>
          </>
        ) : (
          <div className="text-center py-8">
            <AlertCircle className="w-12 h-12 text-slate-600 mx-auto mb-3" />
            <p className="text-slate-400 text-sm">
              Performance metrics will appear as you progress through the
              interview
            </p>
          </div>
        )}
      </div>

      {/* Tips */}
      <div className="glass-card rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
            <Lightbulb className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-white">Interview Tips</h3>
        </div>

        <div className="space-y-3">
          <TipItem text="Be specific and provide examples from your experience" />
          <TipItem text="Structure your answers: Situation, Task, Action, Result" />
          <TipItem text="Ask clarifying questions if needed" />
          <TipItem text="Take a moment to think before answering" />
        </div>
      </div>

      {/* Stats */}
      <div className="glass-card rounded-2xl p-6">
        <h3 className="text-sm font-semibold text-slate-400 mb-3">
          Session Stats
        </h3>
        <div className="grid grid-cols-2 gap-3">
          <StatCard
            label="Questions"
            value={messages.filter((m) => m.role === "assistant").length}
          />
          <StatCard
            label="Answers"
            value={messages.filter((m) => m.role === "user").length}
          />
        </div>
      </div>
    </div>
  );
}

function MetricBar({
  label,
  value,
  icon,
}: {
  label: string;
  value: number;
  icon: React.ReactNode;
}) {
  const getColor = (val: number) => {
    if (val >= 80) return "bg-green-500";
    if (val >= 60) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-2 text-sm text-slate-300">
          {icon}
          <span>{label}</span>
        </div>
        <span className="text-sm font-semibold text-white">{value}%</span>
      </div>
      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
        <div
          className={`h-full ${getColor(value)} transition-all duration-500 rounded-full`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

function TipItem({ text }: { text: string }) {
  return (
    <div className="flex gap-2">
      <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
      <p className="text-sm text-slate-300 leading-relaxed">{text}</p>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="bg-slate-800/50 rounded-lg p-3 border border-purple-500/10">
      <div className="text-2xl font-bold text-white mb-1">{value}</div>
      <div className="text-xs text-slate-400">{label}</div>
    </div>
  );
}
