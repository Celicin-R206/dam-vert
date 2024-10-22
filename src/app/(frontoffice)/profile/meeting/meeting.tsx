import { ContactIcon, InboxIcon } from "lucide-react";
import React, { useState } from "react";
import Appointment from "./appoitment/appoitment";
import Appoint from "./appoint/appoint";

const Meet = () => {
  const [activeTab, setActiveTab] = useState("agenda");

  const renderTabContent = () => {
    switch (activeTab) {
      case "agenda":
        return <Appointment />;
      case "rdv":
        return <Appoint />;

      case "formation":
        return <div></div>;

      default:
        return null;
    }
  };

  return (
    <div>
      <div>
        <ul className="flex gap-4  custom-640:text-[12px] custom-640:flex-wrap">
          <li
            className={`py-2 px-4 text-[13px] flex items-center gap-1 rounded-full cursor-pointer ${
              activeTab === "agenda" ? "bg-green-600 text-white" : "bg-white"
            }`}
            onClick={() => setActiveTab("agenda")}>
            <ContactIcon className="w-[1.2rem]" /> Agenda
          </li>

          <li
            className={`py-2 px-4 text-[13px] flex items-center gap-1 rounded-full cursor-pointer ${
              activeTab === "rdv" ? "bg-green-600 text-white" : "bg-white"
            }`}
            onClick={() => setActiveTab("rdv")}>
            <InboxIcon className="w-[1.2rem]" /> Demander un rendez-vous
          </li>
        </ul>
      </div>
      <div>
        <div className="mt-6">{renderTabContent()}</div>
      </div>
    </div>
  );
};

export default Meet;
