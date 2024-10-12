"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { User, History, Banknote, Tag, PanelTopDashed } from "lucide-react";

const NavigationLeft = () => {
  const pathName = usePathname();

  return (
    <div>
      <ul className="flex flex-col custom-760:flex-row gap-4">
        {navigation.map((item) => (
          <li key={item.id}>
            <Link
              href={item.link}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full",
                pathName === item.link ||
                  (item.link === "/userspace/home/data" &&
                    pathName?.startsWith("/userspace/home/data"))
                  ? "border border-primary text-primary bg-green-100"
                  : "text-gray-700"
              )}>
              {item.icon}
              <p className="custom-760:hidden">{item.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const navigation = [
  {
    id: 1,
    icon: <PanelTopDashed size={18} />,
    title: "Tableau de bord",
    link: "/api_money",
  },
  {
    id: 2,
    icon: <User size={18} />,
    title: "Dépôt d'argent",
    link: "/api_money/deposit",
  },
  {
    id: 3,
    icon: <Banknote size={18} />,
    title: "Rétait d'argent",
    link: "/api_money/retrait",
  },
];

export default NavigationLeft;
