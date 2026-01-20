import { useState, useRef, useCallback } from "react";
import { transcribeAudio } from "@/services/speechToText";

export interface UseSpeechToTextReturn {
  isRecording: boolean;
  isTranscribing: boolean;
  transcript: string;
  error: string | null;
  startRecording: () => Promise<void>;
  stopRecording: () => Promise<string>;
  clearTranscript: () => void;
}

export function useSpeechToText(): UseSpeechToTextReturn {
  const [isRecording, setIsRecording] = useState(false);
  const [isTranscribing, setIsTranscribing] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [error, setError] = useState<string | null>(null);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  const startRecording = useCallback(async () => {
    try {
      setError(null);

      // Request microphone access
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

      // Create MediaRecorder
      const mediaRecorder = new MediaRecorder(stream, {
        mimeType: "audio/webm",
      });

      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.start();
      mediaRecorderRef.current = mediaRecorder;
      setIsRecording(true);
    } catch (err: any) {
      console.error("Error starting recording:", err);
      setError(err.message || "Failed to start recording");
      setIsRecording(false);
    }
  }, []);

  const stopRecording = useCallback(async (): Promise<string> => {
    return new Promise((resolve, reject) => {
      const mediaRecorder = mediaRecorderRef.current;

      if (!mediaRecorder || mediaRecorder.state === "inactive") {
        setIsRecording(false);
        reject(new Error("No active recording"));
        return;
      }

      mediaRecorder.onstop = async () => {
        setIsRecording(false);
        setIsTranscribing(true);

        try {
          // Create audio blob from chunks
          const audioBlob = new Blob(audioChunksRef.current, {
            type: "audio/webm",
          });

          // Transcribe audio
          const result = await transcribeAudio(audioBlob, "recording.webm");

          if (result.success && result.text) {
            setTranscript(result.text);
            setError(null);
            resolve(result.text);
          } else {
            const errorMsg = result.error || "Transcription failed";
            setError(errorMsg);
            reject(new Error(errorMsg));
          }
        } catch (err: any) {
          const errorMsg = err.message || "Failed to transcribe audio";
          setError(errorMsg);
          reject(new Error(errorMsg));
        } finally {
          setIsTranscribing(false);

          // Stop all tracks
          mediaRecorder.stream.getTracks().forEach((track) => track.stop());

          // Clear chunks
          audioChunksRef.current = [];
        }
      };

      mediaRecorder.stop();
    });
  }, []);

  const clearTranscript = useCallback(() => {
    setTranscript("");
    setError(null);
  }, []);

  return {
    isRecording,
    isTranscribing,
    transcript,
    error,
    startRecording,
    stopRecording,
    clearTranscript,
  };
}
