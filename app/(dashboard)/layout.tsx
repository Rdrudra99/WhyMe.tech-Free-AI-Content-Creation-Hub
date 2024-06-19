import Link from "next/link";
import {
  Bell,
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart,
  Users,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { routes } from "@/lib/NavigationRoutes";
import React from "react";
import Navbar from "@/components/LayoutComponents/Navbar";

export default function Dashboard({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Package2 className="h-6 w-6" />
              <span className="">S̅anR̅aya AI</span>
            </Link>
          </div>
          <div className="flex-1 border-r">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              {routes.map((items, index) => {
                return (
                  <React.Fragment key={index}>
                    <Link
                      href="#"
                      className="flex items-center gap-3  px-3 py-2 text-primary transition-all hover:text-primary"
                    >
                    {items.icon && <items.icon className="h-5 w-5" />}
                      {items.label}
                    </Link>
                  </React.Fragment>
                );
              })}
            </nav>
          </div>
          <div className="mt-auto p-4 border-r">
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
          </div>
        </div>
      </div>
      <div className="flex flex-col h-screen">
        <Navbar />
        <main className="flex flex-col gap-4 p-4 lg:gap-6 lg:p-6 h-full">
          {children}
        </main>
      </div>
    </div>
  );
}
