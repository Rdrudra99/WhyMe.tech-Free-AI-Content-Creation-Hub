"use client"
import React from "react";
import Image from "next/image";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
const layout = ({ children }: { children: React.ReactNode }) => {
    const placeholders = [
        "Generate compelling product descriptions effortlessly",
        "Optimize your product titles for better search engine rankings",
        "Monitor prices and analyze competitors to stay competitive",
        "Generate catchy titles for your blog posts",
        "Automatically generate code snippets for various programming tasks",
        "Generate relevant keywords to improve your SEO strategy",
        "Create compelling subject lines to boost email open rates",
        "Generate creative ideas for your social media posts",
        "Generate effective ad copies for your advertising campaigns",
        "Rewrite text while retaining its original meaning"
      ];
      
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="w-full lg:grid h-screen lg:grid-cols-2">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid  gap-6">{children}</div>
      </div>
      <div className="hidden bg-muted lg:block">
        <div className="h-[40rem] flex flex-col justify-center  items-center px-4">
          <h2 className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-black">
            Generate With Vyākhyā AI
          </h2>
          <PlaceholdersAndVanishInput
            placeholders={placeholders}
            onChange={handleChange}
            onSubmit={onSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default layout;
