'use client';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleStartInterview = () => {
    router.push('/interview');
  };

  return (
    <main className="min-h-screen flex justify-center items-center p-6  bg-linear-to-br from-dark-bg to-dark-card">
      <div className="max-w-4xl w-full animate-fade-in">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-gradient animate-slide-in-left">
            AI Interview Agent
          </h1>
          <div className="text-xl md:text-2xl text-text-secondary animate-slide-in-right px-4">
            Your intelligent companion for technical interviews
          </div>
        </div>

        <div className="bg-dark-card rounded-3xl p-6  mb-8 border border-accent-purple/20 shadow-2xl transition-all duration-300 hover:shadow-glow hover:-translate-y-2">
          <h2 className="text-3xl font-bold mb-10 flex items-center gap-4 text-text-primary">
            <span className="text-4xl">📋</span>
            Interview Instructions
          </h2>

          <div className="flex flex-col gap-8 mb-12">
            <div className="flex gap-6 items-start p-4 bg-accent-purple/5 rounded-2xl border-l-4 border-accent-purple transition-all duration-300 hover:bg-accent-purple/10 hover:translate-x-2">
              <div className="min-w-12.5 h-12.5 bg-gradient-primary rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-glow-purple shrink-0">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2 text-text-primary">Listen to Questions</h3>
                <p className="text-text-secondary leading-relaxed">Each question will be automatically read aloud by the AI agent using text-to-speech technology.</p>
              </div>
            </div>

            <div className="flex gap-6 items-start p-4 bg-accent-purple/5 rounded-2xl border-l-4 border-accent-purple transition-all duration-300 hover:bg-accent-purple/10 hover:translate-x-2">
              <div className="min-w-12.5 h-12.5 bg-gradient-primary rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-glow-purple shrink-0">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2 text-text-primary">Answer Thoughtfully</h3>
                <p className="text-text-secondary leading-relaxed">Type your answer in the text area provided. Take your time to formulate comprehensive responses.</p>
              </div>
            </div>

            <div className="flex gap-6 items-start p-4 bg-accent-purple/5 rounded-2xl border-l-4 border-accent-purple transition-all duration-300 hover:bg-accent-purple/10 hover:translate-x-2">
              <div className="min-w-12.5 h-12.5 bg-gradient-primary rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-glow-purple shrink-0">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2 text-text-primary">Get AI Feedback</h3>
                <p className="text-text-secondary leading-relaxed">After submitting your answer, the AI will evaluate your response and provide detailed feedback.</p>
              </div>
            </div>

            <div className="flex gap-6 items-start p-4 bg-accent-purple/5 rounded-2xl border-l-4 border-accent-purple transition-all duration-300 hover:bg-accent-purple/10 hover:translate-x-2">
              <div className="min-w-12.5 h-12.5 bg-gradient-primary rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-glow-purple shrink-0">
                4
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2 text-text-primary">Track Your Time</h3>
                <p className="text-text-secondary leading-relaxed">Monitor the time spent on each question displayed in the timer section.</p>
              </div>
            </div>

            <div className="flex gap-6 items-start p-4 bg-accent-purple/5 rounded-2xl border-l-4 border-accent-purple transition-all duration-300 hover:bg-accent-purple/10 hover:translate-x-2">
              <div className="min-w-12.5 h-12.5 bg-gradient-primary rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-glow-purple shrink-0">
                5
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2 text-text-primary">Navigate Questions</h3>
                <p className="text-text-secondary leading-relaxed">Use the navigation panel to move between questions and track your progress.</p>
              </div>
            </div>
          </div>

          <div className="bg-accent-pink/5 rounded-2xl p-6  border-l-4 border-accent-pink">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3 text-text-primary">
              <span className="text-3xl">💡</span>
              Pro Tips
            </h3>
            <ul className="flex flex-col gap-4 list-none">
              <li className="pl-8 relative text-text-secondary leading-relaxed before:content-['✓'] before:absolute before:left-0 before:text-accent-pink before:font-bold before:text-xl">
                Ensure your microphone and camera permissions are enabled for the best experience
              </li>
              <li className="pl-8 relative text-text-secondary leading-relaxed before:content-['✓'] before:absolute before:left-0 before:text-accent-pink before:font-bold before:text-xl">
                Find a quiet environment to focus on your interview
              </li>
              <li className="pl-8 relative text-text-secondary leading-relaxed before:content-['✓'] before:absolute before:left-0 before:text-accent-pink before:font-bold before:text-xl">
                Answer questions clearly and concisely
              </li>
              <li className="pl-8 relative text-text-secondary leading-relaxed before:content-['✓'] before:absolute before:left-0 before:text-accent-pink before:font-bold before:text-xl">
                Review AI feedback carefully to improve your responses
              </li>
            </ul>
          </div>
        </div>

        <button 
          className="w-full py-6 md:py-7 px-12 text-xl md:text-2xl font-semibold bg-gradient-primary text-white rounded-2xl flex items-center justify-center gap-4 shadow-glow-purple transition-all duration-300 hover:shadow-glow-purple-lg hover:-translate-y-1 active:translate-y-0 mb-8"
          onClick={handleStartInterview}
        >
          <span>Start Interview</span>
          <span className="text-2xl md:text-3xl transition-transform duration-300 group-hover:translate-x-1 inline-block hover:translate-x-1">→</span>
        </button>
      </div>
    </main>
  );
}
