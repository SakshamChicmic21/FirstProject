# Text-to-Speech Integration Guide

This guide explains how to use the ElevenLabs text-to-speech functionality in your AI Interview Panel application.

## 🎯 Overview

The text-to-speech (TTS) integration allows you to convert text to natural-sounding speech using ElevenLabs AI. This is perfect for:

- Reading interview questions aloud
- Providing voice feedback
- Creating audio responses
- Accessibility features

## 🚀 Quick Start

### 1. Environment Setup

Your ElevenLabs API key is already configured in `.env`:

```env
ELEVENLABS_API_KEY=sk_62bb277bc81d92e83e76857c6757d55cec1eaea6cd380ee9
```

### 2. Available Files

The integration consists of several files:

- **API Route**: `/src/app/api/text-to-speech/route.ts` - Backend endpoint
- **Service**: `/src/api/textToSpeech.ts` - Helper functions
- **Hook**: `/src/hooks/useTextToSpeech.ts` - React hook for components
- **Demo Component**: `/src/components/molecules/TextToSpeechDemo.tsx` - Example implementation
- **Demo Page**: `/src/app/(secured)/tts-demo/page.tsx` - Test page

## 📖 Usage Examples

### Option 1: Using the Hook (Recommended)

```tsx
import { useTextToSpeech } from "@/hooks/useTextToSpeech";

function MyComponent() {
  const { speak, isPlaying, isLoading, stop } = useTextToSpeech();

  const handleSpeak = () => {
    speak("Hello! Welcome to your AI interview.", {
      voiceId: "EXAVITQu4vr4xnSDxMaL", // Rachel - Female voice
      stability: 0.5,
      similarityBoost: 0.8,
    });
  };

  return (
    <button onClick={handleSpeak} disabled={isLoading || isPlaying}>
      {isPlaying ? "Playing..." : "Speak"}
    </button>
  );
}
```

### Option 2: Using Service Functions Directly

```tsx
import { speakText, textToSpeech, downloadSpeech } from "@/api/textToSpeech";

// Play audio immediately
await speakText("Your interview question here");

// Generate audio URL for custom playback
const audioUrl = await textToSpeech("Your text here");
const audio = new Audio(audioUrl);
audio.play();

// Download as MP3 file
await downloadSpeech("Your text here", "interview-question.mp3");
```

### Option 3: Direct API Call

```tsx
const response = await fetch("/api/text-to-speech", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    text: "Your text here",
    voiceId: "EXAVITQu4vr4xnSDxMaL",
    stability: 0.5,
    similarityBoost: 0.8,
  }),
});

const blob = await response.blob();
const audioUrl = URL.createObjectURL(blob);
```

## 🎤 Available Voices

The following voices are pre-configured:

| Voice ID               | Name   | Description                            |
| ---------------------- | ------ | -------------------------------------- |
| `EXAVITQu4vr4xnSDxMaL` | Rachel | American Female - Calm, Professional   |
| `pNInz6obpgDQGcFmaJgB` | Adam   | American Male - Deep, Authoritative    |
| `ErXwobaYiN019PkySvjV` | Antoni | American Male - Well-rounded, Friendly |
| `VR6AewLTigWG4xSOukaG` | Arnold | American Male - Crisp, Clear           |
| `MF3mGyEYCl7XYWbV9V6O` | Bella  | American Female - Soft, Engaging       |

You can import the voice list:

```tsx
import { AVAILABLE_VOICES } from "@/api/textToSpeech";
```

## ⚙️ Voice Settings

### Stability (0.0 - 1.0)

- **Lower (0.0-0.3)**: More expressive and variable
- **Medium (0.4-0.6)**: Balanced
- **Higher (0.7-1.0)**: More stable and consistent

### Similarity Boost (0.0 - 1.0)

- **Lower (0.0-0.3)**: More diverse output
- **Medium (0.4-0.6)**: Balanced
- **Higher (0.7-1.0)**: Closer to original voice

## 🧪 Testing

Visit the demo page to test the functionality:

```
http://localhost:3000/tts-demo
```

Or start your dev server:

```bash
npm run dev
```

## 💡 Integration Ideas

### 1. Interview Questions

Read interview questions aloud to candidates:

