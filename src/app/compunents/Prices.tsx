import Image from 'next/image';
import React from 'react'
import Mark from "@/app/images/IconTick.png"
import Mark2 from "@/app/images/IconTick2.png";

const Prices = () => {
  return (
    <div className="flex gap-7 flex-col max-md:overflow-hidden">
      <div className="text-center">
        <h2 className="text-[64px] font-bold leading-[70px] tracking-wide max-sm:leading-10  max-sm:text-[36px]">
          Choose Your Plan
        </h2>
        <p className="text-[18px] font-normal leading-[30px] max-sm:tracking-[2px]">
          Whether you want to get organized, keep your personal life on track,
          or boost workplace productivity, Evernote has the right plan for you.
        </p>
      </div>
      <div className="flex justify-center items-center gap-6 max-md:flex-col">
        <div className="w-full px-[44px] py-[40px] flex flex-col gap-[25px] rounded-lg border-[#FFE492] border-2 max-sm:p-[15px] ">
          <p className="font-semibold text-[24px]">Free</p>
          <p className="font-semibold text-[34px]">$0</p>
          <p className="font-semibold text-[24px]">
            Capture ideas and find them quickly
          </p>
          <div className="flex gap-3 w-full">
            <Image src={Mark} alt="tick" className="text-[#FFE492] h-6 " />
            <p>Sync unlimited devices</p>
          </div>
          <div className="flex gap-3 ">
            <Image src={Mark} alt="tick" className="text-[#FFE492] h-6 " />
            <p>10 GB monthly uploads</p>
          </div>
          <div className="flex gap-3 ">
            <Image src={Mark} alt="tick" className="text-[#FFE492] h-6 " />
            <p>200 MB max. note size</p>
          </div>
          <div className="flex gap-3 ">
            <Image src={Mark} alt="tick" className="text-[#FFE492] h-6 " />
            <p>Customize Home dashboard and access extra widgets</p>
          </div>
          <div className="flex gap-3 ">
            <Image src={Mark} alt="tick" className="text-[#FFE492] h-6 " />
            <p>Connect primary Google Calendar account</p>
          </div>
          <div className="flex gap-3 ">
            <Image src={Mark} alt="tick" className="text-[#FFE492] h-6 " />
            <p>Add due dates, reminders, and notifications to your tasks</p>
          </div>
          <button className=" border-[#FFE492] rounded-lg border-2 px-[40px] py-[16px]">
            Get Started
          </button>
        </div>
        <div className="w-full px-[44px] py-[80px] flex flex-col gap-[25px] rounded-lg text-white bg-[#043873] border-2 max-sm:p-[15px] ">
          <p className="font-semibold text-[24px]">Personal</p>
          <p className="font-semibold text-[34px] text-[#FFE492]">$11.99</p>
          <p className="font-semibold text-[24px]">
            Keep home and family on track
          </p>
          <div className="flex gap-3 w-full">
            <Image src={Mark2} alt="tick" className="text-[#FFE492] h-6 " />
            <p>Sync unlimited devices</p>
          </div>
          <div className="flex gap-3 ">
            <Image src={Mark2} alt="tick" className="text-[#FFE492] h-6 " />
            <p>10 GB monthly uploads</p>
          </div>
          <div className="flex gap-3 ">
            <Image src={Mark2} alt="tick" className="text-[#FFE492] h-6 " />
            <p>200 MB max. note size</p>
          </div>
          <div className="flex gap-3 ">
            <Image src={Mark2} alt="tick" className="text-[#FFE492] h-6 " />
            <p>Customize Home dashboard and access extra widgets</p>
          </div>
          <div className="flex gap-3 ">
            <Image src={Mark2} alt="tick" className="text-[#FFE492] h-6 " />
            <p>Connect primary Google Calendar account</p>
          </div>
          <div className="flex gap-3 ">
            <Image src={Mark2} alt="tick" className="text-[#FFE492] h-6 " />
            <p>Add due dates, reminders, and notifications to your tasks</p>
          </div>
          <button className=" rounded-lg border-2 bg-[#4F9CF9] border-none px-[40px] py-[16px]">
            Get Started
          </button>
        </div>
        <div className="w-full px-[44px] py-[40px] flex flex-col gap-[25px] rounded-lg border-[#FFE492] border-2 max-sm:p-[15px] ">
          <p className="font-semibold text-[24px]">Organization</p>
          <p className="font-semibold text-[34px]">$49.99</p>
          <p className="font-semibold text-[24px]">
            Capture ideas and find them quickly
          </p>
          <div className="flex gap-3 w-full">
            <Image src={Mark} alt="tick" className="text-[#FFE492] h-6 " />
            <p>Sync unlimited devices</p>
          </div>
          <div className="flex gap-3 ">
            <Image src={Mark} alt="tick" className="text-[#FFE492] h-6 " />
            <p>10 GB monthly uploads</p>
          </div>
          <div className="flex gap-3 ">
            <Image src={Mark} alt="tick" className="text-[#FFE492] h-6 " />
            <p>200 MB max. note size</p>
          </div>
          <div className="flex gap-3 ">
            <Image src={Mark} alt="tick" className="text-[#FFE492] h-6 " />
            <p>Customize Home dashboard and access extra widgets</p>
          </div>
          <div className="flex gap-3 ">
            <Image src={Mark} alt="tick" className="text-[#FFE492] h-6 " />
            <p>Connect primary Google Calendar account</p>
          </div>
          <div className="flex gap-3 ">
            <Image src={Mark} alt="tick" className="text-[#FFE492] h-6 " />
            <p>Add due dates, reminders, and notifications to your tasks</p>
          </div>
          <button className=" border-[#FFE492] rounded-lg border-2 px-[40px] py-[16px]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Prices