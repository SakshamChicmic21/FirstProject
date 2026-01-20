import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

interface TextToSpeechRequest {
  text: string;
  voiceId?: string;
  stability?: number;
  similarityBoost?: number;
}

/**
 * POST /api/text-to-speech
 * Converts text to speech using ElevenLabs API
 */
export async function POST(request: NextRequest) {
  try {
    const body: TextToSpeechRequest = await request.json();
    const { text, voiceId, stability = 0.5, similarityBoost = 0.8 } = body;

    if (!text || text.trim().length === 0) {
      return NextResponse.json({ error: "Text is required" }, { status: 400 });
    }

    const apiKey = process.env.ELEVENLABS_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "ElevenLabs API key not configured" },
        { status: 500 },
      );
    }

    // Default voice IDs from ElevenLabs
    // Rachel - EXAVITQu4vr4xnSDxMaL (American, Female, Calm)
    // Adam - pNInz6obpgDQGcFmaJgB (American, Male, Deep)
    // Antoni - ErXwobaYiN019PkySvjV (American, Male, Well-rounded)
    const selectedVoiceId = voiceId || "EXAVITQu4vr4xnSDxMaL";

    const response = await axios.post(
      `https://api.elevenlabs.io/v1/text-to-speech/${selectedVoiceId}`,
      {
        text: text,
        model_id: "eleven_monolingual_v1",
        voice_settings: {
          stability: stability,
          similarity_boost: similarityBoost,
        },
      },
      {
        headers: {
          "xi-api-key": apiKey,
          "Content-Type": "application/json",
          Accept: "audio/mpeg",
        },
        responseType: "arraybuffer",
      },
    );

    // Return the audio file with proper headers
    return new NextResponse(response.data, {
      status: 200,
      headers: {
        "Content-Type": "audio/mpeg",
        "Content-Disposition": 'inline; filename="speech.mp3"',
      },
    });
  } catch (error) {
    console.error("Text-to-speech error:", error);

    if (axios.isAxiosError(error)) {
      const status = error.response?.status || 500;
      const message = error.response?.data?.detail?.message || error.message;

      return NextResponse.json(
        {
          error: "Failed to generate speech",
          details: message,
        },
        { status },
      );
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
