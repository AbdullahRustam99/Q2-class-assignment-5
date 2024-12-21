"use client";
import React from "react";
import Button from "@/app/compunents/Button";
const Simple_div = ({ btn_text, p_text, h_text, img ,classe}: any) => {
  return (
    
    <div className="flex justify-center items-center gap-10 w-full max-md:flex-col    ">
      <div className="w-[552px] h-[361px] flex flex-col gap-[35px] max-md:w-full max-md:p-10 max-md:text-center max-md:justify-center max-md:items-center max-sm:w-full max-sm:p-0">
        <h2 className="text-[64px] font-bold leading-[70px] tracking-wide  max-sm:leading-10  max-sm:text-[36px]">
          {h_text}
        </h2>
        <p className="text-[18px] font-normal leading-[30px] max-sm:tracking-[2px]">
          {p_text}
        </p>
        <Button text={btn_text} />
      </div>
      <div className={classe}>{img}</div>
    </div>
  );
};

export default Simple_div;
