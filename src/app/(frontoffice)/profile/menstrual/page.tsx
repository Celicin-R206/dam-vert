"use client";

import React, { useState } from "react";
import { BellPlusIcon, PlusIcon } from "lucide-react";
// @ts-ignore
import { DateRangePicker } from "react-date-range";
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

const data = {
  labels: ["Jour 1", "Jour 2", "Jour 3", "Jour 4", "Jour 5"],
  datasets: [
    {
      label: "Cycle menstruel",
      data: [0, 2, 3, 4, 1],
      fill: false,
      backgroundColor: "red",
      borderColor: "rgba(255,99,132,1)",
    },
  ],
};

const Menstrual = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  const [size, setSize] = useState(400);

  return (
    <div>
      <h1 className="my-4 text-[1.3rem] font-[800] ">Menstrual</h1>
      <div>
        <div className="flex items-center gap-4">
          <span className="bg-[#BE8CCE] text-white w-[2rem] h-[2rem] rounded-full grid place-content-center ">
            <PlusIcon />
          </span>
          <span className="flex items-center gap-1 text-[14px] bg-[#FE89AD] p-1 rounded-full px-4 text-white">
            <BellPlusIcon className="w-[1rem]" />
            Noticed acne
          </span>
          <span className="flex items-center gap-1 text-[14px] bg-[#FE89AD] p-1 rounded-full px-4 text-white">
            <BellPlusIcon className="w-[1rem]" />
            Noticed acne
          </span>
          <span className="flex items-center gap-1 text-[14px] bg-[#FE89AD] p-1 rounded-full px-4 text-white">
            <BellPlusIcon className="w-[1rem]" />
            Noticed acne
          </span>
        </div>
        <div></div>
      </div>
      <div className="mt-14 flex items-center gap-4">
        <div>
          <DateRangePicker
            //   @ts-ignore
            onChange={(item) => setState([item.selection])}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            ranges={state}
          />
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
          <div className="mt-[3rem]">
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center w-full border p-4 rounded-xl shadow-sm flex items-center justify-center flex-col gap-1">
                <h1 className="text-[#383838]">Preview Cycle length</h1>
                <p className="text-[1.7rem] font-[800]">30 Days</p>
                <div className="flex items-center gap-2">
                  <img
                    className="w-[.8rem]"
                    src="/assets/icons/heart.svg"
                    alt="heart"
                  />{" "}
                  Normal
                </div>
              </div>
              <div className="text-center w-full border p-4 rounded-xl shadow-sm flex items-center justify-center flex-col gap-1">
                <h1 className="text-[#383838]">Preview Cycle length</h1>
                <p className="text-[1.7rem] font-[800]">30 Days</p>
                <div className="flex items-center gap-2">
                  <img
                    className="w-[.8rem]"
                    src="/assets/icons/heart.svg"
                    alt="heart"
                  />{" "}
                  Normal
                </div>
              </div>
              <div className="text-center w-full border p-4 rounded-xl shadow-sm flex items-center justify-center flex-col gap-1">
                <h1 className="text-[#383838]">Preview Cycle length</h1>
                <p className="text-[1.7rem] font-[800]">30 Days</p>
                <div className="flex items-center gap-2">
                  <img
                    className="w-[.8rem]"
                    src="/assets/icons/heart.svg"
                    alt="heart"
                  />{" "}
                  Normal
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menstrual;
