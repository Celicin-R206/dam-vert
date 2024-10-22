"use client";

import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";

const AccountSetting = () => {
  return (
    <div className="flex flex-col gap-4">
      <form className="grid grid-cols-2 custom-640:grid-cols-1 gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="opacity-75 text-[14px]">
            Nom
          </label>
          <input
            type="text"
            name="nom"
            id="nom"
            defaultValue={"RAHANDRIMIRAY Celcin"}
            className="border border-[#ddd] p-2 rounded-sm "
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="opacity-75 text-[14px]">
            Adresse email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            defaultValue={"rahandrimiray@gamil.com"}
            className="border border-[#ddd] p-2 rounded-sm "
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="opacity-75 text-[14px]">
            Téléphone
          </label>
          <input
            type="text"
            name="mobile"
            id="mobile"
            defaultValue={+2612304165}
            className="border border-[#ddd] p-2 rounded-sm "
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="opacity-75 text-[14px]">
            Localisation
          </label>
          <input
            type="text"
            name="location"
            id="location"
            defaultValue={"Fianarantsoa"}
            className="border border-[#ddd] p-2 rounded-sm "
          />
        </div>
      </form>
      <Button className="w-fit">Modifier</Button>
    </div>
  );
};

export default AccountSetting;
