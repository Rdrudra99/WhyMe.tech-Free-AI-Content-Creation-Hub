"use client";

import * as React from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";

import { docsConfig } from "@/config/docs";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SidebarNavItem } from "@/types";
import { ModeToggle } from "./ModeToggle";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { SignOutButton, UserButton } from "@clerk/nextjs";
import { useUser } from '@clerk/clerk-react';

export interface DocsSidebarNavProps {
  items: SidebarNavItem[];
}

export function MobileNav() {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm"></div>
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <DocsSidebarNav items={docsConfig.sidebarNav} />
      </SheetContent>
    </Sheet>
  );
}

import { usePathname } from "next/navigation";

export function DocsSidebarNav({ items }: DocsSidebarNavProps) {
  const pathname = usePathname();
  const { isSignedIn, user, isLoaded } = useUser();

  if (!isLoaded) {
    // Handle loading state however you like
    return null;
  }

  return items.length ? (
    <section className="flex min-h-screen w-full shrink-0 flex-col lg:max-h-screen lg:overflow-y-auto max-h-screen overflow-y-auto">
      <header className="sticky top-0 z-10 flex h-16 w-full shrink-0 flex-row items-center gap-4 border-b bg-background px-2 xl:px-2 justify-between">
        <Link className="font-normal flex space-x-2 items-center text-sm mr-4  text-black px-2 py-1  relative z-20" href="/">
          <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm"></div>
          <span className="font-medium text-black dark:text-white">Why Me</span>
        </Link>
        <ModeToggle />
      </header>
      {items.map((item, index) => (
        <Accordion type="single" collapsible key={index}>
          <AccordionItem value={item.title}>
            <AccordionTrigger className="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 py-2 w-full space-x-3 px-2 xl:px-3 justify-between">
              <span>{item.title}</span>
            </AccordionTrigger>
            <AccordionContent className="space-y-1 px-6 py-4">
              {item?.items?.length && (
                <DocsSidebarNavItems items={item.items} pathname={pathname} />
              )}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
      <div className="space-y-0.5 py-2 xl:mt-auto xl:py-4">
        <Link
          className="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 py-2 w-full justify-start space-x-3 px-2 xl:px-3"
          target="_blank"
          href="https://github.com/Rdrudra99"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-external-link"
          >
            <path d="M15 3h6v6"></path>
            <path d="M10 14 21 3"></path>
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          </svg>
          <span>GitHub</span>
        </Link>
        <Link
          className="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 py-2 w-full justify-start space-x-3 px-2 xl:px-3"
          target="_blank"
          href="https://rdrudra99.site"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-external-link"
          >
            <path d="M15 3h6v6"></path>
            <path d="M10 14 21 3"></path>
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          </svg>
          <span>About Me</span>
        </Link>
        <Link
          className="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 py-2 w-full justify-start space-x-3 px-2 xl:px-3"
          href="/dashboard/History"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-external-link"
          >
            <path d="M15 3h6v6"></path>
            <path d="M10 14 21 3"></path>
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          </svg>
          <span>History</span>
        </Link>
      </div>
      <div className="p-2 flex justify-start space-x-2 items-center">
        <UserButton />
        <SignOutButton />
      </div>
    </section>
  ) : null;
}

interface DocsSidebarNavItemsProps {
  items: SidebarNavItem[];
  pathname: string | null;
}

export function DocsSidebarNavItems({
  items,
  pathname,
}: DocsSidebarNavItemsProps) {
  return items?.length ? (
    <div className="grid grid-flow-row auto-rows-max text-sm">
      {items.map((item, index) =>
        item.href && !item.disabled ? (
          <Link
            key={index}
            href={item.href}
            className={cn(
              "group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline mt-1",
              item.disabled && "cursor-not-allowed opacity-60",
              pathname === item.href
                ? "font-medium text-foreground"
                : "text-muted-foreground"
            )}
            target={item.external ? "_blank" : ""}
            rel={item.external ? "noreferrer" : ""}
          >
            {item.title}
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6464L9.29289 5L3.64645 10.6464C3.45118 10.8417 3.45118 11.1583 3.64645 11.3536C3.84171 11.5488 4.15829 11.5488 4.35355 11.3536L10 5.70711C10.1953 5.51184 10.1953 5.19526 10 5C10 4.80474 10 4.80474 10.1953 5C10.3905 5.19526 10.3905 5.51184 10 5.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        ) : (
          <div
            key={index}
            className={cn(
              "flex w-full cursor-not-allowed items-center rounded-md p-1",
              item.disabled && "cursor-not-allowed opacity-60"
            )}
          >
            {item.title}
          </div>
        )
      )}
    </div>
  ) : null;
}
