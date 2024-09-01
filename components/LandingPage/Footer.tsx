import React from 'react'
import Link from 'next/link'
import { IconSignature } from '@tabler/icons-react'
const Footer = () => {
  return (
    <div className="relative">
    <div className="border-t border-neutral-100  dark:border-neutral-800 px-8 pt-20 pb-32 relative ">
      <div className="max-w-7xl mx-auto text-sm text-neutral-500 dark:text-neutral-400 flex sm:flex-row flex-col justify-between items-start ">
        <div>
          <div className="mr-4  md:flex mb-4">
            <Link
              className="font-normal flex space-x-2 items-center text-sm mr-4  text-black px-2 py-1  relative z-20"
              href="/"
            >
            <IconSignature size={30} />
              <span className="font-medium text-black dark:text-white">
                Why Me
              </span>
            </Link>
          </div>
          <div>Copyright © 2024 Why Me</div>
          <div className="mt-2">All rights reserved</div>
        </div>
        <div className="grid grid-cols-3 gap-10 items-start mt-10 md:mt-0">
          <div className="flex justify-center space-y-4 flex-col mt-4">
            <Link
              className="transition-colors hover:text-black text-dark dark:text-muted-dark dark:hover:text-neutral-400 text-xs sm:text-sm"
              href="/"
            >
              Pricing
            </Link>
            <Link
              className="transition-colors hover:text-black text-dark dark:text-muted-dark dark:hover:text-neutral-400 text-xs sm:text-sm"
              href="/"
            >
              Blog
            </Link>
            <a
              className="transition-colors hover:text-black text-dark dark:text-muted-dark dark:hover:text-neutral-400 text-xs sm:text-sm"
              href="/contact"
            >
              Contact
            </a>
          </div>
          <div className="flex justify-center space-y-4 flex-col mt-4">
            <Link
              className="transition-colors hover:text-black text-dark dark:text-muted-dark dark:hover:text-neutral-400 text-xs sm:text-sm"
              href="#"
            >
              Privacy Policy
            </Link>
            <Link
              className="transition-colors hover:text-black text-dark dark:text-muted-dark dark:hover:text-neutral-400 text-xs sm:text-sm"
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              className="transition-colors hover:text-black text-dark dark:text-muted-dark dark:hover:text-neutral-400 text-xs sm:text-sm"
              href="#"
            >
              Refund Policy
            </Link>
          </div>
          <div className="flex justify-center space-y-4 flex-col mt-4">
            <Link
              className="transition-colors hover:text-black text-dark dark:text-muted-dark dark:hover:text-neutral-400 text-xs sm:text-sm"
              href="#"
            >
              Twitter
            </Link>
            <Link
              className="transition-colors hover:text-black text-dark dark:text-muted-dark dark:hover:text-neutral-400 text-xs sm:text-sm"
              href="https://linkedin.com/in/rdrudra99"
            >
              LinkedIn
            </Link>
            <Link
              className="transition-colors hover:text-black text-dark dark:text-muted-dark dark:hover:text-neutral-400 text-xs sm:text-sm"
              href="https://github.com/Rdrudra99"
            >
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </div>
    <p className="text-center text-5xl md:text-9xl lg:text-[18rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 dark:from-neutral-950 to-neutral-200 dark:to-neutral-800 inset-x-0">
      WHY ME
    </p>
  </div>
  )
}

export default Footer