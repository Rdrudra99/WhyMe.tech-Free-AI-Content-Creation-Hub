import { IconSignature } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full px-8 py-4">
      <div
        className="relative mx-auto flex flex-row justify-center rounded-full border p-2 shadow-sm backdrop-blur transition-colors lg:w-fit bg-background/80"
        style={{
          opacity: 1,
          willChange: "auto",
          transform: "none",
        }}
      >
        <nav
          aria-label="Main"
          data-orientation="horizontal"
          dir="ltr"
          className="relative z-10 max-w-max flex-1 items-center justify-center hidden lg:block"
        >
          <div
            style={{
              position: "relative",
            }}
          >
            <ul
              data-orientation="horizontal"
              className="group flex flex-1 list-none items-center justify-center space-x-1"
              dir="ltr"
            >
              <li>
                <Link
                  title="brand-logo"
                  href="/"
                  className="hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-primary/10 data-[state=open]:bg-primary/10 group inline-flex h-10 w-max items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  data-radix-collection-item=""
                >
                  <IconSignature size={30} />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-primary/10 data-[state=open]:bg-primary/10 group inline-flex h-10 w-max items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  data-radix-collection-item=""
                >
                  Articles
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-primary/10 data-[state=open]:bg-primary/10 group inline-flex h-10 w-max items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  data-radix-collection-item=""
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-primary/10 data-[state=open]:bg-primary/10 group inline-flex h-10 w-max items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  data-radix-collection-item=""
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-primary/10 data-[state=open]:bg-primary/10 group inline-flex h-10 w-max items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  data-radix-collection-item=""
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-primary/10 data-[state=open]:bg-primary/10 group inline-flex h-10 w-max items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  data-radix-collection-item=""
                >
                  Tech Stack
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-primary/10 data-[state=open]:bg-primary/10 group inline-flex h-10 w-max items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  data-radix-collection-item=""
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="absolute left-0 top-full flex justify-center"></div>
        </nav>
        <div className="hidden lg:block">
          <Link
            aria-label="Visit Home"
            className="ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 font-semibold drop-shadow-[0_4px_2px_-3px_hsla(0,0%,0%,0.25)] relative overflow-hidden transition-colors duration-300 ml-3 rounded-full shadow-none bg-black text-white hover:bg-black/80"
            href="/dashboard"
          >
            <span className="relative z-10">Get Started</span>
            <div className=" absolute inset-0 bg-gradient-to-t from-[hsla(0,0%,100%,0)] from-50% to-[hsla(0,0%,100%,0.1)] to-50% opacity-50 "></div>
          </Link>
        </div>
        <div className="flex w-full flex-1 flex-row items-center justify-between px-2 lg:px-4 lg:hidden">
          <Link
            href="/"
            title="brand-logo"
            className="relative mr-6 flex items-center space-x-2"
          >
            <IconSignature size={30} />
          </Link>
          <Link
            aria-label="Visit Home"
            className="ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 font-semibold drop-shadow-[0_4px_2px_-3px_hsla(0,0%,0%,0.25)] relative overflow-hidden transition-colors duration-300 ml-3 rounded-full shadow-none bg-black text-white hover:bg-black/80"
            href="/dashboard"
          >
            <span className="relative z-10">Get Started</span>
            <div className=" absolute inset-0 bg-gradient-to-t from-[hsla(0,0%,100%,0)] from-50% to-[hsla(0,0%,100%,0.1)] to-50% opacity-50 "></div>
          </Link>
        </div>
        <div
          className="absolute inset-0 my-1.5 rounded-full bg-secondary"
          style={{
            left: "8px",
            width: "0px",
            opacity: 0,
            willChange: "auto",
          }}
        ></div>
      </div>
    </header>
  );
};

export default Header;
