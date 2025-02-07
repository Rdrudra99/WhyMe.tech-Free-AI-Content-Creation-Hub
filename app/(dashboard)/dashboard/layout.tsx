import { CommandMenu } from '@/components/command-menu'
import { MobileNav } from '@/components/mobile-nav'
import { ModeToggle } from '@/components/ModeToggle'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { IconAlpha, IconCode, IconGitPullRequest, IconHome, IconSettings, IconSignature } from '@tabler/icons-react'
import { LineChart } from 'lucide-react'
import { Montserrat } from 'next/font/google'
import Link from 'next/link'
import React from 'react'
const montserrat = Montserrat({
    weight: '400',
    subsets: ['latin'],
})


const layout = async (
    { children }: Readonly<{ children: React.ReactNode; }>,
) => {

    return (
        <div className={`min-h-screen w-full bg-background  text-foreground antialiased`}>
            <header className="sticky lg:hidden justify-between top-0 z-10 flex h-16 w-full shrink-0 flex-row items-center gap-4 border-b bg-background px-2 xl:px-7">
                <MobileNav />
                <CommandMenu />
                {/* <UserButton /> */}
            </header>
            <div className='flex h-full w-full'>
                {/* <DocsSidebarNav items={docsConfig.sidebarNav} /> */}
                <div className="hidden border-r  md:block max-w-[300px]">
                    <div className="flex h-full max-h-screen flex-col gap-2">
                        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                            <Link href="/" className="flex items-center gap-2 font-semibold">
                                <IconSignature className="h-8 w-8" />
                                <span className="">Why Me</span>
                            </Link>
                            <div className='ml-auto'>
                                <ModeToggle />
                            </div>
                        </div>
                        <div className="flex-1">
                            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                                <Link
                                    href="/dashboard"
                                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                                >
                                    <IconHome className="h-4 w-4" />
                                    Dashboard
                                </Link>
                                <Link
                                    href="/dashboard/history"
                                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                                >
                                    <LineChart className="h-4 w-4" />
                                    History
                                </Link>
                                <Link
                                    href="#"
                                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                                >
                                    <IconCode className="h-4 w-4" />
                                    Playground
                                    <Badge className="ml-auto bg-muted text-black dark:text-white">
                                        Pro
                                    </Badge>
                                </Link>
                                <Link
                                    href="#"
                                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                                >
                                    <IconAlpha className="h-4 w-4" />
                                    Assistant
                                    <Badge className="ml-auto bg-muted text-black dark:text-white">
                                        Pro
                                    </Badge>
                                </Link>
                                <Link
                                    href="#"
                                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                                >
                                    <IconGitPullRequest className="h-4 w-4" />
                                    Request
                                    <Badge className="ml-auto bg-muted text-black dark:text-white">
                                        Pro
                                    </Badge>
                                </Link>
                                <Link
                                    href="#"
                                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                                >
                                    <IconSettings className="h-4 w-4" />
                                    Settings{" "}
                                </Link>
                            </nav>
                        </div>
                        <div className="mt-auto p-4">
                            <Card x-chunk="dashboard-02-chunk-0">
                                <CardHeader className="p-2 pt-0 md:p-4">
                                    <CardTitle>Upgrade to Pro</CardTitle>
                                    <CardDescription>
                                        Unlock all features and get unlimited access to our support
                                        team.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
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
                    </div>
                </div>
                <main className="flex-1">{children}</main>
            </div>
        </div>
    )
}

export default layout