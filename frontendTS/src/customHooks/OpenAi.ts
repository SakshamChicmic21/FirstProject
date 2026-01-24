import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: String(import.meta.env.VITE_OPENAI_API_KEY),
});

// const useOpenAi = async ()=>{
//   const question  = "What is the capital of France?"
//   const answer = "Paris"
//   const completion = await openai.chat.completions.create({
//       model: 'gpt-3.5-turbo',
//       messages: [
//         {
//           role: 'system',
//           content: `You are an expert technical interviewer. Your task is to evaluate candidate answers to interview questions. 
//           Provide constructive feedback that includes:
//           1. An overall assessment (Excellent/Good/Fair/Needs Improvement)
//           2. Key strengths of the answer
//           3. Areas for improvement
//           4. Specific suggestions for better answers
//           Be encouraging but honest in your evaluation.`,
//         },
//         {
//           role: 'user',
//           content: `Interview Question: ${question}\n\nCandidate's Answer: ${answer}\n\nPlease evaluate this answer.`,
//         },
//       ],
//       temperature: 0.7,
//       max_tokens: 500,
//     });

//     console.log(completion);
// };
// useOpenAi();

async function main() {
  const res = await openai.responses.create({
    model: "gpt-4.1-mini",
    input: "Hello"
  });
  console.log(res);
}
main();

