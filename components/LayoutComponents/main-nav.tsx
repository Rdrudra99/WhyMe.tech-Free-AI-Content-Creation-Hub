"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/LayoutComponents/icons";
import { Badge } from "@/components/ui/badge";
import { Vegan, Zap } from "lucide-react";

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Vegan strokeWidth={3} absoluteStrokeWidth className=" text-primary mr-2 w-8 h-8 animate-bounce" />
        <span className="hidden text-xl text-primary font-bold sm:inline-block">Vyākhyā AI</span>
      </Link>
      {/* <nav className="flex items-center gap-4 text-sm lg:gap-6">
        <Link
          href="/dashboard"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/dashboard")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          DashBoard
        </Link>
        <Link
          href={siteConfig.links.github}
          className={cn(
            "hidden text-foreground/60 transition-colors hover:text-foreground/80 lg:block"
          )}
        >
          Tech Stack
        </Link>
      </nav> */}
    </div>
  );
}
