"use client"
import React from "react";
import Image from "next/image";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import Ripple from "@/components/magicui/ripple";
import { Vegan } from "lucide-react";
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
      <div className="hidden bg-muted lg:block">
        <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden ">
          <Vegan strokeWidth={3} className="w-28 h-28" />
          <Ripple />
        </div>
      </div>
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid  gap-6">{children}</div>
      </div>
    </div>
  );
};

export default layout;
