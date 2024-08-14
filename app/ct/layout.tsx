import { MobileNav } from '@/components/LayoutComponents/mobile-nav'
import { SiteHeader } from '@/components/LayoutComponents/site-header'
import { DocsSidebarNav } from '@/components/sidebar-nav'
import { docsConfig } from '@/config/docs'
import { cn } from '@/lib/utils'
import React from 'react'

const layout = (
    { children }: Readonly<{ children: React.ReactNode; }>,
) => {
    return (
        <div
            className={cn(
                "min-h-screen w-full bg-background font-sans text-foreground antialiased",
            )}
        >
            <header className="sticky top-0 z-50 w-full bg-background/95 border-b backdrop-blur supports-[backdrop-filter]:bg-background/60 ">
                <MobileNav />
            </header>
           <div className='flex h-full w-full'>
            <DocsSidebarNav items={docsConfig.sidebarNav} />
           <main className="flex-1">{children}</main>
           </div>
        </div>
    )
}

export default layout