import { MainNavItem, SidebarNavItem } from "@/types";

interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Dashboard",
      href: "/dashboard",
    },
  ],
  sidebarNav: [
    {
      title: "Ecommerce",
      items: [
        {
          title: "Product Description Generator",
          href: "/dashboard/generate-product-description",
          description: "Generate compelling descriptions for your products to attract customers.",
          items : []
        },
        {
          title: "SEO Product Title Optimizer",
          href: "/dashboard/seo-product-title-optimizer",
          label: "new",
          description: "Optimize product titles to improve search engine visibility and click-through rates.",
          items : []
        },
        {
          title: "Tagline Generator",
          href: "/dashboard/generate-tagline",
          description: "Create catchy taglines and slogans for your products or campaigns.",
          items : []
        },
        {
          title: "Amazon Product Description",
          href: "/dashboard/generate-amazon-description",
          description: "Craft effective product descriptions specifically tailored for Amazon.",
          items : []
        },
        {
          title: "Product Comparisons",
          href: "/dashboard/compare-products",
          description: "Compare multiple products side by side to aid in decision-making.",
          items : []
        },
        {
          title: "Thank You Note Generator",
          href: "/dashboard/generate-thank-you-note",
          description: "Automatically generate personalized thank you notes for customer interactions.",
          items : []
        },
        {
          title: "Refund/Return/Exchange Response Email",
          href: "/dashboard/generate-return-response-email",
          description: "Generate professional responses for refund, return, or exchange requests.",
          items : []
        },
      ],
    },
    {
      title: "Blog",
      items: [
        {
          title: "Blog Title Generator",
          href: "/dashboard/generate-blog-title",
          description: "Generate engaging and SEO-friendly titles for your blog posts.",
          items : []
        },
        {
          title: "Quick 1-Click Blog Post",
          href: "/dashboard/generate-blog-post",
          description: "Create fully-formed blog posts with a single click for rapid content creation.",
          items : []
        },
        {
          title: "Rewrite Article with Keywords",
          href: "/dashboard/rewrite-article-with-keywords",
          description: "Effortlessly rewrite articles incorporating targeted keywords for SEO.",
          items : []
        },
        {
          title: "Human Written Blog Post",
          href: "/dashboard/generate-human-blog-post",
          description: "Request and receive professionally written blog posts from human writers.",
          items : []
        },
      ],
    },
    {
      title: "Development",
      items: [
        {
          title: "Code Generator",
          href: "/dashboard/generate-code",
          description: "Generate snippets of code for various programming languages and frameworks.",
          items : []
        },
      ],
    },
    {
      title: "SEO",
      items: [
        {
          title: "Meta Title and Description",
          href: "/dashboard/generate-meta-title-description",
          description: "Generate optimized meta titles and descriptions to enhance search engine visibility.",
          items : []
        },
        {
          title: "Clickbait Title Generator",
          href: "/dashboard/clickbait-title-generator",
          description: "Create attention-grabbing titles designed to increase click-through rates.",
          items : []
        },
      ],
    },
    {
      title: "HR Tools",
      items: [
        {
          title: "Job Description Generator",
          href: "/dashboard/generate-job-description",
          description: "Efficiently create detailed job descriptions tailored to your company's needs.",
          items : []
        },
        {
          title: "Interview Scheduling Email Generator",
          href: "/dashboard/generate-interview-email",
          description: "Automatically generate emails to schedule interviews with candidates.",
          items : []
        },
        {
          title: "Job Rejection Email Generator",
          href: "/dashboard/generate-job-rejection-email",
          description: "Generate professional and respectful emails to decline job applicants.",
          items : []
        },
        {
          title: "Relieving Letter Generator",
          href: "/dashboard/generate-relieving-letter",
          description: "Create official relieving letters for employees leaving your organization.",
          items : []
        },
      ],
    },
    {
      title: "Education",
      items: [
        {
          title: "Concept Simplifier",
          href: "/dashboard/generate-concept-simplifier",
          description: "Simplify complex concepts into easy-to-understand explanations or summaries.",
          items : []
        },
        {
          title: "Reading Passage Generator",
          href: "/dashboard/generate-reading-passage",
          description: "Generate reading passages or excerpts for educational purposes.",
          items : []
        },
      ],
    },
    {
      title: "Support",
      items: [
        {
          title: "FAQ Generator",
          href: "/dashboard/generate-faqs",
          description: "Quickly generate frequently asked questions (FAQs) for your products or services.",
          items : []
        },
      ],
    },
    {
      title: "Text Rewriting",
      items: [
        {
          title: "Text Rewriter Tool",
          href: "/dashboard/text-rewriter",
          label: "new",
          description: "Effortlessly rewrite and paraphrase text while maintaining original meaning.",
          items : []
        },
      ],
    },
  ],
};
