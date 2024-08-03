export default [
  // BLOG TOOLS 🚀

  // Blog Title Generator
  {
    title: "Blog Title Generator",
    desc: "An AI tool that generates blog titles based on your blog information.",
    category: "Blog",
    icon: "blog-icon.png",
    prompt: `Generate engaging blog titles based on the provided blog information. Use the following HTML tags for formatting:

- <h1> for the blog title examples.
- <p> for any additional instructions or notes.

Instructions:

1. **Title Generation:**
   - Create several compelling blog titles that align with the specified niche, blog outline (if provided), and type.

2. **Example Structure:**

<h1>Blog Title Examples:</h1>

<p><strong>Blog Niche:</strong> Technology</p>
<p><strong>Blog Outline:</strong> Exploring the latest trends in AI and machine learning.</p>
<p><strong>Type:</strong> Clickbait 📢</p>

<p>1. "You Won't Believe These 10 AI Trends Shaping the Future!"</p>
<p>2. "The Top AI Innovations of 2024 That Will Blow Your Mind!"</p>

<p><strong>Blog Niche:</strong> Personal Finance</p>
<p><strong>Blog Outline:</strong> Tips for saving money and managing expenses effectively.</p>
<p><strong>Type:</strong> Educational 🎓</p>

<p>1. "10 Proven Strategies to Save More Money Each Month"</p>
<p>2. "How to Create a Budget That Works: Essential Tips for Financial Success"</p>

<p>Ensure the blog titles are relevant to the niche, outline, and type selected.</p>
`,
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
    prompt: `Generate a blog post in HTML format tailored for SEO and readability. Ensure the content is well-structured and suitable for direct use in a rich text editor, utilizing the following HTML tags:
- Use <h1> for headings.
- Use <p> for paragraphs.
- Use <strong> for important text.
- Use <em> for emphasis.
- Use <a> for links.

Craft a detailed and engaging article on the chosen topic. Consider including a structured outline and relevant FAQs to enhance user engagement and SEO performance.
and do not use markdown format

`,
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
    prompt: `
    Rewrite the provided article to ensure it is 100% unique and optimized for SEO. Incorporate the provided focus keywords into the rewritten content. Use the following HTML tags for formatting:

- <h1> for the article title.
- <h2> for section headings.
- <p> for paragraphs of the rewritten content.

Instructions:

1. **Title:**
   - Use <h1> to format the title of the rewritten article, such as "SEO-Optimized Article Example."

2. **Content:**
   - Use <h2> for section headings.
   - Use <p> for the main content of the rewritten article.
   - Ensure the focus keywords are integrated naturally and effectively into the text.

3. **Example Structure:**

<h1>SEO-Optimized Article on Healthy Eating</h1>

<h2>Introduction to Healthy Eating</h2>
<p>Healthy eating is essential for maintaining good health and well-being. By incorporating a balanced diet, rich in fruits and vegetables, you can improve your overall quality of life.</p>

<h2>Benefits of a Balanced Diet</h2>
<p>A balanced diet provides numerous benefits, including enhanced energy levels and better mental clarity. It helps in maintaining a healthy weight and reducing the risk of chronic diseases.</p>

<p>Focus Keywords: "Healthy Eating," "Balanced Diet"</p>

<p>Ensure the rewritten article maintains clarity and coherence while seamlessly incorporating the focus keywords.</p>

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
    prompt: `Generate a human-written blog post in HTML format. The post should be original, engaging, and free from plagiarism. The content should also be crafted to bypass AI detectors, ensuring it reads naturally and is optimized for SEO. Use the following HTML tags for proper formatting:

- <h1> for the main blog title.
- <h2> for major sections and subheadings within the blog post.
- <p> for paragraphs of text to present detailed information.
- <strong> to emphasize key points and important information.
- <em> to highlight specific terms or concepts that require emphasis.
- <ul> and <li> for bullet points to list key items or features clearly.
- <ol> and <li> for numbered lists where necessary.
- <a> for hyperlinks to related content or additional resources.

Instructions:

1. Blog Title:
   - Begin with the blog title using <h1>. Make sure it is engaging and accurately reflects the content of the post.

2. Introduction:
   - Write an engaging introduction in <p> that captures the reader’s interest and sets the stage for the rest of the post.

3. Main Content:
   - Organize the main content with <h2> for major sections and <h3> for subsections as needed.
   - Use <p> to provide detailed information and insights.
   - Employ <strong> to highlight significant points and <em> for terms or concepts that need special attention.

4. Lists and Structure:
   - Utilize <ul> and <li> for bullet points to present key information succinctly.
   - Use <ol> and <li> for ordered lists to outline steps or sequences.

5. Additional Elements:
   - Add relevant <a> links to provide context or direct readers to additional resources.

6. Conclusion and Call-to-Action:
   - Conclude with a summary or final thoughts in <p>.
   - Include a call-to-action in <p> encouraging readers to engage further, such as by commenting, sharing, or exploring related content.

Ensure the HTML content is well-structured, readable, and optimized for search engines while appearing natural and human-written to effectively engage your audience.
`,
    slug: "generate-human-blog-post",
    form: [
      {
        label: "What is your blog title?",
        field: "input",
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
    prompt: `Generate a high-quality, SEO-optimized product description in HTML format for the product provided. Ensure the content is engaging, well-structured, and designed to convert potential customers. Use the following HTML tags for optimal formatting:

<h2> for the product name at the top of the description.
<h3> for major sections such as "Features," "Benefits," and "Target Audience."
<p> for detailed paragraphs describing the product, its features, and its benefits.
<strong> to emphasize key features or benefits.
<em> to highlight significant details or unique selling points.
<ul> and <li> for listing features and benefits in bullet points.
<a> for hyperlinks to related products or additional information.
<img> for adding images if applicable.
Instructions:

Product Name:

Use <h2> for the product name and place it prominently at the top of the description.
Description:

Write a detailed, compelling product description in <p> paragraphs. Include essential information about the product’s purpose, unique features, and what sets it apart from competitors.
Features:

Create a section with an <h2> tag titled "Features."
Use <ul> and <li> to list key features with clear and concise descriptions. Utilize <strong> for important features.
Benefits:

Create a section with an <h2> tag titled "Benefits."
Use <ul> and <li> to list the primary benefits of the product. Highlight how each benefit improves the user's experience with <strong> and <em> tags.
Target Audience:

Create a section with an <h2> tag titled "Target Audience."
Describe the ideal customers for the product and how it meets their specific needs and preferences.
Additional Information:

Include any additional relevant details about the product in <p> paragraphs. This may include dimensions, materials, warranty, or compatibility.
Provide <a> links to related products, reviews, or additional information if applicable.
Call-to-Action:

End with a persuasive call-to-action in <p>, encouraging potential buyers to make a purchase or learn more. Make the call-to-action clear and motivating.
SEO Considerations:

Incorporate relevant keywords naturally throughout the description to improve search engine visibility.
Ensure the description is optimized for readability with short paragraphs and bullet points.
Slug: generate-product-description

Form Fields:

Product Name

Label: Product Name
Field Type: Input
Name: productName
Required: Yes
Product Features

Label: Product Features
Field Type: Textarea
Name: features
Required: Yes
Target Audience

Label: Target Audience
Field Type: Input
Name: targetAudience
Required: No
Additional Information

Label: Additional Information
Field Type: Textarea
Name: additionalInfo
Required: No
Call-to-Action

Label: Call-to-Action
Field Type: Input
Name: callToAction
Required: Yes
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
    prompt: `
    Optimize a product title for search engines. Use the following HTML tags for formatting:

- <h1> for the optimized title.
- <p> for a brief description of the optimization process and keyword relevance.

Instructions:

1. **Product Title:**
   - Start with the optimized product title using <h1>.

2. **Description:**
   - Provide a brief explanation in <p> about how the title was optimized based on keyword relevance and click-through potential.

Ensure the title is clear, keyword-rich, and designed to attract clicks while following SEO best practices.

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
    prompt: `
    Generate a catchy tagline for your brand or product. Use the following HTML tags for formatting:

- <h1> for the generated tagline.
- <p> for a brief explanation of how the tagline aligns with your brand or product features.

Instructions:

1. **Tagline:**
   - Display the tagline using <h1>.

2. **Explanation:**
   - Provide a short explanation in <p> of how the tagline reflects the key features or unique aspects of the product or brand.

Ensure the tagline is memorable, engaging, and representative of the brand’s essence.

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
    prompt: `
    Create an engaging Amazon product description. Use the following HTML tags for formatting:

- <h1> for the product name.
- <h2> for key features and benefits.
- <p> for detailed product descriptions and any additional information.
- <strong> to emphasize key features and benefits.

Instructions:

1. **Product Name:**
   - Use <h1> for the product name.

2. **Product Description:**
   - Detail the product in <p> paragraphs, including key features and benefits.
   - Use <h2> to separate sections for key features and benefits if needed.
   - Highlight important points with <strong>.

3. **Target Audience (Optional):**
   - If applicable, include a brief note on the target audience in <p>.

Ensure the description is clear, persuasive, and optimized to enhance visibility and appeal on Amazon.

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
    prompt: `
 Generate a detailed comparison between two products. Use the following HTML tags for formatting:

- <h1> for the comparison title.
- <h2> for each product name.
- <h3> for pros and cons of each product.
- <p> for detailed descriptions of each product’s features and suitability.
- <ul> and <li> for listing pros and cons.

Instructions:

1. **Comparison Title:**
   - Use <h1> for the comparison title, such as "Product Comparison: Product A vs. Product B."

2. **Product A:**
   - Use <h2> for "Product A."
   - Provide a description of Product A’s features and details in <p>.
   - List the pros and cons of Product A using <ul> and <li>.

3. **Product B:**
   - Use <h2> for "Product B."
   - Provide a description of Product B’s features and details in <p>.
   - List the pros and cons of Product B using <ul> and <li>.

4. **Conclusion:**
   - Summarize the comparison in <p>, including suitability and best value for money.

Ensure the comparison is clear, balanced, and helps the reader make an informed decision.

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
    prompt: `
    Create a heartfelt thank you note to express gratitude. Use the following HTML tags for formatting:

- <p> for the body of the thank you note.
- <strong> for emphasizing key points or names.
- <br> for line breaks to separate sections.

Instructions:

1. **Opening:**
   - Begin with a warm greeting and express gratitude for the purchase. Use <p> for this opening statement.

2. **Product Mention:**
   - Mention the product or service purchased using <strong> to highlight it.

3. **Personal Touch:**
   - Include a personalized message based on the mode of sending the note. Tailor the message for Social Media DM, Handwritten, or Email.

4. **Closing:**
   - End with a sincere thank you and well-wishes. Use <p> for the closing statement.

Example:

<p>Dear [Customer Name],</p>
<p>Thank you so much for purchasing [Product Name] from us! We are thrilled to have you as a customer and hope you are enjoying your new [Product Name].</p>
<p>We appreciate your support and look forward to serving you again in the future.</p>
<p>Warm regards,<br>[Your Name/Company]</p>

Ensure the note feels personal and expresses genuine appreciation.

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
    prompt: `
    Generate a professional email response for a return, refund, or exchange request. Use the following HTML tags for formatting:

- <h1> for the email subject.
- <p> for the body of the email.
- <strong> to emphasize key points.
- <ul> and <li> for listing steps or options.

Instructions:

1. **Subject:**
   - Use <h1> for the email subject, such as "Return/Refund/Exchange Request Response."

2. **Greeting:**
   - Start with a polite greeting in <p>.

3. **Acknowledgment:**
   - Acknowledge the customer's message or request. Summarize the product or issue described using <strong> if necessary.

4. **Response:**
   - Provide a clear and professional response to the request. Use <p> for detailed information on the return, refund, or exchange process.
   - If applicable, list steps or options using <ul> and <li>.

5. **Closing:**
   - Close with a courteous sign-off in <p>.

Example:

<h1>Return/Refund/Exchange Request Response</h1>
<p>Dear [Customer Name],</p>
<p>Thank you for reaching out regarding your recent request about [Product/Service Name]. We understand your concern about [briefly describe the issue].</p>
<p>To proceed with your request, please follow these steps:</p>
<ul>
  <li>[Step 1]</li>
  <li>[Step 2]</li>
  <li>[Step 3]</li>
</ul>
<p>If you have any further questions, feel free to contact us.</p>
<p>Best regards,<br>[Your Name/Company]</p>

Ensure the email is professional, clear, and provides all necessary information for processing the return, refund, or exchange.

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
    prompt: `Generate an SEO-friendly meta title and description for your blog or website. Use the following HTML tags for formatting:

- <title> for the meta title.
- <meta name="description"> for the meta description.

Instructions:

1. **Meta Title:**
   - Use <title> to create a concise and compelling meta title that includes the target keyword. Keep it under 60 characters.

2. **Meta Description:**
   - Use <meta name="description"> to write a meta description that provides a summary of the content and includes the target keyword. Aim for 150-160 characters.

Example:

<title>Your Target Keyword - Engaging and SEO-Friendly Title</title>
<meta name="description" content="This is a concise description of your content, including the target keyword. It summarizes what readers can expect and encourages clicks.">

Ensure both the title and description are clear, relevant, and optimized for search engines.
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
    prompt: `Create compelling clickbait-style titles using the provided keywords. Format each title to grab attention and drive clicks. Use the following HTML tags for formatting:

- <h1> for the generated titles.
- <ul> and <li> for listing multiple titles.

Instructions:

1. **Title Generation:**
   - Use <h1> to format each clickbait title.
   - Structure titles to be eye-catching and enticing, incorporating the provided keywords and numbers.

2. **Listing Titles:**
   - List each title using <ul> and <li> to separate them clearly.

Example:

<ul>
  <li><h1>10 Secrets You Didn’t Know About [Keyword]</h1></li>
  <li><h1>Why [Keyword] Is Taking the Internet by Storm!</h1></li>
  <li><h1>7 Shocking Facts About [Keyword] You Won’t Believe</h1></li>
</ul>

Ensure the titles are engaging and designed to boost click-through rates.
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
    prompt: `
Generate a detailed job description for LinkedIn. Use the following HTML tags for formatting:

- <h1> for the job title.
- <h2> for company information and role details.
- <p> for detailed descriptions and requirements.
- <ul> and <li> for listing requirements and responsibilities.

Instructions:

1. **Job Title:**
   - Use <h1> to format the job title, such as "Full Stack Developer."

2. **Company Information:**
   - Use <h2> for the company name and description.
   - Include a brief overview of the company in <p>.

3. **Role Description:**
   - Use <h2> for the role description.
   - Provide detailed information about the role in <p>.

4. **Requirements:**
   - Use <h2> for requirements.
   - List the required skills, qualifications, and experience using <ul> and <li>.

Example:

<h1>Full Stack Developer</h1>
<h2>Company: ABC Company</h2>
<p>We are a leading firm specializing in SaaS products focused on AI-based content generation. Join our dynamic team to work on innovative projects.</p>
<h2>Role Description</h2>
<p>As a Full Stack Developer, you will be responsible for developing and maintaining web applications, collaborating with cross-functional teams, and ensuring high-quality code.</p>
<h2>Requirements</h2>
<ul>
  <li>Proficiency in JavaScript, HTML, and CSS</li>
  <li>Experience with React and Node.js</li>
  <li>Strong problem-solving skills</li>
  <li>Excellent communication and teamwork abilities</li>
</ul>

Ensure the job description is clear, engaging, and accurately represents the role and company.

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
    prompt: `
    Generate a professional interview scheduling email. Use the following HTML tags for formatting:

- <h1> for the email subject.
- <p> for the body of the email.
- <strong> for emphasizing important details like the date, time, and role.

Instructions:

1. **Subject:**
   - Use <h1> for the email subject, such as "Interview Scheduling for [Role] at [Company Name]."

2. **Greeting:**
   - Start with a polite greeting in <p>.

3. **Interview Details:**
   - Include the role, interview date and time in <strong> to highlight these details.
   - If applicable, mention the interview address and mode (offline or online) in <p>.

4. **Additional Information:**
   - Provide any additional instructions or details regarding the interview process in <p>.

5. **Closing:**
   - End with a courteous sign-off in <p>.

Example:

<h1>Interview Scheduling for Full Stack Developer at ABC Company</h1>
<p>Dear [Candidate Name],</p>
<p>We are pleased to invite you to an interview for the Full Stack Developer position at ABC Company. Please find the details below:</p>
<p><strong>Date and Time:</strong> October 19, 11:00 AM</p>
<p><strong>Mode:</strong> [Online/Offline]</p>
<p><strong>Address:</strong> [1600 Pennsylvania Avenue NW, Washington, DC, 20500] (if applicable)</p>
<p>Please confirm your availability for the scheduled time. We look forward to discussing this opportunity with you.</p>
<p>Best regards,<br>[Your Name/Company]</p>

Ensure the email is clear, professional, and provides all necessary details for the interview.

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
    prompt: `Generate a professional and considerate job rejection email. Use the following HTML tags for formatting:

- <h1> for the email subject.
- <p> for the body of the email.
- <strong> to emphasize key points.

Instructions:

1. **Subject:**
   - Use <h1> for the email subject, such as "Regarding Your Application for [Role] at [Company Name]."

2. **Greeting:**
   - Start with a polite greeting in <p>.

3. **Rejection Message:**
   - Clearly but kindly inform the candidate of the decision using <p>.
   - Use <strong> to emphasize the company name and role.

4. **Encouragement (Optional):**
   - If appropriate, offer encouragement or suggest staying in touch for future opportunities in <p>.

5. **Closing:**
   - End with a respectful sign-off in <p>.

Example:

<h1>Regarding Your Application for [Role] at [Company Name]</h1>
<p>Dear [Candidate Name],</p>
<p>Thank you for your interest in the [Role] position at [Company Name]. After careful consideration, we regret to inform you that we have decided to move forward with another candidate for this role.</p>
<p>We appreciate the time you took to interview with us and encourage you to apply for future openings that match your skills and experience.</p>
<p>Best regards,<br>[Your Name/Company]</p>

Ensure the email is respectful, clear, and empathetic.
`,
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
    prompt: `
    Generate a formal relieving letter to communicate that an employee's resignation has been accepted. Use the following HTML tags for formatting:

- <h1> for the letter title.
- <p> for the body of the letter.
- <strong> to emphasize key details such as job title and dates.

Instructions:

1. **Title:**
   - Use <h1> to format the letter title, such as "Relieving Letter."

2. **Greeting:**
   - Start with a polite greeting in <p>.

3. **Content:**
   - Use <p> to state that the resignation has been accepted.
   - Include the employee’s job title and last working date using <strong> to highlight these details.
   - If there are any additional details or sections specified, include them in <p>.

4. **Closing:**
   - End with a courteous closing statement in <p>.

Example:

<h1>Relieving Letter</h1>
<p>Dear [Employee Name],</p>
<p>This is to formally acknowledge that your resignation from the position of <strong>[Job Title]</strong> has been accepted. Your last working day with [Company Name] was <strong>[Last Working Date]</strong>.</p>
<p>We appreciate your contributions during your tenure with us and wish you success in your future endeavors.</p>
<p>Best regards,<br>[Your Name/Company]</p>

Ensure the letter is formal, clear, and includes all necessary details.

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
    prompt: `
    Simplify complex concepts to make them understandable for different levels of expertise. Use the following HTML tags for formatting:

- <h1> for the concept title.
- <p> for the explanation.
- <ul> and <li> for listing key points if needed.

Instructions:

1. **Concept Title:**
   - Use <h1> to format the title of the concept or topic being explained.

2. **Explanation:**
   - Use <p> to provide a clear and simplified explanation of the concept, tailored to the chosen difficulty level.
   - For beginner explanations, use simple language and examples.
   - For intermediate and advanced levels, include more details and technical terms, but keep explanations clear.
   - For expert-level explanations, focus on in-depth analysis and technical precision.

3. **Key Points (Optional):**
   - Use <ul> and <li> to list key points or summary aspects of the concept.

Example:

<h1>Quantum Physics</h1>
<p>For <strong>Beginners:</strong> Quantum physics is the study of very small particles, like atoms and photons. It's like a new set of rules that particles follow, which can be very different from what we see in everyday life.</p>
<p>For <strong>Intermediate:</strong> Quantum physics explores the behavior of particles at the quantum level, where traditional physics no longer applies. It includes concepts like wave-particle duality and quantum entanglement.</p>
<p>For <strong>Advanced:</strong> Quantum physics involves mathematical frameworks such as quantum mechanics and quantum field theory. It examines phenomena like superposition and quantum decoherence.</p>
<p>For <strong>Experts:</strong> Quantum physics, or quantum mechanics, is a fundamental theory describing the physical properties of nature at the scale of atoms and subatomic particles. It includes the Schrödinger equation, Heisenberg's uncertainty principle, and quantum electrodynamics (QED).</p>

Ensure the explanation matches the selected difficulty level and is appropriate for the target audience.

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
    prompt: `
    Create an engaging and informative reading passage based on the specified grade level and topic. Use the following HTML tags for formatting:

- <h1> for the passage title.
- <p> for the main content.
- <ul> and <li> for listing key points or sections if needed.

Instructions:

1. **Title:**
   - Use <h1> to format the title of the reading passage, such as "The Moon Landing."

2. **Passage Content:**
   - Use <p> to deliver the content of the passage, tailored to the specified grade level.
   - For younger grades, use simpler language and shorter paragraphs.
   - For higher grades, include more detailed and complex information.

3. **Preferences (Optional):**
   - Include any specified preferences or requirements, such as passage length or additional sections, in <p>.

Example:

<h1>The Moon Landing</h1>
<p>For <strong>5th Grade:</strong> On July 20, 1969, astronauts Neil Armstrong and Buzz Aldrin landed on the moon. They were part of NASA's Apollo 11 mission. Armstrong was the first person to walk on the moon and famously said, "That's one small step for man, one giant leap for mankind."</p>
<p>For <strong>High School:</strong> The Apollo 11 mission, launched by NASA, marked a significant achievement in space exploration. On July 20, 1969, astronauts Neil Armstrong and Edwin "Buzz" Aldrin became the first humans to set foot on the lunar surface. Armstrong's iconic words, "That's one small step for man, one giant leap for mankind," underscored the monumental significance of the event. The mission provided critical data on lunar geology and marked the beginning of sustained human space exploration.</p>

<p>Ensure the passage is engaging, educational, and appropriate for the specified grade level and topic.</p>

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
    prompt: `
    Create a set of FAQs tailored to the specified topic and usage context. Use the following HTML tags for formatting:

- <h1> for the FAQ title.
- <h2> for each question.
- <p> for the answer to each question.

Instructions:

1. **Title:**
   - Use <h1> for the title of the FAQ section, such as "Frequently Asked Questions."

2. **FAQ Questions and Answers:**
   - Use <h2> to format each question.
   - Use <p> to provide clear and concise answers to each question.

3. **Example Structure:**

<h1>Frequently Asked Questions</h1>

<h2>What is [Topic]?</h2>
<p>[Provide a clear and relevant explanation about the topic.]</p>

<h2>How can I use [Topic]?</h2>
<p>[Describe how to use the topic or its features effectively.]</p>

<h2>Where can I find more information about [Topic]?</h2>
<p>[Guide users on where to find additional information or resources.]</p>

Ensure the FAQs are well-structured, directly relevant to the topic, and easy to understand for the intended usage context.

`,
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
    prompt: `Generate code snippets based on your specifications. Use the following HTML tags for formatting:

- <h1> for the title of the code snippet.
- <pre> for the code itself, to preserve formatting.
- <code> to highlight the code within <pre>.

Instructions:

1. **Title:**
   - Use <h1> for the title or brief description of the code snippet, such as "JavaScript Function for Sorting Arrays."

2. **Code Block:**
   - Use <pre> and <code> to format the code snippet clearly. Ensure the code is properly indented and formatted for readability.

3. **Example Structure:**

<h1>Python Function to Calculate Factorial</h1>
<pre><code>def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n-1)

print(factorial(5))  # Output: 120</code></pre>

<p>Ensure the code snippet meets the described functionality and adheres to the specified programming language.</p>
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
    prompt: `
    Rewrite the provided text to enhance its clarity and coherence, according to the specified tone. Use the following HTML tags for formatting:

- <h1> for the title of the rewritten text.
- <p> for the rewritten content.

Instructions:

1. **Title:**
   - Use <h1> to format the title or brief description of the rewritten text, such as "Rewritten Text Example."

2. **Rewritten Content:**
   - Use <p> to present the rewritten text clearly.

3. **Example Structure:**

<h1>Rewritten Text Example</h1>
<p>Original Text: "The meeting will be held at the conference room at noon tomorrow. It is important that everyone attends." </p>

<p>Rewritten Text (Professional): "The meeting is scheduled to take place in the conference room at 12:00 PM tomorrow. Your attendance is required and highly appreciated."</p>

<p>Ensure the rewritten text improves clarity and coherence while matching the chosen tone.</p>

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
