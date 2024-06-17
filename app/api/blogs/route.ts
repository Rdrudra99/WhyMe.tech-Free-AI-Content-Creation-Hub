import { NextRequest, NextResponse } from 'next/server';
import Groq from 'groq-sdk';

export async function POST(request: NextRequest) {
  const groq = new Groq({ apiKey: process.env.NEXT_PUBLIC_GROQ_API_KEY });
  const { topic, seoKeywords } = await request.json();

  // Function to construct the prompt dynamically
  const constructPrompt = () => {
    // Construct SEO keywords section
    const seoKeywordsText = seoKeywords.join(", ");

    // Construct dynamic prompt
    const prompt = `Generate a blog post about ${topic} that:\n\nSEO Keywords:\n${seoKeywordsText}`;

    return prompt;
  };

  try {
    // Construct dynamic prompt using user input
    const baseMessage = constructPrompt();

    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: `You are an AI assistant tasked with generating blog content. Please ensure that the content is engaging, informative, and optimized for SEO. The output should be well-structured and include the specified SEO keywords for better search engine visibility.`
        },
        {
          role: 'user',
          content: baseMessage
        }
      ],
      model: 'llama3-8b-8192', // Adjust model according to availability and suitability for blog content
      temperature: 0.7, // Adjust temperature as needed for general tone
      max_tokens: 1024,
      top_p: 1,
      stream: false,
      stop: null
    });

    const blogContent = completion.choices[0].message.content;

    return NextResponse.json({
      blogContent
    });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}

