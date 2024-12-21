import Image from 'next/image';
import React from 'react'
import bg1 from "@/app/images/Element.png";
const main = () => {
	return (
    <main className="h-screen flex items-center flex-col justify-center bg-[#043873] max-sm:px-[18px] max-sm:py-[80px]">
      <Image
        src={bg1}
        alt="bg_img"
        className=" relative h-screen top-[140px] w-screen max-md:top-80"
      />
      <div className="flex justify-center relative z-50 bottom-60 items-center gap-10 w-full max-md:flex-col max-md:bottom-32 max-sm:bottom-20">
        <div className="w-[552px] h-[361px] relative flex flex-col gap-[35px] max-md:w-full max-md:p-10 max-md:text-center max-md:justify-center max-md:items-center max-sm:w-full max-sm:p-0  ">
          <h2 className="text-[64px] font-bold leading-[70px] tracking-wide max-sm:leading-10  max-sm:text-[36px]">
            Get More Done with whitepace
          </h2>
          <p className="text-[18px] font-normal leading-[30px] max-sm:tracking-[2px]">
            Project management software that enables your teams to collaborate,
            plan, analyze and manage everyday tasks
          </p>
          <button >Try Whitepace free </button>
        </div>
        <div className="bg-[#C4DEFD] p-12 w-[526px] h-[350px] max-sm:w-[100%] "></div>
      </div>
    </main>
  );
}

export default main