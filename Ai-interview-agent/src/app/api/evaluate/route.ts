import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

interface EvaluateRequest {
  question: string;
  answer: string;
}

export async function POST(request: NextRequest) {
  try {
    const { question, answer }: EvaluateRequest = await request.json();

    if (!question || !answer) {
      return NextResponse.json(
        { error: 'Question and answer are required' },
        { status: 400 }
      );
    }

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'OpenAI API key not configured' },
        { status: 500 }
      );
    }

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: `You are an expert technical interviewer. Your task is to evaluate candidate answers to interview questions. 
          Provide constructive feedback that includes:
          1. An overall assessment (Excellent/Good/Fair/Needs Improvement)
          2. Key strengths of the answer
          3. Areas for improvement
          4. Specific suggestions for better answers
          Be encouraging but honest in your evaluation.`,
        },
        {
          role: 'user',
          content: `Interview Question: ${question}\n\nCandidate's Answer: ${answer}\n\nPlease evaluate this answer.`,
        },
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    console.log(completion);
    const evaluation = completion.choices[0].message.content;

    return NextResponse.json({
      evaluation,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Evaluation error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: 'Failed to evaluate answer', details: errorMessage },
      { status: 500 }
    );
  }
}
