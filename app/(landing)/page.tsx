import {
  ArrowRightIcon,
  WheatOff,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import MarqueeDemo from "@/components/LandingPageComponent/Marque";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import { auth } from "@clerk/nextjs/server";

export default async function FloatingNavDemo() {

  const { userId } = auth();
  
  return (
    <div className="relative  w-full ">
      <nav className="max-w-7xl  fixed top-4  mx-auto inset-x-0 z-50 w-[95%] lg:w-full">
        <div className="block w-full">
          <div className="w-full flex relative justify-between px-4 py-2 rounded-full bg-transparent transition duration-200">
            <div className="flex flex-row gap-2 items-center">
              <Link
                className="font-normal flex space-x-2 items-center text-sm mr-4  text-black px-2 py-1  relative z-20"
                href="/"
              >
                <WheatOff strokeWidth={3} className="text-primary dark:text-white" />
                <span className="font-medium text-primary dark:text-white">
                  Vyākhyā AI
                </span>
              </Link>
            </div>
              {
                userId ? (
                  <Link
                    className="font-normal flex space-x-2 items-center text-sm mr-4  text-black px-2 py-1  relative z-20"
                    href="/dashboard"
                  >
                    <span className="font-medium text-primary dark:text-white">
                      Dashboard
                    </span>
                  </Link>
                ) : (
                  <div className="flex space-x-2 items-center">
                  <Link href="/sign-in" className="relative z-10 bg-transparent hover:bg-gray-100 border border-transparent text-black text-sm md:text-sm transition font-medium duration-200 rounded-full px-4 py-2 flex items-center justify-center dark:text-white dark:hover:bg-neutral-800 dark:hover:shadow-xl">
                    Sign in
                  </Link>
                  <Link href="/sign-up" className="bg-primary relative z-10 hover:bg-black/90 border border-transparent text-white text-sm md:text-sm transition font-medium duration-200 rounded-full px-4 py-2 flex items-center justify-center shadow-[0px_-1px_0px_0px_#FFFFFF40_inset,_0px_1px_0px_0px_#FFFFFF40_inset]">
                    Sign up
                  </Link>
                </div>
                ) 
              }
          </div>
        </div>
      </nav>
      <section className="max-w-7xl mx-auto px-4 flex h-full  flex-col items-center justify-between">
        <div className="flex flex-col h-full  pt-20 md:pt-40 relative overflow-hidden">
          <div className="flex justify-center">
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <span>✨ Introducing Vyākhyā AI</span>
              <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>
          </div>
          <h1 className="text-3xl font-bold md:text-4xl lg:text-8xl  max-w-6xl mx-auto text-center mt-6 relative z-10 text-black dark:text-white">
            Powerful <span className="text-primary">Vyākhyā AI</span>
          </h1>
          <p className="text-center mt-6 text-base md:text-xl text-dark dark:text-muted-dark max-w-3xl mx-auto relative z-10">
            <span>
              Vyākhyā AI helps you effortlessly create high-quality content for
              blogs, ecommerce, scripts, and more. Experience the future of
              content creation with our advanced AI tools.
            </span>
          </p>
          <Link
            className="flex items-center gap-4 justify-center mt-6"
            href="/dashboard"
          >
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-primary text-white dark:text-white flex items-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRightIcon className="w-4 h-4"/>
            </HoverBorderGradient>
          </Link>
        </div>
      </section>
      <section className="w-full h-full container mx-auto">
        <MarqueeDemo />
      </section>
    </div>
  );
}
