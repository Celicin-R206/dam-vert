"use client";

import React, { useEffect, useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import { postSession, useMyCourse } from "@/app/utils/hooks/course";
import { usePartnerStore, useUserStore } from "@/app/utils/stores/cookie";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormationType } from "@/app/utils/types/api";
import { Loader2Icon } from "lucide-react";

const avatarUrls = [
  "https://avatars.githubusercontent.com/u/16860528",
  "https://avatars.githubusercontent.com/u/20110627",
  "https://avatars.githubusercontent.com/u/106103625",
  "https://avatars.githubusercontent.com/u/59228569",
];

const Page = () => {
  const [active, setActive] = useState("all");

  return (
    <div>
      <div>
        <div className="mt-[2rem]">
          <div className="flex items-center justify-between">
            <h1 className="text-[2rem] font-[800] text-[#5A48B4] ">
              📒 Formation
            </h1>
            <Link href={"/backoffice/home/course/create"}>
              <button className="flex items-center gap-2 bg-[#5A48B4] p-4 rounded-xl text-white font-[700] ">
                {" "}
                <PlusIcon /> Ajouter une formation
              </button>
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
          <div className="mt-[2rem]">{active == "all" && <AllCourse />}</div>
        </div>
      </div>
    </div>
  );
};

export default Page;

const sessionSchema = z.object({
  titre: z.string().nonempty("Le titre du session est requis."),
  description: z
    .string()
    .min(10, "La description doit contenir au moins 10 caractères."),
});

type SessionForm = z.infer<typeof sessionSchema>;

const AllCourse = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SessionForm>({
    resolver: zodResolver(sessionSchema),
  });

  const [files, setFiles] = useState<any>();
  const [isLoading, setIsoloading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [idFormation, setIdFormation] = useState<number>();

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const { partner, loadPartner } = usePartnerStore();
  useEffect(() => {
    if (!partner) {
      loadPartner();
    }
  }, [partner, loadPartner]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    setFiles(files);
  };

  const { myCourse } = useMyCourse(partner?.access ?? "");

  const onSubmit = async (data: SessionForm) => {
    if (data && idFormation) {
      const formData = new FormData();
      formData.append("titre", data.titre);
      formData.append("description", data.description);
      formData.append("formation", String(idFormation));

      if (files) {
        for (let i = 0; i < files.length; i++) {
          formData.append("files", files[i]);
        }
      }

      setIsoloading(true);
      await postSession(formData, partner?.access ?? "")
        .then(() => {
          setIsoloading(false);
          toast.success("Votre formation a été publiée avec succès !", {
            duration: 6000,
          });
          handleOpen();
        })
        .catch((err) => {
          setIsoloading(false);
          toast.error(`${err?.response?.data?.error}`, {
            duration: 6000,
          });
        });
    }
  };

  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <div className="flex gap-8">
      <div className="w-[80%]">
        <Accordion type="single" collapsible className="w-full">
          {myCourse &&
            myCourse?.map((value: FormationType, index: number) => {
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
                      <div className="border p-2 rounded-sm bg-green-100">
                        <p
                          onClick={() => {
                            setIdFormation(value?.id_formation);
                            handleOpen();
                          }}>
                          ajouter une session
                        </p>
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
                                  <div className="cursor-pointer">
                                    <img
                                      src="/assets/icons/download.png"
                                      alt="download"
                                      className="w-[1.2rem]"
                                    />
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
      <div className="bg-white w-[50%] p-4 h-fit">
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

      <Dialog open={isOpen} onOpenChange={handleOpen}>
        <DialogTrigger asChild></DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-4 py-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="name">Titre du session</label>
                <Input {...register("titre")} className="col-span-3" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="username">Decription</label>
                <Input
                  {...register("description")}
                  id="username"
                  className="col-span-3"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="files">Fichier associer</label>
                <Input
                  type="file"
                  onChange={handleFileUpload}
                  multiple
                  className="col-span-3"
                  accept="application/pdf,video/*"
                />
              </div>
            </div>
            {!isLoading && <Button type="submit">Enrégistrer</Button>}
            {isLoading && (
              <Button disabled className="flex items-center gap-2">
                <Loader2Icon className="animate-spin h-4 w-4" />
                Enrégistrer
              </Button>
            )}
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};
