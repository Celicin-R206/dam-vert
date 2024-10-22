"use client";

import React, { useState, useEffect } from "react";
import { PlusIcon, SaveIcon } from "lucide-react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import NumberTicker from "@/components/ui/number-ticker";
import BlobAnimation from "./blob";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  postMenstruation,
  useWomanInfoLast,
} from "@/app/utils/hooks/menstruation";
import { useUserStore } from "@/app/utils/stores/cookie";

const data = {
  labels: ["Jour 1", "Jour 2", "Jour 3", "Jour 4", "Jour 5"],
  datasets: [
    {
      label: "Cycle menstruel",
      data: [0, 2, 3, 0, 1],
      fill: false,
      backgroundColor: "red",
      borderColor: "rgba(255,99,132,1)",
    },
  ],
};

const Menstrual = () => {
  const [date, setDate] = React.useState<Date>();

  const date_post = date ? format(date, "yyyy-MM-dd") : null;
  const [number, setNumber] = useState<any>();

  const [size, setSize] = useState(400);

  const { client, loadClient } = useUserStore();
  useEffect(() => {
    if (!client) {
      loadClient();
    }
  }, [client, loadClient]);

  const addMenstrual = () => {
    postMenstruation(date_post, number, client?.access)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const { woman_ifon } = useWomanInfoLast(client?.access);

  console.log(woman_ifon);

  return (
    <div>
      <h1 className="my-4 text-[1.3rem] font-[800] ">Menstrual</h1>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Popover>
            <PopoverTrigger asChild>
              <span className="bg-[#BE8CCE] cursor-pointer text-white rounded-full flex items-center gap-2 p-2 pr-6 ">
                <PlusIcon /> Ajouter la date de vos règles
              </span>
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

          <div>
            <input
              type="text"
              className="p-2 border rounded-xl w-[250px]"
              placeholder="durée moyenne de votre regle"
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>

          {date && (
            <span
              onClick={() => addMenstrual()}
              className="flex cursor-pointer items-center gap-1 text-[14px] bg-[#FE89AD] p-2 rounded-full px-4 text-white">
              <SaveIcon className="w-[1rem]" />
              Ajouter
            </span>
          )}
        </div>

        <div>
          <div className="relative">
            <Image
              src={"/assets/icons/date.svg"}
              width={100}
              height={100}
              alt="date"
            />
            {date && (
              <div>
                <p className="absolute uppercase text-white top-[3px] left-[50%] translate-x-[-50%] ">
                  {" "}
                  {date.toLocaleString("default", { month: "short" })}{" "}
                </p>
                <div className="absolute text-center uppercase text-black top-[60%] translate-y-[-50%] left-[50%] translate-x-[-50%] ">
                  <p className="text-[1.2rem] font-[800] ">
                    {" "}
                    {date.getDate()}{" "}
                  </p>
                  <p> {date.getFullYear()} </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="mt-14 flex items-center gap-4">
        <div className="w-full">
          <div className="border p-4 rounded-xl">
            <h3 className="font-[700]">Période du règle</h3>
            <p className="mt-2">Mois : Octobre</p>
            <div className="flex mt-2 items-center justify-between gap-4 bg-red-200 text-red-700 p-2 rounded-lg ">
              <span className="grid text-[1.2rem] font-[800] place-content-center border border-[#fe89ad] w-full rounded-sm">
                8
              </span>
              <span className="grid text-[1.2rem] font-[800] place-content-center border border-[#fe89ad] w-full rounded-sm">
                9
              </span>
              <span className="grid text-[1.2rem] font-[800] place-content-center border border-[#fe89ad] w-full rounded-sm">
                10
              </span>
              <span className="grid text-[1.2rem] font-[800] place-content-center border border-[#fe89ad] w-full rounded-sm">
                11
              </span>
              <span className="grid text-[1.2rem] font-[800] place-content-center border border-[#fe89ad] w-full rounded-sm">
                12
              </span>
            </div>
          </div>
          <div className="mt-8 border p-4 rounded-xl">
            <h3 className="font-[700]">Période d'ovulation</h3>
            <p className="mt-2">Mois : Octobre</p>
            <div className="flex mt-2 items-center justify-between gap-4 bg-green-200 text-green-700 p-2 rounded-lg ">
              <span className="grid text-[1.2rem] font-[800] place-content-center border border-[#1e2c1a] w-full rounded-sm">
                8
              </span>
              <span className="grid text-[1.2rem] font-[800] place-content-center border border-[#1e2c1a] w-full rounded-sm">
                9
              </span>
              <span className="grid text-[1.2rem] font-[800] place-content-center border border-[#1e2c1a] w-full rounded-sm">
                10
              </span>
              <span className="grid text-[1.2rem] font-[800] place-content-center border border-[#1e2c1a] w-full rounded-sm">
                11
              </span>
              <span className="grid text-[1.2rem] font-[800] place-content-center border border-[#1e2c1a] w-full rounded-sm">
                12
              </span>
            </div>
          </div>
        </div>
        <div className="relative">
          <BlobAnimation size={size} color="red" />
          <div className="absolute text-center top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
            <h2 className="text-[1.3rem] ">Ovulation Day</h2>

            <p className="whitespace-pre-wrap text-[5rem] font-[800] tracking-tighter text-black dark:text-white">
              <NumberTicker value={15} />
            </p>
            <p>
              Period in <strong>30</strong> days
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h1>autre</h1>
        <div>
          <div>
            <Line data={data} />
          </div>
          <div className="mt-[3rem]"></div>
        </div>
      </div>
    </div>
  );
};

export default Menstrual;
