// pages/api/generate-caption.ts

import { NextRequest, NextResponse } from 'next/server';
import Groq from 'groq-sdk';

export async function POST(request: NextRequest) {
  const groq = new Groq({ apiKey: process.env.NEXT_PUBLIC_GROQ_API_KEY });
  const { topic, mood, language } = await request.json();

  // Function to construct the prompt dynamically
  const constructPrompt = () => {
    // Construct dynamic prompt based on mood and language
    let prompt = `Generate a ${mood} caption in ${language} about ${topic}. Generate at least 5 captions and provide them in a well-structured markdown format.`;
    return prompt ;
  };

  try {
    // Construct dynamic prompt using user input
    const baseMessage = constructPrompt();

    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `You are an AI assistant tasked with generating captions. Please ensure that the captions are well-structured, creative, and in the specified mood and language. The output should be formatted in MARKDOWN for better readability and presentation.`

      },
        {
          role: 'user',
          content: baseMessage
        }
      ],
      model: 'llama3-8b-8192', // Adjust model according to availability and suitability for caption content
      temperature: 0.7, // Adjust temperature as needed for general tone
      max_tokens: 1024,
      top_p: 1,
      stream: false,
      stop: null
    });

    const caption = completion.choices[0].message.content;

    return NextResponse.json({
      caption
    });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
