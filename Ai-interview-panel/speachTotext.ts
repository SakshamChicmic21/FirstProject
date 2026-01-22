import OpenAI from "openai";
import fs from "fs";

const openai = new OpenAI({
  apiKey: process.env.
});

export async function speechToText() {
  const transcription = await openai.audio.transcriptions.create({
    file: fs.createReadStream("audio.wav"), // mic recording
    model: "whisper-1"
  });

  console.log(transcription.text);
}
