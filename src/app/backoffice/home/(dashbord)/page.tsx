"use client";

import { usePartnerStore } from "@/app/utils/stores/cookie";
import { CalendarClockIcon, Filter, MapPinIcon, Users } from "lucide-react";
import React, { useEffect } from "react";

const Page = () => {
  const { partner, loadPartner } = usePartnerStore();

  useEffect(() => {
    if (!partner) {
      loadPartner();
    }
  }, [partner, loadPartner]);

  return (
    <div>
      <div className="mt-[2rem]">
        <h1 className="text-[2rem] font-[800] text-[#5A48B4] ">
          👋 Bonjour {partner && partner?.name}
        </h1>
        <div className="mt-8 grid grid-cols-2 gap-6">
          <div className="flex bg-[#FFDCD6] p-6 rounded-xl text-[#E54338] gap-4">
            <div className="w-[7rem] h-[7rem] bg-white p-2 rounded-lg ">
              <img src="/assets/icons/event.png" alt="event" />
            </div>
            <div>
              <h2 className="font-[800] text-[1.5rem] ">Evenement(s)</h2>
              <p className="text-[2rem] font-[800] ">52</p>
            </div>
          </div>
          <div className="flex bg-[#EAF9E6] p-6 rounded-xl text-[#2E5834] gap-4">
            <div className="w-[7rem] h-[7rem] bg-white p-2 rounded-lg  ">
              <img src="/assets/icons/formation.png" alt="event" />
            </div>
            <div>
              <h2 className="font-[800] text-[1.5rem] ">Formation(s)</h2>
              <p className="text-[2rem] font-[800]">10</p>
            </div>
          </div>
        </div>

        <div className="mt-[3rem]">
          <ListEvent />
        </div>
        <div className="mt-[3rem]">
          <ListCours />
        </div>
      </div>
    </div>
  );
};

export default Page;

