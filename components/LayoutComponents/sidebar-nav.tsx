"use client"

import { cn } from "@/lib/utils"
import { LayoutDashboard, ShoppingBag, LibraryBig, Code, Captions } from "lucide-react";
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "../ui/button";


const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dash",
  },
  {
    label: "Ecommerce",
    icon: ShoppingBag,
    href: "/ecom",
  },
  {
    label: "Blogs",
    icon: LibraryBig,
    href: "/blog",
  },
  {
    label: "Code",
    icon: Code,
    href: "/code",
  },
  {
    label: "Caption",
    icon: Captions,
    href: "/caption",
  },
];

export default function Sidebar() {
  return (
    <>
      <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
        {routes?.map((item, index) => (
          <Link href={item?.href} key={index}>
            <Button
              key={index}
              variant="ghost"
              className="w-full justify-start font-normal flex items-center"
            >
              {<item.icon className="w-4 h-4 mr-2" />} {/* Render the icon */}
              {item.label}
            </Button>
          </Link>
        ))}
      </nav>
    </>
  );
}