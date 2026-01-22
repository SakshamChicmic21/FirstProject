import axios from "axios";
import fs from "fs";

export async function textToSpeech() {
  const response = await axios.post(
    "https://api.elevenlabs.io/v1/text-to-speech/EXAVITQu4vr4xnSDxMaL",
    {
      text: "Please explain closures in JavaScript",
      voice_settings: {
        stability: 0.5,
        similarity_boost: 0.8
      }
    },
    {
      headers: {
        "xi-api-key": process.env.ELEVENLABS_API_KEY,
        "Content-Type": "application/json"
      },
      responseType: "arraybuffer"
    }
  );

  fs.writeFileSync("output.mp3", response.data);
}