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

    const ELEVENLABS_API_KEY = process.env.NEXT_ELEVENLABS_API_KEY;
    const ELEVENLABS_API_URL = process.env.NEXT_ELEVENLABS_API_URL;
    const VOICE_ID = process.env.NEXT_ELEVENLABS_VOICEID;

    if (!ELEVENLABS_API_KEY) {
      return NextResponse.json(
        { error: 'ElevenLabs API key not configured' },
        { status: 500 }
      );
    }

    const response = await axios.post<ArrayBuffer>(
      `${ELEVENLABS_API_URL}v1/text-to-speech/${VOICE_ID}`,
      {
        text,
        voice_settings: {
          stability: 0.5,
          similarity_boost: 0.75,
        },
      },
      {
        headers: {
          'xi-api-key': ELEVENLABS_API_KEY,
          'Content-Type': 'application/json',
        },
        responseType: 'arraybuffer',
      }
    );

    // console.log("Status:", response.status);
    // console.log("Content-Type:", response.headers["content-type"]);

    // if (response.status === 200) {
    //   // fs.writeFileSync("output.mp3", response.data);
    //   console.log("✅ Audio file created successfully: output.mp3");
    // } else {
    //   console.error("❌ Failed to generate audio. Status:", response.status);
    //   console.error("Response:", Buffer.from(response.data).toString());
    // }

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
