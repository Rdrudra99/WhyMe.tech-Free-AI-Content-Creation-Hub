import { CommandMenu } from '@/components/command-menu'
import { MobileNav } from '@/components/mobile-nav'
import { DocsSidebarNav } from '@/components/sidebar-nav'
import { docsConfig } from '@/config/docs'
import { cn } from '@/lib/utils'
import { UserButton } from '@clerk/nextjs'
import { useUser } from '@clerk/clerk-react'
import React from 'react'
import { Montserrat } from 'next/font/google'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const montserrat = Montserrat({
    weight: '400',
    subsets: ['latin'],
})

const layout = (
    { children }: Readonly<{ children: React.ReactNode; }>,
) => {
    // const { isSignedIn, user, isLoaded } = useUser();
    return (
        <div className={`relative flex min-h-screen flex-col bg-background antialiased`}>
            <header className="sticky top-0 z-50 lg:hidden flex border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center">
                <MobileNav />
                <CommandMenu />
                <UserButton /> 
            </div>
            </header>
            <div className='flex h-full w-full'>
                <DocsSidebarNav items={docsConfig.sidebarNav} />
                <main className="flex-1">{children}</main>
            </div>
        </div>
    )
}

export default layout