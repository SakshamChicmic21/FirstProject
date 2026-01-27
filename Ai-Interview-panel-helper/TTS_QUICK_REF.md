# 🎤 TTS Quick Reference Card

## One-Liners

```tsx
// Play text instantly
const { speak } = useTextToSpeech();
speak("Hello!");

// With custom voice
speak("Hello!", { voiceId: "EXAVITQu4vr4xnSDxMaL" });

// Download as MP3
await downloadSpeech("Text here", "file.mp3");

// Check if playing
const { isPlaying } = useTextToSpeech();
```

## Voice IDs

```typescript
"EXAVITQu4vr4xnSDxMaL"; // Rachel (Female) ⭐ Default
"pNInz6obpgDQGcFmaJgB"; // Adam (Male)
"ErXwobaYiN019PkySvjV"; // Antoni (Male)
"VR6AewLTigWG4xSOukaG"; // Arnold (Male)
"MF3mGyEYCl7XYWbV9V6O"; // Bella (Female)
```

## Optimal Settings (Interviews)

```typescript
{
  voiceId: "EXAVITQu4vr4xnSDxMaL",
  stability: 0.6,
  similarityBoost: 0.8
}
```

## URLs

- **Demo**: http://localhost:3000/tts-demo
- **Interview**: http://localhost:3000/interview
- **Dashboard**: https://elevenlabs.io/app
- **Docs**: https://docs.elevenlabs.io

## Import Paths

```typescript
import { useTextToSpeech } from "@/hooks/useTextToSpeech";
import {
  textToSpeech,
  speakText,
  downloadSpeech,
  AVAILABLE_VOICES,
} from "@/api/textToSpeech";
import TTSSettingsPanel from "@/components/molecules/TTSSettingsPanel";
```

## Hook Return Values

```typescript
{
  speak: (text, options?) => Promise<void>
  stop: () => void
  isPlaying: boolean
  isLoading: boolean
  error: string | null
  generateAudio: (text, options?) => Promise<string>
}
```

## Common Patterns

**Basic Usage**

```tsx
const { speak, isPlaying } = useTextToSpeech();
<button onClick={() => speak("Text")} disabled={isPlaying}>
  {isPlaying ? "Playing..." : "Speak"}
</button>;
```

**With Loading**

```tsx
const { speak, isLoading, isPlaying } = useTextToSpeech();
<button onClick={() => speak("Text")} disabled={isLoading || isPlaying}>
  {isLoading ? "⏳" : isPlaying ? "🔊" : "🎤"}
</button>;
```

**Error Handling**

```tsx
const { speak, error } = useTextToSpeech();
{
  error && <p className="text-red-500">{error}</p>;
}
```

## Files

| Path                                            | Purpose       |
| ----------------------------------------------- | ------------- |
| `src/app/api/text-to-speech/route.ts`           | API endpoint  |
| `src/api/textToSpeech.ts`                       | Service layer |
| `src/hooks/useTextToSpeech.ts`                  | React hook    |
| `src/components/molecules/InterviewPanel.tsx`   | Integrated ✅ |
| `src/components/molecules/TextToSpeechDemo.tsx` | Demo          |
| `src/components/molecules/TTSSettingsPanel.tsx` | Settings UI   |

## Docs

- **TTS_README.md** - Full documentation
- **TTS_SUMMARY.md** - Complete summary
- **TTS_GUIDE.md** - Usage guide
- **TTS_INTEGRATION_COMPLETE.md** - What's integrated
- **TTS_SETUP_COMPLETE.md** - Setup instructions
- **THIS FILE** - Quick reference

## Environment

```env
ELEVENLABS_API_KEY=your_key_here
```

## Troubleshooting

| Problem            | Fix                               |
| ------------------ | --------------------------------- |
| No sound           | Check volume, browser permissions |
| API error          | Check `.env`, verify credits      |
| Slow               | Normal (1-2s), check internet     |
| Button not showing | Hover over AI messages            |

---

**Quick Test**: `npx tsx test-tts.ts`  
**Demo Page**: Visit `/tts-demo`  
**In Interview**: Hover over AI messages → Click 🔊
