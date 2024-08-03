import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/ThemeProvider";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ClerkProvider} from '@clerk/nextjs'
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Vyākhyā AI • Rdrudra99",
  description:
    "Vyākhyā AI is a modern, fast, and lightweight content Generator tool website that helps you generate content for your website, blog, or social media.",
    keywords: [
      "Vyākhyā AI",
      "Vyākhyā",
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
          alt: "Vyākhyā AI",
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
          colorPrimary: 'hsl(263.4, 70%, 50.4%)', // change this value (you can get it from you're css variables, make sure to include 'hsl' and commas)
              },
          }}
>
      <html lang="en">
        <body
          className={cn(
            "bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            disableTransitionOnChange
          >
            {/* <NextTopLoader color="#2299DD" showSpinner={false} speed={400} /> */}
            {children}
            <Analytics />
            <SpeedInsights />
          </ThemeProvider>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
