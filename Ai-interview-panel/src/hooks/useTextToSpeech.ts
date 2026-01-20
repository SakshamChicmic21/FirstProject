import { useState, useCallback, useRef } from "react";
import { textToSpeech, speakText, TTSOptions } from "@/api/textToSpeech";

export interface UseTextToSpeechReturn {
  /** Whether audio is currently playing */
  isPlaying: boolean;
  /** Whether audio is currently being generated */
  isLoading: boolean;
  /** Any error that occurred */
  error: string | null;
  /** Speak the given text */
  speak: (text: string, options?: TTSOptions) => Promise<void>;
  /** Stop the currently playing audio */
  stop: () => void;
  /** Generate audio URL without playing */
  generateAudio: (text: string, options?: TTSOptions) => Promise<string>;
}

/**
 * React hook for text-to-speech functionality
 */
export const useTextToSpeech = (): UseTextToSpeechReturn => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const stop = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current = null;
      setIsPlaying(false);
    }
  }, []);

  const speak = useCallback(
    async (text: string, options?: TTSOptions) => {
      try {
        // Stop any currently playing audio
        stop();

        setError(null);
        setIsLoading(true);

        const audio = await speakText(text, options);
        audioRef.current = audio;
        setIsPlaying(true);

        // Set up event listeners
        audio.addEventListener("ended", () => {
          setIsPlaying(false);
          audioRef.current = null;
        });

        audio.addEventListener("error", () => {
          setError("Error playing audio");
          setIsPlaying(false);
          audioRef.current = null;
        });
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to generate speech",
        );
      } finally {
        setIsLoading(false);
      }
    },
    [stop],
  );

  const generateAudio = useCallback(
    async (text: string, options?: TTSOptions): Promise<string> => {
      try {
        setError(null);
        setIsLoading(true);
        const audioUrl = await textToSpeech(text, options);
        return audioUrl;
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Failed to generate audio";
        setError(errorMessage);
        throw err;
      } finally {
        setIsLoading(false);
      }
    },
    [],
  );

  return {
    isPlaying,
    isLoading,
    error,
    speak,
    stop,
    generateAudio,
  };
};
