import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  ArrowDown,
  GitBranch,
  Home,
  Link2,
  MoveRight,
  Zap,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { redirect } from "next/navigation";

export default async function FloatingNavDemo() {


  const people = [
    {
      id: 1,
      name: "Rudra Narayan Boitei",
      designation: "Software Developer Exicutive",
      image:
        "https://media.licdn.com/dms/image/D5603AQHyTl9FBaQiaw/profile-displayphoto-shrink_800_800/0/1718244811587?e=1725494400&v=beta&t=eSxqNaULO3oIFqdAqb8tKSRwhKI6qWWFfNPi07Aca2Q",
    },
    {
      id: 2,
      name: "Pritesh Biswal",
      designation: "Software Developer Exicutive",
      image:
        "https://instagram.fbbi5-3.fna.fbcdn.net/v/t51.2885-15/409683750_388307436968111_7892502297624787248_n.jpg?stp=c0.248.640.640a_dst-jpg_e15_s150x150&_nc_ht=instagram.fbbi5-3.fna.fbcdn.net&_nc_cat=111&_nc_ohc=0uHZjidNRPkQ7kNvgGj31VU&edm=AGFyKLkBAAAA&ccb=7-5&oh=00_AYCnu9PQN8l9cU1x1g7DB01kbnUHVjEkI9b2Qn_bWrB_qw&oe=6686D7E1&_nc_sid=5a0a6d",
    },
    {
      id: 3,
      name: "Priyanshu Bej",
      designation: "Software Developer Exicutive",
      image:
        "https://instagram.fbbi5-3.fna.fbcdn.net/v/t51.2885-19/447034917_831788538828293_3255311599294477075_n.jpg?_nc_ht=instagram.fbbi5-3.fna.fbcdn.net&_nc_cat=105&_nc_ohc=nOwbLzunNHoQ7kNvgEVkpzJ&edm=AEhyXUkBAAAA&ccb=7-5&oh=00_AYCyGDH-ESXPL1SNjH08QS0Kj4fk6SJxUS1yNQsM_MuLLw&oe=6686F3D1&_nc_sid=8f1549",
    },
    {
      id: 4,
      name: "Deepak Pradhan",
      designation: "Software Developer Exicutive",
      image:
        "https://media.licdn.com/dms/image/D5603AQH25yBxgSdkTw/profile-displayphoto-shrink_800_800/0/1714365694678?e=1725494400&v=beta&t=rwb2-956FqPI752k6toUvl_HDJqD7Hzz-iH-bxUwT3A",
    },

  ];

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
                <Zap strokeWidth={3} className="text-black dark:text-white" />
                <span className="font-medium text-black dark:text-white">
                Vyākhyā AI
                </span>
              </Link>
            </div>
            <div className="flex space-x-2 items-center">
              <Link href="/sign-in" className="relative z-10 bg-transparent hover:bg-gray-100 border border-transparent text-black text-sm md:text-sm transition font-medium duration-200 rounded-full px-4 py-2 flex items-center justify-center dark:text-white dark:hover:bg-neutral-800 dark:hover:shadow-xl">
                Sign in
              </Link>
              <Link href="/sign-up" className="bg-neutral-900 relative z-10 hover:bg-black/90 border border-transparent text-white text-sm md:text-sm transition font-medium duration-200 rounded-full px-4 py-2 flex items-center justify-center shadow-[0px_-1px_0px_0px_#FFFFFF40_inset,_0px_1px_0px_0px_#FFFFFF40_inset]">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <section className="max-w-7xl mx-auto px-4 flex min-h-screen flex-col items-center justify-between">
        <div className="flex flex-col min-h-screen pt-20 md:pt-40 relative overflow-hidden">
          <div className="flex justify-center">
            <button className="bg-neutral-50 dark:bg-neutral-700 no-underline group cursor-pointer relative md:shadow-2xl shadow-zinc-900 rounded-full p-px text-[10px] sm:text-xs font-semibold leading-6  text-neutral-700 dark:text-neutral-300 inline-block w-fit mx-auto">
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full  opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
              </span>
              <div className="relative flex space-x-2 items-center z-10 rounded-full bg-neutral-100 dark:bg-neutral-800 py-1.5 px-4 ring-1 ring-white/10 ">
                <span>Give Me A Star On Github</span>
                <ArrowDown className="w-4 h-4" />
              </div>
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-neutral-400/0 via-neutral-400/90 to-neutral-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
            </button>
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-8xl font-semibold max-w-6xl mx-auto text-center mt-6 relative z-10 text-black dark:text-white">
            Powerful <span className="text-green-600">Vyākhyā AI</span>
          </h1>
          <p className="text-center mt-6 text-base md:text-xl text-dark dark:text-muted-dark max-w-3xl mx-auto relative z-10">
            <span>
              Vyākhyā AI helps you effortlessly create high-quality content for
              blogs, ecommerce, scripts, and more. Experience the future of
              content creation with our advanced AI tools.
            </span>
          </p>
          <div className="flex flex-row items-center justify-center mt-10 w-full">
            <AnimatedTooltip items={people} />
            <div className="flex justify-center ml-6">
              {[1, 2, 3, 4, 5].map((index) => {
                return (
                  <svg
                    key={index}
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    className="h-4 w-4 text-yellow-400 mx-1"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                  </svg>
                );
              })}
            </div>
          </div>
          <div className="text-center w-full flex justify-center items-center mt-4 -ml-14">
            <p className="text-neutral-400 text-sm ml-8 relative z-40 lg:text-left text-center">
              Trusted by 5+ creators
            </p>
          </div>
          <Link
            className="flex items-center gap-4 justify-center mt-6"
            href="/dashboard"
          >
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
            >
              <Zap strokeWidth={3} />
              <span>Get Started</span>
            </HoverBorderGradient>
          </Link>
        </div>
      </section>
    </div>
  );
}
