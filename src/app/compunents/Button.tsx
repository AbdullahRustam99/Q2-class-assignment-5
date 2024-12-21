import Image from "next/image";
import React from "react";
import button_icon from "@/app/images/Icon.png";
const Button = (text:string) => {
  return (
    <div>
      <button className="px-[16px] py-[9px] bg-[#4F9CF9] text-white flex gap-2 items-center rounded-lg font-medium max-sm:px-[40px] max-sm:py-[20px]">
       {text}
        <Image src={button_icon} alt="icon" />
      </button>
    </div>
  );
};

export default Button;