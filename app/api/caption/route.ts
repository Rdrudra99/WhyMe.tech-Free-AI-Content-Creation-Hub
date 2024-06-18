import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";

export async function POST(request: NextRequest) {
  const groq = new Groq({ apiKey: process.env.NEXT_PUBLIC_GROQ_API_KEY });
  const { topic, mood, language } = await request.json();

  // Function to construct the prompt dynamically
  const constructPrompt = () => {
    return `
# AI-Generated Captions

## Mood: ${mood}
## Language: ${language}
## Topic: ${topic}

Please generate at least 5 captions in ${language} about ${topic}. Each caption should be formatted as a markdown list item and should include creative, engaging content that reflects the specified mood. Ensure proper use of markdown formatting with headings, subheadings, and spacing to enhance readability.

### Captions
1. Caption 1: 
2. Caption 2: 
3. Caption 3: 
4. Caption 4: 
5. Caption 5:
    `;
  };

  try {
    // Construct dynamic prompt using user input
    const baseMessage = constructPrompt();

    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `You are an AI assistant tasked with generating captions. Please ensure that the captions are well-structured, creative, and in the specified mood and language. The output should be formatted in MARKDOWN for better readability and presentation.`,
        },
        {
          role: "user",
          content: baseMessage,
        },
      ],
      model: "llama3-8b-8192", // Adjust model according to availability and suitability for caption content
      temperature: 0.7, // Adjust temperature as needed for general tone
      max_tokens: 1024,
      top_p: 1,
      stream: false,
      stop: null,
    });

    const caption = completion.choices[0].message.content;

    return NextResponse.json({ caption });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
