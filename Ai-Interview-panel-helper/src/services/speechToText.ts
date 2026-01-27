/**
 * Speech-to-Text Service
 * Handles audio transcription using OpenAI Whisper API
 */

export interface TranscriptionResponse {
  text: string;
  success: boolean;
  error?: string;
}

/**
 * Transcribe audio to text using OpenAI Whisper
 * @param audioBlob - Audio blob from recording
 * @param fileName - Optional file name for the audio
 * @returns Transcribed text
 */
export async function transcribeAudio(
  audioBlob: Blob,
  fileName: string = "audio.webm",
): Promise<TranscriptionResponse> {
  try {
    const formData = new FormData();
    formData.append("audio", audioBlob, fileName);

    const response = await fetch("/api/speech-to-text", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Transcription failed");
    }

    const data = await response.json();
    return data;
  } catch (error: any) {
    console.error("Transcription error:", error);
    return {
      text: "",
      success: false,
      error: error.message || "Failed to transcribe audio",
    };
  }
}