```tsx
function InterviewPanel({ currentQuestion }) {
  const { speak, isPlaying } = useTextToSpeech();

  useEffect(() => {
    if (currentQuestion) {
      speak(currentQuestion, { voiceId: "EXAVITQu4vr4xnSDxMaL" });
    }
  }, [currentQuestion]);

  return <div>{currentQuestion}</div>;
}
```

### 2. Feedback Narration

Provide audio feedback after the interview:

```tsx
function FeedbackDisplay({ feedback }) {
  const { speak } = useTextToSpeech();

  return (
    <div>
      <button onClick={() => speak(feedback)}>🔊 Listen to Feedback</button>
      <p>{feedback}</p>
    </div>
  );
}
```

### 3. Accessibility Support

Add text-to-speech for better accessibility:

```tsx
function AccessibleContent({ text }) {
  const { speak, isPlaying } = useTextToSpeech();

  return (
    <div>
      <button onClick={() => speak(text)} aria-label="Read aloud">
        {isPlaying ? "⏸️" : "🔊"}
      </button>
      <p>{text}</p>
    </div>
  );
}
```

## 🔧 API Reference

### `useTextToSpeech()` Hook

Returns an object with:

```typescript
{
  isPlaying: boolean;        // Whether audio is currently playing
  isLoading: boolean;        // Whether audio is being generated
  error: string | null;      // Any error that occurred
  speak: (text: string, options?: TTSOptions) => Promise<void>;
  stop: () => void;          // Stop currently playing audio
  generateAudio: (text: string, options?: TTSOptions) => Promise<string>;
}
```

### `TTSOptions` Type

```typescript
interface TTSOptions {
  voiceId?: string; // Voice ID (default: Rachel)
  stability?: number; // 0.0-1.0 (default: 0.5)
  similarityBoost?: number; // 0.0-1.0 (default: 0.8)
}
```

## 🎨 UI Components

The demo component includes:

- ✅ Text input area
- ✅ Voice selection dropdown
- ✅ Adjustable voice settings (sliders)
- ✅ Play/Stop controls
- ✅ Loading states
- ✅ Error handling
- ✅ Beautiful gradient UI

## 📝 Notes

- Audio files are generated on-demand and streamed
- ElevenLabs API has usage limits based on your plan
- Audio URLs are automatically cleaned up after use
- The API returns MP3 format audio
- Server-side rendering is disabled for the API route (`force-dynamic`)

## 🚨 Troubleshooting

### "ElevenLabs API key not configured"

- Check that `ELEVENLABS_API_KEY` is set in your `.env` file
- Restart your dev server after changing `.env`

### "Failed to generate speech"

- Check your internet connection
- Verify your ElevenLabs API key is valid
- Check if you have remaining credits

### Audio not playing

- Check browser console for errors
- Verify browser supports audio playback
- Try a different browser

## 🔗 Resources

- [ElevenLabs Documentation](https://docs.elevenlabs.io/)
- [Voice Lab](https://elevenlabs.io/voice-lab) - Create custom voices
- [API Limits](https://elevenlabs.io/pricing) - Check your plan limits

## 📦 Complete Example

Here's a complete component integrating TTS with your interview:

```tsx
"use client";

import { useTextToSpeech } from "@/hooks/useTextToSpeech";
import { Volume2, VolumeX } from "lucide-react";

export default function InterviewQuestion({ question }: { question: string }) {
  const { speak, stop, isPlaying, isLoading } = useTextToSpeech();

  const handleToggleAudio = () => {
    if (isPlaying) {
      stop();
    } else {
      speak(question, {
        voiceId: "EXAVITQu4vr4xnSDxMaL",
        stability: 0.6,
        similarityBoost: 0.8,
      });
    }
  };

  return (
    <div className="glass-card p-6 rounded-2xl">
      <div className="flex items-start gap-4">
        <button
          onClick={handleToggleAudio}
          disabled={isLoading}
          className="p-3 bg-purple-600 hover:bg-purple-700 rounded-xl transition-all disabled:opacity-50"
        >
          {isLoading ? (
            <div className="w-5 h-5 animate-spin border-2 border-white border-t-transparent rounded-full" />
          ) : isPlaying ? (
            <VolumeX className="w-5 h-5" />
          ) : (
            <Volume2 className="w-5 h-5" />
          )}
        </button>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white mb-2">
            Interview Question
          </h3>
          <p className="text-slate-300">{question}</p>
        </div>
      </div>
    </div>
  );
}
```

Happy coding! 🎉
