import React, { useState } from "react";
import { EyeIcon, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

type cardProps = {
  value: any;
};

const CardShop: React.FC<cardProps> = ({ value }) => {
  const [isOpen, seIsOpen] = useState(false);
  const handleDialog = () => {
    seIsOpen(!isOpen);
  };

  return (
    <div className="border rounded-2xl group">
      <div className="w-full grid place-content-center">
        <div className=" p-4 w-[20rem] grid place-content-center h-[20rem] ">
          <img
            className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
            src={value?.images?.[0]?.image_url}
            alt="img_shop"
          />
        </div>
        <div className="showhover flex items-center justify-center gap-2 opacity-0 mb-5 group-hover:opacity-100 transition-all duration-300">
          <span className="border cursor-pointer p-2 rounded-lg w-[2rem] h-[2rem] grid place-content-center">
            <EyeIcon className="w-[1rem]" />
          </span>
          <span className="border cursor-pointer p-2 rounded-lg w-[2rem] h-[2rem] grid place-content-center">
            <ShoppingBag className="w-[1rem]" />
          </span>
        </div>
      </div>
      <div className="p-4 border-t flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <p className="text-[#727272]">Quantité : {value?.nombre} </p>
          <div className="flex items-center gap-1">
            <img src="/assets/icons/star.svg" alt="star" className="w-[1rem]" />
            <img src="/assets/icons/star.svg" alt="star" className="w-[1rem]" />
            <img src="/assets/icons/star.svg" alt="star" className="w-[1rem]" />
            <img src="/assets/icons/star.svg" alt="star" className="w-[1rem]" />
            <img
              src="/assets/icons/star_outline.svg"
              alt="star"
              className="w-[1rem]"
            />
          </div>
        </div>
        <h1 className="text-[1rem] text-[#3e3e3e] font-[500]">
          {value?.titre}
        </h1>
        <div className="flex text-[#727272] items-center justify-between">
          <p>{value?.price} MGA</p>
          <Button>Acheter</Button>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={handleDialog}>
        <DialogTrigger asChild>
          <Button variant="outline">Edit Profile</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle></DialogTitle>
          </DialogHeader>
          <div></div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CardShop;
