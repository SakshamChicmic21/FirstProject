/**
 * Test script to verify ElevenLabs API integration
 * Run this with: node --loader ts-node/esm test-tts.ts
 * Or add to package.json scripts: "test:tts": "tsx test-tts.ts"
 */

import axios from "axios";
import * as fs from "fs";
import * as path from "path";

// Load environment variables
import dotenv from "dotenv";
dotenv.config();

const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY;
const VOICE_ID = "EXAVITQu4vr4xnSDxMaL"; // Rachel

async function testTextToSpeech() {
  console.log("🎤 Testing ElevenLabs Text-to-Speech API...\n");

  if (!ELEVENLABS_API_KEY) {
    console.error("❌ Error: ELEVENLABS_API_KEY not found in .env file");
    process.exit(1);
  }

  console.log("✅ API Key found");
  console.log(`🎯 Using Voice ID: ${VOICE_ID} (Rachel)\n`);

  try {
    console.log("📡 Sending request to ElevenLabs API...");

    const response = await axios.post(
      `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`,
      {
        text: "Hello! This is a test of the ElevenLabs text to speech API. If you can hear this, the integration is working perfectly!",
        model_id: "eleven_monolingual_v1",
        voice_settings: {
          stability: 0.5,
          similarity_boost: 0.8,
        },
      },
      {
        headers: {
          "xi-api-key": ELEVENLABS_API_KEY,
          "Content-Type": "application/json",
          Accept: "audio/mpeg",
        },
        responseType: "arraybuffer",
      },
    );

    console.log("✅ API request successful!");
    console.log(
      `📦 Received ${response.data.byteLength} bytes of audio data\n`,
    );

    // Save the audio file
    const outputPath = path.join(process.cwd(), "test-output.mp3");
    fs.writeFileSync(outputPath, response.data);

    console.log(`💾 Audio saved to: ${outputPath}`);
    console.log("🎉 Test completed successfully!\n");
    console.log("You can play the audio file to verify the output.");

    return true;
  } catch (error) {
    console.error("❌ Test failed!\n");

    if (axios.isAxiosError(error)) {
      console.error("Status:", error.response?.status);
      console.error("Error:", error.response?.data);

      if (error.response?.status === 401) {
        console.error("\n💡 Your API key might be invalid or expired.");
        console.error(
          "   Please check: https://elevenlabs.io/app/settings/api-keys",
        );
      } else if (error.response?.status === 429) {
        console.error("\n💡 You've exceeded your API quota.");
        console.error("   Check your usage: https://elevenlabs.io/app/usage");
      }
    } else {
      console.error(error);
    }

    return false;
  }
}

// Run the test
testTextToSpeech()
  .then((success) => {
    process.exit(success ? 0 : 1);
  })
  .catch((error) => {
    console.error("Unexpected error:", error);
    process.exit(1);
  });
