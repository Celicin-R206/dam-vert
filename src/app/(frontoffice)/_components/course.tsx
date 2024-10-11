import {
  CalendarDaysIcon,
  StarIcon,
  UsersIcon,
  LibraryIcon,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

const Course = ({ value }: any) => {
  console.log(value);
  const router = useRouter();
  const selectCourse = (course: any) => {
    console.log(course);
    if (course) {
      const encodedEvent = encodeURIComponent(JSON.stringify(course));
      router.push(`/course/${encodedEvent}`);
    }
  };

  return (
    <div className="flex flex-col p-2 rounded-xl border">
      <div className="w-full h-full overflow-hidden">
        <Image
          className="rounded-sm w-full h-full object-cover "
          src="/assets/images/mooc.jpg"
          width={500}
          height={500}
          alt="formation"
        />
      </div>
      <div className="flex flex-col gap-2 p-3">
        <div className="flex items-center justify-between">
          <small className="bg-green-100 w-fit text-green-700 py-1 px-6 rounded-full  ">
            {value?.domaine}
          </small>
          {value?.is_free && (
            <small className="bg-red-100 uppercase font-[700] text-red-600 py-1 rounded-full px-6">
              Gratuite
            </small>
          )}
          {!value?.is_free && (
            <small className="bg-orange-100 uppercase font-[700] text-orange-600 py-1 rounded-full px-6">
              Payante
            </small>
          )}
        </div>
        <h1 className="mt-4 font-[800] text-[1.3rem] ">
          {value?.name_formation}
        </h1>
        <div className="flex items-center gap-1">
          <div className="w-[2.5rem] h-[2.5rem] overflow-hidden rounded-full ">
            <Image
              className="rounded-sm w-full h-full object-cover "
              src="/assets/images/fakeFace.jpeg"
              width={500}
              height={500}
              alt="formation"
            />
          </div>
          <span className="text-[12px] leading-[10px] ">
            <p>
              créer par{" "}
              <strong>
                {value?.organisateurs?.[0]?.first_name}{" "}
                {value?.organisateurs?.[0]?.last_name}
              </strong>
            </p>
            <p className="flex gap-1 items-center">
              <StarIcon className="text-[#FFD700] w-[1rem] " />
              4.9
            </p>
          </span>
        </div>
        <button
          onClick={() => selectCourse(value)}
          className="border mt-2 border-primary p-1 font-[600] text-primary hover:bg-primary hover:text-white transition-all duration-100 rounded-full">
          Continue classe
        </button>
        <div className="border-t pt-2 flex items-center justify-between ">
          <p className="text-[#7b7b7b] flex items-center gap-1 text-[12px]">
            <UsersIcon className="w-[1rem]" /> {value?.participants?.length}
          </p>
          <p className="text-[#7b7b7b] flex items-center gap-1 text-[12px]">
            <LibraryIcon className="w-[1rem]" /> 5
          </p>
          {value?.payments && (
            <p className="text-[#7b7b7b] flex items-center gap-1 text-[12px]">
              <CalendarDaysIcon className="w-[1rem]" />{" "}
              {value?.payments && value?.payments?.validity_days} jours validité
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Course;
