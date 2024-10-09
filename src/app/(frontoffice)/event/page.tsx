import React from "react";
import Navbar from "../_components/navbar";
import Image from "next/image";
import { SearchIcon } from "lucide-react";

const Page = () => {
  return (
    <div>
      <div className="h-[30rem] bg-[url('/assets/images/bg-event.jpg')] bg-fixed bg-no-repeat bg-cover bg-center w-full ">
        <div className="w-[1150px] m-auto relative ">
          <Navbar />
          <div className="hero flex items-center mt-[3rem] flex-col gap-5">
            <div className="text-[4rem] text-white font-[1000] text-center relative ">
              <h1>Evenements</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1150px] mt-[-3rem] bg-secondary p-8 rounded-lg m-auto py-4 flex gap-8">
        <span className="flex flex-col gap-3 w-full">
          <small>looking from</small>
          <input
            type="text"
            name="type"
            id="type"
            className="p-4 rounded-lg border-primary  outline-none w-full"
          />
        </span>
        <span className="flex flex-col gap-3 w-full">
          <small>in</small>
          <input
            type="text"
            name="type"
            id="type"
            className=" p-4 rounded-lg  border-primary  outline-none w-full"
          />
        </span>
        <span className="flex flex-col gap-3 w-full">
          <small>When</small>
          <input
            type="text"
            name="type"
            id="type"
            className="p-4 rounded-lg  border-primary  outline-none w-full"
          />
        </span>
        <span className="bg-primary w-[20rem] text-white rounded-lg grid place-content-center">
          <SearchIcon />
        </span>
      </div>
      <div className="w-[1150px] m-auto py-6">
        <div className="grid grid-cols-3 gap-6 mt-14">
          {fakeEvents?.map((value, index) => {
            return (
              <div key={index}>
                <div className="h-[15rem] overflow-hidden rounded-t-[20px]">
                  <Image
                    className="w-full h-full object-cover"
                    src={value?.photo}
                    width={1000}
                    height={1000}
                    alt="event"
                  />
                </div>
                <div className="border px-4 py-5">
                  <div className="flex gap-4">
                    <div className="flex flex-col gap-2">
                      <span className="text-primary font-[900]">
                        {value?.date}
                      </span>
                      <span className="text-[1.5rem]">{value?.jour}</span>
                    </div>
                    <div>
                      <h1 className="font-[900] text-[1rem]">{value?.title}</h1>
                      <p className="mt-2 text-[13px] opacity-50">
                        {value?.description}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <button className="border border-primary text-[12px] rounded-full px-4 py-2 hover:bg-primary hover:text-white hover:transition-all hover:duration-500">
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
  );
};

const fakeEvents = [
  {
    id: 1,
    photo: "/assets/images/events.jpg",
    title: "Indonesia - Korea Conference",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Doloribus quidem facere perferendis soluta!",
    date: "SEPT",
    jour: "15",
  },
  {
    id: 2,
    photo: "/assets/images/events1.jpg",
    title: "Indonesia - Korea Conference",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Doloribus quidem facere perferendis soluta!",
    date: "SEPT",
    jour: "18",
  },
  {
    id: 3,
    photo: "/assets/images/events2.jpg",
    title: "Indonesia - Korea Conference",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Doloribus quidem facere perferendis soluta!",
    date: "SEPT",
    jour: "15",
  },
  {
    id: 4,
    photo: "/assets/images/events.jpg",
    title: "Indonesia - Korea Conference",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Doloribus quidem facere perferendis soluta!",
    date: "SEPT",
    jour: "15",
  },
  {
    id: 5,
    photo: "/assets/images/events1.jpg",
    title: "Indonesia - Korea Conference",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Doloribus quidem facere perferendis soluta!",
    date: "SEPT",
    jour: "18",
  },
  {
    id: 6,
    photo: "/assets/images/events2.jpg",
    title: "Indonesia - Korea Conference",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Doloribus quidem facere perferendis soluta!",
    date: "SEPT",
    jour: "15",
  },
];

export default Page;
