import Link from "next/link";
import React from "react";
import { Badge } from "../ui/badge";
import {
  Home,
  ShoppingCart,
  Package,
  Users,
  LineChart,
  LayoutDashboard,
  ShoppingBag,
  LibraryBig,
  Code,
  Captions,
} from "lucide-react";
import { playlists } from "@/lib/playlists";
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

const Sidebar = () => {
  return (
    <>
      <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
        {routes?.map((item, index) => (
          <Link href={item?.href}>
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
};

export default Sidebar;
