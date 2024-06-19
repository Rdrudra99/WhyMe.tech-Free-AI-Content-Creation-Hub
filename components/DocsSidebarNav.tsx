"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { routes } from "@/lib/NavigationRoutes";

export function DocsSidebarNavItems() {
  return (
    <div className="grid grid-flow-row auto-rows-max text-sm">
      {routes.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className={cn(
            "group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline"
          )}
        >
          {item.label}
          {/* {item.label && (
            <span className="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline">
              {item.label}
            </span>
          )} */}
        </Link>
      ))}
    </div>
  );
}
