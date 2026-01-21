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
        "xi-api-key": "sk_62bb277bc81d92e83e76857c6757d55cec1eaea6cd380ee9",
        "Content-Type": "application/json"
      },
      responseType: "arraybuffer"
    }
  );

  console.log(response);

  fs.writeFileSync("output.mp3", response.data);
}

textToSpeech();