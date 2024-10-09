"use client";

import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { PlusIcon } from "lucide-react";
import AvatarCircles from "@/components/ui/avatar-circles";

const avatarUrls = [
  "https://avatars.githubusercontent.com/u/16860528",
  "https://avatars.githubusercontent.com/u/20110627",
  "https://avatars.githubusercontent.com/u/106103625",
  "https://avatars.githubusercontent.com/u/59228569",
];

const Page = () => {
  const [active, setActive] = useState("all");

  return (
    <div>
      <div>
        <div className="mt-[2rem]">
          <div className="flex items-center justify-between">
            <h1 className="text-[2rem] font-[800] text-[#5A48B4] ">
              📒 Formation
            </h1>
            <button className="flex items-center gap-2 bg-[#5A48B4] p-4 rounded-xl text-white font-[700] ">
              {" "}
              <PlusIcon /> Ajouter une formation
            </button>
          </div>
          <div className="mt-5">
            <ul className="flex items-center gap-8 text-[14px] font-[700] text-[#878787] ">
              <li
                className={`flex items-center gap-2 cursor-pointer ${
                  active == "all" && "text-black"
                }`}
                onClick={() => setActive("all")}>
                {active == "all" && (
                  <div className="w-[.7rem] rounded-full h-[.7rem] bg-secondary "></div>
                )}{" "}
                All
              </li>
              <li
                className={`flex items-center gap-2 cursor-pointer ${
                  active == "upcoming" && "text-black"
                }`}
                onClick={() => setActive("upcoming")}>
                {active == "upcoming" && (
                  <div className="w-[.7rem] rounded-full h-[.7rem] bg-secondary "></div>
                )}{" "}
                Upcoming
              </li>
              <li
                className={`flex items-center gap-2 cursor-pointer ${
                  active == "finished" && "text-black"
                }`}
                onClick={() => setActive("finished")}>
                {active == "finished" && (
                  <div className="w-[.7rem] rounded-full h-[.7rem] bg-secondary "></div>
                )}{" "}
                Finished
              </li>
            </ul>
          </div>
          <div className="mt-[2rem]">{active == "all" && <AllEvent />}</div>
        </div>
      </div>
    </div>
  );
};

export default Page;

const AllEvent = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <div className="flex gap-8">
      <div className="flex flex-col gap-6">
        {[1, 2, 3, 4]?.map((value, index) => {
          return (
            <div
              key={index}
              className="flex gap-6 h-fit bg-white rounded-xl p-6">
              <div className="w-[10rem] h-[10rem] border-[2px] p-3 rounded-lg ">
                <img
                  className="w-full h-full object-cover"
                  src="/assets/images/event.svg"
                  alt="event"
                />
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <h2 className="text-[1.2rem] font-[800] text-primary ">
                    titre de l'evenement
                  </h2>
                  <p className="text-[#727272] text-[14px] ">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores vel sit rerum, assumenda eveniet earum?
                  </p>
                </div>
                <div className="bg-[#ddd] w-fit px-5 rounded-full text-[12px] font-[700] ">
                  sexuel
                </div>
                <div className="font-[500]  text-[14px] flex items-center justify-between">
                  <p>
                    <span className="text-[#919191]">started</span> 15 July 2024
                  </p>
                  <AvatarCircles numPeople={99} avatarUrls={avatarUrls} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="bg-white w-[50%] p-4 h-fit">
        <h2 className="text-[#5A48B4] text-[1.2rem] mb-4 font-[800] ">
          Fitrer par date
        </h2>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border w-full"
        />
      </div>
    </div>
  );
};
