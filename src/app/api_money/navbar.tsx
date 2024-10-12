import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between  ">
        <div>
          <img src="/assets/icons/logo.png" className="w-[5rem]" alt="logo" />
        </div>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <img
              className="w-[1.5rem]"
              src="/assets/icons/solde.svg"
              alt="solde"
            />
            <p className="font-[700]">50000.00 MGA</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-[2rem] h-[2rem] rounded-full overflow-hidden ">
              <img
                className="w-full object-cover "
                src="/assets/images/fakeFace.jpeg"
                alt="face"
              />
            </div>
            <div>
              <p>John Doe</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
