import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ClerkProvider} from '@clerk/nextjs'
import { DocsSidebarNav } from "@/components/sidebar-nav";
import { docsConfig } from "@/config/docs";
import { Space_Grotesk } from 'next/font/google'


const spaceGrotesk = Space_Grotesk({subsets: ["latin"], weight: ["300", "400", "500", "600",  "700"]})


export const metadata: Metadata = {
  title: "whyme • Rdrudra99",
  description:
    "whyme is a modern, fast, and lightweight content Generator tool website that helps you generate content for your website, blog, or social media.",
    keywords: [
      "whyme",
      "Why ME",
      "AI",
      "content generator",
      "content",
      "generator",
      "tool",
      "website",
      "blog",
      "social media",
      "modern",
    ],
    authors: [
      {
        name: "Rdrudra99",
        url: "https://rdrudra99.site",
      },
    ],
    creator: "Rdrudra99",
    openGraph: {
      type: "website",
      images: [
        {
          url: "https://i.ibb.co/m9RxLMd/20240701-194337-0000.png",
          width: 1200,
          height: 630,
          alt: "whyme",
        },
      ],
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
    appearance={{
      variables: {
          colorPrimary: 'hsl(0,0,0,0)', // change this value (you can get it from you're css variables, make sure to include 'hsl' and commas)
              },
          }}
>
      <html lang="en">
        <body
          className={cn(
            "relative flex text-foreground bg-background mx-auto min-h-screen w-full scroll-smooth antialiased",
            spaceGrotesk.className
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            disableTransitionOnChange>
              <Toaster />
            <main className="flex-1 overflow-hidden">{children}</main>
            <Analytics />
            <SpeedInsights />
          </ThemeProvider>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
