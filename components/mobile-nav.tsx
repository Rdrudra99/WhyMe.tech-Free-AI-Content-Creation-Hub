"use client"

import * as React from "react"
import Link, { LinkProps } from "next/link"
import { useRouter } from "next/navigation"

import { docsConfig } from "@/config/docs"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Zap } from "lucide-react"
import { ModeToggle } from "./ModeToggle"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"
import { SignOutButton, UserButton, useUser } from "@clerk/nextjs"
export function MobileNav() {
  const [open, setOpen] = React.useState(false)
  const { isSignedIn, user, isLoaded } = useUser()
  if (!isLoaded) {
    // Handle loading state however you like
    return null
  }
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm"></div>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <header className="sticky top-0 z-10 flex h-16 w-full shrink-0 flex-row items-center gap-4 border-b bg-background justify-between">
          <Link className="font-normal flex space-x-2 items-center text-sm mr-4 text-black px-2 py-1 relative z-20" href="/">
            <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm"></div>
            <span className="font-medium text-black dark:text-white">Why Me</span>
          </Link>
          <ModeToggle />
        </header>
        <div className="my-4 overflow-y-auto">
          <div className="flex flex-col space-y-2">
            {docsConfig.sidebarNav.map((item: any, index: any) => (
              <Accordion type="single" collapsible key={index}>
                <AccordionItem value={item.title}>
                  <AccordionTrigger className="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 py-2 w-full space-x-3 px-2 xl:px-3 justify-between">
                    <span>{item.title}</span>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-1 px-6 py-4">
                    <div className="flex flex-col space-y-2">
                      {item?.items?.length > 0 &&
                        item.items.map((subItem: any, subIndex: any) => (
                          <React.Fragment key={subIndex}>
                            {!subItem.disabled && subItem.href ? (
                              <MobileLink
                                href={subItem.href}
                                onOpenChange={setOpen}
                                className="text-muted-foreground text-sm flex justify-start items-center"
                              >
                                {subItem.title}
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path
                                    d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                {subItem.label && (
                                  <span className="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline">
                                    {subItem.label}
                                  </span>
                                )}
                              </MobileLink>
                            ) : (
                              <span className="text-muted-foreground text-sm">{subItem.title}</span>
                            )}
                          </React.Fragment>
                        ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>
        <div className=" py-2 xl:mt-auto xl:py-4 space-y-2">
            <MobileLink
            href={`https://rdrudra99.site`}
            onOpenChange={setOpen}
            target = {"_blank"}
            className="text-muted-foreground text-sm flex justify-start items-center"
          >
            <span>About Me</span>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
          </MobileLink>
          <MobileLink
            href={`/dashboard/History`}
            onOpenChange={setOpen}
            className="text-muted-foreground text-sm flex justify-start items-center"
          >
            History
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
          </MobileLink>
        </div>
        <div className="p-2 flex justify-start space-x-2 items-center">
          <UserButton />
          <SignOutButton />
        </div>
      </SheetContent>
    </Sheet>
  )
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  className?: string
  target? : String
}

function MobileLink({
  href,
  onOpenChange,
  target,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter()
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString())
        onOpenChange?.(false)
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  )
}