import { Button } from "@/components/ui/button";
import { Link2, MoveRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="p-8">
        <div className="theme-zinc w-full relative flex flex-col items-start md:flex-row md:items-center">
          <section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
            <Link href="/sign-in">
              <p className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium justify-center space-x-2 ">
                <span>
                  <Link2 className="w-4 h-4" />
                </span>
                <span>Introducing Sanaya Content Writer</span>
              </p>
            </Link>
            <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1] hidden md:block">
              Get started with Sanaya Content Writer
            </h1>
            <p className="max-w-[750px] text-center text-lg font-light text-foreground">
              Sanaya Ai is a powerful AI tool that can help you with a variety
              of tasks. You can ask questions
            </p>
          </section>
        </div>
        <div className="flex flex-col justify-center items-center space-y-2">
          <div className="flex flex-col space-y-2">
            <Link href="/dashboard">
              <Button>Banda Click Kar Sala</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
