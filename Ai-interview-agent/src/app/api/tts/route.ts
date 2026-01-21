import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

interface TTSRequest {
  text: string;
}

export async function POST(request: NextRequest) {
  try {
    const { text }: TTSRequest = await request.json();

    if (!text) {
      return NextResponse.json(
        { error: 'Text is required' },
        { status: 400 }
      );
    }

    const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY;
    const NEXT_ELEVEN_API_URL = process.env.NEXT_ELEVEN_API_URL;
    const VOICE_ID = 'EXAVITQu4vr4xnSDxMaL'; // Default voice ID (Sarah)

    if (!ELEVENLABS_API_KEY) {
      return NextResponse.json(
        { error: 'ElevenLabs API key not configured' },
        { status: 500 }
      );
    }

    const response = await axios.post<ArrayBuffer>(
      `${NEXT_ELEVEN_API_URL}v1/text-to-speech/${VOICE_ID}`,
      {
        text,
        model_id: 'eleven_monolingual_v1',
        voice_settings: {
          stability: 0.5,
          similarity_boost: 0.75,
        },
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'xi-api-key': ELEVENLABS_API_KEY,
        },
        responseType: 'arraybuffer',
      }
    );

    console.log(response);

    // Return the audio as a blob
    return new NextResponse(response.data, {
      headers: {
        'Content-Type': 'audio/mpeg',
      },
    });
  } catch (error) {
    console.error('Text-to-speech error:', error);
    return NextResponse.json(
      { error: 'Failed to generate speech' },
      { status: 500 }
    );
  }
}
