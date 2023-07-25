import React from "react";
import { VscVerifiedFilled } from "react-icons/vsc";
import { LiaBathSolid } from "react-icons/lia";
import { LiaBedSolid } from "react-icons/lia";
import house1 from "../assets/1.png";

const Listing = () => {
  return (
    <div className="flex md:flex-col md:w-full gap-2 p-1 md:p-4 shadow-xl rounded-sm">
      <div className="relative w-2/4 md:w-full">
        <p className="absolute top-2 left-2 flex  items-center gap-2 text-sm bg-black p-1 text-green-500">
          Verified <VscVerifiedFilled />
        </p>
        <img src={house1} alt="house" className="h-full" />
      </div>
      <div className="w-2/4 md:w-full">
        <p className="text-base md:text-2xl font-bold py-2 text-green-500">
          N50,732,234.00
        </p>
        <p className="text-black text-sm md:text-base  font-medium md:font-bold">
          #25, Somewhere in Lagos Avenue Lagos Island.
        </p>
        <div className="flex items-center gap-1 md:gap-2 my-4 flex-wrap md:flex-nowrap">
          <p className="flex items-center gap-1 text-sm font-normal md:font-medium text-neutral-500">
            <LiaBathSolid /> 2 Bathroom
          </p>
          <p className="flex items-center gap-1 md:gap-2 text-sm font-normal md:font-medium text-neutral-500">
            <LiaBedSolid /> 2 Bedroom
          </p>
        </div>
      </div>
    </div>
  );
};

export default Listing;
