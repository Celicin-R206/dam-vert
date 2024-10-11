"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../../_components/navbar";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ClockIcon, MapPinHouseIcon } from "lucide-react";
import { MapFrontOffice } from "../../_components/map/map";
import { useParams } from "next/navigation";
import { EventType } from "@/app/utils/types/api";

const Page = () => {
  const params = useParams<{ id: any }>();

  const [event, setEvent] = useState<EventType | null>(null);
  useEffect(() => {
    if (params?.id) {
      const decodedId = JSON.parse(decodeURIComponent(params?.id as string));
      setEvent(decodedId);
    }
  }, [params?.id]);

  console.log(event);

  return (
    <div>
      <div className="h-[12rem] bg-[url('/assets/images/bg-event.jpg')] bg-fixed bg-no-repeat bg-cover w-full ">
        <div className="w-[1150px] m-auto relative ">
          <div className="py-8">
            <Navbar />
          </div>
        </div>
      </div>
      <div className="flex w-[1150px] my-[4rem] m-auto gap-[3rem] mt-14">
        <div className="w-[70%]">
          <div className=" h-[27rem]">
            <img
              className="rounded-2xl w-full h-full object-cover"
              // @ts-ignore
              src={event?.images?.[0]?.image_url}
              width={1000}
              height={1000}
              alt="event"
            />
          </div>
          <h1 className="text-[1.3rem] uppercase font-[800] mt-4 ">
            {event?.name_evenement}
          </h1>
          <div className="mt-4 flex items-center w-full  p-2 rounded-xl border">
            <div className="bg-secondary font-[800] text-[12px] rounded-xl p-2 w-[4rem] h-[4rem] flex flex-col items-center justify-center ">
              <p>FEB</p>
              <p>15</p>
            </div>
            <div className="w-full">
              <small className="text-[#7a7a7a] p-2 flex items-center gap-2">
                <span className="flex items-center gap-2">
                  <ClockIcon className="w-[12px]" /> 10:00pm - 02:00pm
                </span>
                <span className="flex items-center gap-2">
                  <ClockIcon className="w-[12px]" /> Speaker - John Alfred
                </span>
              </small>
              <hr className="w-full" />
              <small className="text-[#7a7a7a] p-2 flex items-center gap-2">
                <MapPinHouseIcon className="w-[12px]" /> Design Street,
                Melbourne, Australia - 235
              </small>
            </div>
          </div>
          <div className="mt-8">
            <p className="text-[#6b6b6b]">{event?.description}</p>
          </div>
          <div className="mt-8 h-[20rem]">
            <MapFrontOffice positions={event?.emplacement ?? null} />
          </div>
        </div>
        <div className="w-[30%] px-4 py-8 rounded-xl bg-secondary h-[20rem] sticky top-8 flex flex-col gap-8">
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-[1.2rem] font-[700]">January 03-07</h3>
            <hr className="h-[3px] bg-gray-500 w-[6rem] " />
            <h2 className="text-[1.3rem] text-center  ">
              {event?.emplacement?.name_emplacement}
            </h2>
            <div className="flex gap-3 mt-4 items-center">
              <div className="w-[3rem] h-[3rem] rounded-full overflow-hidden ">
                <Image
                  className="w-full h-full object-cover"
                  src={"/assets/images/fakeFace.jpeg"}
                  width={500}
                  height={500}
                  alt="face"
                />
              </div>
              <span className="uppercase">
                <h1 className="text-[13px] font-[800] ">
                  {event?.organisateurs?.[0]?.name}
                </h1>
                <p className="text-[12px]">Public speakear</p>
              </span>
            </div>
          </div>
          <div>
            <Button className="uppercase w-full py-6 text-[13px] ">
              Register now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
