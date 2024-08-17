"use client";

import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { useUser } from "@clerk/nextjs";
import { Loader } from "lucide-react";

export default function PlaceholdersAndVanishInputDemo() {
  const { isSignedIn, user, isLoaded } = useUser();

  const placeholders = [
    "Generate a catchy blog title...",
    "Write a product description for an e-commerce site...",
    "How to optimize SEO content...",
    "Tips for creating engaging social media posts...",
    "Generate content for an About Us page...",
  ];

  if (!isLoaded) {
    // Handle loading state if needed
    return <div className="flex justify-center items-center w-full h-screen">
        <Loader className="animate-spin w-4 h-4" />
    </div>;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log("Submitted!");
  };

  return (
    <div className="h-[40rem] flex flex-col justify-center items-center px-4">
      <h2 className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-black">
        Welcome, {user?.fullName}
      </h2>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
      <div className="mt-10 text-center">
        <p className="text-sm sm:text-lg text-muted-foreground">
          Start typing to generate AI-powered content tailored to your needs.
        </p>
        <p className="text-sm sm:text-lg text-muted-foreground">
          Choose from the sidebar prompts and let our AI do the magic!
        </p>
      </div>
    </div>
  );
}
