import Link from "next/link";
import { CircleUser, Menu, Package2, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
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
import Navbar from "@/components/LayoutComponents/Navbar";
import Footer from "@/components/LayoutComponents/Footer";
import { Separator } from "@/components/ui/separator";

export default function Dashboard({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-full flex-col">
      <Navbar />
      <main className=" container flex h-[calc(100vh_-_theme(spacing.16))]  gap-4  p-2 md:gap-8 md:p-4">
        {children}
      </main>
      <Separator />
      <Footer />
    </div>
  );
}
