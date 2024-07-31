export default [
  // BLOG TOOLS 🚀

  // Blog Title Generator
  {
    title: "Blog Title Generator",
    desc: "An AI tool that generates blog titles based on your blog information.",
    category: "Blog",
    icon: "blog-icon.png",
    prompt: ``,
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
    prompt: `Generate a blog post based on the provided title, ensuring the content is formatted in HTML. The HTML should include appropriate tags such as <h1>, <p>, <strong>, <em>, and <a> for headings, paragraphs, bold text, italicized text, and links respectively. Ensure the content is well-structured and ready to be used directly in a rich text editor.`,
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
    prompt: `# Structured Prompt for Rewrite Article with Keywords

## Title
Rewrite Article with Keywords

## Description
A tool designed to rewrite your articles, ensuring they are 100% unique and SEO-optimized.

## Context
Rewriting articles with focus keywords helps improve SEO and ensures content uniqueness. This prompt assists in rewriting your existing article by incorporating specified focus keywords for better search engine optimization.

## Instructions
1. **Existing Article**: Paste your existing article content into the text area provided.
2. **Focus Keyword 1**: Enter your primary focus keyword for SEO optimization.
3. **Focus Keyword 2 (Optional)**: Optionally, enter a second focus keyword to further optimize your article.

## Examples

### Input
**Existing Article**:
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis urna ac libero placerat aliquet.

**Focus Keyword 1**: "best memory foam pillow"
**Focus Keyword 2**: "buy memory foam pillow"

### Output
#### Rewritten Article with Keywords

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis urna ac libero placerat aliquet. Curabitur sagittis, best memory foam pillow, lorem vitae volutpat. Fusce sed metus at mauris consequat efficitur. In id justo sit amet est maximus fermentum. Nulla vel dapibus ante. Proin lacinia, buy memory foam pillow, orci sed feugiat mollis.

## Parameters
- **Existing Article**: (e.g., Paste your existing article content)
- **Focus Keyword 1**: (e.g., best memory foam pillow, SEO tools, digital marketing)
- **Focus Keyword 2**: (Optional) Second focus keyword for further optimization.

## Output Format
The output will be a rewritten version of your article, incorporating the specified focus keywords to enhance SEO and ensure content uniqueness.

## Notes
- Ensure the rewritten article maintains coherence and clarity while incorporating the focus keywords naturally.
- Verify the uniqueness of the rewritten content to avoid plagiarism and maintain SEO effectiveness.
- Review and edit the output as needed to align with your specific content requirements and style.
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
    prompt: `# Structured Prompt for Rewrite Article with Keywords

## Title
Rewrite Article with Keywords

## Description
A tool designed to rewrite your articles, ensuring they are 100% unique and SEO-optimized.

## Context
Rewriting articles with focus keywords helps improve SEO and ensures content uniqueness. This prompt assists in rewriting your existing article by incorporating specified focus keywords for better search engine optimization.

## Instructions
1. **Existing Article**: Paste your existing article content into the text area provided.
2. **Focus Keyword 1**: Enter your primary focus keyword for SEO optimization.
3. **Focus Keyword 2 (Optional)**: Optionally, enter a second focus keyword to further optimize your article.

## Examples

### Input
**Existing Article**:
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis urna ac libero placerat aliquet.

**Focus Keyword 1**: "best memory foam pillow"
**Focus Keyword 2**: "buy memory foam pillow"

### Output
#### Rewritten Article with Keywords

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis urna ac libero placerat aliquet. Curabitur sagittis, best memory foam pillow, lorem vitae volutpat. Fusce sed metus at mauris consequat efficitur. In id justo sit amet est maximus fermentum. Nulla vel dapibus ante. Proin lacinia, buy memory foam pillow, orci sed feugiat mollis.

## Parameters
- **Existing Article**: (e.g., Paste your existing article content)
- **Focus Keyword 1**: (e.g., best memory foam pillow, SEO tools, digital marketing)
- **Focus Keyword 2**: (Optional) Second focus keyword for further optimization.

## Output Format
The output will be a rewritten version of your article, incorporating the specified focus keywords to enhance SEO and ensure content uniqueness.

## Notes
- Ensure the rewritten article maintains coherence and clarity while incorporating the focus keywords naturally.
- Verify the uniqueness of the rewritten content to avoid plagiarism and maintain SEO effectiveness.
- Review and edit the output as needed to align with your specific content requirements and style.
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
    prompt: `# Structured Prompt for Product Description Generator

## Title
Product Description Generator

## Description
Generates compelling product descriptions based on features, benefits, and target audience. This tool is perfect for e-commerce platforms looking to create engaging and informative product descriptions.

## Context
Creating attractive and informative product descriptions is crucial for e-commerce success. This prompt helps generate detailed descriptions by focusing on product features, benefits, and the target audience.

## Examples
### Output
#### Product Description for UltraSoft Pillow

Experience the ultimate comfort with the UltraSoft Pillow, designed to give you the best night's sleep. Made with premium memory foam, this pillow adapts to your head and neck for perfect support. Its hypoallergenic material ensures a clean and healthy sleeping environment, making it ideal for those with allergies. The ergonomic design promotes proper spinal alignment, reducing neck and back pain. Perfect for anyone struggling with sleep issues, the UltraSoft Pillow is your solution to a restful night.

## Parameters
- **Product Name**: (e.g., UltraSoft Pillow, SmartWatch Pro)
- **Product Features**: (e.g., Memory foam, Hypoallergenic, Ergonomic design)
- **Target Audience**: (e.g., People with sleep issues, Fitness enthusiasts)

## Output Format
The output will be a detailed product description highlighting the product's features, benefits, and target audience.

## Notes
- Ensure the product description is engaging and highlights the key features and benefits.
- Tailor the description to appeal to the specified target audience if provided.
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
    prompt: `# Structured Prompt for SEO Product Title Optimizer
## Title
SEO Product Title Optimizer

## Description
Optimizes product titles for search engines by analyzing keyword relevance and click-through potential. This tool helps enhance product visibility and increase click-through rates on e-commerce platforms.

## Context
A well-optimized product title can significantly improve search engine visibility and attract more potential customers. This prompt assists in refining product titles by incorporating relevant keywords and ensuring they are compelling for users.

## Examples


### Output
#### Optimized Product Title

"UltraSoft Memory Foam Pillow - Hypoallergenic, Comfortable Sleep Solution"

## Parameters
- **Current Product Title**: (e.g., UltraSoft Memory Foam Pillow, Smart Fitness Tracker)
- **Keywords**: (e.g., Memory foam pillow, Comfortable sleep, Hypoallergenic)

## Output Format
The output will be an optimized product title that includes relevant keywords and is designed to improve search engine visibility and click-through rates.

## Notes
- Ensure the optimized title is clear, concise, and includes the most important keywords.
- The title should be attractive to potential customers and accurately represent the product.
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
    prompt: `# Structured Prompt for Tagline Generator
## Title
Tagline Generator

## Description
Struggling to find the perfect tagline for your brand? Let our AI tool assist you in creating a tagline that stands out. This tool generates compelling taglines based on the product or brand details you provide.

## Context
A great tagline can capture the essence of your brand and make a lasting impression on your audience. This prompt helps create engaging and memorable taglines by focusing on the key features of your product or service.

## Examples

### Output
#### Generated Tagline

"UltraSoft Pillow - Your Gateway to a Restful Night's Sleep"

## Output Format
The output will be a short, compelling tagline that effectively captures the essence of your product or brand.

## Notes
- Ensure the tagline is concise and memorable.
- Highlight the unique selling points of the product or brand.
- Tailor the tagline to appeal to the target audience.
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
    prompt: `# Structured Prompt for Amazon Product Description

## Title
Amazon Product Description Generator

## Description
This tool helps you quickly create appealing and effective Amazon product descriptions, boosting your product's visibility and appeal to customers. Perfect for enhancing your product listings on Amazon.

## Context
A well-crafted product description can significantly impact sales on Amazon by highlighting key features, benefits, and appealing to the target audience. This prompt assists in generating detailed and persuasive descriptions tailored for Amazon listings.

### Output
#### Amazon Product Description

Transform your sleep with the UltraSoft Memory Foam Pillow. Crafted from premium memory foam, it offers unparalleled comfort and support. Its hypoallergenic cover ensures a clean and healthy sleep environment, ideal for individuals with allergies. Designed with ergonomic principles, this pillow promotes proper spinal alignment, reducing neck and back pain. Elevate your sleep experience with the UltraSoft Memory Foam Pillow today.

## Parameters
- **Product Name**: (e.g., UltraSoft Memory Foam Pillow, Smart Fitness Tracker)
- **Product Description**: (e.g., Key features, Benefits, Relevant details)
- **Target Audience**: (e.g., Individuals with allergies, Fitness enthusiasts)

## Output Format
The output will be a detailed Amazon product description that highlights key features, benefits, and appeals to potential customers.

## Notes
- Ensure the description is clear, informative, and persuasive.
- Tailor the description to emphasize unique selling points and benefits.
- Consider optimizing for keywords to enhance searchability on Amazon.
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
    prompt: `# Structured Prompt for Product Comparisons

## Title
Product Comparisons

## Description
This tool simplifies product comparisons by outlining the pros and cons, determining suitability, and helping you find the best value for your money. Compare two products effectively with detailed insights.

## Context
Comparing products can be daunting without a structured approach. This prompt assists in comparing two products by providing detailed information on their features, pros, and cons to aid decision-making.


## Examples

### Output
#### Product Comparison

**Samsung Galaxy S22 vs. Google Pixel**

- **Features Comparison**:
  - Samsung Galaxy S22: 5G connectivity, high-resolution display, advanced camera.
  - Google Pixel: Exceptional camera quality, pure Android experience.

- **Pros and Cons**:
  - Samsung Galaxy S22:
    - Pros: 5G connectivity, high-resolution display.
    - Cons: Higher price point compared to Google Pixel.

  - Google Pixel:
    - Pros: Exceptional camera quality, pure Android experience.
    - Cons: May lack some advanced features found in Samsung Galaxy S22.

- **Suitability**:
  - Samsung Galaxy S22: Ideal for users seeking cutting-edge technology and features.
  - Google Pixel: Suitable for photography enthusiasts and those preferring a pure Android experience.

- **Best Value**:
  - Based on the comparison, Samsung Galaxy S22 offers superior technology, but Google Pixel provides better value for camera quality.

## Parameters
- **Product A Name**: (e.g., Samsung Galaxy S22, MacBook Pro)
- **Product A Details**: (e.g., Key features, Specifications)
- **Product B Name**: (e.g., Google Pixel, Surface Laptop)
- **Product B Details**: (e.g., Key features, Specifications)

## Output Format
The output will be a detailed comparison of the two products, highlighting their features, pros and cons, suitability, and best value considerations.

## Notes
- Ensure the comparison is fair and objective.
- Consider including user reviews or expert opinions for a more comprehensive analysis.
- Tailor the comparison based on the specific needs or preferences of the comparison context.
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
    prompt: `# Structured Prompt for Thank You Note Generator

## Title
Thank You Note Generator

## Description
This tool creates heartfelt thank you notes to express your gratitude with ease. Perfect for personal or business use to send thank you messages via social media, handwritten notes, or email.

## Context
Sending a thank you note is a thoughtful gesture that strengthens relationships and acknowledges appreciation. This prompt helps generate personalized thank you notes based on the product or service purchased and the preferred mode of sending.


### Output
#### Generated Thank You Note

"Dear [Customer's Name],

Thank you so much for purchasing our UltraSoft Memory Foam Pillow. We hope it brings you comfort and restful nights. Your support means a lot to us. Please feel free to reach out if you have any questions or feedback.

Best regards,
[Your Name]"

## Parameters
- **Product or Service Purchased**: (e.g., UltraSoft Memory Foam Pillow, Web Design Service)
- **Mode of Sending Note**: (e.g., Social Media DM, Handwritten, Email)

## Output Format
The output will be a personalized thank you note tailored to the product or service purchased and the selected mode of sending.

## Notes
- Customize the thank you note to reflect your brand's tone and style.
- Personalize the note with the customer's name and specific details related to their purchase.
- Ensure the note is genuine and heartfelt to convey sincere appreciation.
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
      {
        label: "Mode of sending note",
        field: "select",
        name: "sendingMode",
        options: [
          "Social Media DM" , "Handwritten" , "Email"
        ],
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
    prompt: `# Structured Prompt for Refund/Return/Exchange Response Email

## Title
Refund/Return/Exchange Response Email Generator

## Description
This tool helps you to generate a professional return/exchange response email. A useful tool for efficiently managing your return and exchange requests, ensuring clear communication with customers.

## Context
Handling return or exchange requests requires clear and professional communication. This prompt assists in drafting response emails by providing details about the product or service, noting the customer's message (if available), and crafting a suitable response.

## Examples

**Customer's Message**:
- "I received the wrong pillow cover with my order."

**Response/Answer**:
- We apologize for the inconvenience caused. Please return the incorrect pillow cover using our prepaid shipping label, and we will promptly send you the correct one. Thank you for bringing this to our attention.

### Output
#### Generated Response Email

Dear [Customer's Name],

Thank you for reaching out to us regarding the issue with your order. We apologize for any inconvenience caused.

Our UltraSoft Memory Foam Pillow is designed to provide exceptional comfort and support, and we regret that you did not receive the correct pillow cover with your order. We are committed to resolving this issue promptly for you.

Please use the prepaid shipping label enclosed to return the incorrect pillow cover. Once we receive it, we will immediately send you the correct one.

If you have any further questions or concerns, please don't hesitate to contact us. We appreciate your understanding and patience in this matter.

Best regards,
[Your Name]

## Parameters
- **Product/Service Description**: (e.g., UltraSoft Memory Foam Pillow, Web Design Service)
- **Customer's Message**: (e.g., Details of customer's issue or request)
- **Response/Answer**: (e.g., Steps to resolve the issue, Apology and reassurance)

## Output Format
The output will be a professionally drafted response email tailored to the customer's return or exchange request, ensuring clear communication and resolution.

## Notes
- Personalize the email with the customer's name and specific details related to their issue.
- Ensure the tone of the email is empathetic and professional.
- Include any necessary instructions or next steps for the customer to proceed with the return or exchange.
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
    prompt: `# Structured Prompt for Meta Title and Description

## Title
Meta Title and Description Generator

## Description
Get your perfect title and description for your blog or website. It's SEO-friendly and easy to use, enhancing your search engine visibility.

## Context
An SEO-friendly meta title and description are essential for improving your website's search engine ranking and attracting more visitors. This prompt assists in generating optimized meta titles and descriptions based on your target keyword.

## Instructions
1. **Target Keyword**: Enter your target keyword for which you want to optimize the meta title and description.

## Examples

### Input
**Target Keyword**: "best memory foam pillow"

### Output
#### Generated Meta Title and Description

**Meta Title**:
"Best Memory Foam Pillow 2024 | Top Rated Comfort & Support"

**Meta Description**:
"Discover the best memory foam pillow for 2024. Our top-rated pillows offer superior comfort and support. Find your perfect pillow today!"

## Parameters
- **Target Keyword**: (e.g., best memory foam pillow, SEO tools, digital marketing)

## Output Format
The output will be an SEO-friendly meta title and description tailored to your target keyword, designed to enhance search engine visibility and attract more visitors.

## Notes
- Ensure the meta title is under 60 characters and the meta description under 160 characters for optimal display in search engine results.
- Include relevant keywords naturally in the meta title and description to improve SEO.
- Craft a compelling meta description that encourages users to click through to your website.
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
    prompt : `Create a clickbait title using the provided keywords and numbers. Structure the title in a compelling format with bullet points.`,
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
    prompt: `# Structured Prompt for Job Description Generator

## Title
Job Description Generator

## Description
This AI-tool crafts comprehensive job descriptions for LinkedIn, based on the role, company, and requirements you specify.

## Context
Crafting detailed and compelling job descriptions is crucial for attracting qualified candidates. This prompt facilitates the creation of job descriptions tailored to the role, company, and specific requirements.

## Instructions
1. **Role**: Enter the title of the job role (e.g., Full Stack Developer).
2. **Company Name**: Provide the name of your company.
3. **Tell about your Company**: Describe your company, including its industry, products, and any unique aspects.
4. **Requirements**: Specify the skills, qualifications, and experience necessary for the role.

## Examples

### Input
**Role**: Full Stack Developer
**Company Name**: ABC Company
**Tell about your Company**:
ABC Company specializes in creating SaaS products focused on AI-based content generation. We are dedicated to innovation and fostering a collaborative work environment.
**Requirements**:
- Strong proficiency in JavaScript, HTML, CSS
- Experience with backend frameworks like Node.js
- Familiarity with cloud technologies such as AWS
- Excellent problem-solving skills and attention to detail

### Output
#### Generated Job Description

**Job Title**: Full Stack Developer

**Company**: ABC Company

**About Us**:
ABC Company specializes in creating SaaS products focused on AI-based content generation. We are dedicated to innovation and fostering a collaborative work environment.

**Job Description**:
We are seeking a talented Full Stack Developer to join our team at ABC Company. In this role, you will be responsible for developing and maintaining our web applications. You should have a strong background in JavaScript, HTML, CSS, and experience with backend frameworks like Node.js. Familiarity with cloud technologies such as AWS is a plus. The ideal candidate will possess excellent problem-solving skills, attention to detail, and a passion for creating innovative solutions.

## Parameters
- **Role**: (e.g., Full Stack Developer, Marketing Manager)
- **Company Name**: (e.g., ABC Company)
- **Tell about your Company**: (Describe your company briefly)
- **Requirements**: (Specify skills, qualifications, and experience required)

## Output Format
The output will be a comprehensive job description tailored to the specified role, company, and requirements, ideal for posting on LinkedIn or other job platforms.

## Notes
- Ensure the job description accurately reflects the role's responsibilities and company culture.
- Highlight key skills and qualifications to attract qualified candidates.
- Review and customize the generated job description to align with your specific hiring needs and company standards.
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
    prompt: `# Structured Prompt for Interview Scheduling Email Generator

## Title
Interview Scheduling Email Generator

## Description
Organize your interviews smoothly with MeetEase. It's an AI tool that helps you draft professional interview scheduling emails in no time.

## Context
Efficiently scheduling interviews requires clear and professional communication. This prompt assists in drafting interview scheduling emails tailored to the company, role, interview details, and mode.

## Instructions
1. **Company Name**: Enter the name of your company.
2. **Role**: Specify the role for which the interview is scheduled (e.g., Full Stack Developer).
3. **Interview date and time**: Provide the date and time for the interview (e.g., October 19, 11:00AM).
4. **Interview address (Optional)**: Optionally, enter the physical location address for offline interviews.
5. **Interview mode**: Select the mode of the interview (Offline or Online).

## Examples

### Input
**Company Name**: ABC Company
**Role**: Full Stack Developer
**Interview date and time**: October 19, 11:00AM
**Interview address (Optional)**: 1600 Pennsylvania Avenue NW, Washington, DC, 20500
**Interview mode**: Offline

### Output
#### Generated Interview Scheduling Email

**Subject**: Invitation to Interview for Full Stack Developer Position at ABC Company

**Dear [Candidate's Name],**

I hope this message finds you well. We are pleased to invite you for an interview for the Full Stack Developer position at ABC Company.

**Interview Details:**
- **Role**: Full Stack Developer
- **Company**: ABC Company
- **Date and Time**: October 19, 11:00AM
- **Location**: 1600 Pennsylvania Avenue NW, Washington, DC, 20500 (Offline)
- **Interview Mode**: Offline

Please confirm your availability for the scheduled interview by replying to this email. Should you have any questions or need further information, feel free to contact us.

Looking forward to meeting you!

Best regards,

[Your Name]
[Your Position]
ABC Company

## Parameters
- **Company Name**: (e.g., ABC Company)
- **Role**: (e.g., Full Stack Developer, Marketing Manager)
- **Interview date and time**: (Specify the date and time)
- **Interview address (Optional)**: (Provide the address for offline interviews)
- **Interview mode**: (Select Offline or Online)

## Output Format
The output will be a professionally drafted email for scheduling an interview, including all necessary details tailored to the specified role, company, and interview logistics.

## Notes
- Customize the email content to include additional instructions or specifics relevant to your company's interview process.
- Ensure the email is clear, concise, and includes all relevant information to facilitate a smooth interview scheduling process.
- Review and edit the generated email as needed to align with your company's communication style and guidelines.
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
    prompt: `# Structured Prompt for Job Rejection Email Generator

## Title
Job Rejection Email Generator

## Description
An AI tool designed to generate kind yet firm job rejection emails.

## Context
Sending respectful and empathetic job rejection emails is crucial for maintaining a positive employer brand. This prompt helps in generating job rejection emails that convey appreciation while delivering the rejection message.

## Instructions
1. **Company Name**: Enter the name of your company.
2. **Role**: Specify the role for which the candidate is being rejected.

## Examples

### Input
**Company Name**: ABC Company
**Role**: Full Stack Developer

### Output
#### Generated Job Rejection Email

**Subject**: Job Application Update: Full Stack Developer Position at ABC Company

Dear [Candidate's Name],

Thank you for taking the time to interview with us for the Full Stack Developer position at ABC Company. We truly appreciate your interest in our company and the effort you put into the interview process.

After careful consideration, we have decided to move forward with another candidate whose skills and experience closely match our requirements for this role. This decision was a difficult one, as we were impressed with your qualifications and enthusiasm.

We encourage you to keep an eye on our career page for future opportunities that may align more closely with your background and career goals.

Thank you once again for considering a career with ABC Company. We wish you all the best in your job search and future endeavors.

Best regards,

[Your Name]
[Your Position]
ABC Company

## Parameters
- **Company Name**: (e.g., ABC Company)
- **Role**: (e.g., Full Stack Developer, Marketing Manager)

## Output Format
The output will be a professionally crafted job rejection email that communicates appreciation and respect while delivering the rejection message kindly and clearly.

## Notes
- Customize the email content to reflect your company's tone and values.
- Ensure the email is empathetic and acknowledges the candidate's efforts during the interview process.
- Review and edit the generated email as needed to maintain a positive candidate experience and uphold your employer brand.
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
    prompt: `# Structured Prompt for Relieving Letter Generator

## Title
Relieving Letter Generator

## Description
This tool helps you to create a formal way of communicating to the employee that the resignation has been accepted.

## Context
Issuing a relieving letter is a formal process in HR to communicate acceptance of an employee's resignation. This prompt assists in generating relieving letters that include essential details such as job title, last working date, and optional additional sections.

## Instructions
1. **Job Title**: Enter the job title of the employee (e.g., Researcher, Developer).
2. **Employee's Relieving/Last Working Date**: Specify the date when the employee will be relieved or their last working day (e.g., 10-12-2021).
3. **Additional Details**: Optionally, include any specific sections or details you want to add to the relieving letter.

## Examples

### Input
**Job Title**: Developer
**Employee's Relieving/Last Working Date**: 10-12-2021
**Additional Details**: None

### Output
#### Generated Relieving Letter

**Date: [Current Date]**

Dear [Employee's Name],

Subject: Relieving Letter

This is to confirm that we have accepted your resignation from the position of Developer at [Company Name], effective from your last working date of 10-12-2021. We appreciate your contributions during your tenure with us.

As per company policy, you are requested to complete all pending tasks and hand over your responsibilities to [Name of the Responsible Person]. Please ensure all company property and documents are returned before your last working day.

We wish you all the best in your future endeavors.

Sincerely,

[HR Manager's Name]
[HR Manager's Position]
[Company Name]

## Parameters
- **Job Title**: (e.g., Researcher, Developer)
- **Employee's Relieving/Last Working Date**: (Specify the date)
- **Additional Details**: (Optional, specify any additional sections or details)

## Output Format
The output will be a formal relieving letter confirming acceptance of the employee's resignation, including essential details and optionally additional sections as specified.

## Notes
- Customize the content to comply with your company's policies and procedures.
- Ensure the letter is respectful and professional in tone.
- Review and edit the generated letter to reflect accurate information and maintain legal compliance.
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
    prompt: `# Structured Prompt for Job Rejection Email Generator

## Title
Job Rejection Email Generator

## Description
An AI tool designed to generate kind yet firm job rejection emails.

## Context
Sending respectful and empathetic job rejection emails is crucial for maintaining a positive employer brand. This prompt helps in generating job rejection emails that convey appreciation while delivering the rejection message.

## Instructions
1. **Company Name**: Enter the name of your company.
2. **Role**: Specify the role for which the candidate is being rejected.

## Examples

### Input
**Company Name**: ABC Company
**Role**: Full Stack Developer

### Output
#### Generated Job Rejection Email

**Subject**: Job Application Update: Full Stack Developer Position at ABC Company

Dear [Candidate's Name],

Thank you for taking the time to interview with us for the Full Stack Developer position at ABC Company. We truly appreciate your interest in our company and the effort you put into the interview process.

After careful consideration, we have decided to move forward with another candidate whose skills and experience closely match our requirements for this role. This decision was a difficult one, as we were impressed with your qualifications and enthusiasm.

We encourage you to keep an eye on our career page for future opportunities that may align more closely with your background and career goals.

Thank you once again for considering a career with ABC Company. We wish you all the best in your job search and future endeavors.

Best regards,

[Your Name]
[Your Position]
ABC Company

## Parameters
- **Company Name**: (e.g., ABC Company)
- **Role**: (e.g., Full Stack Developer, Marketing Manager)

## Output Format
The output will be a professionally crafted job rejection email that communicates appreciation and respect while delivering the rejection message kindly and clearly.

## Notes
- Customize the email content to reflect your company's tone and values.
- Ensure the email is empathetic and acknowledges the candidate's efforts during the interview process.
- Review and edit the generated email as needed to maintain a positive candidate experience and uphold your employer brand.
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
    prompt: `# Structured Prompt for Concept Simplifier

## Title
Concept Simplifier

## Description
This tool simplifies complex topics to make them easy to understand for everyone, from kids to experts, by explaining things in a way that's just right for them.

## Context
Explaining complex concepts in simple terms is essential for effective education and learning. This prompt helps in generating explanations tailored to different difficulty levels, ensuring clarity and understanding.

## Instructions
1. **Concept or Topic**: Enter the complex concept or topic you would like explained (e.g., Quantum Physics, Machine Learning).
2. **Explanation Style**: Select the difficulty level that matches the audience's understanding (Beginner, Intermediate, Advanced, Expert).

## Examples

### Input
**Concept or Topic**: Machine Learning
**Explanation Style**: Intermediate

### Output
#### Simplified Explanation

**Concept**: Machine Learning

**Difficulty Level**: Intermediate

Machine Learning is a branch of artificial intelligence that involves teaching machines to learn from data and make decisions. At the intermediate level, we focus on understanding algorithms like regression, decision trees, and neural networks. These algorithms help computers learn patterns from data and make predictions or decisions without being explicitly programmed.

## Parameters
- **Concept or Topic**: (e.g., Quantum Physics, Machine Learning)
- **Explanation Style**: (Select from Beginner, Intermediate, Advanced, Expert)

## Output Format
The output will be a simplified explanation of the concept or topic chosen, tailored to the selected difficulty level (Beginner, Intermediate, Advanced, Expert).

## Notes
- Customize the explanation to match the complexity appropriate for the selected difficulty level.
- Ensure clarity and coherence in the explanation to facilitate understanding for the intended audience.
- Review and adjust the generated explanation as needed to ensure accuracy and educational value.
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
    prompt: `# Structured Prompt for FAQ Generator

## Title
FAQ Generator

## Description
This tool efficiently guides you in creating tailored FAQs, ensuring your questions and answers are directly relevant and clearly structured for any specific topic and context.

## Context
Creating FAQs that are tailored to specific topics and contexts is essential for providing clear and useful information to users. This prompt helps in generating FAQs that address common queries and provide informative answers.

## Instructions
1. **Main Topic or Subject**: Specify the main topic or subject for which you want to create FAQs (e.g., Online Payment Methods, Using a Mobile Banking App).
2. **Usage Context**: Specify where these FAQs will be used (e.g., E-commerce website, Banking App help section).

## Examples

### Input
**Main Topic or Subject**: Online Payment Methods
**Usage Context**: E-commerce website

### Output
#### Generated FAQs

**Main Topic or Subject**: Online Payment Methods
**Usage Context**: E-commerce website

**FAQs**:
1. **Q:** What payment methods are accepted on our e-commerce platform?
   **A:** We accept Visa, MasterCard, American Express, PayPal, and Apple Pay.

2. **Q:** How secure are online transactions on our platform?
   **A:** We use industry-standard encryption and security protocols to ensure your transactions are safe and secure.

3. **Q:** How can I update my payment information?
   **A:** You can update your payment information by logging into your account and navigating to the payment settings section.

## Parameters
- **Main Topic or Subject**: (e.g., Online Payment Methods, Using a Mobile Banking App)
- **Usage Context**: (e.g., E-commerce website, Banking App help section)

## Output Format
The output will be a set of tailored FAQs structured around the specified main topic or subject and usage context.

## Notes
- Ensure that the FAQs are relevant and address common queries related to the specified topic.
- Structure the FAQs in a clear and easy-to-navigate format for users.
- Review and update the generated FAQs based on user feedback and evolving needs.
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
  // Text Rewriter Tool
  {
    title: "Text Rewriter Tool",
    desc: "An AI tool that rewrites text to improve clarity and coherence.",
    category: "Text Rewriting",
    icon: "text-rewriter-icon.png",
    prompt: `# Structured Prompt for Text Rewriter Tool

## Title
Text Rewriter Tool

## Description
An AI tool that rewrites text to improve clarity and coherence.

## Context
Enhancing the clarity and coherence of text is essential for effective communication across various tones and styles. This prompt helps in rewriting provided sentences to align with specific tones, ensuring the text meets desired communication objectives.

## Instructions
1. **Text to Rewrite**: Paste or enter the text that you want to be rewritten for improved clarity and coherence.
2. **Tone**: Select the tone or style for the rewritten text from the following options: Professional, Friendly, Casual, Formal, Humorous, Academic, Technical.

## Examples

### Input
**Text to Rewrite**: "The company's new strategy aims to leverage emerging technologies for enhanced market penetration."
**Tone**: Professional

### Output
#### Rewritten Text

**Text to Rewrite**: "The company's latest strategy focuses on using cutting-edge technologies to expand its market presence."

## Parameters
- **Text to Rewrite**: (Paste or enter the text to be rewritten)
- **Tone**: (Select one of the available tones)

## Output Format
The output will be a rewritten version of the provided text, adjusted to match the selected tone or style.

## Notes
- Review the rewritten text to ensure it maintains clarity and coherence while aligning with the chosen tone.
- Adjust the rewriting process based on specific audience preferences or communication requirements.
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
