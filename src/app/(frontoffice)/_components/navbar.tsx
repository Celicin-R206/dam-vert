"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { CreditCard, User, SquareMenuIcon } from "lucide-react";

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
import { useUserStore } from "@/app/utils/stores/cookie";

const Navbar = () => {
  const pathName = usePathname();

  const { client, loadClient } = useUserStore();
  useEffect(() => {
    if (!client) {
      loadClient();
    }
  }, [client, loadClient]);

  console.log(client);

  return (
    <div>
      <div className="flex justify-between items-center z-50 bg-white py-5 px-[8rem] custom-1053:px-[2rem] ">
        <div>
          <Image
            src={"/assets/icons/logo.png"}
            width={100}
            height={100}
            alt="logo"
          />
        </div>
        <div className="custom-950:hidden">
          <ul className="flex items-center">
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
        {!client?.access && (
          <div className="flex items-center gap-4">
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
            <div className="hidden custom-950:block">
              <SquareMenuIcon />
            </div>
          </div>
        )}
        {client?.access && (
          <div className="flex items-center gap-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex gap-3 items-center cursor-pointer">
                  <div className="w-[2.5rem] h-[2.5rem] rounded-full overflow-hidden ">
                    <Image
                      className="w-full h-full object-cover"
                      src={"/assets/images/fakeFace.jpeg"}
                      width={500}
                      height={500}
                      alt="image"
                    />
                  </div>
                  <div className="leading-[15px]">
                    <h1 className="font-[800]">{client?.name}</h1>
                    <small>customer</small>
                  </div>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 mt-6">
                <DropdownMenuLabel>Cité dame vert</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <Link href={"/profile"}>
                      <span>Mon profile</span>
                    </Link>
                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <CreditCard className="mr-2 h-4 w-4" />
                    <Link href={"/register"}>
                      <span>Déconnexion</span>
                    </Link>
                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}
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
    title: "Formations",
    link: "/course",
  },
  {
    id: 4,
    title: "Market-place",
    link: "/shop",
  },
  {
    id: 5,
    title: "Ma ville",
    link: "/map",
  },
];

export default Navbar;
