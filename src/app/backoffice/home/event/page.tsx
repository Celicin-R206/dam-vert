"use client";

import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { CircleEllipsisIcon, PlusIcon } from "lucide-react";
import AvatarCircles from "@/components/ui/avatar-circles";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "@/components/ui/animated-modal";
import { Input } from "@/components/ui/input";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const avatarUrls = [
  "https://avatars.githubusercontent.com/u/16860528",
  "https://avatars.githubusercontent.com/u/20110627",
  "https://avatars.githubusercontent.com/u/106103625",
  "https://avatars.githubusercontent.com/u/59228569",
];

const Page = () => {
  const [active, setActive] = useState("all");
  const [date, setDate] = React.useState<Date>();

  return (
    <div>
      <div>
        <div className="mt-[2rem]">
          <div className="flex items-center justify-between">
            <h1 className="text-[2rem] font-[800] text-[#5A48B4] ">
              🎫 Evenement
            </h1>

            <Modal>
              <ModalTrigger>
                <div className="flex items-center gap-2 bg-[#5A48B4] p-4 rounded-xl text-white font-[700] ">
                  {" "}
                  <PlusIcon /> Ajouter un evenement
                </div>
              </ModalTrigger>
              <ModalBody>
                <ModalContent>
                  <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                    Ajouter un evenement
                  </h4>
                  <form className="flex flex-col gap-4">
                    <span className="flex flex-col gap-2">
                      <label className="text-[13px] font-[800] " htmlFor="name">
                        Nom
                      </label>
                      <Input
                        type="text"
                        name="name"
                        placeholder="nom de l'evenement"
                      />
                    </span>
                    <span className="flex gap-4">
                      <span className="flex flex-col gap-2 w-full">
                        <label
                          className="text-[13px] font-[800] "
                          htmlFor="startDate">
                          Date début
                        </label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full justify-start text-left font-normal",
                                !date && "text-muted-foreground"
                              )}>
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {date ? (
                                format(date, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={date}
                              onSelect={setDate}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </span>
                      <span className="flex flex-col gap-2 w-full">
                        <label
                          className="text-[13px] font-[800] "
                          htmlFor="startDate">
                          Date fin
                        </label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full justify-start text-left font-normal",
                                !date && "text-muted-foreground"
                              )}>
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {date ? (
                                format(date, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={date}
                              onSelect={setDate}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </span>
                    </span>

                    <span className="flex gap-4 w-full">
                      <span className="flex flex-col gap-2 w-full">
                        <label
                          className="text-[13px] font-[800] "
                          htmlFor="name">
                          Longitude
                        </label>
                        <Input
                          type="text"
                          name="name"
                          placeholder="nom de l'evenement"
                        />
                      </span>
                      <span className="flex flex-col gap-2 w-full">
                        <label
                          className="text-[13px] font-[800] "
                          htmlFor="name">
                          Latutude
                        </label>
                        <Input
                          type="text"
                          name="name"
                          placeholder="nom de l'evenement"
                        />
                      </span>
                    </span>
                    <span className="flex gap-4 w-full">
                      <span className="flex flex-col gap-2 w-full">
                        <label
                          className="text-[13px] font-[800] "
                          htmlFor="name">
                          Latutude
                        </label>
                        <Input
                          type="file"
                          name="name"
                          placeholder="nom de l'evenement"
                        />
                      </span>
                    </span>
                    <span>
                      <button className="bg-[#5A48B4] p-3 rounded-xl w-full text-white ">
                        Ajouter
                      </button>
                    </span>
                  </form>
                </ModalContent>
              </ModalBody>
            </Modal>
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
              className="flex relative gap-6 h-fit bg-white rounded-xl p-6">
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
              <CircleEllipsisIcon className="w-[1.5rem]" />
            </div>
          );
        })}
      </div>
      <div className="bg-white w-[50%] h-fit">
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
