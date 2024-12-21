import Image from 'next/image';
import React from 'react'
import Vector from "@/app/images/Vector.png"

import icon1 from "@/app/images/Icon_11_.png"
import icon2 from "@/app/images/icon 2.png"
import icon3 from "@/app/images/icon 3.png"
const Footer = () => {
  return (
    <section className="h-[350px] flex items-center gap-20 justify-center flex-col bg-[#043873] max-md:h-auto max-md:items-start  ">
      <div className="flex items-center justify-between gap-16 pb-3  cursor-pointer max-md:flex-col max-md:items-start max-md:pl-6 max-md:w-full max-md:p-10  ">
        <div className="w-[240px]  flex  flex-col gap-5 max-md:w-[600px] max-sm:w-[300px]">
          <div className=" flex items-center ">
            <Image src={Vector} alt="Logo" width={37} height={26.46} />
            <h1 className="pl-2 font-bold text-[28px]">whitepace</h1>
          </div>
          <p>
            whitepace was created for the new ways we live and work. We make a
            better workspace around the world
          </p>
        </div>
        <div>
          <ul className="flex flex-col gap-2">
            <h2 className=" font-bold text-[18px]">Product</h2>

            <li>Overview</li>
            <li>Pricing</li>
            <li>Customer stories</li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col gap-2">
            <h2 className=" font-bold text-[18px]">Resources</h2>
            <li>Blog</li>
            <li>Guides & tutorials</li>
            <li>Help center</li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col gap-2">
            <h2 className=" font-bold text-[18px]">Company</h2>
            <li>About us</li>
            <li>Careers</li>
            <li>Media kit</li>
          </ul>
        </div>
        <div className="w-[240px] ">
          <ul className="flex flex-col gap-5">
            <h2 className=" font-bold text-[28px]">Try It Today</h2>
            <p>Get started for free. Add your whole team as your needs grow.</p>
            <button>Get Start</button>
          </ul>
        </div>
      </div>
      <div className="border-t-2 w-full gap-3  pt-3 flex  justify-around items-center  cursor-pointer max-sm:flex-col max-sm:justify-center max-sm:items-center ">
        <div className="flex justify-between max-md:gap-5  ">
          <ul className="flex justify-between gap-14 max-md:gap-5 max-sm:flex-col max-sm:justify-center max-sm:items-center">
            <li>English</li>
            <li>Terms & privacy</li>
            <li>Security</li>
            <li>Status</li>
            <li>©2021 Whitepace LLC.</li>
          </ul>
        </div>
        <div className="flex gap-3">
          <Image src={icon1} alt="icon" />
          <Image src={icon2} alt="icon" />
          <Image src={icon3} alt="icon" />
        </div>
      </div>
    </section>
  );
}

export default Footer