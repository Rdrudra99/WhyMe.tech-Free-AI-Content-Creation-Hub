import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { CommandMenu } from "@/components/command-menu"
import { Icons } from "@/components/LayoutComponents/icons"
import { MainNav } from "./main-nav"
import { MobileNav } from "./mobile-nav"
import { buttonVariants } from "../ui/button"
import { ModeToggle } from "../ModeToggle"
import { UserNav } from "./user-nav"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 border-b backdrop-blur supports-[backdrop-filter]:bg-background/60 ">
      <div className=" flex h-14 w-full  items-center container mx-auto">
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <CommandMenu />
          </div>
          <nav className="flex items-center">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "w-9 px-0"
                )}
              >
                <Icons.gitHub className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <ModeToggle />
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "w-9 px-0"
                )}
              >
                <UserNav />
              </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
