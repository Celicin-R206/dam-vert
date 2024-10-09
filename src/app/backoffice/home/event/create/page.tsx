"use client";

import React, { useEffect, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Calendar as CalendarIcon,
  MapPinnedIcon,
  MoveLeftIcon,
  MoveRightIcon,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { postEvent } from "@/app/utils/hooks/event";
import toast from "react-hot-toast";

import { Input } from "@/components/ui/input";
import { format } from "date-fns";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import { useUserStore } from "@/app/utils/stores/cookie";
import { useCoordonnerStore } from "@/app/utils/stores/eventStore";
import { Map } from "@/app/backoffice/_components/map/page";
import { Calendar } from "@/components/ui/calendar";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";

const eventSchema = z.object({
  nom: z.string().nonempty("Le titre de l'evenement est requis."),
  type: z.string().nonempty("le type est requis"),
  name_emplacement: z.string().nonempty("Nom de l'emplacement est requis"),
  description: z
    .string()
    .min(10, "La description doit contenir au moins 10 caractères."),
});

type EventForm = z.infer<typeof eventSchema>;

const Page = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EventForm>({
    resolver: zodResolver(eventSchema),
  });

  const { coordonner } = useCoordonnerStore();

  const { user, loadUser } = useUserStore();
  const [date1, setDate1] = React.useState<Date>();
  const [date2, setDate2] = React.useState<Date>();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [image, setImage] = useState<File | null>(null);
  const [isLoading, setIsoloading] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!isOpen);
  };

  const date_post1 = date1 ? format(date1, "yyyy-MM-dd") : null;
  const date_post2 = date2 ? format(date2, "yyyy-MM-dd") : null;

  const onSubmit = async (data: EventForm) => {
    if (data && coordonner) {
      const formData = new FormData();
      formData.append("name_evenement", data.nom);
      formData.append("description", data.description);
      formData.append("date_debut", `${date_post1}`);
      formData.append("date_fin", `${date_post2}`);
      formData.append("type", data?.type);
      formData.append("name_emplacement", data?.name_emplacement);
      formData.append("latitude", String(coordonner.lat));
      formData.append("longitude", String(coordonner.lng));
      if (image) {
        formData.append("images", image);
      }
      setIsoloading(true);
      await postEvent(formData, user?.access ?? "")
        .then(() => {
          setIsoloading(false);
          toast.success("Votre evenement a été publiée avec succès !", {
            duration: 6000,
          });
          reset();
          setSelectedImage("");
        })
        .catch((err) => {
          setIsoloading(false);
          toast.error(`${err?.response?.data?.error}`, {
            duration: 6000,
          });
        });
    }
  };

  useEffect(() => {
    if (!user) {
      loadUser();
    }
  }, [user, loadUser]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setSelectedImage(reader.result);
          setImage(file);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage("");
  };

  return (
    <div className="mt-[2rem]">
      <div className="flex justify-between items-center">
        <h1 className="text-[2rem] text-[#5A48B4] mb-8 font-[800] ">
          Add Event
        </h1>
        <Link href={"/backoffice/home/event"}>
          <span className="text-[#5A48B4] cursor-pointer border-[2px] border-[#5A48B4] py-1 px-4 rounded-full flex items-center gap-2 w-fit text-[12px]">
            Retour <MoveRightIcon className="w-[1rem]" />
          </span>
        </Link>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <span className="flex gap-2 w-full">
          <span className="flex flex-col gap-2 w-full">
            <label className="text-[13px] font-[800] " htmlFor="name">
              Titre de l'evenement
            </label>
            <Input
              className="bg-white"
              type="text"
              {...register("nom")}
              placeholder="nom de l'evenement"
            />
            {errors.nom && (
              <p className="text-red-600 text-[11px]">{errors.nom.message}</p>
            )}
          </span>
          <span className="flex flex-col gap-2 w-full">
            <label className="text-[13px] font-[800] " htmlFor="name">
              Type de l'evenement
            </label>
            <select
              {...register("type")}
              id="type"
              className="p-[5px] border-[2px] rounded-sm">
              <option value="">Type de l'evenement</option>
              <option value="P">Presentiel</option>
              <option value="V">Virtuel</option>
            </select>
            {errors.type && (
              <p className="text-red-600 text-[11px]">{errors.type.message}</p>
            )}
          </span>
        </span>

        <span className="flex gap-4">
          <span className="flex flex-col gap-2 w-full">
            <label className="text-[13px] font-[800] " htmlFor="startDate">
              Date début
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !date1 && "text-muted-foreground"
                  )}>
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date1 ? format(date1, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date1}
                  onSelect={setDate1}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </span>
          <span className="flex flex-col gap-2 w-full">
            <label className="text-[13px] font-[800] " htmlFor="startDate">
              Date fin
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !date2 && "text-muted-foreground"
                  )}>
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date2 ? format(date2, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date2}
                  onSelect={setDate2}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </span>
        </span>

        <span
          onClick={() => {
            handleOpen();
          }}
          className="flex bg-white cursor-pointer items-center gap-3 border-[2px] py-2 px-4 rounded-xl w-fit">
          <div className="w-[2.2rem] h-[2.2rem] grid place-content-center cursor-pointer items-center gap-2 bg-primary p-2  rounded-lg text-white">
            <MapPinnedIcon className="w-[1rem]" />
          </div>
          <label className="text-[13px] font-[800] " htmlFor="name">
            Ajouter un emplacement
          </label>
        </span>

        <span className="flex flex-col gap-1 w-full">
          <label className="text-[13px] font-[800] " htmlFor="name_emplacement">
            Nom de l'emplacement
          </label>
          <Input
            className="bg-white"
            {...register("name_emplacement")}
            type="text"
            placeholder="nom de l'emplacement"
          />
          {errors.name_emplacement && (
            <p className="text-red-600 text-[11px]">
              {errors.name_emplacement.message}
            </p>
          )}
        </span>

        <span className="flex gap-4 w-full">
          <span className="flex flex-col gap-1 w-full">
            <label className="text-[13px] font-[800] " htmlFor="name">
              Longitude
            </label>
            <Input
              disabled
              type="text"
              name="name"
              // @ts-ignore
              defaultValue={coordonner && coordonner?.lng}
              placeholder="longitude ..."
            />
          </span>
          <span className="flex flex-col gap-1 w-full">
            <label className="text-[13px] font-[800] " htmlFor="name">
              Latutude
            </label>
            <Input
              disabled
              type="text"
              name="name"
              // @ts-ignore
              defaultValue={coordonner && coordonner?.lat}
              placeholder="longitude ..."
            />
          </span>
        </span>

        <span className="flex gap-4 w-full">
          <span className="flex flex-col gap-2 w-full">
            <label className="text-[13px] font-[800] " htmlFor="name">
              Déscription
            </label>
            <textarea
              {...register("description")}
              id="desciption"
              placeholder="description de votre evenement"
              className="border-[2px] p-2 rounded-sm"
              cols={30}
              rows={2}></textarea>
            {errors.description && (
              <p className="text-red-600 text-[11px]">
                {errors.description.message}
              </p>
            )}
          </span>
        </span>
        <span className="flex gap-4 w-full">
          <span className="flex flex-col gap-2 w-full">
            <label className="text-[13px] font-[800] " htmlFor="name">
              Image associer
            </label>
            <Input
              onChange={handleImageUpload}
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

      <Dialog open={isOpen} onOpenChange={handleOpen}>
        <DialogTrigger asChild></DialogTrigger>

        <DialogContent className="sm:max-w-[60%]">
          <div className="grid gap-4 py-4">
            <Map />
          </div>
          <DialogFooter>
            <Button onClick={() => handleOpen()}>Enrégister</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Page;
