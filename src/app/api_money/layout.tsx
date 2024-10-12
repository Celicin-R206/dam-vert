"use client";

import Navbar from "./navbar";
import NavigationLeft from "./navigation-left";

export default function ApiMobileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-[70%] m-auto ">
      <div className="mt-[2rem]">
        <Navbar />
      </div>
      <div className="flex gap-5 mt-[3rem]">
        <div className="w-[20rem]">
          <NavigationLeft />
        </div>
        <div className=" w-full">{children}</div>
      </div>
    </div>
  );
}
