import { NextRequest, NextResponse } from 'next/server';
const Groq = require('groq-sdk');

export async function POST(request: NextRequest) {
  const groq = new Groq({ apiKey: process.env.NEXT_PUBLIC_GROQ_API_KEY });
  const { code, level, concept } = await request.json();



  let baseMessage = `Give me the explain code in pure html format ${code}`;
  

  if (level) {
    baseMessage += `Level: ${level}.\n`;
  }
  
  if (concept) {
    baseMessage += `Focus on the following concept(s): ${concept}.\n`;
  }

  try {
    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `As an AI assistant specialized in code explanation, your task is to provide clear and detailed explanations of code snippets. Ensure that your explanations are easy to follow, concise, and provide sufficient context for the reader to understand the code's functionality and purpose. Use MARKDOWN format for better readability and presentation.`,
      },
        {
          role: 'user',
          content: baseMessage
        }
      ],
      model: 'llama3-8b-8192',
      temperature: 0.7, // Adjust temperature as needed for general tone
      max_tokens: 1024,
      top_p: 1,
      stream: false,
      stop: null
    });

    return NextResponse.json({
      explanation: completion.choices[0].message.content
    });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
