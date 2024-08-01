import React from "react";
import { SiteHeader } from "@/components/LayoutComponents/site-header";
import { ScrollArea } from "@/components/ui/scroll-area";
import { DocsSidebarNav } from "@/components/sidebar-nav";
import { docsConfig } from "@/config/docs";

export default async function Dashboard({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <React.Fragment>
      <SiteHeader />
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10 mx-auto">
        <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
          <ScrollArea className="h-full py-6 pr-6 lg:py-8">
            <DocsSidebarNav items={docsConfig.sidebarNav} />
          </ScrollArea>
        </aside>
        <main className=" py-4 lg:gap-10 lg:py-4 w-full h-full overflow-hidden">
          {children}
        </main>
      </div>
    </React.Fragment>
  );
}
