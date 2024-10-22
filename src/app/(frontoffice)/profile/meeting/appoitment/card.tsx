import Image from "next/image";
import React from "react";

const Card = () => {
  return (
    <div className="grid grid-cols-4 border p-3 rounded-2xl items-center">
      <div className="w-[5rem] h-[5rem]  rounded-2xl overflow-hidden ">
        <Image
          className="w-full h-full object-cover"
          src={"/assets/images/doctor.jpg"}
          width={500}
          height={500}
          alt="doctor"
        />
      </div>
      <div>
        <h1 className="font-[800]">RAHANDRIMIRAY Celicin</h1>
        <h1 className="text-[#494949]">ABC Hospital</h1>
      </div>
      <div>
        <h1 className="font-[800]">Physican</h1>
        <h1 className="text-[#494949]">Medical</h1>
      </div>
      <div>
        <h1 className="font-[800]">25 Aug 2024 </h1>
        <h1 className="text-[#494949]">10 AM - 08 PM</h1>
      </div>
    </div>
  );
};

export default Card;
