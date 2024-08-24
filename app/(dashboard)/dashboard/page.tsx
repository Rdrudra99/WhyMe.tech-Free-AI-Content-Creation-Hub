"use client";

import { CommandMenu } from "@/components/command-menu";
import { docsConfig } from "@/config/docs";
import { cn } from "@/lib/utils";
import { UserButton, useUser } from "@clerk/nextjs";
import { AnimatePresence, motion } from "framer-motion";
import { CombineIcon, Loader } from "lucide-react";
import { useState } from "react";

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputData(e.target.value); // Update search query state
  };

  const handleFilterChange = (filterTitle: string) => {
    setFilter(filterTitle); // Update filter state
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission if needed
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
      <div className="container px-4 md:px-6 py-6 md:py-12 lg:py-16 xl:py-24 overflow-y-scroll lg:h-[calc(100vh-64px)]">
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
            <div className="flex justify-center space-x-4 mb-4">
              <button
                className={cn(
                  "px-4 py-2 rounded-full",
                  filter === "Show All" ? "bg-black text-white" : "bg-gray-200"
                )}
                onClick={() => handleFilterChange("Show All")}
              >
                Show All
              </button>
              {docsConfig.sidebarNav.map((navItem, index) => (
                <button
                  key={index}
                  className={cn(
                    "px-4 py-2 rounded-full",
                    filter === navItem.title ? "bg-black text-white" : "bg-gray-200"
                  )}
                  onClick={() => handleFilterChange(navItem.title)}
                >
                  {navItem.title}
                </button>
              ))}
            </div>
            {/* Filtered Items */}
            <div className="w-full max-w-full space-y-4 mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {filteredItems.length > 0 ? (
                  filteredItems.map((subItem, subIndex) => (
                    <div
                      key={subIndex}
                      className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg"
                    >
                      <div className="p-2 bg-black rounded-full">
                        <subItem.icon className="text-white h-6 w-6 mb-2" />
                      </div>
                      <h2 className="text-lg text-black">{subItem.title}</h2>
                      <p className="text-sm">{subItem.description}</p>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full text-center">
                    <p className="text-lg font-semibold text-gray-600">No results found.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
