import { DocsSidebarNav } from '@/components/sidebar-nav'
import { docsConfig } from '@/config/docs'
import { cn } from '@/lib/utils'
import React from 'react'

const layout = (
    {children}: Readonly<{children: React.ReactNode;}>,
) => {
  return (
    <div
          className={cn(
            "relative flex min-h-screen w-full bg-background font-sans text-foreground antialiased",
          )}
        >

            {/* <NextTopLoader color="#2299DD" showSpinner={false} speed={400} /> */}
            <DocsSidebarNav items={docsConfig.sidebarNav} />
            <main className="flex-1">{children}</main>
        </div>
  )
}

export default layout