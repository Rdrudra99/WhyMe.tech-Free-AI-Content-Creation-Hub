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
          href: "/dashboard/ct/generate-product-description",
          items: [],
        },
        {
          title: "SEO Product Title Optimizer",
          href: "/dashboard/ct/seo-product-title-optimizer",
          items: [],
          label: "new",
        },
        {
          title: "Tagline Generator",
          href: "/dashboard/ct/generate-tagline",
          items: [],
        },
        {
          title: "Amazon Product Description",
          href: "/dashboard/ct/generate-amazon-description",
          items: [],
        },
        {
          title: "Product Comparisons",
          href: "/dashboard/ct/compare-products",
          items: [],
        },
        {
          title: "Thank You Note Generator",
          href: "/dashboard/ct/generate-thank-you-note",
          items: [],
        },
        {
          title: "Refund/Return/Exchange Response Email",
          href: "/dashboard/ct/generate-return-response-email",
          items: [],
        },
      ],
    },
    {
      title: "Blog",
      items: [
        {
          title: "Blog Title Generator",
          href: "/dashboard/ct/generate-blog-title",
          items: [],
        },
        {
          title: "Quick 1-Click Blog Post",
          href: "/dashboard/ct/generate-blog-post",
          items: [],
        },
        {
          title: "Rewrite Article with Keywords",
          href: "/dashboard/ct/rewrite-article-with-keywords",
          items: [],
        },
        {
          title: "Human Written Blog Post",
          href: "/dashboard/ct/generate-human-blog-post",
          items: [],
        },
      ],
    },
    {
      title: "Development",
      items: [
        {
          title: "Code Generator",
          href: "/dashboard/ct/generate-code",
          items: [],
        },
      ],
    },
    {
      title: "SEO",
      items: [
        {
          title: "Meta Title and Description",
          href: "/dashboard/ct/generate-meta-title-description",
          items: [],
        },
        {
          title: "Clickbait Title Generator",
          href: "/dashboard/ct/clickbait-title-generator",
          items: [],
        },
      ],
    },
    {
      title: "HR Tools",
      items: [
        {
          title: "Job Description Generator",
          href: "/dashboard/ct/generate-job-description",
          items: [],
        },
        {
          title: "Interview Scheduling Email Generator",
          href: "/dashboard/ct/generate-interview-email",
          items: [],
        },
        {
          title: "Job Rejection Email Generator",
          href: "/dashboard/ct/generate-job-rejection-email",
          items: [],
        },
        {
          title: "Relieving Letter Generator",
          href: "/dashboard/ct/generate-relieving-letter",
          items: [],
        },
      ],
    },
    {
      title: "Education",
      items: [
        {
          title: "Concept Simplifier",
          href: "/dashboard/ct/generate-concept-simplifier",
          items: [],
        },
        {
          title: "Reading Passage Generator",
          href: "/dashboard/ct/generate-reading-passage",
          items: [],
        },
      ],
    },
    {
      title: "Support",
      items: [
        {
          title: "FAQ Generator",
          href: "/dashboard/ct/generate-faqs",
          items: [],
        },
      ],
    },
    {
      title: "Text Rewriting",
      items: [
        {
          title: "Text Rewriter Tool",
          href: "/dashboard/ct/text-rewriter",
          items: [],
          label: "new",
        },
      ],
    },
  ],
};
