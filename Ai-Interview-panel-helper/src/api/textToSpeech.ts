/**
 * Text-to-Speech service using ElevenLabs API
 */

export interface TTSOptions {
  voiceId?: string;
  stability?: number;
  similarityBoost?: number;
}

export interface VoiceOption {
  id: string;
  name: string;
  description: string;
}

// Available ElevenLabs voices
export const AVAILABLE_VOICES: VoiceOption[] = [
  {
    id: "EXAVITQu4vr4xnSDxMaL",
    name: "Rachel",
    description: "American Female - Calm, Professional",
  },
  {
    id: "pNInz6obpgDQGcFmaJgB",
    name: "Adam",
    description: "American Male - Deep, Authoritative",
  },
  {
    id: "ErXwobaYiN019PkySvjV",
    name: "Antoni",
    description: "American Male - Well-rounded, Friendly",
  },
  {
    id: "VR6AewLTigWG4xSOukaG",
    name: "Arnold",
    description: "American Male - Crisp, Clear",
  },
  {
    id: "MF3mGyEYCl7XYWbV9V6O",
    name: "Bella",
    description: "American Female - Soft, Engaging",
  },
];

/**
 * Convert text to speech and return audio URL
 */
export const textToSpeech = async (
  text: string,
  options: TTSOptions = {},
): Promise<string> => {
  try {
    const response = await fetch("/api/text-to-speech", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text,
        voiceId: options.voiceId,
        stability: options.stability,
        similarityBoost: options.similarityBoost,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "Failed to generate speech");
    }

    // Create a blob from the response
    const blob = await response.blob();

    // Create a URL for the blob
    const audioUrl = URL.createObjectURL(blob);

    return audioUrl;
  } catch (error) {
    console.error("Text-to-speech error:", error);
    throw error;
  }
};

/**
 * Convert text to speech and play it immediately
 */
export const speakText = async (
  text: string,
  options: TTSOptions = {},
): Promise<HTMLAudioElement> => {
  try {
    const audioUrl = await textToSpeech(text, options);

    const audio = new Audio(audioUrl);
    await audio.play();

    // Clean up the blob URL when audio finishes playing
    audio.addEventListener("ended", () => {
      URL.revokeObjectURL(audioUrl);
    });

    return audio;
  } catch (error) {
    console.error("Speak text error:", error);
    throw error;
  }
};

/**
 * Download generated speech as MP3 file
 */
export const downloadSpeech = async (
  text: string,
  filename: string = "speech.mp3",
  options: TTSOptions = {},
): Promise<void> => {
  try {
    const audioUrl = await textToSpeech(text, options);

    // Create a temporary anchor element to trigger download
    const link = document.createElement("a");
    link.href = audioUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Clean up the blob URL after a short delay
    setTimeout(() => {
      URL.revokeObjectURL(audioUrl);
    }, 100);
  } catch (error) {
    console.error("Download speech error:", error);
    throw error;
  }
};
