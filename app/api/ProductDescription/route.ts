import { NextRequest, NextResponse } from 'next/server';
import Groq from 'groq-sdk';

export async function POST(request: NextRequest) {
  const groq = new Groq({ apiKey: process.env.NEXT_PUBLIC_GROQ_API_KEY });
  const { productCategory, keyFeatures, uniqueSellingPoints, targetAudience, seoKeywords } = await request.json();

  // Function to construct the prompt dynamically
  const constructPrompt = () => {
    // Construct key features section
    const keyFeaturesText = keyFeatures.map((feature: string) => `- ${feature}`).join("\n");

    // Construct unique selling points section
    const uspText = uniqueSellingPoints.map((usp: string) => `- ${usp}`).join("\n");

    // Construct SEO keywords section
    const seoKeywordsText = seoKeywords.join(", ");

    // Construct dynamic prompt
    const prompt = `Generate a compelling product description for ${productCategory} that:\n\nKey Features:\n${keyFeaturesText}\n\nUnique Selling Points:\n${uspText}\n\nTarget Audience:\n- ${targetAudience}\n\nSEO Keywords:\n${seoKeywordsText}`;

    return prompt;
  };

  try {
    // Construct dynamic prompt using user input
    const baseMessage = constructPrompt();

    const completion = await groq.chat.completions.create({
      messages: [
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

    const productDescription = completion.choices[0].message.content;

    return NextResponse.json({
      productDescription
    });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
