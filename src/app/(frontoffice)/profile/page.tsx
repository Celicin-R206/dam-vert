"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  BadgeCheckIcon,
  InboxIcon,
  CalendarDaysIcon,
  CameraIcon,
  ContactIcon,
  Package2Icon,
} from "lucide-react";
import Navbar from "../_components/navbar";

const Page = () => {
  const [activeTab, setActiveTab] = useState("account");

  const renderTabContent = () => {
    switch (activeTab) {
      case "account":
        return <p></p>;
      case "demande":
        return <p></p>;

      case "rendezvous":
        return <p></p>;

      case "subscription":
        return <p></p>;
      default:
        return null;
    }
  };

  return (
    <div className="pb-[5rem]">
      <div className="w-[1150px] m-auto relative ">
        <Navbar />
      </div>
      <section className="flex items-center bg-no-repeat bg-cover bg-center h-[20rem]">
        <Image
          className="w-full h-full object-cover"
          src={"/assets/images/pdc_.jpg"}
          width={2000}
          height={2000}
          alt="pdc"
        />
      </section>
      <div className="px-[5rem] custom-1024:px-[1rem]  mt-[-7rem] custom-950:mt-[-15rem] flex custom-950:flex-col gap-4">
        <div className="bg-white w-[400px] custom-950:w-full custom-950:relative h-[27rem] sticky top-[5.5rem] rounded-xl border-[2px] flex flex-col gap-6 py-8">
          <div className="top flex items-center justify-center flex-col gap-6">
            <div className="w-[7rem] h-[7rem]  relative">
              <Image
                className="w-full h-full border-[7px] border-white object-cover rounded-full"
                src={"/assets/images/testmonial-.jpeg"}
                width={500}
                height={500}
                alt="profile"
              />
              <span className="border-[5px] w-[2rem] h-[2rem] grid place-content-center text-white border-white absolute bottom-0 right-0 bg-primary rounded-full p-4 ">
                <CameraIcon className="w-[1rem] stroke-[3px] " />
              </span>
            </div>

            <span className="flex items-center w-fit gap-1 bg-green-100 rounded-sm text-green-800 px-[10px]">
              <BadgeCheckIcon className="w-[1rem]" />
              <small>customer</small>
            </span>
            <div className="text-center leading-[25px] ">
              <p className="font-[900] text-[1.2rem] ">RAHANDRIMIRAY Celicin</p>
              <small className="opacity-70">rahandrimriay@gmail.com</small>
            </div>
          </div>
          <div className="bottom mt-3 text-[14px] ">
            <div className="py-2 px-4 border-t flex justify-between items-center">
              <p>Demande</p>
              <p className="font-[800]">10</p>
            </div>
            <div className="py-2 px-4 border-t flex justify-between items-center">
              <p>Rendez-vous</p>
              <p className="font-[800]">08</p>
            </div>
            <div className="py-2 px-4 border-t flex justify-between items-center">
              <p>Demande</p>
              <p className="font-[800]">10</p>
            </div>
          </div>
        </div>
        <div className="bg-white border-[2px] custom-950:mt-[6rem] w-full rounded-xl">
          <div className="px-[2rem] custom-640:px-[.5rem] py-[2rem]">
            <div className="bg-border flex custom-768:flex-col custom-768:gap-8 custom-768:items-start justify-between items-center p-[1.2rem] rounded-lg">
              <ul className="flex gap-4  custom-640:text-[12px] custom-640:flex-wrap">
                <li
                  className={`py-2 px-4 flex items-center gap-1 rounded-sm cursor-pointer ${
                    activeTab === "account"
                      ? "bg-secondary text-white"
                      : "bg-white"
                  }`}
                  onClick={() => setActiveTab("account")}>
                  <ContactIcon className="w-[1.2rem]" /> Mon compte
                </li>
                <li
                  className={`py-2 px-4 flex items-center gap-1 rounded-sm cursor-pointer ${
                    activeTab === "demande"
                      ? "bg-secondary text-white"
                      : "bg-white"
                  }`}
                  onClick={() => setActiveTab("demande")}>
                  <InboxIcon className="w-[1.2rem]" /> Demande
                </li>
                <li
                  className={`py-2 px-4 flex items-center gap-1 rounded-sm cursor-pointer ${
                    activeTab === "rendezvous"
                      ? "bg-secondary text-white"
                      : "bg-white"
                  }`}
                  onClick={() => setActiveTab("rendezvous")}>
                  <CalendarDaysIcon className="w-[1.2rem]" /> Rendez-vous
                </li>
                <li
                  className={`py-2 px-4 flex items-center gap-1 rounded-sm cursor-pointer ${
                    activeTab === "subscription"
                      ? "bg-secondary text-white"
                      : "bg-white"
                  }`}
                  onClick={() => setActiveTab("subscription")}>
                  <Package2Icon className="w-[1.2rem]" />
                  Abonnements
                </li>
              </ul>
            </div>
            <div className="mt-6">{renderTabContent()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
