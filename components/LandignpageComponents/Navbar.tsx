import { ArrowLeftRight, GitBranch, Github } from "lucide-react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <header className="supports-backdrop-blur:bg-background/90 sticky top-0 z-40 w-full bg-background/40 backdrop-blur-lg">
        <div className="container flex h-16 items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <Github className="w-6 h-6" />
              <span className="hidden font-bold md:inline-block">
                
              </span>
            </Link>
          </div>

          <div className="flex flex-1 items-center justify-between gap-2 md:justify-end">
            <nav className="flex items-center gap-2">
              <Link
                className="inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 h-8 rounded-md text-xs px-4"
                href="/sign-in"
              >
                Login
              </Link>
              <Link
                className="items-center justify-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-8 px-3 hidden whitespace-pre md:flex group relative w-full gap-1 overflow-hidden text-sm font-semibold tracking-tighter transform-gpu rounded-sm ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2"
                href="/sign-up"
              >
                <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-24 dark:bg-black"></span>
                Get Started{" "}
                <ArrowLeftRight className="w-4 h-4 transform-gpu group-hover:translate-x-2 transition-transform duration-300 ease-out" />
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative h-full overflow-hidden py-14">
          <div className="container z-10 flex flex-col">
            <div className="mt-20 grid grid-cols-1">
              <div className="flex flex-col items-center gap-6 pb-8 text-center">
                <div>
                  <a href="/docs/templates/portfolio">
                    <div className="group relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-2xl bg-white/40 px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#8fdfff1f] backdrop-blur-sm transition-shadow duration-500 ease-out [--bg-size:300%] hover:shadow-[inset_0_-5px_10px_#8fdfff3f] dark:bg-black/40">
                      <div className="absolute inset-0 block h-full w-full animate-gradient bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:var(--bg-size)_100%] p-[1px] ![mask-composite:subtract] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]"></div>
                      <div className="absolute inset-0 block h-full w-full animate-gradient bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:var(--bg-size)_100%] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] p-[1px] ![mask-composite:subtract]"></div>
                      🎉
                      <div
                        data-orientation="vertical"
                        role="none"
                        className="shrink-0 bg-border w-[1px] mx-2 h-4"
                      ></div>
                      <span className="animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent inline">
                        Introducing \Portfolio Template
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="ml-1 h-4 w-4 text-gray-500"
                      >
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </div>
                  </a>
                </div>
                <h1 className="text-balance bg-gradient-to-br from-black from-30% to-black/60 bg-clip-text py-6 text-5xl font-semibold leading-none tracking-tighter text-transparent dark:from-white dark:to-white/40 sm:text-6xl md:text-7xl lg:text-7xl">
                  Kya Re Rudra 
                </h1>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Navbar;
