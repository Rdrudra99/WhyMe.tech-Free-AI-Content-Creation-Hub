"use client"

import * as React from "react"
import Link, { LinkProps } from "next/link"
import { useRouter } from "next/navigation"

import { docsConfig } from "@/config/docs"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ChevronLeft, Menu, Store, WheatOff } from "lucide-react"
import Image from "next/image"
import { Separator } from "./ui/separator"
export function MobileNav() {
  const [open, setOpen] = React.useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
           <ChevronLeft />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <div className="my-4 h-full overflow-y-auto">
          <div className="flex flex-col space-y-2">
            {docsConfig.sidebarNav.map((item:any, index:any) => (
              <div key={index} className="flex flex-col space-y-3">
                <h4 className="text-base">{item.title}</h4>
                {item?.items?.length &&
                  item.items.map((item:any) => (
                    <React.Fragment key={item.href}>
                      {!item.disabled &&
                        (item.href ? (
                          <MobileLink
                            href={item.href}
                            onOpenChange={setOpen}
                            className="text-muted-foreground text-sm"
                          >
                            {item.title}
                            {item.label && (
                              <span className="ml-2 rounded-md bg-black px-1.5 py-0.5 text-xs leading-none text-white no-underline group-hover:no-underline">
                                {item.label}
                              </span>
                            )}
                          </MobileLink>
                        ) : (
                         <p className="text-xs">
                           {item.title}
                         </p>
                        ))}
                    </React.Fragment>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  className?: string
}

function MobileLink({
  href,
  onOpenChange,
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