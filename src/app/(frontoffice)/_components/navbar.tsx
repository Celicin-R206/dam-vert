"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { CreditCard, User } from "lucide-react";

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

const Navbar = () => {
  const pathName = usePathname();
  return (
    <div>
      <div className="flex justify-between items-center mt-2 bg-white py-5 px-8 rounded-full">
        <div>
          <Image
            src={"/assets/icons/logo.png"}
            width={100}
            height={100}
            alt="logo"
          />
        </div>
        <div>
          <ul className="flex items-center gap-4">
            {navigation.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.link}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-full",
                    pathName === item.link ||
                      (item.link === "/userspace/home/data" &&
                        pathName?.startsWith("/userspace/home/data"))
                      ? "text-green-600 font-[800]"
                      : "text-gray-700"
                  )}>
                  <p className="custom-760:hidden">{item.title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="bg-secondary py-5 rounded-full uppercase text-black ">
                Commencer
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Cité dam vert</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <Link href={"/login"}>
                    <span>Se connecter</span>
                  </Link>
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CreditCard className="mr-2 h-4 w-4" />
                  <Link href={"/register"}>
                    <span>Inscription</span>
                  </Link>
                  <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

const navigation = [
  {
    id: 1,
    title: "Accueil",
    link: "/",
  },
  {
    id: 2,
    title: "Evenements",
    link: "/event",
  },
  {
    id: 3,
    title: "Market-place",
    link: "/shop",
  },
  {
    id: 4,
    title: "Ma ville",
    link: "/map",
  },
];

export default Navbar;
