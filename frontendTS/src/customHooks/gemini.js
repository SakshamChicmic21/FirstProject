import { GoogleGenAI } from "@google/genai";

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({apiKey:"AIzaSyDLinClolD5_1JeOAXVtASzK6Fx9uXXzLM"});

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Write a 100-word poem.",
  });
  console.log(response.text);
}

main();