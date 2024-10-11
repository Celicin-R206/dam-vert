"use client";

import React, { useEffect, useState } from "react";

import { Calendar as MoveRightIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

import { Input } from "@/components/ui/input";

import { useUserStore } from "@/app/utils/stores/cookie";
import Link from "next/link";
import { Loader2Icon } from "lucide-react";
import { useRouter } from "next/navigation";
import { postCourse } from "@/app/utils/hooks/course";

const eventSchema = z.object({
  name_formation: z.string().nonempty("Le titre de l'evenement est requis."),
  domaine: z.string().nonempty("le type est requis"),
  description_formation: z
    .string()
    .min(10, "La description doit contenir au moins 10 caractères."),
  is_free: z.string(),
  price: z.string(),
  validity_days: z.string(),
});

type FormationForm = z.infer<typeof eventSchema>;

const Page = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<FormationForm>({
    resolver: zodResolver(eventSchema),
    defaultValues: {
      price: "0",
      validity_days: "0",
    },
  });

  const router = useRouter();

  const is_free = watch();

  const { user, loadUser } = useUserStore();
  useEffect(() => {
    if (!user) {
      loadUser();
    }
  }, [user, loadUser]);

  const [isLoading, setIsoloading] = useState(false);

  const onSubmit = async (data: FormationForm) => {
    if (data) {
      const formData = new FormData();
      formData.append("name_formation", data.name_formation);
      formData.append("domaine", data.domaine);
      formData.append("is_free", data?.is_free);
      formData.append("description_formation", data?.description_formation);

      if (is_free && is_free?.is_free == "false") {
        let payment = {
          price: data?.price,
          validity_days: data?.validity_days,
        };
        formData.append("payment", JSON.stringify(payment));
      }

      setIsoloading(true);
      await postCourse(formData, user?.access ?? "")
        .then(() => {
          setIsoloading(false);
          toast.success("Votre formation a été publiée avec succès !", {
            duration: 6000,
          });
          reset();
          router.push("/backoffice/home/course");
        })
        .catch((err) => {
          setIsoloading(false);
          toast.error(`${err?.response?.data?.error}`, {
            duration: 6000,
          });
        });
    }
  };

  return (
    <div className="mt-[2rem]">
      <div className="flex justify-between items-center">
        <h1 className="text-[2rem] text-[#5A48B4] mb-8 font-[800] ">
          Add Formation
        </h1>
        <Link href={"/backoffice/home/course"}>
          <span className="text-[#5A48B4] cursor-pointer border-[2px] border-[#5A48B4] py-1 px-4 rounded-full flex items-center gap-2 w-fit text-[12px]">
            Retour <MoveRightIcon className="w-[1rem]" />
          </span>
        </Link>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <span className="flex gap-2 w-full">
          <span className="flex flex-col gap-2 w-full">
            <label className="text-[13px] font-[800] " htmlFor="name">
              Titre de formation
            </label>
            <Input
              className="bg-white"
              type="text"
              {...register("name_formation")}
              placeholder="nom de l'evenement"
            />
            {errors.name_formation && (
              <p className="text-red-600 text-[11px]">
                {errors.name_formation.message}
              </p>
            )}
          </span>
          <span className="flex flex-col gap-2 w-full">
            <label className="text-[13px] font-[800] " htmlFor="name">
              Domaine de formation
            </label>
            <select
              {...register("domaine")}
              className="p-[5px] border-[2px] rounded-sm">
              <option value="">Type de formation</option>
              <option value="P">Presentiel</option>
              <option value="V">Virtuel</option>
            </select>
            {errors.domaine && (
              <p className="text-red-600 text-[11px]">
                {errors.domaine.message}
              </p>
            )}
          </span>
        </span>

        <span className="flex gap-4 w-full">
          <span className="flex flex-col gap-2 w-full">
            <label className="text-[13px] font-[800] " htmlFor="name">
              Déscription
            </label>
            <textarea
              {...register("description_formation")}
              placeholder="description de votre formation"
              className="border-[2px] p-2 rounded-sm"
              cols={30}
              rows={2}></textarea>
            {errors.description_formation && (
              <p className="text-red-600 text-[11px]">
                {errors.description_formation.message}
              </p>
            )}
          </span>
        </span>

        {/* <span className="flex gap-4 w-full">
          <span className="flex flex-col gap-2 w-full">
            <label className="text-[13px] font-[800] " htmlFor="name">
              fichier associer
            </label>
            <Input
              onChange={handleFileUpload}
              type="file"
              name="name"
              multiple
              accept="video/*, application/pdf, image/*"
              placeholder="selectionner votre fichier"
            />
          </span>
        </span> */}

        <span className="flex flex-col gap-2 w-full">
          <label className="text-[13px] font-[800] " htmlFor="name">
            Mode de formation
          </label>
          <select
            {...register("is_free")}
            className="p-[5px] border-[2px] rounded-sm">
            <option value="">Mode de formation</option>
            <option value="true">Gratuite</option>
            <option value="false">Payante</option>
          </select>
          {errors.is_free && (
            <p className="text-red-600 text-[11px]">{errors.is_free.message}</p>
          )}
        </span>

        {is_free?.is_free === "false" && (
          <div>
            <span className="flex gap-4 w-full">
              <span className="flex flex-col gap-2 w-full">
                <label className="text-[13px] font-[800] ">
                  Jour de validité
                </label>
                <Input
                  placeholder="validité"
                  {...register("validity_days")}
                  className="bg-white"
                  type="text"
                />
              </span>
            </span>

            <span className="flex gap-4 w-full">
              <span className="flex flex-col gap-2 w-full">
                <label className="text-[13px] font-[800] ">
                  Prix de formation
                </label>
                <Input
                  placeholder="prix..."
                  {...register("price")}
                  className="bg-white"
                  type="text"
                />
              </span>
            </span>
          </div>
        )}

        <span>
          {!isLoading ? (
            <button
              type="submit"
              className="bg-[#5A48B4] p-3 rounded-xl w-full text-white ">
              Ajouter
            </button>
          ) : (
            <button
              className="flex items-center justify-center opacity-50 bg-[#5A48B4] p-3 rounded-xl w-full text-white "
              disabled>
              <Loader2Icon className="animate-spin h-4 w-4" /> patientez
            </button>
          )}
        </span>
      </form>
    </div>
  );
};

export default Page;
