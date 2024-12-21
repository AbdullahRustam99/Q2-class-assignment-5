import Image from "next/image";
import React from "react";
import Quote from "@/app/images/Quote.png";
import Avatar1 from "@/app/images/Avater 1.png";

const Client_cards = () => {
  return (
    <div className="px-[24px] py-[60px] w-[340px] flex gap-5 flex-col border-2 rounded-xl ">
      <div className="border-b-[2px] pb-6 ">
        <Image src={Quote} alt="img" />
        <p className="pt-6">
          Whitepate is designed as a collaboration tool for businesses that is a
          full project management solution.
        </p>
      </div>
      <div className="flex gap-9 max-md:overflow-y-hidden">
        <div className="rounded-[50%] w-[95px] h-[95px]">
          <Image src={Avatar1} alt="20px" />
        </div>
        <div>
          <h1 className="text-[24px] font-semibold">Oberon Shaw, MCH</h1>
          <p className="font-normal text-[16px]">
            Head of Talent Acquisition, North America
          </p>
        </div>
      </div>
    </div>
  );
};

export default Client_cards;
