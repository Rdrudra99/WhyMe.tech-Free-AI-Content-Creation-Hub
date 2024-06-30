import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/ThemeProvider";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "@/components/ui/toaster"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Only Content",
  description:
    "Only Content is a modern, fast, and lightweight content Generator tool website that helps you generate content for your website, blog, or social media.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <body
          className={cn(
            "h-screen bg-background font-sans antialiased overflow-y-auto",
            fontSans.variable
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            disableTransitionOnChange
          >
            <NextTopLoader color="#2299DD" showSpinner={false} speed={400}/>
            {children}
          </ThemeProvider>
          <Toaster />
        </body>
      </html>
  );
}
