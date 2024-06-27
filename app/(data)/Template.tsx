export default [
  {
    title: "Blog Title Generator",
    desc: "An AI tool that generates blog titles based on your blog information.",
    category: "Blog",
    icon: "blog-icon.png", // Assuming you have an icon file, replace with appropriate path
    prompt: `Provide 5 blog topic ideas in bullet points based on the given niche topic. Format the response in a rich text editor with proper headings (main and subheadings) and bullet points for each idea. Ensure clarity and coherence in the presentation of each topic idea.the forat should be Markdown format.`,
    slug: "generate-blog-title",
    form: [
      {
        label: "Blog Niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Blog Outline",
        field: "textarea",
        name: "outline",
        required: false, // Optional field
      },
    ],
  },
  {
    title: "Code Generator",
    desc: "An AI tool that generates code snippets based on your input specifications.",
    category: "Development",
    icon: "code-icon.png", // Replace with the appropriate path to your icon file
    prompt: `Provide a detailed description of the code you need. Specify the programming language, functionality, and any particular requirements.`,
    slug: "generate-code",
    form: [
      {
        label: "Programming Language",
        field: "input",
        name: "language",
        required: true,
      },
      {
        label: "Functionality Description",
        field: "textarea",
        name: "description",
        required: true,
      },
    ],
  },
  {
    title: "SEO Keywords Generator",
    desc: "An AI tool that generates SEO keywords based on your website content.",
    category: "SEO",
    icon: "seo-icon.png", // Assuming you have an icon file, replace with appropriate path
    prompt: `Generate a list of 10 SEO keywords in bullet points based on the provided website content.`,
    slug: "generate-seo-keywords",
    form: [
      {
        label: "Website Content",
        field: "textarea",
        name: "content",
        required: true,
      },
    ],
  },
  {
    title: "Email Subject Line Generator",
    desc: "An AI tool that generates catchy email subject lines.",
    category: "Email Marketing",
    icon: "email-icon.png", // Assuming you have an icon file, replace with appropriate path
    prompt: `Generate 5 catchy email subject lines in bullet points based on the provided email content and purpose.`,
    slug: "generate-email-subject",
    form: [
      {
        label: "Email Content",
        field: "textarea",
        name: "emailContent",
        required: true,
      },
      {
        label: "Email Purpose",
        field: "input",
        name: "emailPurpose",
        required: true,
      },
    ],
  },
  {
    title: "Social Media Post Ideas Generator",
    desc: "An AI tool that generates engaging social media post ideas.",
    category: "Social Media",
    icon: "social-media-icon.png", // Assuming you have an icon file, replace with appropriate path
    prompt: `Generate 5 engaging social media post ideas in bullet points based on the provided topic and platform.`,
    slug: "generate-social-post-ideas",
    form: [
      {
        label: "Topic",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Platform",
        field: "select",
        name: "platform",
        options: ["Facebook", "Twitter", "Instagram", "LinkedIn"],
        required: true,
      },
    ],
  },
  {
    title: "Ad Copy Generator",
    desc: "An AI tool that generates compelling ad copy for various platforms.",
    category: "Advertising",
    icon: "ad-icon.png", // Assuming you have an icon file, replace with appropriate path
    prompt: `Generate 3 compelling ad copy variations in bullet points based on the provided product details and target audience.`,
    slug: "generate-ad-copy",
    form: [
      {
        label: "Product Details",
        field: "textarea",
        name: "productDetails",
        required: true,
      },
      {
        label: "Target Audience",
        field: "input",
        name: "targetAudience",
        required: true,
      },
    ],
  },
  {
    title: "Text Rewriter Tool",
    desc: "An AI tool that rewrites text to improve clarity and coherence.",
    category: "Text Rewriting",
    icon: "text-rewriter-icon.png",
    prompt:
      "Rewrite the provided sentence to enhance clarity and coherence and give it with a structured way also the format is Rich Text Editor Format.",
    slug: "text-rewriter",
    form: [
      {
        label: "Text to Rewrite",
        field: "textarea",
        name: "textToRewrite",
        required: true,
      },
      {
        label: "Tone",
        field: "select",
        name: "tone",
        options: [
          "Professional",
          "Friendly",
          "Casual",
          "Formal",
          "Humorous",
          "Academic",
          "Technical",
        ],
        required: true,
      },
    ],
  },
];
