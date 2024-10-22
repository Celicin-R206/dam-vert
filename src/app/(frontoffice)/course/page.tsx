"use client";

import React, { useState } from "react";
import Navbar from "../_components/navbar";
import { SearchIcon } from "lucide-react";
import All from "./all";

const Page = () => {
  const [activeTab, setActiveTab] = useState("all");

  const renderTabContent = () => {
    switch (activeTab) {
      case "all":
        return <All />;
      case "free":
        return <p>GRATUITE</p>;

      case "paid":
        return <p>PAYANTE</p>;

      default:
        return null;
    }
  };
  return (
    <div>
      <div className="h-[25rem] flex justify-center items-center overflow-hidden  relative w-full ">
        <div className="hero relative flex items-center justify-center mt-[3rem] flex-col gap-5">
          <div className="text-[4rem] custom-850:text-[3rem] z-10 text-primary font-[1000] text-center relative ">
            <h1 className="text-primary ">Formations</h1>
          </div>
        </div>
        <img
          src="/assets/images/glob.gif"
          alt="glob"
          className="absolute top-[4rem] left-[7rem] w-[30rem] "
        />
        <img
          src="/assets/icons/elipse.svg"
          alt="elipse"
          className="rounded-full absolute right-[-10rem] top-[-10rem]"
        />
      </div>
      <div className="w-[85%] m-auto py-8">
        <div className="flex items-center custom-640:flex-col custom-640:gap-4 justify-between">
          <ul className="flex gap-4 custom-640:w-full  custom-640:text-[12px] custom-640:flex-wrap">
            <li
              className={`py-2 px-4 rounded-full flex items-center gap-1 cursor-pointer ${
                activeTab === "all"
                  ? "border-2 border-primary font-[700]  text-primary"
                  : "bg-white"
              }`}
              onClick={() => setActiveTab("all")}>
              Tout
            </li>
            <li
              className={`py-2 px-4 flex items-center gap-1 rounded-full cursor-pointer ${
                activeTab === "free"
                  ? "border-2 border-primary font-[700] text-primary"
                  : "bg-white"
              }`}
              onClick={() => setActiveTab("free")}>
              Gratuite
            </li>
            <li
              className={`py-2 px-4 flex rounded-full items-center gap-1 cursor-pointer ${
                activeTab === "paid"
                  ? "border-2 border-primary font-[700] text-primary"
                  : "bg-white"
              }`}
              onClick={() => setActiveTab("paid")}>
              Payante
            </li>
          </ul>
          <div className="border-2 p-3 rounded-xl custom-640:w-full flex items-center gap-2">
            <input
              type="text"
              name="search"
              id="search"
              className="w-[400px] custom-950:w-full"
              placeholder="Rechercher un formation"
            />
            <SearchIcon />
          </div>
        </div>

        <div className="mt-6">{renderTabContent()}</div>
      </div>
    </div>
  );
};

export default Page;
