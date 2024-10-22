"use client";

import React, { useState } from "react";
import Marquee from "@/components/ui/marquee";
import { CalendarClockIcon, SearchIcon } from "lucide-react";
import { useAllEvent } from "@/app/utils/hooks/event";
import { EventType } from "@/app/utils/types/api";
type SearchFilterKey = (typeof SEARCH_FILTER)[number]["value"];
import { Skeleton } from "@/components/ui/skeleton";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const [filter, setFilter] = useState<SearchFilterKey>("recent");
  const { allEvent } = useAllEvent();

  const selectEvent = (event: EventType) => {
    if (event) {
      const encodedEvent = encodeURIComponent(JSON.stringify(event));
      router.push(`/event/${encodedEvent}`);
    }
  };

  return (
    <div>
      <div className="h-[25rem] flex items-center justify-center bg-[url('/assets/images/bg-event.jpg')] bg-fixed bg-no-repeat bg-cover w-full ">
        <div className="text-[4rem] pt-[4rem] custom-850:text-[2rem] text-white font-[1000] text-center relative ">
          <h1>Evenements</h1>
        </div>
      </div>

      <Marquee
        repeat={25}
        className="[--duration:3s] py-5 w-full bg-primary text-primary-foreground">
        <h4 className="font-black text-xl">
          {SEARCH_FILTER.find((item) => item.value === filter)?.label}
        </h4>
      </Marquee>

      <div className="w-[85%] custom-1150:w-[90%] m-auto py-8 flex custom-850:flex-col gap-8">
        <div className="border p-3 rounded-xl h-fit sticky custom-850:relative top-[7rem]">
          <span className="border flex rounded-xl items-center gap-1 w-fit p-2">
            <input
              className="outline-none w-[18rem] "
              type="text"
              name="search"
              id="search"
            />
            <SearchIcon />
          </span>
          <div>
            <div className="uppercase text-[14px] font-[800] mt-[2rem] ">
              Event Categorie
            </div>
            <div className="mt-8 border p-4 rounded-lg">
              <ul className="flex flex-col gap-5">
                <li className="flex justify-between items-center">
                  <span>Dried</span>
                  <span className="py-1 text-[12px] px-4 border rounded-lg">
                    06
                  </span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Sexuel</span>
                  <span className="py-1 text-[12px] px-4 border rounded-lg">
                    12
                  </span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Education</span>
                  <span className="py-1 text-[12px] px-4 border rounded-lg">
                    10
                  </span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Juice</span>
                  <span className="py-1 text-[12px] px-4 border rounded-lg">
                    50
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="flex items-center justify-between border rounded-lg bg-white p-2">
            <p className="text-[#808080]">Showing 24 results</p>
            <div>
              <select
                name="filter"
                className="w-[15rem] border outline-none py-2 rounded-lg"
                id="filter">
                <option value="">Filter</option>
                <option value="">Filter</option>
                <option value="">Filter</option>
                <option value="">Filter</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 custom-1150:grid-cols-1 gap-6 mt-14">
            {allEvent?.map((value: EventType, index: number) => {
              return (
                <div key={index}>
                  <div className="h-[15rem] border-[2px] overflow-hidden rounded-t-[20px]">
                    <img
                      className="w-full h-full object-cover"
                      // @ts-ignore
                      src={value?.images?.[0]?.image_url}
                      width={1000}
                      height={1000}
                      alt="event"
                    />
                  </div>
                  <div className="border px-4 py-5">
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col gap-2">
                        <span className="text-primary flex items-center">
                          <CalendarClockIcon className="w-[1rem]" />
                          <span className="text-[13px]  font-[700] px-3 p-1 rounded-sm">
                            {value?.date_debut} à {value?.date_fin}
                          </span>
                        </span>
                      </div>
                      <div>
                        <h1 className="font-[900] text-[1rem]">
                          {value?.name_evenement}
                        </h1>
                        <p className="mt-2 text-[13px] opacity-50">
                          {value?.description}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <button
                        onClick={() => selectEvent(value)}
                        className="border w-full mt-2 border-primary p-1 font-[600] text-primary hover:bg-primary hover:text-white transition-all duration-100 rounded-full">
                        Rerserver
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
            {!allEvent &&
              [1, 2, 3, 4]?.map((value, index) => {
                return (
                  <div key={index}>
                    <div className="h-[15rem] border-[2px] overflow-hidden rounded-t-[20px]">
                      <Skeleton className="w-full h-full object-cover bg-gray-100 " />
                    </div>
                    <div className="border px-4 py-5">
                      <div className="flex flex-col gap-4">
                        <div className="flex uppercase flex-col gap-2">
                          <span className="text-primary flex items-center gap-4">
                            Date Le {"  "}
                            <span className="bg-secondary text-[12px]  font-[700] px-3 p-1 rounded-sm">
                              <Skeleton className="w-[5rem] bg-gray-400 h-3 " />
                            </span>{" "}
                            à{" "}
                            <span className="bg-secondary  text-[12px] font-[700] px-3 p-1 rounded-sm">
                              <Skeleton className="w-[5rem] bg-gray-400 h-3 " />
                            </span>
                          </span>
                        </div>
                        <div>
                          <h1 className="font-[900] text-[1rem]">
                            <Skeleton className="w-[5rem] bg-gray-400 h-3 " />
                          </h1>
                          <div className="mt-2 text-[13px] opacity-50 flex flex-col gap-2">
                            <Skeleton className="w-[10rem] bg-gray-400 h-2 " />
                            <Skeleton className="w-[17rem] bg-gray-400 h-2 " />
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 w-full">
                        <button className="border w-full border-primary text-[12px] rounded-full px-4 py-2 hover:bg-primary hover:text-white hover:transition-all hover:duration-500">
                          Rerserver
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

const SEARCH_FILTER = [
  {
    value: "recent",
    label: "Evénements",
  },
  {
    value: "week",
    label: "Il y a une semaine",
  },
  {
    value: "month",
    label: "Il y a un mois",
  },
  {
    value: "old",
    label: "Plus anciennes",
  },
] as const;
export default Page;
