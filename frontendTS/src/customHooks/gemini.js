import { GoogleGenAI } from "@google/genai";

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({ apiKey: String(process.env.VITE_GEMINI_API_KEY) });

async function main(question, answer) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `You are an expert technical interviewer. Your task is to evaluate candidate answers to interview questions. 
    Provide constructive feedback that includes:
    1. An overall assessment (Excellent/Good/Fair/Needs Improvement)
    2. Key strengths of the answer
    3. Areas for improvement
    4. Specific suggestions for better answers
    Be encouraging but honest in your evaluation.
    Interview Question: ${question}
    Candidate's Answer: ${answer}
    Please evaluate this answer.`,
  });
  console.log(response.text);
}

main("What is the capital of France?", "Paris");


