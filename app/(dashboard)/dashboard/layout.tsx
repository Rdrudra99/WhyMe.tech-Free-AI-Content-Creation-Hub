import Link from "next/link"
import { BrainCog, MoveHorizontalIcon } from "lucide-react"
import { SiteHeader } from "@/components/LayoutComponents/site-header"
import { DocsSidebarNav } from "@/components/sidebar-nav"
import { docsConfig } from "@/config/docs"
import { Pacifico } from "next/font/google"

const pacifico = Pacifico({
  weight: '400',
  preload: false,
});

export default function DashBoard({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex min-h-screen w-full">
      <aside className="fixed inset-y-0 left-0 z-10 hidden  md:flex h-full w-64 md:flex-col border-r bg-[#F6F7FA]">
        <div className="flex h-16 shrink-0 items-center justify-between  px-4">
          <Link href="#" className="flex items-center gap-2 font-semibold" prefetch={false}>
            <h2 className={`${pacifico.className} text-2xl font-bold tracking-widest`}>
              Vyākhyā AI
            </h2>
          </Link>
        </div>
        <nav className="flex-1 overflow-auto  px-2 py-4">
          <DocsSidebarNav items={docsConfig.sidebarNav} />
        </nav>
        {/* <div className="mt-auto p-4">
          <Card x-chunk="dashboard-02-chunk-0">
            <CardHeader className="p-2 pt-0 md:p-4">
              <CardTitle>Upgrade to Pro</CardTitle>
              <CardDescription>
                Unlock all features and get unlimited access to our support
                team.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
              <Button size="sm" className="w-full">
                Upgrade
              </Button>
            </CardContent>
          </Card>
        </div> */}
      </aside>
      <div className="flex-1 md:pl-64 overflow-hidden">
        <header className="sticky top-0 z-50 w-full bg-background/95 border-b backdrop-blur supports-[backdrop-filter]:bg-background/60 ">
          <SiteHeader />
        </header>
        <main className="flex-1 overflow-y-auto px-4  sm:px-6">
          <div className="w-full h-full">
            {
              children
            }
          </div>
        </main>
      </div>
    </div>
  )
}