"use client";
import React from "react";
import Template from "@/app/(data)/Template";
import Link from "next/link";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { BookType, Code, MailOpen, ShoppingCart } from "lucide-react";

export interface TEMPLATE {
  title: string;
  desc: string;
  icon: string;
  category: string;
  slug: string;
  prompt: string;
  form?: FORM[];
}

export interface FORM {
  label: string;
  field: string;
  name: string;
  required?: boolean | undefined;
  options?: string[];
}

export default function PlaceholdersAndVanishInputDemo() {
  const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="h-[40rem] flex flex-col justify-center  items-center px-4">
      <h2 className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-black">
        Ask Vākya AI Anything
      </h2>
      <div className="mx-3 mt-12 flex max-w-3xl flex-wrap items-stretch justify-center gap-4">
        <Link href="/dashboard/ct/generate-product-description">
          <div className="flex max-w-3xl flex-wrap items-stretch justify-center gap-4">
            <button className="relative flex w-40 flex-col gap-2 rounded-2xl border border-token-border-light px-3 pb-4 pt-3 text-start align-top text-[15px] shadow-xxs transition enabled:hover:bg-token-main-surface-secondary disabled:cursor-not-allowed">
              <ShoppingCart />
              <div className="line-clamp-3 text-balance text-gray-600 dark:text-gray-500 break-word">
                Generate Product Description
              </div>
            </button>
          </div>
        </Link>
        <Link href="/dashboard/ct/generate-blog-title">
        <div className="flex max-w-3xl flex-wrap items-stretch justify-center gap-4">
          <button className="relative flex w-40 flex-col gap-2 rounded-2xl border border-token-border-light px-3 pb-4 pt-3 text-start align-top text-[15px] shadow-xxs transition enabled:hover:bg-token-main-surface-secondary disabled:cursor-not-allowed">
            <Code />
            <div className="line-clamp-3 text-balance text-gray-600 dark:text-gray-500 break-word">
              Generate Code Snippet
            </div>
          </button>
        </div>
        </Link>
        <Link href="/dashboard/ct/generate-blog-title">
        <div className="flex max-w-3xl flex-wrap items-stretch justify-center gap-4">
          <button className="relative flex w-40 flex-col gap-2 rounded-2xl border border-token-border-light px-3 pb-4 pt-3 text-start align-top text-[15px] shadow-xxs transition enabled:hover:bg-token-main-surface-secondary disabled:cursor-not-allowed">
            <BookType />
            <div className="line-clamp-3 text-balance text-gray-600 dark:text-gray-500 break-word">
              Write Blog Title
            </div>
          </button>
        </div>
        </Link>
<Link href="/dashboard/ct/generate-email-subject">
        <div className="flex max-w-3xl flex-wrap items-stretch justify-center gap-4">
          <button className="relative flex w-40 flex-col gap-2 rounded-2xl border border-token-border-light px-3 pb-4 pt-3 text-start align-top text-[15px] shadow-xxs transition enabled:hover:bg-token-main-surface-secondary disabled:cursor-not-allowed">
            <MailOpen />
            <div className="line-clamp-3 text-balance text-gray-600 dark:text-gray-500 break-word">
              Write An Email
            </div>
          </button>
        </div>
</Link>
      </div>
    </div>
  );
}
