import { CircleIcon, BellIcon } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <span className="flex items-center gap-1 border-[2px] p-3 rounded-xl">
          <CircleIcon />
          <input
            type="text"
            name="text"
            id="text"
            placeholder="rechercher ...."
            className="outline-none bg-transparent w-[20rem]"
          />
        </span>
      </div>
      <div className="flex items-center gap-[3rem]">
        <button className="bg-[#FFD782] px-8 py-3 rounded-xl text-[13px] font-[800]">
          Start for premium
        </button>
        <div>
          <BellIcon />
        </div>
        <div>
          <img
            src="https://assets.aceternity.com/manu.png"
            className="h-7 w-7 flex-shrink-0 rounded-full"
            width={50}
            height={50}
            alt="Avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
