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
          label:"new"
        },
      ],
    },
  ],
};
