import React, { useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";
import { useClientCourse } from "@/app/utils/hooks/course";
import { useUserStore } from "@/app/utils/stores/cookie";
import { FormationType } from "@/app/utils/types/api";
import { PlayIcon } from "lucide-react";

const Formation = () => {
  const { user, loadUser } = useUserStore();
  useEffect(() => {
    if (!user) {
      loadUser();
    }
  }, [user, loadUser]);

  const { ClientCourse } = useClientCourse(user?.access);

  return (
    <div>
      <h2 className="text-[1.2rem] font-[800] ">Formations suivie</h2>
      <Accordion type="single" collapsible className="w-full">
        {ClientCourse &&
          ClientCourse?.map((value: FormationType, index: number) => {
            return (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>
                  <div className="flex justify-between items-center w-full">
                    <div className="flex items-center gap-2">
                      <div className="w-[6rem] h-[6rem] overflow-hidden rounded-xl ">
                        <img
                          className="w-full h-full object-cover"
                          src="/assets/icons/formation_.png"
                          alt="formation"
                        />
                      </div>
                      <div className="text-left">
                        <h1 className="text-[1.2rem] font-[800]">
                          {value?.name_formation}
                        </h1>
                        <small className="text-left">Formation</small>
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-4">
                    {/* @ts-ignore */}
                    {value?.sessions?.map((value, index) => {
                      return (
                        <div
                          key={index}
                          className="border-[2px] flex flex-col gap-4 rounded-sm p-4 ">
                          <p>Session N° {index + 1}</p>
                          <div className="flex items-center justify-between bg-secondary p-2 rounded-xl">
                            <span>
                              Titre : <strong>{value?.titre}</strong>
                            </span>
                            <div className="flex cursor-pointer border p-2 items-center  rounded-lg bg-green-100 gap-2">
                              <span>Tout télécharger</span>
                              <img
                                src="/assets/icons/download.png"
                                alt="download"
                                className="w-[1.5rem]"
                              />
                            </div>
                          </div>
                          {/* @ts-ignore */}
                          {value?.files?.map((file, index) => {
                            return (
                              <div
                                key={index}
                                className="flex p-2 justify-between items-center border-b mt-2">
                                <div className="font-[700] text-[12px] ">
                                  cours N° {index + 1}
                                </div>
                                <div className="flex items-center gap-4">
                                  <div className="cursor-pointer flex items-center gap-2 border rounded-full p-1 px-4 ">
                                    Télécharger
                                    <img
                                      src="/assets/icons/download.png"
                                      alt="download"
                                      className="w-[1.2rem]"
                                    />
                                  </div>
                                  <div className="cursor-pointer flex items-center gap-1 bg-red-500 text-white rounded-full p-1 px-4 ">
                                    <PlayIcon className="w-[1rem] stroke-[3px] " />
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      );
                    })}
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
      </Accordion>
    </div>
  );
};

export default Formation;
