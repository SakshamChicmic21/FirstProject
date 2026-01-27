# 🎤 AI Interview Panel - Text-to-Speech Feature

<div align="center">

### Professional Voice AI Integration

**Powered by ElevenLabs • Built with Next.js • Production Ready**

[Try Demo](#-quick-start) • [Documentation](#-documentation) • [Features](#-features) • [API Reference](#-api-reference)

</div>

---

## 🌟 Overview

Transform your AI Interview Panel with natural, professional text-to-speech capabilities. Every interview question and feedback can now be heard in a calm, clear voice - making the experience more engaging and accessible.

### ✨ Highlights

- 🎙️ **5 Professional Voices** - Choose from male and female options
- ⚡ **Lightning Fast** - 1-2 second generation time
- 🎨 **Beautiful UI** - Hover-activated voice buttons
- ⚙️ **Fully Customizable** - Adjust voice parameters to perfection
- 🔒 **Type Safe** - Complete TypeScript support
- 🚀 **Production Ready** - Error handling and resource management

---

## 🎯 Features

### For Interviewers

| Feature              | Description                                     |
| -------------------- | ----------------------------------------------- |
| **Voice Playback**   | Click to hear any AI message read aloud         |
| **Smart Activation** | Voice buttons appear only on AI messages        |
| **Visual Feedback**  | Clear indicators for loading and playing states |
| **Quick Access**     | Hover over messages to reveal controls          |

### For Developers

| Feature           | Description                             |
| ----------------- | --------------------------------------- |
| **React Hook**    | `useTextToSpeech()` - Easy integration  |
| **Service Layer** | Reusable functions for any component    |
| **API Route**     | Next.js endpoint ready to use           |
| **TypeScript**    | Fully typed for safety and autocomplete |
| **Components**    | Pre-built UI components included        |

---

## 🚀 Quick Start

### 1. Start Your Dev Server

```bash
npm run start:dev
```

### 2. Try the Demo

Visit: **http://localhost:3000/tts-demo**

### 3. Use in Interview

1. Start an interview at `/interview`
2. Hover over any AI message
3. Click the 🔊 icon to play
4. Enjoy professional voice playback!

---

## 💻 Usage

### Basic Example

```tsx
import { useTextToSpeech } from "@/hooks/useTextToSpeech";

function MyComponent() {
  const { speak, isPlaying, isLoading } = useTextToSpeech();

  return (
    <button
      onClick={() => speak("Welcome to your interview!")}
      disabled={isLoading || isPlaying}
    >
      {isPlaying ? "🔊 Playing..." : "🎤 Speak"}
    </button>
  );
}
```

### With Custom Settings

```tsx
speak("Your text here", {
  voiceId: "EXAVITQu4vr4xnSDxMaL", // Rachel
  stability: 0.6, // Balanced
  similarityBoost: 0.8, // Natural
});
```

### Download as MP3

```tsx
import { downloadSpeech } from "@/api/textToSpeech";

await downloadSpeech("Interview Question 1", "question-1.mp3");
```

---

## 🎨 Components

### InterviewPanel ✅

Voice buttons automatically integrated

```tsx
<InterviewPanel
  messages={messages}
  isLoading={isLoading}
  messagesEndRef={messagesEndRef}
/>
```

### Settings Panel ✅

```tsx
<TTSSettingsPanel settings={ttsSettings} onSettingsChange={setTTSSettings} />
```

### Demo Component ✅

```tsx
<TextToSpeechDemo />
```

---

## 🎤 Available Voices

<table>
<tr>
<td align="center">
<strong>Rachel</strong> ⭐<br/>
<em>Female</em><br/>
Calm & Professional
</td>
<td align="center">
<strong>Adam</strong><br/>
<em>Male</em><br/>
Deep & Authoritative
</td>
<td align="center">
<strong>Antoni</strong><br/>
<em>Male</em><br/>
Friendly & Clear
</td>
</tr>
<tr>
<td align="center">
<strong>Arnold</strong><br/>
<em>Male</em><br/>
Crisp & Clear
</td>
<td align="center">
<strong>Bella</strong><br/>
<em>Female</em><br/>
Soft & Engaging
</td>
<td align="center">
<strong>Custom</strong><br/>
<em>Any</em><br/>
Create your own!
</td>
</tr>
</table>

⭐ = Default voice optimized for interviews

---

## 📁 Project Structure

```
src/
├── app/
│   └── api/
│       └── text-to-speech/
│           └── route.ts              # API endpoint
├── api/
│   └── textToSpeech.ts              # Service functions
├── hooks/
│   └── useTextToSpeech.ts           # React hook
└── components/
    └── molecules/
        ├── InterviewPanel.tsx        # ✅ Voice integrated
        ├── TextToSpeechDemo.tsx      # Demo component
        └── TTSSettingsPanel.tsx      # Settings UI
```

---

## 🔧 Configuration

### Environment Variables

```env
ELEVENLABS_API_KEY=your_api_key_here
```

### Default Settings

```typescript
{
  voiceId: "EXAVITQu4vr4xnSDxMaL",  // Rachel
  stability: 0.6,                    // Balanced
  similarityBoost: 0.8,             // Natural
  enabled: true,                     // TTS on
  autoPlay: false                    // Manual playback
}
```

---

## 📚 Documentation

| Document                        | Description              |
| ------------------------------- | ------------------------ |
| **TTS_SUMMARY.md**              | Complete feature summary |
| **TTS_GUIDE.md**                | Detailed usage guide     |
| **TTS_SETUP_COMPLETE.md**       | Setup instructions       |
| **TTS_INTEGRATION_COMPLETE.md** | Integration details      |

---

## 🎯 API Reference

### useTextToSpeech()

```typescript
const {
  speak, // (text, options?) => Promise<void>
  stop, // () => void
  isPlaying, // boolean
  isLoading, // boolean
  error, // string | null
  generateAudio, // (text, options?) => Promise<string>
} = useTextToSpeech();
```

### textToSpeech()

```typescript
const audioUrl = await textToSpeech(
  "Your text here",
  {
    voiceId?: string,
    stability?: number,        // 0.0 - 1.0
    similarityBoost?: number   // 0.0 - 1.0
  }
);
```

### speakText()

```typescript
const audio = await speakText("Text to speak", options);
// Returns HTMLAudioElement and plays immediately
```

---

## 💡 Pro Tips

### For Best Results

1. **Voice Choice**: Use **Rachel** for professional tone
2. **Stability**: 0.6-0.7 for clear, consistent speech
3. **Similarity**: 0.8 for natural-sounding voice
4. **Text Length**: Break long text into shorter segments
5. **Punctuation**: Use commas and periods for natural pauses

### Performance

- Audio is cached by browser
- URLs are automatically cleaned up
- Generation is async (non-blocking)
- Error handling is built-in

---

## 🧪 Testing

### Run API Test

```bash
npx tsx test-tts.ts
```

This will:

- ✅ Test ElevenLabs API connection
- ✅ Generate sample audio
- ✅ Save as `test-output.mp3`
- ✅ Show detailed status

### Manual Testing

1. Visit `/tts-demo`
2. Enter text
3. Select voice
4. Adjust settings
5. Click "Convert to Speech"

---

## 🌐 Browser Support

| Browser | Support        |
| ------- | -------------- |
| Chrome  | ✅ Full        |
| Firefox | ✅ Full        |
| Safari  | ✅ Full        |
| Edge    | ✅ Full        |
| Mobile  | ✅ iOS/Android |

---

## 🔒 Security & Privacy

- ✅ API key stored securely in environment variables
- ✅ Server-side API calls (key never exposed to client)
- ✅ Audio generated on-demand
- ✅ No audio storage on server
- ✅ Automatic resource cleanup

---

## 📊 ElevenLabs API

### Account Management

- **Dashboard**: https://elevenlabs.io/app
- **Usage**: https://elevenlabs.io/app/usage
- **API Keys**: https://elevenlabs.io/app/settings/api-keys

### Pricing

- **Free**: Limited characters/month
- **Starter**: $5/month - 30,000 characters
- **Creator**: $22/month - 100,000 characters
- **Pro**: $99/month - 500,000 characters

---

## 🎓 Learn More

### Resources

- [ElevenLabs Docs](https://docs.elevenlabs.io/)
- [Voice Lab](https://elevenlabs.io/voice-lab) - Create custom voices
- [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)

### Examples in This Project

- Check `/src/components/molecules/TextToSpeechDemo.tsx` for complete example
- See `/src/app/api/text-to-speech/route.ts` for API implementation
- Review `/src/hooks/useTextToSpeech.ts` for hook pattern

---

## 🐛 Troubleshooting

<details>
<summary><strong>No Sound Playing</strong></summary>

- Check browser audio permissions
- Verify volume settings
- Try different browser
- Check console for errors
</details>

<details>
<summary><strong>API Errors</strong></summary>

- Verify API key in `.env`
- Check ElevenLabs account status
- Confirm you have remaining credits
- Review API usage limits
</details>

<details>
<summary><strong>Slow Generation</strong></summary>

- Normal delay is 1-2 seconds
- Check internet connection
- Try during off-peak hours
- Consider shorter text segments
</details>

---

## 🎉 Next Steps

### Immediate

- ✅ Test the demo at `/tts-demo`
- ✅ Try voice in actual interview
- ✅ Customize voice settings
- ✅ Read the documentation

### Optional Enhancements

- 🔄 Add auto-play for new questions
- ⌨️ Implement keyboard shortcuts
- 💾 Save user preferences
- 🎨 Create custom voice profiles
- 📱 Optimize for mobile

---

## 🤝 Support

Need help?

1. Check `TTS_GUIDE.md` for detailed docs
2. Review `TTS_SUMMARY.md` for overview
3. Test with `test-tts.ts` script
4. Check browser console for errors

---

<div align="center">

### 🎊 All Set!

Your AI Interview Panel now has professional voice capabilities.

**Try it**: `npm run start:dev` → http://localhost:3000/interview

---

Made with ❤️ using ElevenLabs AI

</div>
