"use client";

import { useState } from "react";
import { Sparkles, Briefcase, Code, Mail } from "lucide-react";

interface InterviewSetupProps {
  onStart: (email: string, role: string, skills: string[]) => void;
}

const POPULAR_ROLES = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "DevOps Engineer",
  "Data Scientist",
  "Product Manager",
  "UI/UX Designer",
  "QA Engineer",
];

const SKILL_OPTIONS = [
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Python",
  "Java",
  "C++",
  "Go",
  "SQL",
  "MongoDB",
  "AWS",
  "Docker",
  "Kubernetes",
  "Git",
  "CI/CD",
  "REST API",
  "GraphQL",
  "Machine Learning",
  "System Design",
  "Agile",
  "Communication",
  "Leadership",
];

export default function InterviewSetup({ onStart }: InterviewSetupProps) {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [customRole, setCustomRole] = useState("");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [customSkill, setCustomSkill] = useState("");

  const handleSkillToggle = (skill: string) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill],
    );
  };

  const handleAddCustomSkill = () => {
    if (customSkill.trim() && !selectedSkills.includes(customSkill.trim())) {
      setSelectedSkills((prev) => [...prev, customSkill.trim()]);
      setCustomSkill("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalRole = role === "custom" ? customRole : role;
    if (email && finalRole && selectedSkills.length > 0) {
      onStart(email, finalRole, selectedSkills);
    }
  };

  const isValid =
    email &&
    (role !== "custom" ? role : customRole) &&
    selectedSkills.length > 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-6">
      <div className="max-w-3xl w-full">
        {/* Header */}
        <div className="text-center mb-8 animate-slide-in">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mb-4">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-3">
            AI Interview Panel
          </h1>
          <p className="text-slate-400 text-lg">
            Practice real technical interviews with AI-powered feedback
          </p>
        </div>

        {/* Setup Form */}
        <div className="glass-card rounded-2xl p-8 animate-scale-in">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                <Mail className="w-4 h-4 inline mr-2" />
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                className="w-full bg-slate-800/50 border border-purple-500/20 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              />
            </div>

            {/* Role Selection */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                <Briefcase className="w-4 h-4 inline mr-2" />
                Target Role
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-3">
                {POPULAR_ROLES.map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setRole(r)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                      role === r
                        ? "bg-purple-600 text-white"
                        : "bg-slate-800/50 text-slate-300 hover:bg-slate-700 border border-purple-500/10"
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={() => setRole("custom")}
                className={`w-full px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  role === "custom"
                    ? "bg-purple-600 text-white"
                    : "bg-slate-800/50 text-slate-300 hover:bg-slate-700 border border-purple-500/10"
                }`}
              >
                Custom Role
              </button>
              {role === "custom" && (
                <input
                  type="text"
                  value={customRole}
                  onChange={(e) => setCustomRole(e.target.value)}
                  placeholder="Enter your custom role..."
                  className="w-full mt-2 bg-slate-800/50 border border-purple-500/20 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              )}
            </div>

            {/* Skills Selection */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                <Code className="w-4 h-4 inline mr-2" />
                Your Skills (Select at least one)
              </label>
              <div className="flex flex-wrap gap-2 mb-3">
                {SKILL_OPTIONS.map((skill) => (
                  <button
                    key={skill}
                    type="button"
                    onClick={() => handleSkillToggle(skill)}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                      selectedSkills.includes(skill)
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                        : "bg-slate-800/50 text-slate-300 hover:bg-slate-700 border border-purple-500/10"
                    }`}
                  >
                    {skill}
                  </button>
                ))}
              </div>

              {/* Custom Skill Input */}
              <div className="flex gap-2">
                <input
                  type="text"
                  value={customSkill}
                  onChange={(e) => setCustomSkill(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleAddCustomSkill();
                    }
                  }}
                  placeholder="Add custom skill..."
                  className="flex-1 bg-slate-800/50 border border-purple-500/20 rounded-xl px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                />
                <button
                  type="button"
                  onClick={handleAddCustomSkill}
                  className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-xl text-sm font-medium transition-all"
                >
                  Add
                </button>
              </div>

              {selectedSkills.length > 0 && (
                <div className="mt-3 p-3 bg-slate-800/30 rounded-lg border border-purple-500/10">
                  <p className="text-xs text-slate-400 mb-2">
                    Selected Skills:
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {selectedSkills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-purple-600/20 text-purple-300 rounded text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!isValid}
              className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:from-slate-700 disabled:to-slate-700 disabled:cursor-not-allowed rounded-xl text-white font-semibold text-lg transition-all group"
            >
              <span className="flex items-center justify-center gap-2">
                Start Interview
                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </span>
            </button>
          </form>

          {/* Info */}
          <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
            <p className="text-sm text-blue-300">
              <strong>💡 What to expect:</strong> The AI will conduct a
              realistic interview, ask role-specific questions, evaluate your
              responses, and provide detailed feedback to help you improve.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
