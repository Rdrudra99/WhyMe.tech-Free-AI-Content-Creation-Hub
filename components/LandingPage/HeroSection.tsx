import React from "react";
import AnimatedShinyText from "../magicui/animated-shiny-text";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
const HeroSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 flex min-h-fit flex-col items-center justify-between pt-10 lg:pt-20">
      <div className="flex relative items-start gap-6 md:gap-4">
        <div className="relative z-[1]">
          <div className="flex items-center w-full gap-3 justify-center">
            <div className="w-full block rte text-xl text-theme-text-primary dark:text-dark-body-primary">
              <h1 className="text-start mb-4 text-[32px] leading-[44px] md:text-[72px] md:leading-[88px]">
                Elevate and Streamline <br /> Your Content Strategy with
                Cutting-Edge AI-Powered Precision
              </h1>
            </div>
          </div>
          <div className="lg:whitespace-pre-wrap">
            <p className="last:mb-0 mb-0  text-muted-foreground text-lg">
              The most popular open-source platform for commerce. Use Medusa as
              your foundation and focus on building the customizations that move
              the needle.
            </p>
          </div>
        </div>
      </div>
      <div className="p-4 border border-neutral-200 bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 rounded-[32px] mt-20 relative">
        <div className="absolute inset-x-0 bottom-0 h-10 w-full bg-gradient-to-b from-transparent via-white to-white dark:via-black/50 dark:to-black scale-[1.1] pointer-events-none"></div>
        <p className="absolute  text-blue-600 -top-20 left-1/4  size-fit -translate-x-1/2 items-center justify-center object-contain lg:flex">
          Fill in the form
          <svg
            width="72"
            height="72"
            viewBox="0 0 72 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mt-5 size-14"
          >
            <path
              d="M15.9441 15.8748C19.7179 15.0705 23.7632 14.8586 27.5765 15.5585C36.0702 17.1174 42.6422 22.0592 46.8543 29.5804C50.5526 36.1843 52.4659 44.153 52.3442 51.7058C52.3153 53.4997 51.9273 55.4879 51.2695 57.1085"
              stroke="black"
              stroke-opacity="0.65"
              stroke-width="1.40169"
              stroke-linecap="round"
            ></path>
            <path
              d="M42.5383 48.4746L50.5848 57.731C50.8387 58.0231 51.2814 58.0541 51.5735 57.8002L61.3588 49.2939"
              stroke="black"
              stroke-opacity="0.65"
              stroke-width="1.40169"
              stroke-linecap="round"
            ></path>
          </svg>
        </p>
        <p className="absolute  text-blue-600 -bottom-20 right-1/4  size-fit -translate-x-1/2 items-center justify-center object-contain lg:flex">
          view the output
          <svg
            width="71"
            height="72"
            viewBox="0 0 71 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="-mt-5 size-14"
          >
            <path
              d="M15.2749 55.7165C19.0488 56.5207 23.094 56.7327 26.9073 56.0328C35.401 54.4739 41.973 49.5321 46.1851 42.0108C49.8834 35.407 51.7967 27.4383 51.675 19.8855C51.6461 18.0915 51.2581 16.1034 50.6003 14.4828"
              stroke="black"
              stroke-opacity="0.65"
              stroke-width="1.40169"
              stroke-linecap="round"
            ></path>
            <path
              d="M41.8691 23.1166L49.9156 13.8603C50.1695 13.5681 50.6122 13.5372 50.9043 13.7911L60.6896 22.2974"
              stroke="black"
              stroke-opacity="0.65"
              stroke-width="1.40169"
              stroke-linecap="round"
            ></path>
          </svg>
        </p>
        <p className="absolute text-blue-600 -bottom-20 -right-4/4  size-fit -translate-x-1/2 items-center justify-center object-contain lg:flex">
          Navigation
          <svg
            width="71"
            height="72"
            viewBox="0 0 71 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="-mt-5 size-14"
          >
            <path
              d="M15.2749 55.7165C19.0488 56.5207 23.094 56.7327 26.9073 56.0328C35.401 54.4739 41.973 49.5321 46.1851 42.0108C49.8834 35.407 51.7967 27.4383 51.675 19.8855C51.6461 18.0915 51.2581 16.1034 50.6003 14.4828"
              stroke="black"
              stroke-opacity="0.65"
              stroke-width="1.40169"
              stroke-linecap="round"
            ></path>
            <path
              d="M41.8691 23.1166L49.9156 13.8603C50.1695 13.5681 50.6122 13.5372 50.9043 13.7911L60.6896 22.2974"
              stroke="black"
              stroke-opacity="0.65"
              stroke-width="1.40169"
              stroke-linecap="round"
            ></path>
          </svg>
        </p>
        <div className="p-2 bg-white dark:bg-black dark:border-neutral-700 border border-neutral-200 rounded-[24px]">
          <Image
            src={"/hero.png"}
            alt="header"
            loading="lazy"
            width="1920"
            height="1080"
            decoding="async"
            data-nimg="1"
            className="rounded-[20px]"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
