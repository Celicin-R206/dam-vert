import { SendIcon } from "lucide-react";
import React from "react";

const Meet = () => {
  return (
    <div className="relative">
      <h1 className="text-[1.2rem] font-[800] mb-4 ">Chat</h1>
      <div className="flex flex-col gap-8 pb-24">
        <div className="flex items-center gap-4">
          <div>
            <div className="w-[3rem] h-[3rem] rounded-full overflow-hidden ">
              <img
                src="/assets/images/fakeFace.jpeg"
                className="w-full h-full object-cover"
                alt="fakeFace"
              />
            </div>
          </div>
          <span>
            <p className="bg-[#eee] p-4 rounded-xl ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              sed ipsum beatae eaque veritatis, magni iste! Architecto a harum
              perspiciatis, ad quam atque. Ad quia alias ipsum ea dolores in.
            </p>
            <small>Feb-10h42-2024</small>
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span>
            <p className="bg-[#eee] p-4 rounded-xl ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              sed ipsum beatae eaque veritatis, magni iste! Architecto a harum
              perspiciatis, ad quam atque. Ad quia alias ipsum ea dolores in.
            </p>
            <small>Feb-10h42-2024</small>
          </span>
          <div>
            <div className="w-[3rem] h-[3rem] rounded-full overflow-hidden ">
              <img
                src="/assets/icons/doctor.svg"
                className="w-full h-full object-cover"
                alt="fakeFace"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-10 absolute bottom-0 ">
        <span className="border-[2px] p-2 rounded-2xl w-full flex items-center gap-3 ">
          <input
            type="text"
            className="w-full p-2 outline-none"
            name="search"
            id="search"
          />
          <div className="w-[3rem] h-[3rem] bg-primary grid place-content-center rounded-2xl p-1 text-white ">
            <SendIcon />
          </div>
        </span>
      </div>
    </div>
  );
};

export default Meet;
