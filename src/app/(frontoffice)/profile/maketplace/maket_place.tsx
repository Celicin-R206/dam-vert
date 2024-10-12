"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUserStore } from "@/app/utils/stores/cookie";
import { postProduct, useMyProduct } from "@/app/utils/hooks/product";
import { EllipsisIcon, Loader2Icon } from "lucide-react";
import toast from "react-hot-toast";

const productSchema = z.object({
  titre: z.string().nonempty("Name is required."),
  price: z.string().nonempty("Price is required"),
  curency: z.string().nonempty("Curency est requis"),
  nombre: z.string(),
  description: z
    .string()
    .min(10, "La description doit contenir au moins 10 caractères."),

  file: z
    .custom<FileList>(
      (value) => value instanceof FileList && value.length > 0,
      {
        message: "File is required",
      }
    )
    .refine((files) => files && files[0]?.size <= 5 * 1024 * 1024, {
      message: "File size should be less than 5MB",
    }),
});

type ProductForm = z.infer<typeof productSchema>;

const MarketPlace = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleDialog = () => {
    setIsOpen(!isOpen);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProductForm>({
    defaultValues: { curency: "Arirary" },
    resolver: zodResolver(productSchema),
  });

  const { user, loadUser } = useUserStore();
  useEffect(() => {
    if (!user) {
      loadUser();
    }
  }, [user, loadUser]);

  const { myProduct, mutate } = useMyProduct(user?.access);

  const onSubmit = async (data: ProductForm) => {
    setIsLoading(true);
    if (data) {
      const formData = new FormData();
      formData.append("titre", data.titre);
      formData.append("price", data.price);
      formData.append("nombre", data.nombre);
      formData.append("curency", data.curency);
      formData.append("description", data.description);
      formData.append("images", data.file[0]);

      await postProduct(formData, user?.access)
        .then((res) => {
          console.log(res);
          setIsLoading(false);
          toast.success("Votre produit a été publiée avec succès !", {
            duration: 6000,
          });
          reset();
          handleDialog();
          mutate();
        })
        .catch((err) => {
          if (err.response.data.erreur) {
            toast.error(`${err?.response?.data?.erreur}`, {
              duration: 6000,
            });
          }
          setIsLoading(false);
        });
    }
  };

  const [step, setStep] = useState(1);

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="font-[700]">MarketPlace</h1>
        <div className="mt-[1rem]">
          <Button onClick={handleDialog}>Ajouter un produit</Button>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <h3
          onClick={() => setStep(1)}
          className={`px-4 py-1 border rounded-full cursor-pointer ${
            step === 1 && "bg-green-100 text-green-700"
          } `}>
          Mes produits
        </h3>
        <h3
          onClick={() => setStep(2)}
          className={`px-4 py-1 border rounded-full cursor-pointer ${
            step === 2 && "bg-green-100 text-green-700"
          } `}>
          Commande(s)
        </h3>
      </div>

      {step === 1 && (
        <div className="mt-8">
          <div className="product-table">
            {/* En-têtes */}
            <div className="grid grid-cols-5 gap-4 font-bold bg-gray-200 p-2">
              <div>Image</div>
              <div>Nom du produit</div>
              <div>Prix</div>
              <div>Nombre</div>
              <div>Actions</div>
            </div>

            {/* Liste des produits */}
            <div className="table-body">
              {myProduct &&
                myProduct.map((product: any, index: number) => (
                  <div
                    key={index}
                    className="grid grid-cols-5  items-center gap-4 p-2 border-b">
                    <div>
                      <div className="w-[4rem] h-[4rem] ">
                        <img
                          className="w-full object-cover "
                          src={product?.images?.[0]?.image_url}
                          alt="product"
                        />
                      </div>
                    </div>
                    <div>{product.titre}</div>
                    <div>{product.price} MGA</div>
                    <div>{product.nombre} Qte</div>
                    <div>
                      <span>
                        <EllipsisIcon className="text-[#767676]" />
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
      {step === 2 && (
        <div className="mt-8">
          <div className="product-table">
            {/* En-têtes */}
            <div className="grid grid-cols-5 gap-4 font-bold bg-gray-200 p-2">
              <div>Image</div>
              <div>Nom du produit</div>
              <div>Prix</div>
              <div>Nombre</div>
              <div>Actions</div>
            </div>

            {/* Liste des produits */}
            <div className="table-body">
              {myProduct &&
                myProduct.map((product: any, index: number) => (
                  <div
                    key={index}
                    className="grid grid-cols-5  items-center gap-4 p-2 border-b">
                    <div>
                      <div className="w-[4rem] h-[4rem] ">
                        <img
                          className="w-full object-cover "
                          src={product?.images?.[0]?.image_url}
                          alt="product"
                        />
                      </div>
                    </div>
                    <div>{product.titre}</div>
                    <div>{product.price} MGA</div>
                    <div>{product.nombre} Qte</div>
                    <div>
                      <span>
                        <EllipsisIcon className="text-[#767676]" />
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}

      <Dialog open={isOpen} onOpenChange={handleDialog}>
        <DialogTrigger asChild></DialogTrigger>
        <DialogContent className="sm:max-w-[525px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-2">
              <span className="flex flex-col gap-2">
                <label htmlFor="name">Nom du produit</label>
                <Input
                  type="text"
                  {...register("titre")}
                  placeholder="nom du poduit"
                />
                {errors.titre && (
                  <p className="text-red-600 text-[11px]">
                    {errors.titre.message}
                  </p>
                )}
              </span>
              <div className="flex gap-4">
                <span className="flex flex-col gap-2 w-full">
                  <label htmlFor="price">prix en (Ariary) </label>
                  <Input
                    type="number"
                    {...register("price")}
                    placeholder="prix du produit"
                  />
                  {errors.price && (
                    <p className="text-red-600 text-[11px]">
                      {errors.price.message}
                    </p>
                  )}
                </span>
                <span className="flex flex-col gap-2 w-full">
                  <label htmlFor="price">Nombre du produit </label>
                  <Input
                    type="number"
                    {...register("nombre")}
                    placeholder="prix du produit"
                  />
                  {errors.nombre && (
                    <p className="text-red-600 text-[11px]">
                      {errors.nombre.message}
                    </p>
                  )}
                </span>
              </div>
              <span className="flex flex-col gap-1">
                <label htmlFor="decription">Description</label>
                <textarea
                  {...register("description")}
                  name="description"
                  id="decription"
                  className="border-[1.5px] p-2 rounded-lg"
                  rows={3}></textarea>
                {errors.description && (
                  <p className="text-red-600 text-[11px]">
                    {errors.description.message}
                  </p>
                )}
              </span>
              <span className="flex flex-col gap-2">
                <label htmlFor="price">Image du produit </label>
                <Input
                  {...register("file")}
                  type="file"
                  placeholder="image du produit"
                />
                {errors.file && (
                  <p className="text-red-600 text-[11px]">
                    {errors.file.message}
                  </p>
                )}
              </span>
              <span className="w-full">
                {!isLoading ? (
                  <Button type="submit" className="w-full">
                    Publier
                  </Button>
                ) : (
                  <Button
                    className="flex items-center w-full justify-center gap-1"
                    disabled>
                    <Loader2Icon className="animate-spin h-4 w-4" /> patientez
                  </Button>
                )}
              </span>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MarketPlace;
