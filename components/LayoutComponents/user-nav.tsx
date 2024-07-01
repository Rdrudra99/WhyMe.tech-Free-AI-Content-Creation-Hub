"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/clerk-react";
export function UserNav() {


  return (
    // <DropdownMenu>
    //   <DropdownMenuTrigger asChild>
    //     <Button variant="ghost" className="relative h-8 w-8 rounded-full">
    //       <Avatar>
    //         <AvatarImage
    //           src="https://avatars.githubusercontent.com/u/1092804?v=4"
    //           alt="User profile image"
    //         />
    //         <AvatarFallback>
    //           <span>JD</span>
    //         </AvatarFallback>
    //       </Avatar>
    //     </Button>
    //   </DropdownMenuTrigger>
    //   <DropdownMenuContent className="w-56" align="end" forceMount>
    //     <DropdownMenuLabel className="font-normal">
    //       <div className="flex flex-col space-y-1">
    //         <p className="text-sm font-medium leading-none">
    //            {user?.firstName}
    //         </p>
    //         <p className="text-xs leading-none text-muted-foreground">
    //           {/* {user?.email} */}
    //         </p>
    //       </div>
    //     </DropdownMenuLabel>
    //     <DropdownMenuSeparator />
    //     <DropdownMenuGroup>
    //       <DropdownMenuItem>
    //         Profile
    //         <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
    //       </DropdownMenuItem>
    //       <DropdownMenuItem>
    //         Billing
    //         <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
    //       </DropdownMenuItem>
    //       <DropdownMenuItem>
    //         Settings
    //         <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
    //       </DropdownMenuItem>
    //       <DropdownMenuItem>New Team</DropdownMenuItem>
    //     </DropdownMenuGroup>
    //     <DropdownMenuSeparator />
    //     <DropdownMenuItem>
    //           Log out
    //       <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
    //     </DropdownMenuItem>
    //   </DropdownMenuContent>
    // </DropdownMenu>
    <UserButton />
  );
}
