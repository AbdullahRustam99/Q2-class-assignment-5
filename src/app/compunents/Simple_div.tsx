import React from "react";
import Image,{ StaticImageData } from "next/image";

interface Contenttype {
  p_text?: string;
  h_text?: string;
  classe?: string;
  img: StaticImageData;
}

const Simple_div = (propes:Contenttype) => {
  return (
    
    <div className="flex justify-center items-center gap-10 w-full max-md:flex-col    ">
      <div className="w-[552px] h-[361px] flex flex-col gap-[35px] max-md:w-full max-md:p-10 max-md:text-center max-md:justify-center max-md:items-center max-sm:w-full max-sm:p-0">
        <h2 className="text-[64px] font-bold leading-[70px] tracking-wide  max-sm:leading-10  max-sm:text-[36px]">
          {propes.h_text}
        </h2>
        <p className="text-[18px] font-normal leading-[30px] max-sm:tracking-[2px]">
          {propes.p_text}
        </p>
        <button>lets go</button>
      </div>
     {propes.img ? (
             <Image className={propes.classe || ""} src={propes.img} alt="img" />
           ) : (
             <div></div>
           )}
    </div>
  );
};

export default Simple_div;
