import { MainNavItem, SidebarNavItem } from "@/types";
import { CombineIcon, FileTextIcon, StarIcon, Loader, BookOpenIcon, BriefcaseIcon } from "lucide-react"; // Lucide React Icons


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
          icon: FileTextIcon,
          items: [],
        },
        {
          title: "SEO Product Title Enhancer",
          href: "/dashboard/seo-product-title-optimizer",
          description: "Optimize product titles to improve search engine visibility and click-through rates.",
          icon: StarIcon,
          items: [],
        },
        {
          title: "Tagline Maker",
          href: "/dashboard/generate-tagline",
          description: "Create catchy taglines and slogans for your products or campaigns.",
          icon: CombineIcon,
          items: [],
        },
        {
          title: "Amazon Description Writer",
          href: "/dashboard/generate-amazon-description",
          description: "Craft effective product descriptions specifically tailored for Amazon.",
          icon: FileTextIcon,
          items: [],
        },
        {
          title: "Product Compare",
          href: "/dashboard/compare-products",
          description: "Compare multiple products side by side to aid in decision-making.",
          icon: StarIcon,
          items: [],
        },
        {
          title: "Thank You Note Maker",
          href: "/dashboard/generate-thank-you-note",
          description: "Automatically generate personalized thank you notes for customer interactions.",
          icon: BookOpenIcon,
          items: [],
        },
        {
          title: "Return/Exchange Email Generator",
          href: "/dashboard/generate-return-response-email",
          description: "Generate professional responses for refund, return, or exchange requests.",
          icon: BriefcaseIcon,
          items: [],
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
          icon: StarIcon,
          items: [],
        },
        {
          title: "One-Click Blog Post",
          href: "/dashboard/generate-blog-post",
          description: "Create fully-formed blog posts with a single click for rapid content creation.",
          icon: BookOpenIcon,
          items: [],
        },
        {
          title: "Keyword Article Rewriter",
          href: "/dashboard/rewrite-article-with-keywords",
          description: "Effortlessly rewrite articles incorporating targeted keywords for SEO.",
          icon: CombineIcon,
          items: [],
        },
        {
          title: "Human-Like Blog Post",
          href: "/dashboard/generate-human-blog-post",
          description: "Request and receive professionally written blog posts from human writers.",
          icon: BookOpenIcon,
          items: [],
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
          icon: FileTextIcon,
          items: [],
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
          icon: StarIcon,
          items: [],
        },
        {
          title: "Clickbait Title Generator",
          href: "/dashboard/clickbait-title-generator",
          description: "Create attention-grabbing titles designed to increase click-through rates.",
          icon: StarIcon,
          items: [],
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
          icon: BriefcaseIcon,
          items: [],
        },
        {
          title: "Interview Scheduling Email Generator",
          href: "/dashboard/generate-interview-email",
          description: "Automatically generate emails to schedule interviews with candidates.",
          icon: FileTextIcon,
          items: [],
        },
        {
          title: "Job Rejection Email Generator",
          href: "/dashboard/generate-job-rejection-email",
          description: "Generate professional and respectful emails to decline job applicants.",
          icon: FileTextIcon,
          items: [],
        },
        {
          title: "Relieving Letter Maker",
          href: "/dashboard/generate-relieving-letter",
          description: "Create official relieving letters for employees leaving your organization.",
          icon: FileTextIcon,
          items: [],
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
          icon: BookOpenIcon,
          items: [],
        },
        {
          title: "Reading Passage Creator",
          href: "/dashboard/generate-reading-passage",
          description: "Generate reading passages or excerpts for educational purposes.",
          icon: BookOpenIcon,
          items: [],
        },
      ],
    },
    {
      title: "Support",
      items: [
        {
          title: "FAQ Creator",
          href: "/dashboard/generate-faqs",
          description: "Quickly generate frequently asked questions (FAQs) for your products or services.",
          icon: BookOpenIcon,
          items: [],
        },
      ],
    },
    {
      title: "Text Rewriting",
      items: [
        {
          title: "Text Rewriter Tool",
          href: "/dashboard/text-rewriter",
          description: "Effortlessly rewrite and paraphrase text while maintaining original meaning.",
          icon: CombineIcon,
          items: [],
        },
      ],
    },
  ],
};
