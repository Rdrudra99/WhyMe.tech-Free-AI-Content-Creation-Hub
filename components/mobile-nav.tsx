"use client"

import * as React from "react"
import Link, { LinkProps } from "next/link"
import { useRouter } from "next/navigation"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "./ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { IconAlpha, IconCode, IconHistory, IconHome, IconSettings, IconSignature } from "@tabler/icons-react"
import { Separator } from "./ui/separator"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
export function MobileNav() {
  const [open, setOpen] = React.useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <IconSignature className="w-8 h-8" />
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col">
        <nav className="grid gap-2 text-lg font-medium">
          <MobileLink href="/" onOpenChange={setOpen} className="mx-[-0.65rem] flex items-center gap-4  px-3 py-2 text-black dark:text-white">
            <IconSignature size={30} />
            <span className="uppercase">
              Why Me
            </span>
          </MobileLink>
          <Separator className="w-full" />
          <MobileLink href="/dashboard" onOpenChange={setOpen} className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground">
            <IconHome size={20} />
            Dashboard
          </MobileLink>
          <MobileLink href="/history" onOpenChange={setOpen} className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground">
            <IconHistory size={20} />
            History
          </MobileLink>
          <MobileLink href="#" onOpenChange={setOpen} className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground">
            <IconAlpha className="h-4 w-4" />
            Assistant
            <Badge className="ml-auto bg-muted text-black dark:text-white">
              Pro
            </Badge>
          </MobileLink>
          <MobileLink href="#" onOpenChange={setOpen} className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground">
            <IconCode className="h-4 w-4" />
            Playground
            <Badge className="ml-auto bg-muted text-black dark:text-white">
              Pro
            </Badge>
          </MobileLink>
          <MobileLink href="#" onOpenChange={setOpen} className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground">
            <IconSettings size={20} />
            Request
            <Badge className="ml-auto bg-muted text-black dark:text-white">
              Pro
            </Badge>
          </MobileLink>
          <MobileLink href="#" onOpenChange={setOpen} className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground">
            <IconSettings size={20} />
            Settings
          </MobileLink>
        </nav>
        <div className="mt-auto">
          <Card>
            <CardHeader>
              <CardTitle>Upgrade to Pro</CardTitle>
              <CardDescription>
                Unlock all features and get unlimited access to our
                support team.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="sm" className="w-full">
                    Upgrade
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader className='flex justify-center items-center space-y-5'>
                    <DialogTitle>🚀 Upgrade Your Plan</DialogTitle>
                    <DialogDescription className='text-center'>
                      🌟 Unlock advanced features to generate more content with higher quality and greater customization. Choose the plan that best suits your needs and start scaling your content production today! 🎯
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        </div>
      </SheetContent>
    </Sheet>
  )
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  className?: string
  target?: String
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



{/* <Link
href="#"
className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
>
<IconSettings className="h-5 w-5" />
Settings
</Link> */}