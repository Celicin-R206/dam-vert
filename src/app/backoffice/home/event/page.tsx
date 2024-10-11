"use client";

import React, { useEffect, useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import {
  CircleEllipsisIcon,
  MapPinnedIcon,
  MoveLeftIcon,
  PlusIcon,
} from "lucide-react";
import AvatarCircles from "@/components/ui/avatar-circles";
import Link from "next/link";
import { useMyEvent } from "@/app/utils/hooks/event";
import { useUserStore } from "@/app/utils/stores/cookie";
import { EventType } from "@/app/utils/types/api";
import { Skeleton } from "@/components/ui/skeleton";
import { useRouter } from "next/navigation";

const avatarUrls = [
  "https://avatars.githubusercontent.com/u/16860528",
  "https://avatars.githubusercontent.com/u/20110627",
  "https://avatars.githubusercontent.com/u/106103625",
];

const Page = () => {
  const [active, setActive] = useState("all");
  const { user, loadUser } = useUserStore();
  useEffect(() => {
    if (!user) {
      loadUser();
    }
  }, [user, loadUser]);
  const { myEvent } = useMyEvent(user?.access ?? "");

  return (
    <div>
      <div>
        <div className="mt-[2rem]">
          <div className="flex items-center justify-between">
            <h1 className="text-[2rem] font-[800] text-[#5A48B4] ">
              🎫 Evenement
            </h1>
            <Link href={"/backoffice/home/event/create"}>
              <div className="flex items-center gap-2 bg-[#5A48B4] p-4 rounded-xl text-white font-[700] ">
                <PlusIcon /> Ajouter un evenement
              </div>
            </Link>
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
          <div className="mt-[2rem]">
            {active == "all" && myEvent ? (
              // @ts-ignore
              <MyEvent myEvent={myEvent} />
            ) : (
              <MyEventSkelethon />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
// @ts-ignore

const MyEvent: React.FC<EventType> = ({ myEvent }) => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <div className="flex gap-8">
      <div className="flex flex-col w-[60%] gap-6">
        {myEvent?.map((value: EventType, index: number) => {
          return (
            <div
              key={index}
              className="flex relative gap-6 h-fit bg-white rounded-xl p-6">
              <div className="w-[15rem] h-[12rem] border-[2px] p-3 rounded-lg ">
                <img
                  className="w-full h-full object-cover"
                  src={
                    // @ts-ignore
                    value?.images?.[0]?.image_url
                      ? // @ts-ignore
                        value?.images?.[0]?.image_url
                      : "/assets/images/event.svg"
                  }
                  alt="event"
                />
              </div>
              <div className="w-full flex flex-col gap-6">
                <div className="flex flex-col gap-4 justify-between">
                  <div>
                    <h2 className="text-[1.2rem] font-[800] text-primary ">
                      {value?.name_evenement}
                    </h2>
                    <p className="text-[#727272] text-[14px] ">
                      {value?.description}
                    </p>
                  </div>
                  <div className="bg-[#ddd] w-fit px-5 rounded-full text-[12px] font-[700] ">
                    tag_event
                  </div>
                  <div>
                    <div className="font-[500]  text-[14px]">
                      <p>
                        <span className="text-[#919191]">date debut</span>{" "}
                        {value?.date_debut}
                      </p>
                    </div>
                    <div className="font-[500]  text-[14px]">
                      <p>
                        <span className="text-[#919191]">date fin</span>{" "}
                        {value?.date_fin}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end w-full">
                  <AvatarCircles
                    numPeople={value?.participants?.length}
                    avatarUrls={avatarUrls}
                  />
                </div>
              </div>
              <div className="absolute top-3 right-3 cursor-pointer">
                <CircleEllipsisIcon className="w-[1.5rem]" />
              </div>
            </div>
          );
        })}
      </div>
      <div className="bg-white w-[40%] sticky top-6 p-4 rounded-2xl h-[25rem]">
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
const MyEventSkelethon = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <div className="flex gap-8">
      <div className="flex flex-col w-[60%] gap-6">
        {[1, 2, 3, 4]?.map((value, index) => {
          return (
            <div
              key={index}
              className="flex relative gap-6 h-fit bg-white rounded-xl p-6">
              <div className="w-[15rem] h-[12rem] border-[2px] p-3 rounded-lg ">
                <Skeleton className="w-full h-full bg-gray-400 object-cover " />
              </div>
              <div className="w-full flex flex-col gap-6">
                <div className="flex flex-col gap-4 justify-between">
                  <div>
                    <h2 className="text-[1.2rem] font-[800] text-primary ">
                      <Skeleton className="w-[3rem] h-5 " />
                    </h2>
                    <div className="text-[#727272] flex flex-col gap-2 text-[14px] ">
                      <Skeleton className="w-[10rem] bg-gray-400 h-2 " />
                      <Skeleton className="w-[5rem] bg-gray-400 h-2 " />
                    </div>
                  </div>
                  <div className="bg-[#ddd] w-fit px-5 rounded-full text-[12px] font-[700] ">
                    tag_event
                  </div>
                  <div>
                    <div className="font-[500]  text-[14px]">
                      <div className="flex items-center gap-2">
                        <span className="text-[#919191]">date debut</span>{" "}
                        <Skeleton className="w-[5rem] bg-gray-400 h-3 " />
                      </div>
                    </div>
                    <div className="font-[500]  text-[14px]">
                      <div className="flex items-center gap-2">
                        <span className="text-[#919191]">date fin</span>{" "}
                        <Skeleton className="w-[5rem] bg-gray-400 h-3 " />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end w-full">
                  <AvatarCircles numPeople={0} avatarUrls={avatarUrls} />
                </div>
              </div>
              <div className="absolute top-3 right-3 cursor-pointer">
                <CircleEllipsisIcon className="w-[1.5rem]" />
              </div>
            </div>
          );
        })}
      </div>
      <div className="bg-white w-[40%] sticky top-6 p-4 rounded-2xl h-[25rem]">
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
