# Speech-to-Text Integration

This document describes the OpenAI Whisper speech-to-text integration in the AI Interview Panel application.

## Overview

The application now supports voice input using OpenAI's Whisper API for accurate speech-to-text transcription. Users can record their interview answers using their microphone, and the system will automatically transcribe the audio to text.

## Components

### 1. API Route (`/api/speech-to-text`)

**Location:** `src/app/api/speech-to-text/route.ts`

Handles the server-side transcription using OpenAI's Whisper API.

**Features:**

- Accepts audio file uploads via FormData
- Supports various audio formats (webm, wav, mp3, etc.)
- Returns transcribed text as JSON
- Error handling for failed transcriptions

### 2. Service Function

**Location:** `src/services/speechToText.ts`

Provides a clean interface for frontend components to interact with the speech-to-text API.

**Function:** `transcribeAudio(audioBlob: Blob, fileName?: string)`

### 3. React Hook

**Location:** `src/hooks/useSpeechToText.ts`

Custom React hook that manages the entire speech-to-text workflow.

**Features:**

- Audio recording using MediaRecorder API
- Automatic transcription after recording stops
- State management for recording/transcribing status
- Error handling and user feedback

**Returns:**

- `isRecording`: Boolean indicating if recording is in progress
- `isTranscribing`: Boolean indicating if transcription is in progress
- `transcript`: The transcribed text
- `error`: Any error messages
- `startRecording()`: Function to start audio recording
- `stopRecording()`: Function to stop recording and transcribe
- `clearTranscript()`: Function to clear the current transcript

### 4. UI Integration

**Location:** `src/components/molecules/AnswerInput.tsx`

The AnswerInput component now includes a voice mode with the following features:

- **Text/Voice Toggle**: Switch between keyboard and voice input
- **Recording Interface**: Visual feedback during recording
- **Transcription Status**: Loading indicator while transcribing
- **Transcript Preview**: Review and edit transcribed text before sending
- **Error Display**: User-friendly error messages

## Usage

### Basic Implementation

```typescript
import { useSpeechToText } from "@/hooks/useSpeechToText";

function MyComponent() {
  const {
    isRecording,
    isTranscribing,
    transcript,
    error,
    startRecording,
    stopRecording,
  } = useSpeechToText();

  const handleRecord = async () => {
    if (!isRecording) {
      await startRecording();
    } else {
      const text = await stopRecording();
      console.log("Transcribed:", text);
    }
  };

  return (
    <div>
      <button onClick={handleRecord}>
        {isRecording ? "Stop" : "Start"} Recording
      </button>
      {isTranscribing && <p>Transcribing...</p>}
      {transcript && <p>Result: {transcript}</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
}
```

## Configuration

### Environment Variables

Add your OpenAI API key to `.env`:

```env
OPENAI_API_KEY=sk-...your-key-here
```

**⚠️ Security Warning:** Never commit your API keys to version control. Always use environment variables.

### API Settings

The speech-to-text API route is configured with the following Whisper settings:

- **Model:** `whisper-1`
- **Language:** `en` (English)
- **Response Format:** `json`

You can modify these settings in `src/app/api/speech-to-text/route.ts`.

## Browser Compatibility

The speech-to-text feature requires:

- Modern browser with MediaRecorder API support
- Microphone access permissions
- HTTPS connection (required for microphone access in production)

## Error Handling

The system handles various error scenarios:

1. **Microphone Access Denied**: User will see an error message
2. **API Errors**: Failed transcriptions are caught and displayed
3. **Network Errors**: Connection issues are handled gracefully
4. **Empty Audio**: Validates that audio data exists before transcription

## Best Practices

1. **Speak Clearly**: Encourage users to speak clearly and at a moderate pace
2. **Quiet Environment**: Background noise can affect transcription accuracy
3. **Short Recordings**: Break long answers into shorter recordings for better accuracy
4. **Review Transcripts**: Always allow users to review and edit transcribed text
5. **Provide Fallback**: Keep text input as an alternative option

## Future Enhancements

Potential improvements for the speech-to-text feature:

- [ ] Real-time streaming transcription
- [ ] Support for multiple languages
- [ ] Custom voice models for technical terminology
- [ ] Audio visualization during recording
- [ ] Pause/resume recording functionality
- [ ] Save recorded audio files
- [ ] Voice activity detection (VAD)
- [ ] Noise reduction preprocessing

## Troubleshooting

### "Cannot access microphone"

- Check browser permissions for microphone access
- Ensure you're using HTTPS in production
- Try a different browser if the issue persists

### "Transcription failed"

- Verify your OpenAI API key is correct
- Check your OpenAI account has sufficient credits
- Ensure the audio file is not corrupted
- Check server logs for detailed error messages

### "Poor transcription quality"

- Reduce background noise
- Speak more clearly and slowly
- Use a better quality microphone
- Check audio recording settings

## API Costs

OpenAI Whisper pricing (as of 2024):

- $0.006 per minute of audio

Monitor your usage in the OpenAI dashboard to avoid unexpected costs.
