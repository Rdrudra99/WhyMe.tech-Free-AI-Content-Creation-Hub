"use client";

import { CommandMenu } from "@/components/command-menu";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { docsConfig } from "@/config/docs";
import { cn } from "@/lib/utils";
import { UserButton, useUser } from "@clerk/nextjs";
import { IconClipboardCopy, IconSignature } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import { CombineIcon, Loader } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
export default function PlaceholdersAndVanishInputDemo() {
  const { isSignedIn, user, isLoaded } = useUser();
  const [inputData, setInputData] = useState(""); // Search query state
  const [filter, setFilter] = useState("Show All"); // Filter state

  if (!isLoaded) {
    // Handle loading state if needed
    return (
      <div className="flex justify-center items-center w-full h-screen">
        <Loader className="animate-spin w-4 h-4" />
      </div>
    );
  }

  const handleFilterChange = (filterTitle: string) => {
    setFilter(filterTitle); // Update filter state
  };

  // Filter subItems based on the search query and selected main title
  const filteredItems = docsConfig.sidebarNav
    .filter(navItem => filter === "Show All" || navItem.title === filter) // Filter by selected main title
    .flatMap((navItem) => navItem.items) // Flatten all sub-items into a single array
    .filter((subItem) => subItem.title.toLowerCase().includes(inputData.toLowerCase())); // Filter by search query

  return (
    <section className="w-full h-screen">
      <header className="w-full h-14px lg:h-[64px] hidden md:block">
        <div className="flex justify-end items-center h-full px-2 xl:px-7  space-x-4 border-b bg-background">
          <CommandMenu />
          <UserButton />
        </div>
      </header>
      <div className="container px-4 md:px-6 py-6 md:py-12 lg:py-16 xl:py-24 overflow-y-scroll lg:h-[calc(100vh-64px)] overflow-hidden">
        <div className="grid gap-6 items-center">
          <div className="flex flex-col justify-center space-y-8 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl tracking-wide sm:text-5xl xl:text-6xl/none">
                Welcome, {user?.fullName}
              </h1>
              <p className="max-w-[600px] md:text-xl mx-auto">
                Our features are designed to enhance your productivity and streamline your workflow.
              </p>
            </div>
            {/* Filter Buttons */}
            <div className="flex justify-center space-x-4 mb-4 flex-wrap md:space-y-0 space-y-2">
              <Button
                size={"sm"}
                className={cn(
                  "px-4 py-2 rounded-full",
                  filter === "Show All" ? "bg-black text-white font-bold uppercase" : "bg-black"
                )}
                onClick={() => handleFilterChange("Show All")}
              >
                Show All
              </Button>
              {docsConfig.sidebarNav.map((navItem, index) => (
                <Button
                  size={"sm"}
                  key={index}
                  className={cn(
                    "px-4 py-2 rounded-full",
                    filter === navItem.title ? "bg-black text-white font-bold uppercase" : "bg-black"
                  )}
                  onClick={() => handleFilterChange(navItem.title)}
                >
                  {navItem.title}
                </Button>
              ))}
            </div>
            {/* Filtered Items */}
            <div className="w-full max-w-full space-y-4 mx-auto">
              {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8"> */}
              <BentoGrid className="max-w-full px-4 mx-auto">
                {filteredItems.length > 0 ? (
                  filteredItems.map((subItem, subIndex) => (
                    <BentoGridItem
                      key={subIndex}
                      title={subItem.title}
                      description={subItem.description}
                      header=<SkeletonThree items={subItem} />
                      slug = {subItem.href}
                      icon=<IconSignature className="h-4 w-4 text-neutral-500" />
                      className={subIndex === 4 || subIndex === 6 ? "md:col-span-2" : ""}
                    />
                  ))
                ) : (
                  <div className="col-span-full text-center">
                    <p className="text-lg font-semibold text-gray-600">No results found.</p>
                  </div>
                )}
                {/* </div> */}
              </BentoGrid>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// const SkeletonFive = ({items}:any) => {
//   const variants = {
//     initial: {
//       x: 0,
//     },
//     animate: {
//       x: 10,
//       rotate: 5,
//       transition: {
//         duration: 0.2,
//       },
//     },
//   };
//   const variantsSecond = {
//     initial: {
//       x: 0,
//     },
//     animate: {
//       x: -10,
//       rotate: -5,
//       transition: {
//         duration: 0.2,
//       },
//     },
//   };
 
//   return (
//     <motion.div
//       initial="initial"
//       whileHover="animate"
//       className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
//     >
//       <motion.div
//         variants={variants}
//         className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-start space-x-2 bg-white dark:bg-black"
//       >
//         <items.icon className="w-8 h-8" />
//         <p className="text-xs text-neutral-500">
//             {items?.description}
//         </p>
//       </motion.div>
//       <motion.div
//         variants={variantsSecond}
//         className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
//       >
//         <p className="text-xs text-neutral-500">
//             {
//               items?.category
//             }
//         </p>
//         <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
//       </motion.div>
//     </motion.div>
//   );
// };


const SkeletonThree = ({items}:any) => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
      style={{
        background:
          "linear-gradient(-45deg, #f5f5f5, #e0e0e0, #bdbdbd, #9e9e9e)",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div className="h-full w-full rounded-lg"></motion.div>
    </motion.div>
  );
};