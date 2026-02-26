'use client';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import CameraAccess from '../../components/cameraAccess';

// Sample interview questions
const QUESTIONS = [
  "Tell me about yourself and your background in software development.",
  "What is your experience with JavaScript and modern web frameworks?",
  "Explain the difference between let, const, and var in JavaScript.",
  "How do you handle asynchronous operations in JavaScript?",
  "What are React hooks and why are they useful?",
  "Describe a challenging project you've worked on and how you overcame obstacles.",
  "How do you ensure code quality and maintainability in your projects?",
  "What is your approach to debugging complex issues?",
];

const MAX_TIME_PER_QUESTION = 300; // 5 minutes in seconds

type AnswersMap = Record<number, string>;
type EvaluationsMap = Record<number, string>;
type QuestionTimesMap = Record<number, number>;

export default function InterviewPage() {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState('');
  const [answers, setAnswers] = useState<AnswersMap>({});
  const [evaluations, setEvaluations] = useState<EvaluationsMap>({});
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [timeSpent, setTimeSpent] = useState(0);
  const [questionTimes, setQuestionTimes] = useState<QuestionTimesMap>({});
  const [showEvaluation, setShowEvaluation] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const currentQuestion = QUESTIONS[currentQuestionIndex];

  // Timer is 5min per question
  useEffect(() => {
    if (timeSpent >= MAX_TIME_PER_QUESTION) {
      handleNextQuestion();
    }
  }, [timeSpent]);

  // Timer logic
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimeSpent((prev) => prev + 1);
    }, 1000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [currentQuestionIndex]);

  // Auto-play question on load
  useEffect(() => {
    // Load saved answer if exists
    if (answers[currentQuestionIndex]) {
      setAnswer(answers[currentQuestionIndex]);
    } else {
      setAnswer('');
    }
  }, [currentQuestionIndex]);

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const speakQuestion = async (text: string) => {
    try {
      setIsSpeaking(true);
      const response = await fetch('/api/tts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });

      console.log(response);

      if (!response.ok) {
        throw new Error('Failed to generate speech');
      }

      const audioBlob = await response.blob();
      const audioUrl = URL.createObjectURL(audioBlob);

      if (audioRef.current) {
        audioRef.current.src = audioUrl;
        audioRef.current.play();
      }

      const audio = new Audio(audioUrl);
      audioRef.current = audio;

      audio.onended = () => {
        setIsSpeaking(false);
        URL.revokeObjectURL(audioUrl);
      };

      audio.onerror = () => {
        setIsSpeaking(false);
        URL.revokeObjectURL(audioUrl);
      };

      await audio.play();
    } catch (error) {
      console.error('Error speaking question:', error);
      setIsSpeaking(false);
    }
  };

  const handleSaveAndNext = async () => {
    if (!answer.trim()) {
      toast.error('Please provide an answer before proceeding.');
      return;
    }

    // Save answer
    setAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: answer,
    }));

    // Save time spent on this question
    setQuestionTimes((prev) => ({
      ...prev,
      [currentQuestionIndex]: timeSpent,
    }));

    // Evaluate answer
    setIsEvaluating(true);
    try {
      const response = await fetch('/api/evaluate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question: currentQuestion,
          answer: answer,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to evaluate answer');
      }
      console.log(response);
      const data = await response.json();
      console.log(data);
      setEvaluations((prev) => ({
        ...prev,
        [currentQuestionIndex]: data.evaluation,
      }));
      setShowEvaluation(true);
    } catch (error) {
      console.error('Error evaluating answer:', error);
      toast.error('Failed to evaluate answer. Please try again.');
    } finally {
      setIsEvaluating(false);
    }
  };

  const handleStart = () => {
    setHasStarted(true);
    if (currentQuestion) {
      speakQuestion(currentQuestion);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < QUESTIONS.length - 1) {
      const nextIndex = currentQuestionIndex + 1;
      setCurrentQuestionIndex(nextIndex);
      setTimeSpent(0);
      setShowEvaluation(false);
      speakQuestion(QUESTIONS[nextIndex]);
    } else {
      // Interview completed
      toast.success('Interview completed! Thank you for your responses.');
      router.push('/');
    }
  };

  const handleQuestionNavigation = (index: number) => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    setCurrentQuestionIndex(index);
    setTimeSpent(questionTimes[index] || 0);
    speakQuestion(QUESTIONS[index]);
  };

  return (
    <div className="flex min-h-screen bg-dark-bg gap-6 p-4">
      {/* Start Overlay */}
      {!hasStarted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-dark-card border border-accent-purple/30 rounded-3xl p-8 max-w-lg w-full text-center shadow-2xl animate-scale-in">
            <div className="w-20 h-20 bg-accent-purple/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">🎙️</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Ready for your Interview?</h2>
            <p className="text-text-secondary text-lg mb-8 leading-relaxed">
              We'll ask you a series of technical questions. Your answers will be evaluated in real-time.
              Click start when you're ready to begin.
            </p>
            <button
              onClick={handleStart}
              className="w-full py-4 text-xl font-bold bg-gradient-primary text-white rounded-xl shadow-glow-purple hover:shadow-glow-purple-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              Start Interview
            </button>
          </div>
        </div>
      )}

      <div className="flex-1 flex flex-col gap-6 max-w-[calc(100%-300px)]">
        {/* Question Display */}
        <div className="bg-dark-card rounded-3xl p-4 border border-accent-purple/20 shadow-2xl flex-1 animate-slide-in-left flex flex-col gap-6">
          <div className="flex justify-between items-center flex-wrap gap-4">
            <h2 className="text-2xl font-semibold text-gradient">
              Question {currentQuestionIndex + 1} of {QUESTIONS.length}
            </h2>
            <div className="flex items-center gap-2 bg-accent-purple/10 px-6 py-3 rounded-full border border-accent-purple">
              <span className="text-xl">⏱️</span>
              <span className="text-xl font-semibold font-mono text-accent-purple">{formatTime(timeSpent)}</span>
            </div>
          </div>

          <div className="bg-accent-purple/5 rounded-2xl p-4 border-l-4 border-accent-purple relative">
            <p className="text-xl leading-relaxed text-text-primary mb-4">{currentQuestion}</p>
            {isSpeaking && (
              <div className="flex items-center gap-3 mt-4 text-accent-purple font-medium">
                <span className="w-3 h-3 bg-accent-purple rounded-full animate-pulse"></span>
                <span>AI is speaking...</span>
              </div>
            )}
          </div>

          {/* Evaluation Display */}
          {showEvaluation && evaluations[currentQuestionIndex] && (
            <div className="bg-accent-pink/5 rounded-2xl p-4 border-l-4 border-accent-pink animate-fade-in">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-3 text-text-primary">
                <span className="text-2xl">🤖</span>
                AI Evaluation
              </h3>
              <div className="text-text-secondary leading-relaxed whitespace-pre-wrap">
                {evaluations[currentQuestionIndex]}
              </div>
            </div>
          )}
        </div>

        {/* Answer Input */}
        <div className="bg-dark-card rounded-3xl p-4 border border-accent-purple/20 shadow-2xl animate-slide-in-left">
          <label className="text-lg font-semibold text-text-primary block mb-4">Your Answer:</label>
          <textarea
            className="w-full min-h-37.5 bg-accent-purple/5 border-2 border-accent-purple/20 rounded-xl p-4 text-text-primary text-base leading-relaxed resize-y transition-all duration-300 mb-6 focus:border-accent-purple focus:shadow-[0_0_0_3px_rgba(139,92,246,0.1)] focus:bg-accent-purple/8 placeholder:text-text-secondary placeholder:opacity-60"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Type your answer here..."
            rows={6}
          />

          <div className="flex gap-4 flex-wrap">
            <button
              className="flex-1 min-w-50 px-8 py-4 text-base font-semibold rounded-xl flex items-center justify-center gap-3 transition-all duration-300 bg-gradient-primary text-white shadow-glow-purple hover:shadow-glow-purple-lg hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              onClick={handleSaveAndNext}
              disabled={isEvaluating || !answer.trim()}
            >
              {isEvaluating ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  Evaluating...
                </>
              ) : showEvaluation ? (
                'Re-evaluate Answer'
              ) : (
                'Save & Evaluate'
              )}
            </button>
            {showEvaluation && (
              <button
                className="flex-1 min-w-50 px-8 py-4 text-base font-semibold rounded-xl flex items-center justify-center gap-3 transition-all duration-300 bg-gradient-secondary text-white shadow-glow-pink hover:shadow-glow-pink-lg hover:-translate-y-0.5"
                onClick={handleNextQuestion}
              >
                {currentQuestionIndex < QUESTIONS.length - 1
                  ? 'Next Question →'
                  : 'Complete Interview'}
              </button>
            )}

          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-70 flex flex-col gap-6 animate-slide-in-right">
        {/* Video Section */}
        <div className="bg-dark-card rounded-3xl p-4 border border-accent-purple/20 shadow-2xl">
          {/* <div className="aspect-video bg-accent-blue/5 rounded-xl flex flex-col items-center justify-center border-2 border-dashed border-accent-purple/20 gap-3">
            <div className="text-5xl opacity-50">📹</div>
            <p className="text-text-secondary font-semibold">Camera Preview</p>
            <p className="text-text-secondary text-sm opacity-70">Video feature coming soon</p>
          </div> */}
          <CameraAccess />
        </div>

        {/* Question Navigation */}
        <div className="bg-dark-card rounded-3xl p-4 border border-accent-purple/20 shadow-2xl flex-1">
          <h3 className="text-lg font-semibold mb-4 text-text-primary">Questions</h3>
          <div className="grid grid-cols-4 gap-3">
            {QUESTIONS.map((_, index) => {
              const isAnswered = !!answers[index];
              const isCurrent = index === currentQuestionIndex;
              const isDisabled = isAnswered && !isCurrent;

              return (
                <button
                  key={index}
                  disabled={isDisabled}
                  className={`aspect-square bg-accent-purple/10 border-2 rounded-lg md:rounded-xl flex items-center justify-center font-semibold text-text-secondary transition-all duration-300 relative ${isDisabled
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:bg-accent-purple/20 hover:border-accent-purple hover:scale-105'
                    } ${isCurrent
                      ? 'bg-gradient-primary text-white border-transparent shadow-glow-purple'
                      : ''
                    } ${isAnswered && !isCurrent
                      ? 'bg-green-500/10 border-green-500'
                      : ''
                    } ${isAnswered && isCurrent
                      ? 'bg-linear-to-br from-green-500 to-green-600'
                      : ''
                    }`}
                  onClick={() => !isDisabled && handleQuestionNavigation(index)}
                >
                  <span className="text-sm md:text-base">{index + 1}</span>
                  {isAnswered && (
                    <span className="absolute -top-1 -right-1 bg-green-500 text-white w-4 h-4 md:w-5 md:h-5 rounded-full flex items-center justify-center text-[10px] md:text-xs font-bold">
                      ✓
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
