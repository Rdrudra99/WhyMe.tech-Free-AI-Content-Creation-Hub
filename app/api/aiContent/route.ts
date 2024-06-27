import { NextRequest, NextResponse } from 'next/server';
import Groq from 'groq-sdk';

export async function POST(request: NextRequest) {
  const groq = new Groq({ apiKey: process.env.NEXT_PUBLIC_GROQ_API_KEY });
  const { message } = await request.json();

  try {
    const completion = await groq.chat.completions.create({
      messages: [
        { role: 'system', content: 'You are a helpful assistant' },
        { role: 'user', content: message } // Ensure message has a content property
      ],
      model: 'llama3-8b-8192', // Adjust model according to availability and suitability for blog content
      temperature: 0.7, // Adjust temperature as needed for general tone
      max_tokens: 1024, // Set maximum tokens for the response
      top_p: 1, // Set top_p for nucleus sampling
      stream: false, // Disable streaming responses
      stop: null // No specific stop sequence
    });

    const content = completion.choices[0].message.content;

    return NextResponse.json({ content });
  } catch (error) {
    console.error("Error generating content:", error);
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
