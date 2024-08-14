export default [
  // BLOG TOOLS 🚀

  // Blog Title Generator
  {
    title: "Blog Title Generator",
    desc: "An AI tool that generates blog titles based on your blog information.",
    category: "Blog",
    icon: "blog-icon.png",
    prompt: `Generate a captivating blog title based on the following details. Blog niche: {niche}. Blog outline: {outline}. Type of title desired: {type}.`,
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
      {
        label: "Type",
        field: "select",
        name: "type",
        options: [
          "Clickbait 📢",
          "Funny 😄",
          "Educational 🎓",
          "News 📰",
          "Personal 🧑‍💻",
        ],
        required: true,
        initialValue: "Type",
      },
    ],
  },

  // Quick 1-Click Blog Post
  {
    title: "Quick 1-Click Blog Post",
    desc: "One-click tool for generating detailed, SEO-friendly blog articles in your language, complete with an outline, engaging content, and FAQs.",
    category: "Content Generation",
    icon: "blog-post-icon.png",
    prompt: `Create a detailed and SEO-friendly blog post titled "{blogTitle}" in {language}. Include an outline, engaging content, and FAQs.`,
    slug: "generate-blog-post",
    form: [
      {
        label: "What is your blog title?",
        field: "input",
        name: "blogTitle",
        required: true,
      },
      {
        label: "Language",
        field: "select",
        name: "language",
        options: ["English", "Hindi", "Odia"],
        required: true,
      },
    ],
  },

  // Rewrite Article with Keywords
  {
    title: "Rewrite Article with Keywords",
    desc: "A tool designed to rewrite your articles, ensuring they are 100% unique and SEO-optimized.",
    category: "Content Optimization",
    icon: "article-rewrite-icon.png",
    prompt: `Rewrite the following article to ensure it is 100% unique and optimized for SEO. Incorporate the provided focus keywords naturally into the rewritten content. 

**Existing Article:** 
{{existingArticle}}

**Focus Keyword:** 
{{focusKeyword1}}

**Second Focus Keyword (Optional):** 
{{focusKeyword2}}
`,
    slug: "rewrite-article-with-keywords",
    form: [
      {
        label: "Enter your Existing Article",
        field: "textarea",
        name: "existingArticle",
        placeholder: "Paste your content here",
        required: true,
      },
      {
        label: "Enter your Focus Keyword",
        field: "input",
        name: "focusKeyword1",
        placeholder: "Please enter your focus keyword",
        required: true,
      },
      {
        label: "Enter your second Focus Keyword",
        field: "input",
        name: "focusKeyword2",
        placeholder: "Optional: Enter your second focus keyword",
        required: false,
      },
    ],
  },

  // Human Written Blog Post
  {
    title: "Human Written Blog Post",
    desc: "Use this tool to generate an entire new blog post which is plagiarism-free and can bypass AI detectors. If you still find AI content detected in any of the outputs, re-generate the outputs or use 'Rewrite Article (Extreme AI Bypass)' tool.",
    category: "Content Generation",
    icon: "human-blog-icon.png",
    prompt: `Create a completely original blog post based on the given title. The content should be unique, engaging, and free of plagiarism. Ensure the blog post is crafted in a way that can bypass AI detectors. 

**Blog Title:** 
{{blogTitle}}
`,
    slug: "generate-human-blog-post",
    form: [
      {
        label: "What is your blog title?",
        field: "textarea",
        name: "blogTitle",
        required: true,
      },
    ],
  },

  //  ECOMMERCE TOOLS 🚀

  // Product Description Generator
  {
    title: "Product Description Generator",
    desc: "Generates compelling product descriptions based on features, benefits, and target audience.",
    category: "E-commerce Tools",
    icon: "product-icon.png",
    prompt: `Generate a compelling product description for the following product. The description should highlight the key features, benefits, and target audience to effectively attract potential buyers. Ensure the description is engaging and tailored to the product's unique selling points.

**Product Name:** 
{{productName}}

**Product Features:**
{{features}}

**Target Audience (optional):**
{{targetAudience}}
`,
    slug: "generate-product-description",
    form: [
      {
        label: "Product Name",
        field: "input",
        name: "productName",
        required: true,
      },
      {
        label: "Product Features",
        field: "textarea",
        name: "features",
        required: true,
      },
      {
        label: "Target Audience",
        field: "input",
        name: "targetAudience",
        required: false,
      },
    ],
  },
  // SEO Product Title Optimizer
  {
    title: "SEO Product Title Optimizer",
    desc: "Optimizes product titles for search engines by analyzing keyword relevance and click-through potential.",
    category: "E-commerce Tools",
    icon: "seo-icon.png",
    prompt: `Optimize the product title for better search engine visibility and click-through rates. The optimized title should effectively incorporate the provided keywords and be designed to attract both search engines and potential customers.

**Current Product Title:** 
{{currentTitle}}

**Keywords:**
{{keywords}}
`,
    slug: "seo-product-title-optimizer",
    form: [
      {
        label: "Current Product Title",
        field: "input",
        name: "currentTitle",
        required: true,
      },
      {
        label: "Keywords",
        field: "textarea",
        name: "keywords",
        required: true,
      },
    ],
  },

  // 🚀Tagline Generator
  {
    title: "Tagline Generator",
    desc: "Struggling to find the perfect tagline for your brand? Let our AI tool assist you in creating a tagline that stands out.",
    category: "Marketing",
    icon: "tagline-icon.png",
    prompt: `Generate a memorable and impactful tagline for your product or brand. The tagline should effectively capture the essence of what you're selling or promoting and resonate with your target audience.

**Product/Brand Name:** 
{{productName}}

**Description of What You’re Selling or Promoting (Include Key Features):** 
{{productDescription}}
`,
    slug: "generate-tagline",
    form: [
      {
        label: "Product/Brand Name",
        field: "input",
        name: "productName",
        required: true,
      },
      {
        label:
          "What are you selling or promoting? (Include key features of your product or service)",
        field: "textarea",
        name: "productDescription",
        required: true,
      },
    ],
  },

  // Amazon Product Description
  {
    title: "Amazon Product Description",
    desc: "This tool helps you quickly create appealing and effective Amazon product descriptions, boosting your product's visibility and appeal to customers.",
    category: "E-commerce",
    icon: "amazon-icon.png",
    prompt: `Create an engaging and effective product description for Amazon that highlights the key features and benefits of your product. Ensure the description is tailored to attract your target audience and improve visibility on the platform.

**Product Name:**
{{productName}}

**Product Description (Include Key Features, Benefits, and Relevant Details):**
{{productDescription}}

**Target Audience (Optional):**
{{targetAudience}}
`,
    slug: "generate-amazon-description",
    form: [
      {
        label: "Product Name",
        field: "input",
        name: "productName",
        placeholder: "e.g., iPhone 12, Samsung Galaxy Note 20, etc.",
        required: true,
      },
      {
        label:
          "Please describe your product, including its key features, benefits, and any other relevant details.",
        field: "textarea",
        name: "productDescription",
        required: true,
      },
      {
        label: "Who is your Target Audience? (Optional)",
        field: "input",
        name: "targetAudience",
        required: false,
      },
    ],
  },
  // Product Comparisons
  {
    title: "Product Comparisons",
    desc: "This tool simplifies product comparisons by outlining the pros and cons, determining suitability, and helping you find the best value for your money.",
    category: "Comparison",
    icon: "comparison-icon.png",
    prompt: `Compare two products by outlining their key features, pros, and cons to determine which offers better value and suitability based on your needs.

**Product A Name:**
{{productNameA}}

**Details of Product A (Optional):**
{{productDetailsA}}

**Product B Name:**
{{productNameB}}

**Details of Product B (Optional):**
{{productDetailsB}}
`,
    slug: "compare-products",
    form: [
      {
        label: "Enter the name of Product A",
        field: "input",
        name: "productNameA",
        placeholder: "e.g., Samsung Galaxy S22",
        required: true,
      },
      {
        label: "Details of Product A (Optional)",
        field: "textarea",
        name: "productDetailsA",
        placeholder: "e.g., It is a 5G mobile phone",
        required: false,
      },
      {
        label: "Enter the name of Product B",
        field: "input",
        name: "productNameB",
        placeholder: "e.g., Google Pixel",
        required: true,
      },
      {
        label: "Details of Product B (Optional)",
        field: "textarea",
        name: "productDetailsB",
        placeholder: "",
        required: false,
      },
    ],
  },

  // Thank You Note Generator
  {
    title: "Thank You Note Generator",
    desc: "This tool creates heartfelt thank you notes to express your gratitude with ease.",
    category: "Communication",
    icon: "thank-you-icon.png",
    prompt: `Create a personalized thank you note based on the details provided. This note will express your gratitude for the customer's purchase and make them feel valued.

**Purchased Product/Service:**
{{purchasedProduct}}
`,
    slug: "generate-thank-you-note",
    form: [
      {
        label: "What product they purchased from you?",
        field: "input",
        name: "purchasedProduct",
        placeholder: "e.g., Enter your product or service details",
        required: true,
      },
    ],
  },

  // Refund/Return/Exchange Response Email
  {
    title: "Refund/Return/Exchange Response Email",
    desc: "This tool helps you to generate a professional return/exchange response email. A useful tool for efficiently managing your return and exchange emails.",
    category: "Customer Service",
    icon: "email-icon.png",
    prompt: `Generate a professional response email for handling customer return or exchange requests. This email should address the customer's message, provide relevant information about the product or service, and include your response or resolution.

**Product/Service Description:**
{{productDescription}}

**Customer's Message (if provided):**
{{customerMessage}}

**Your Response:**
{{responseMessage}}
`,
    slug: "generate-return-response-email",
    form: [
      {
        label: "What is your product/service?",
        field: "textarea",
        name: "productDescription",
        placeholder:
          "Please describe its main features, benefits, and what makes it unique.",
        required: true,
      },
      {
        label:
          "What message did you receive from the customer regarding the return or exchange of the product? (Optional)",
        field: "textarea",
        name: "customerMessage",
        placeholder: "e.g., I ordered the wrong product.",
        required: false,
      },
      {
        label:
          "What is your response/answer to customer messages regarding returns or exchanges?",
        field: "textarea",
        name: "responseMessage",
        required: true,
      },
    ],
  },

  // S E O  T O O L S 🚀

  // Meta Title and Description
  {
    title: "Meta Title and Description",
    desc: "Get your perfect title and description for your blog or website. It's SEO-friendly and easy to use.",
    category: "SEO",
    icon: "meta-icon.png",
    prompt: `Create an SEO-friendly meta title and description for your blog or website. Use the target keyword to optimize for search engines and enhance visibility.

**Target Keyword:**
{{targetKeyword}}

**Meta Title:**
- Include the target keyword and ensure it's compelling and relevant to the content.

**Meta Description:**
- Use the target keyword and craft a concise, engaging description that highlights the content and encourages clicks.
`,
    slug: "generate-meta-title-description",
    form: [
      {
        label: "Enter your target keyword",
        field: "input",
        name: "targetKeyword",
        required: true,
      },
    ],
  },
  // Clickbait Title Generator
  {
    title: "Clickbait Title Generator",
    desc: "A tool that crafts catchy, clickbait-style blog post titles and enhance transactional search term visibility.",
    category: "SEO",
    icon: "clickbait-icon.png",
    prompt: `Generate engaging and attention-grabbing clickbait-style titles to enhance visibility and drive clicks. 

**Keywords:**
{{keywords}}

**Number of Titles:**
{{numberOfTitles}}

**Instructions:**
- Use the provided keywords to create compelling and click-worthy titles.
- Ensure the titles are intriguing and encourage users to click through.
- Provide the requested number of titles with varying approaches to capture interest.
`,
    slug: "clickbait-title-generator",
    form: [
      {
        label: "Enter your keyword(s)",
        field: "input",
        name: "keywords",
        required: true,
      },
      {
        label: "Number of Titles you need?",
        field: "input",
        name: "numberOfTitles",
        placeholder: "Example: 10",
        required: true,
      },
    ],
  },

  // HR TOOLS 🚀

  // Job Description Generator
  {
    title: "Job Description Generator",
    desc: "This AI-tool crafts comprehensive job descriptions for LinkedIn, based on the role, company, and requirements you specify.",
    category: "HR",
    icon: "job-description-icon.png",
    prompt: `Generate a detailed and engaging job description tailored for LinkedIn. 

**Role:**
{{role}}

**Company Name:**
{{companyName}}

**Company Description:**
{{companyDescription}}

**Requirements:**
{{requirements}}

**Instructions:**
- Use the provided role and company information to craft a comprehensive job description.
- Highlight key responsibilities, skills, and qualifications necessary for the position.
- Ensure the description is attractive to potential candidates and reflects the company's values and culture.
`,
    slug: "generate-job-description",
    form: [
      {
        label: "Role",
        field: "input",
        name: "role",
        placeholder: "Full Stack Developer",
        required: true,
      },
      {
        label: "Company Name",
        field: "input",
        name: "companyName",
        placeholder: "ABC company",
        required: true,
      },
      {
        label: "Tell about your Company?",
        field: "textarea",
        name: "companyDescription",
        placeholder: "We make SaaS products on AI-based content generation.",
        required: true,
      },
      {
        label: "Requirements",
        field: "textarea",
        name: "requirements",
        placeholder:
          "Specify the skills, qualifications, and experience required for the role.",
        required: true,
      },
    ],
  },

  // Interview Scheduling Email Generator
  {
    title: "Interview Scheduling Email Generator",
    desc: "Organize your interviews smoothly with MeetEase. It's an AI tool that helps you draft professional interview scheduling emails in no time.",
    category: "HR",
    icon: "interview-email-icon.png",
    prompt: `Compose a professional email to schedule an interview. 

**Company Name:**
{{companyName}}

**Role:**
{{role}}

**Interview Date and Time:**
{{interviewDateTime}}

**Interview Address (Optional):**
{{interviewAddress}}

**Interview Mode:**
{{interviewMode}}

**Instructions:**
- Use the provided details to draft a clear and concise email inviting the candidate to an interview.
- Include all relevant information such as the date, time, and location or link for the interview.
- Ensure the tone is professional and welcoming.
- If the interview is online, include the necessary link or platform details.
`,
    slug: "generate-interview-email",
    form: [
      {
        label: "Company Name",
        field: "input",
        name: "companyName",
        required: true,
      },
      {
        label: "Role",
        field: "input",
        name: "role",
        placeholder: "Full Stack Developer",
        required: true,
      },
      {
        label: "Interview date and time",
        field: "input",
        name: "interviewDateTime",
        placeholder: "Eg: October 19, 11:00AM",
        required: true,
      },
      {
        label: "Interview address (Optional)",
        field: "input",
        name: "interviewAddress",
        placeholder: "Eg: 1600 Pennsylvania Avenue NW, Washington, DC, 20500",
        required: false,
      },
      {
        label: "Interview mode",
        field: "select",
        name: "interviewMode",
        options: ["Offline", "Online"],
        required: true,
      },
    ],
  },

  // Job Rejection Email Generator
  {
    title: "Job Rejection Email Generator",
    desc: "An AI tool designed to generate kind yet firm job rejection emails.",
    category: "HR",
    icon: "job-rejection-icon.png",
    "prompt": "Compose a polite and professional job rejection email.\n\n**Company Name:**\n{{companyName}}\n\n**Role:**\n{{role}}\n\n**Instructions:**\n- Use the provided details to draft a respectful and clear job rejection email.\n- Ensure the tone is courteous and professional, acknowledging the candidate's effort and interest.\n- Offer any constructive feedback if appropriate or simply express your appreciation for their application.",
    slug: "generate-job-rejection-email",
    form: [
      {
        label: "Company Name",
        field: "input",
        name: "companyName",
        required: true,
      },
      {
        label: "Role",
        field: "input",
        name: "role",
        placeholder: "Enter the job role",
        required: true,
      },
    ],
  },

  // Relieving Letter Generator
  {
    title: "Relieving Letter Generator",
    desc: "This tool helps you to create a formal way of communicating to the employee that the resignation has been accepted.",
    category: "HR",
    icon: "relieving-letter-icon.png",
    prompt: `Compose a formal relieving letter to communicate the acceptance of an employee's resignation.

**Job Title:**
{{jobTitle}}

**Last Working Date:**
{{lastWorkingDate}}

**Additional Details:**
{{additionalDetails}}

**Instructions:**
- Use the provided details to draft a formal letter that confirms the employee's resignation and their last working day.
- Include any specific details or sections as mentioned in the additional details.
- Ensure the tone is professional and acknowledges the employee's contributions.
`,
    slug: "generate-relieving-letter",
    form: [
      {
        label: "What is the Job Title?",
        field: "input",
        name: "jobTitle",
        placeholder: "e.g., Researcher, Developer",
        required: true,
      },
      {
        label: "What is the employee's relieving/last working date?",
        field: "input",
        name: "lastWorkingDate",
        placeholder: "e.g., 10-12-2021",
        required: true,
      },
      {
        label:
          "Are there any specific sections or details you want to include in the letter? (Optional)",
        field: "textarea",
        name: "additionalDetails",
        required: false,
      },
    ],
  },

  // EDUCATION TOOLS  🚀

  // Concept Simplifier
  {
    title: "Concept Simplifier",
    desc: "This tool simplifies complex topics to make them easy to understand for everyone, from kids to experts, by explaining things in a way that's just right for them.",
    category: "Education",
    icon: "concept-simplifier-icon.png",
    prompt: `Explain the concept or topic in a way that matches the selected difficulty level.

**Concept/Topic:**
{{concept}}

**Difficulty Level:**
{{difficultyLevel}}

**Instructions:**
- Provide an explanation of the concept or topic that aligns with the chosen difficulty level.
- For "Beginner," use simple language and basic examples.
- For "Intermediate," include more details and some technical terms.
- For "Advanced," offer a deeper dive into the subject with complex explanations.
- For "Expert," present a thorough and detailed explanation that assumes familiarity with the topic.
`,
    slug: "generate-concept-simplifier",
    form: [
      {
        label: "What concept or topic would you like explained?",
        field: "input",
        name: "concept",
        placeholder: "e.g., Quantum Physics, Machine Learning, etc.",
        required: true,
      },
      {
        label: "How would you like this concept explained?",
        field: "select",
        name: "difficultyLevel",
        options: ["Beginner", "Intermediate", "Advanced", "Expert"],
        required: true,
      },
    ],
  },

  // Reading Passage Generator
  {
    title: "Reading Passage Generator",
    desc: "This powerful tool helps you to create engaging and informative reading passages effortlessly.",
    category: "Education",
    icon: "reading-passage-icon.png",
    prompt: `Create a reading passage based on the provided details.

**Grade Level:**
{{gradeLevel}}

**Topic:**
{{topic}}

**Preferences/Requirements:**
{{preferences}}

**Instructions:**
- Develop a reading passage suitable for the specified grade level.
- Focus on the given topic to create an engaging and informative passage.
- Incorporate any specific preferences or requirements, such as length or style, if provided.
- Ensure the passage is educational and aligns with the grade level's reading comprehension abilities.
`,
    slug: "generate-reading-passage",
    form: [
      {
        label: "What grade level are you looking for?",
        field: "input",
        name: "gradeLevel",
        placeholder: "e.g., 5th grade, high school",
        required: true,
      },
      {
        label: "What topic would you like to teach?",
        field: "input",
        name: "topic",
        placeholder: "e.g., The moon landing",
        required: true,
      },
      {
        label:
          "Do you have any preferences or requirements for the passage? (Optional)",
        field: "textarea",
        name: "preferences",
        placeholder: "e.g., passage length",
        required: false,
      },
    ],
  },

  // SUPPORT TOOLS  🚀

  // FAQ Generator
  {
    title: "FAQ Generator",
    desc: "This tool efficiently guides you in creating tailored FAQs, ensuring your questions and answers are directly relevant and clearly structured for any specific topic and context.",
    category: "Customer Support",
    icon: "faq-icon.png",
    prompt: ``,
    slug: "generate-faqs",
    form: [
      {
        label: "What is the main topic or subject for the FAQs?",
        field: "input",
        name: "topic",
        placeholder:
          "e.g., Online Payment Methods, Using a Mobile Banking App, etc...",
        required: true,
      },
      {
        label: "Where will these FAQs be used?",
        field: "input",
        name: "usage",
        placeholder:
          "e.g., E-commerce website, Banking App help section, etc...",
        required: true,
      },
    ],
  },

  // CODE GENERATOR TOOLS 🚀

  {
    title: "Code Generator",
    desc: "An AI tool that generates code snippets based on your input specifications.",
    category: "Development",
    icon: "code-icon.png",
    prompt: `Create a set of frequently asked questions (FAQs) based on the provided details.

**Main Topic or Subject:**
{{topic}}

**Usage Context:**
{{usage}}

**Instructions:**
- Develop clear and relevant FAQs that directly address common questions related to the specified topic.
- Ensure the questions and answers are well-structured and easy to understand.
- Tailor the content to the context where the FAQs will be used, such as an e-commerce website or a banking app.
- Consider including additional helpful details or explanations if relevant to the topic and usage.
`,
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
  // Text Rewriter Tool
  {
    title: "Text Rewriter Tool",
    desc: "An AI tool that rewrites text to improve clarity and coherence.",
    category: "Text Rewriting",
    icon: "text-rewriter-icon.png",
    prompt: `Rewrite the provided text to enhance clarity and coherence.

**Text to Rewrite:**
{{textToRewrite}}

**Desired Tone:**
{{tone}}

**Instructions:**
- Ensure the rewritten text maintains the original meaning and intent.
- Adjust the tone according to the specified option (Professional, Friendly, Casual, etc.).
- Focus on improving the readability and flow of the text.
- Make sure the revised version is clear, coherent, and suitable for the intended audience.
`,
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