const ListEvent = () => {
  return (
    <div className="bg-white p-8 rounded-xl ">
      <div className="flex justify-between">
        <h1 className="text-[1.1rem] text-[#5A48B4] font-[700] ">
          Les 5 dernier de mes evenemts ✨
        </h1>
        <div className="flex items-center gap-1 border p-2 rounded-xl w-fit border-[#ddd] text-[#7d7d7d] ">
          <Filter className="w-[1rem]" /> filtre
        </div>
      </div>

      <div className="mt-5">
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <div className="flex gap-4 items-center">
              <div className="w-[4rem] h-[4rem] rounded-xl overflow-hidden ">
                <img
                  className="w-full h-full object-cover"
                  src="/assets/images/events1.jpg"
                  alt="events"
                />
              </div>
              <div>
                <h2 className="text-[1rem] font-[800] uppercase ">
                  Titre de l'evenement
                </h2>
                <div className="mt-3 flex items-center  gap-3">
                  <span className="flex items-center gap-2 text-[13px] font-[600] opacity-60 ">
                    <CalendarClockIcon className="w-[1rem] " /> 17 septembre
                    2024 à 15h00
                  </span>
                  <span className="flex items-center gap-2 text-[13px] font-[600] opacity-60 ">
                    <Users className="w-[1rem] " /> + 210 inscrit
                  </span>
                  <span className="flex items-center gap-2 text-[13px] font-[600] opacity-60 ">
                    <MapPinIcon className="w-[1rem] " /> Tamabao Fianarantsoa
                  </span>
                </div>
              </div>
            </div>
            <button className="border rounded-xl text-[12px] font-[700] border-primary px-6 py-2 ">
              Détail
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex gap-4 items-center">
              <div className="w-[4rem] h-[4rem] rounded-xl overflow-hidden ">
                <img
                  className="w-full h-full object-cover"
                  src="/assets/images/events1.jpg"
                  alt="events"
                />
              </div>
              <div>
                <h2 className="text-[1rem] font-[800] uppercase ">
                  Titre de l'evenement
                </h2>
                <div className="mt-3 flex items-center  gap-3">
                  <span className="flex items-center gap-2 text-[13px] font-[600] opacity-60 ">
                    <CalendarClockIcon className="w-[1rem] " /> 17 septembre
                    2024 à 15h00
                  </span>
                  <span className="flex items-center gap-2 text-[13px] font-[600] opacity-60 ">
                    <Users className="w-[1rem] " /> + 210 inscrit
                  </span>
                  <span className="flex items-center gap-2 text-[13px] font-[600] opacity-60 ">
                    <MapPinIcon className="w-[1rem] " /> Tamabao Fianarantsoa
                  </span>
                </div>
              </div>
            </div>
            <button className="border rounded-xl text-[12px] font-[700] border-primary px-6 py-2 ">
              Détail
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex gap-4 items-center">
              <div className="w-[4rem] h-[4rem] rounded-xl overflow-hidden ">
                <img
                  className="w-full h-full object-cover"
                  src="/assets/images/events1.jpg"
                  alt="events"
                />
              </div>
              <div>
                <h2 className="text-[1rem] font-[800] uppercase ">
                  Titre de l'evenement
                </h2>
                <div className="mt-3 flex items-center  gap-3">
                  <span className="flex items-center gap-2 text-[13px] font-[600] opacity-60 ">
                    <CalendarClockIcon className="w-[1rem] " /> 17 septembre
                    2024 à 15h00
                  </span>
                  <span className="flex items-center gap-2 text-[13px] font-[600] opacity-60 ">
                    <Users className="w-[1rem] " /> + 210 inscrit
                  </span>
                  <span className="flex items-center gap-2 text-[13px] font-[600] opacity-60 ">
                    <MapPinIcon className="w-[1rem] " /> Tamabao Fianarantsoa
                  </span>
                </div>
              </div>
            </div>
            <button className="border rounded-xl text-[12px] font-[700] border-primary px-6 py-2 ">
              Détail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ListCours = () => {
  return (
    <div className="bg-white p-8 rounded-xl ">
      <div className="flex justify-between">
        <h1 className="text-[1.1rem] text-[#5A48B4] font-[700] ">
          Les 5 dernier de mes formations ✨
        </h1>
        <div className="flex items-center gap-1 border p-2 rounded-xl w-fit border-[#ddd] text-[#7d7d7d] ">
          <Filter className="w-[1rem]" /> filtre
        </div>
      </div>

      <div className="mt-5">
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <div className="flex gap-4 items-center">
              <div className="w-[4rem] h-[4rem] rounded-xl overflow-hidden ">
                <img
                  className="w-full h-full object-cover"
                  src="/assets/images/events1.jpg"
                  alt="events"
                />
              </div>
              <div>
                <h2 className="text-[1rem] font-[800] uppercase ">
                  Titre de l'evenement
                </h2>
                <div className="mt-3 flex items-center  gap-3">
                  <span className="flex items-center gap-2 text-[13px] font-[600] opacity-60 ">
                    <CalendarClockIcon className="w-[1rem] " /> 17 septembre
                    2024 à 15h00
                  </span>
                  <span className="flex items-center gap-2 text-[13px] font-[600] opacity-60 ">
                    <Users className="w-[1rem] " /> + 210 inscrit
                  </span>
                  <span className="flex items-center gap-2 text-[13px] font-[600] opacity-60 ">
                    <MapPinIcon className="w-[1rem] " /> Tamabao Fianarantsoa
                  </span>
                </div>
              </div>
            </div>
            <button className="border rounded-xl text-[12px] font-[700] border-primary px-6 py-2 ">
              Détail
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex gap-4 items-center">
              <div className="w-[4rem] h-[4rem] rounded-xl overflow-hidden ">
                <img
                  className="w-full h-full object-cover"
                  src="/assets/images/events1.jpg"
                  alt="events"
                />
              </div>
              <div>
                <h2 className="text-[1rem] font-[800] uppercase ">
                  Titre de l'evenement
                </h2>
                <div className="mt-3 flex items-center  gap-3">
                  <span className="flex items-center gap-2 text-[13px] font-[600] opacity-60 ">
                    <CalendarClockIcon className="w-[1rem] " /> 17 septembre
                    2024 à 15h00
                  </span>
                  <span className="flex items-center gap-2 text-[13px] font-[600] opacity-60 ">
                    <Users className="w-[1rem] " /> + 210 inscrit
                  </span>
                  <span className="flex items-center gap-2 text-[13px] font-[600] opacity-60 ">
                    <MapPinIcon className="w-[1rem] " /> Tamabao Fianarantsoa
                  </span>
                </div>
              </div>
            </div>
            <button className="border rounded-xl text-[12px] font-[700] border-primary px-6 py-2 ">
              Détail
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex gap-4 items-center">
              <div className="w-[4rem] h-[4rem] rounded-xl overflow-hidden ">
                <img
                  className="w-full h-full object-cover"
                  src="/assets/images/events1.jpg"
                  alt="events"
                />
              </div>
              <div>
                <h2 className="text-[1rem] font-[800] uppercase ">
                  Titre de l'evenement
                </h2>
                <div className="mt-3 flex items-center  gap-3">
                  <span className="flex items-center gap-2 text-[13px] font-[600] opacity-60 ">
                    <CalendarClockIcon className="w-[1rem] " /> 17 septembre
                    2024 à 15h00
                  </span>
                  <span className="flex items-center gap-2 text-[13px] font-[600] opacity-60 ">
                    <Users className="w-[1rem] " /> + 210 inscrit
                  </span>
                  <span className="flex items-center gap-2 text-[13px] font-[600] opacity-60 ">
                    <MapPinIcon className="w-[1rem] " /> Tamabao Fianarantsoa
                  </span>
                </div>
              </div>
            </div>
            <button className="border rounded-xl text-[12px] font-[700] border-primary px-6 py-2 ">
              Détail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
