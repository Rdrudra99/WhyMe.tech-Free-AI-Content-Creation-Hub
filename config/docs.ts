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
          title: "Review Sentiment Analyzer",
          href: "/dashboard/ct/review-sentiment-analyzer",
          items: [],
        },
        {
          title: "Price Monitoring and Competitive Analysis",
          href: "/dashboard/ct/price-monitoring",
          items: [],
        },
        {
          title: "Personalized Product Recommendation Engine",
          href: "/dashboard/ct/product-recommendation-engine",
          items: [],
        },
        {
          title: "Inventory Management Assistant",
          href: "/dashboard/ct/inventory-management-assistant",
          items: [],
        },
        {
          title: "Customer Support Ticket Classifier",
          href: "/dashboard/ct/ticket-classifier",
          items: [],
        },
        {
          title: "Promotional Campaign Content Generator",
          href: "/dashboard/ct/promotional-campaign-generator",
          items: [],
        },
        {
          title: "Product Comparison Tool",
          href: "/dashboard/ct/product-comparison-tool",
          items: [],
        },
        {
          title: "Return and Refund Policy Generator",
          href: "/dashboard/ct/return-refund-policy-generator",
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
          title: "SEO Keywords Generator",
          href: "/dashboard/ct/generate-seo-keywords",
          items: [],
        },
      ],
    },
    {
      title: "Email Marketing",
      items: [
        {
          title: "Email Subject Line Generator",
          href: "/dashboard/ct/generate-email-subject",
          items: [],
        },
      ],
    },
    {
      title: "Social Media",
      items: [
        {
          title: "Social Media Post Ideas Generator",
          href: "/dashboard/ct/generate-social-post-ideas",
          items: [],
        },
      ],
    },
    {
      title: "Advertising",
      items: [
        {
          title: "Ad Copy Generator",
          href: "/dashboard/ct/generate-ad-copy",
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
