"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../../_components/navbar";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
import { EventType } from "@/app/utils/types/api";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { joinFormation } from "@/app/utils/hooks/course";
import { useUserStore } from "@/app/utils/stores/cookie";
import { Loader2Icon } from "lucide-react";
import Swal from "sweetalert2";

const Page = () => {
  const params = useParams<{ id: any }>();
  const router = useRouter();
  const [isLoading, seIsLoading] = useState(false);

  const [course, setCourse] = useState<EventType | null>(null);
  useEffect(() => {
    if (params?.id) {
      const decodedId = JSON.parse(decodeURIComponent(params?.id as string));
      setCourse(decodedId);
    }
  }, [params?.id]);

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const { user, loadUser } = useUserStore();
  useEffect(() => {
    if (!user) {
      loadUser();
    }
  }, [user, loadUser]);

  console.log(course);

  const handleJoinFormation = () => {
    seIsLoading(true); // @ts-ignore
    joinFormation(course?.id_formation, user?.access)
      .then((res) => {
        console.log(res);
        seIsLoading(false);
        handleOpen();
        Swal.fire({
          title: "Succès",
          text: "Vous avez rejoint la formation avec succès !",
          icon: "success",
          confirmButtonText: "OK",
        });
      })
      .catch((err) => {
        console.log(err);
        seIsLoading(false);
        Swal.fire({
          title: "Erreur",
          text: "Une erreur est survenue lors de la tentative de rejoindre la formation.",
          icon: "error",
          confirmButtonText: "Réessayer",
        });
      });
  };

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
              src="/assets/images/mooc.jpg"
              width={1000}
              height={1000}
              alt="event"
            />
          </div>

          <h1 className="text-[1.3rem] uppercase font-[800] mt-4 ">
            {/* @ts-ignore */}
            {course?.name_formation}
          </h1>

          <div className="mt-8">
            <p className="text-[#6b6b6b]">
              {/* @ts-ignore */}
              {course?.description_formation}
            </p>
          </div>
        </div>
        <div className="w-[30%] px-4 py-8 rounded-xl bg-secondary h-fit sticky top-8 flex flex-col gap-8">
          <div className="flex flex-col items-center gap-4">
            {/* @ts-ignore */}
            {course?.payments?.price && course?.payments?.validity_days ? (
              <div className="border border-primary w-full text-center">
                <h2 className="border-b border-primary p-4">
                  Formation payante
                </h2>
                <p className="border-b border-primary px-4 py-1">
                  {/* @ts-ignore */}
                  Prix : {course?.payments?.price} MGA{" "}
                </p>
                <p className="px-4 py-1">
                  {/* @ts-ignore */}
                  Validité : {course?.payments?.validity_days} Jour(s){" "}
                </p>
              </div>
            ) : (
              <div className="border border-primary w-full text-center">
                <h2 className=" p-4">Formation gratuite</h2>
              </div>
            )}
            <div className="flex gap-3 mt-4 items-center">
              <div className="w-[3rem] h-[3rem] rounded-full overflow-hidden ">
                <img
                  className="w-full h-full object-cover"
                  src={"/assets/images/fakeFace.jpeg"}
                  width={500}
                  height={500}
                  alt="face"
                />
              </div>

              <span className="uppercase">
                <h1 className="text-[13px] font-[800] ">
                  {/* @ts-ignore */}
                  {course?.organisateurs?.[0]?.first_name}
                  {/* @ts-ignore */}
                  {course?.organisateurs?.[0]?.last_name}
                </h1>
                <p className="text-[12px]">Propriétaire</p>
              </span>
            </div>
          </div>
          <div>
            <Button
              onClick={() => handleOpen()}
              className="uppercase w-full py-6 text-[13px] ">
              Register now
            </Button>
          </div>
        </div>
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
          <DialogFooter>
            {!isLoading ? (
              <Button type="submit" onClick={() => handleJoinFormation()}>
                Participez
              </Button>
            ) : (
              <Button disabled>
                <Loader2Icon className="animate-spin h-4 w-4" /> patientez
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Page;
