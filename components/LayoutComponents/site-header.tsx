import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { CommandMenu } from "@/components/command-menu"
import { Icons } from "@/components/LayoutComponents/icons"
import { MainNav } from "./main-nav"
import { MobileNav } from "./mobile-nav"
import { Button, buttonVariants } from "../ui/button"
import { ModeToggle } from "../ModeToggle"
import { UserNav } from "./user-nav"
import { CalendarHeart, CircleAlert, Star } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"
import { Label } from "../ui/label"
import { Input } from "../ui/input"

export function SiteHeader() {
  return (
    <div className=" flex h-14 w-full  items-center px-5">
      <MobileNav />
      <div className="flex flex-1 items-center justify-between space-x-2 md:justify-start">
        <div className="w-full flex-1 md:w-auto md:flex-none">
          <CommandMenu />
        </div>
      </div>
      {/* <nav className="flex items-center space-x-4">
        <Button variant={"link"} size={"sm"} className="text-primary hidden md:flex" >
          <CalendarHeart className="w-3 h-3 mr-2" />
              For Now It is Free 
        </Button>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant={"default"} size={"sm"} className="rounded-md hidden md:flex">
              <Star className="w-3 h-3 mr-2" />
              Upgrade
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle className="text-center">
                🚀 Supercharge Your Account!
              </DialogTitle>
            </DialogHeader>
            <div>
              <p className="text-center text-gray-600">
                Enjoy the taste of luxury for FREE! 🎉 Act fast before we come to our senses! 🤯
              </p>
            </div>
            <DialogFooter>
              <Button className="w-full">
                Abhi Ke Liye Free hai 🎉
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
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
      </nav> */}
    </div>
  )
}
