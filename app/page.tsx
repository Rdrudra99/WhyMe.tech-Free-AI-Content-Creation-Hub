import HeroFormCenterAlignedWithAForm from '@/components/ContactSection'
import FeatureSection from '@/components/FeatureSection'
import AnimatedShinyText from '@/components/magicui/animated-shiny-text'
import PricingSectionCards from '@/components/PricingSection'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowRightIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { auth } from "@clerk/nextjs/server";
import { ModeToggle } from '@/components/ModeToggle'
import { IconSignature } from '@tabler/icons-react'


const page = () => {
  const { userId } = auth();
  return (
    <main className='w-full h-full'>
      {/* nav bar */}
      <nav className="max-w-7xl  fixed top-4 mx-auto inset-x-0 z-50 w-[95%] lg:w-full" >
        <div className="lg:block w-full">
          <div className="w-full flex relative justify-between md:px-4 py-2 rounded-full bg-white dark:bg-background transition duration-200">
            <div className="flex flex-row gap-2 items-center">
              <Link href="/" className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-black dark:text-white">
                <IconSignature size={30} />
                <span className='font-bold tracking-widest'>
                  Why Me
                </span>
              </Link>
            </div>
            {
              userId ? (
                <div className='flex space-x-2'>
                  <Button asChild variant={"link"} size={"sm"} className=''>
                    <Link
                      href="/dashboard"
                    >
                      Dashboard
                    </Link>
                  </Button>
                  <ModeToggle />
                </div>
              ) : (
                <div className="flex space-x-2 items-center">
                  <Link className="relative z-10 bg-transparent hover:bg-gray-100 border border-transparent text-black text-sm md:text-sm transition font-medium duration-200 rounded-full px-4 py-2 flex items-center justify-center dark:text-white dark:hover:bg-neutral-800 dark:hover:shadow-xl" href="/sign-in">Login</Link>
                  <Link className="bg-neutral-900 relative z-10 hover:bg-black/90 border border-transparent text-white text-sm md:text-sm transition font-medium duration-200 rounded-full px-4 py-2 flex items-center justify-center shadow-[0px_-1px_0px_0px_#FFFFFF40_inset,_0px_1px_0px_0px_#FFFFFF40_inset]" href="/sign-up">Sign Up</Link>
                </div>
              )
            }
          </div>
        </div>
      </nav>
      {/* hero section */}
      <div className='max-w-7xl mx-auto px-4 flex min-h-fit flex-col items-center justify-between pt-10 lg:pt-5'>
        <div className='flex flex-col  pt-20 md:pt-40 relative overflow-hidden'>
          {/* hero section button */}
          <div className="flex justify-center" >
            <div
              className={cn(
                "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
              )}
            >
              <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                <span>✨ Introducing Why Me</span>
                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </AnimatedShinyText>
            </div>
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-8xl font-semibold max-w-6xl mx-auto text-center mt-6 relative z-10">
            <span>WhyMe Because Every Word Matters</span>
          </h1>
          <p className="text-center text-gray-500 mt-6 text-base md:text-xl text-dark dark:text-muted-dark max-w-3xl mx-auto relative z-10">
            <span>Why Me delivers precise, engaging content for e-commerce, blogs, and SEO, making every word count with our AI-powered solutions..</span>
          </p>
          {/* get stated and contact button */}
          <div className="flex items-center gap-4 justify-center mt-6 relative z-10">
            <Link href={`/sign-up`}>
              <Button className="bg-neutral-900 relative  z-10 hover:bg-black/90 border border-transparent text-white text-sm" >
                Get started
              </Button>
            </Link>
            <Button variant={"outline"} className='' >
              Contact us
            </Button>
          </div>
          {/* hero image section */}
          <div className="p-4 border border-neutral-200 bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 rounded-[32px] mt-20 relative">
            <div className="absolute inset-x-0 bottom-0 h-40 w-full bg-gradient-to-b from-transparent via-white to-white dark:via-black/50 dark:to-black scale-[1.1] pointer-events-none">
            </div>
            <div className="p-2 bg-white dark:bg-black dark:border-neutral-700 border border-neutral-200 rounded-[24px]">
              <Image src={"/hero.png"} alt="header" loading="lazy" width="1920" height="1080" decoding="async" data-nimg="1" className="rounded-[20px]" />
            </div>
          </div>
        </div>
      </div>
      {/* <div className='container mx-auto overflow-hidden'>
        <MarqueeDemo />
      </div> */}
      <div className='max-w-7xl mx-auto overflow-hidden '>
        <PricingSectionCards />
      </div>
      <div className='max-w-7xl mx-auto overflow-hidden '>
        <HeroFormCenterAlignedWithAForm />
      </div>
      <div className='max-w-7xl mx-auto overflow-hidden '>
        <FeatureSection />
      </div>
      {/* footer section */}
      <div className="relative">
        <div className="border-t border-neutral-100  dark:border-neutral-800 px-8 pt-20 pb-32 relative ">
          <div className="max-w-7xl mx-auto text-sm text-neutral-500 dark:text-neutral-400 flex sm:flex-row flex-col justify-between items-start "><div>
            <div className="mr-4  md:flex mb-4">
              <Link className="font-normal flex space-x-2 items-center text-sm mr-4  text-black px-2 py-1  relative z-20" href="/">
                <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm">
                </div>
                <span className="font-medium text-black dark:text-white">Why Me</span>
              </Link>
            </div>
            <div>Copyright © 2024 Why Me</div>
            <div className="mt-2">All rights reserved</div>
          </div>
            <div className="grid grid-cols-3 gap-10 items-start mt-10 md:mt-0">
              <div className="flex justify-center space-y-4 flex-col mt-4">
                <Link className="transition-colors hover:text-black text-dark dark:text-muted-dark dark:hover:text-neutral-400 text-xs sm:text-sm" href="/">Pricing</Link>
                <Link className="transition-colors hover:text-black text-dark dark:text-muted-dark dark:hover:text-neutral-400 text-xs sm:text-sm" href="/">Blog</Link><a className="transition-colors hover:text-black text-dark dark:text-muted-dark dark:hover:text-neutral-400 text-xs sm:text-sm" href="/contact">Contact</a>
              </div>
              <div className="flex justify-center space-y-4 flex-col mt-4">
                <Link className="transition-colors hover:text-black text-dark dark:text-muted-dark dark:hover:text-neutral-400 text-xs sm:text-sm" href="#">Privacy Policy</Link>
                <Link className="transition-colors hover:text-black text-dark dark:text-muted-dark dark:hover:text-neutral-400 text-xs sm:text-sm" href="#">Terms of Service</Link>
                <Link className="transition-colors hover:text-black text-dark dark:text-muted-dark dark:hover:text-neutral-400 text-xs sm:text-sm" href="#">Refund Policy</Link>
              </div>
              <div className="flex justify-center space-y-4 flex-col mt-4">
                <Link className="transition-colors hover:text-black text-dark dark:text-muted-dark dark:hover:text-neutral-400 text-xs sm:text-sm" href="#">Twitter</Link>
                <Link className="transition-colors hover:text-black text-dark dark:text-muted-dark dark:hover:text-neutral-400 text-xs sm:text-sm" href="https://linkedin.com/in/rdrudra99">LinkedIn</Link>
                <Link className="transition-colors hover:text-black text-dark dark:text-muted-dark dark:hover:text-neutral-400 text-xs sm:text-sm" href="https://github.com/Rdrudra99">GitHub</Link>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center text-5xl md:text-9xl lg:text-[18rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 dark:from-neutral-950 to-neutral-200 dark:to-neutral-800 inset-x-0">WHY ME</p>
      </div>
    </main>
  )
}
export default page