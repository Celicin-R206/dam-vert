import Image from "next/image";
import React from "react";
import Card from "./card";

const Appointment = () => {
  return (
    <div className="flex flex-col gap-4">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Appointment;
