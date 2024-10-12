import React from "react";

const Page = () => {
  return (
    <div className="grid grid-cols-3 gap-4 w-full">
      <div className="border p-4 flex items-center gap-4 rounded-xl w-full ">
        <img
          src="/assets/icons/mysolde.svg"
          className="w-[3rem]"
          alt="deposit"
        />{" "}
        <div>
          <p>mon solde</p>
          <p>15000 MGA</p>
        </div>
      </div>
      <div className="border p-4 flex items-center gap-4 rounded-xl w-full ">
        <img
          src="/assets/icons/deposit.svg"
          className="w-[3rem]"
          alt="deposit"
        />{" "}
        <div>
          <p>depot</p>
          <p>50000 MGA</p>
        </div>
      </div>
      <div className="border p-4 flex items-center gap-4 rounded-xl w-full ">
        <img
          src="/assets/icons/withdrawal.svg"
          className="w-[3rem]"
          alt="deposit"
        />{" "}
        <div>
          <p>retrait</p>
          <p>5500 MGA</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
