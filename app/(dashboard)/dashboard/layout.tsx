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
        <div className={`min-h-screen w-full bg-background  text-foreground antialiased  font-Montserrat`}>
            <header className="sticky lg:hidden  top-0 z-10 flex h-16 w-full shrink-0 flex-row items-center gap-4 border-b bg-background px-2 xl:px-7">
                <MobileNav />
                <CommandMenu />
                <UserButton /> 
            </header>
            <div className='flex h-full w-full'>
                <DocsSidebarNav items={docsConfig.sidebarNav} />
                <main className="flex-1">{children}</main>
            </div>
        </div>
    )
}

export default layout