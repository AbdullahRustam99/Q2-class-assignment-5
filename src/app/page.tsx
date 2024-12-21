"use client";
import React from "react";
import Image from "next/image";
import VectorDown from "@/app/images/Vector down.png";
import img from "@/app/images/Image container.png";
import Vector from "@/app/images/Vector.png";
import Div from "@/app/compunents/Simple_div";
import Rev_div from "@/app/compunents/Revers_div";
import Work from "@/app/images/Work Together Image.png";
import Data from "@/app/images/Elemenhgfgyt.png";
import App from "@/app/images/Apps.png";
import Apple from "@/app/images/Apple.png";
import Microsoft from "@/app/images/microsoft 1.png";
import Group from "@/app/images/Group.png";
import Google from "@/app/images/Group 246.png";
import Client from "@/app/compunents/Client_cards";
import AppIteam from "@/app/images/App-icon.png";
import Mains from "@/app/compunents/Main";
import Footer from "@/app/compunents/Footer";
import Prices from "@/app/compunents/Prices";
const Home = () => {
  return (
    <>
      <nav className="flex items-center justify-center gap-40 py-[16px] px-[40px] text-white bg-[#043873] max-sm:px-[8px] max-md:justify-start max-sm:justify-start max-md:px-[65px] ">
        <div className="flex items-center justify-between">
          <Image src={Vector} alt="Logo" width={37} height={26.46} />
          <h1 className="pl-2 font-bold text-[28px]">whitepace</h1>
        </div>
        <div className="flex items-center justify-center gap-12 max-md:hidden max-sm:hidden">
          <div className="flex items-center justify-center gap-9 cursor-pointer">
            <div className="flex items-center justify-center gap-2">
              <p>Product</p>
              <Image src={VectorDown} alt="img" />
            </div>
            <div className="flex items-center justify-center gap-2">
              <p>Solutions</p>
              <Image src={VectorDown} alt="img" />
            </div>
            <div className="flex items-center justify-center gap-2">
              <p>Resources</p>
              <Image src={VectorDown} alt="img" />
            </div>
            <div className="flex items-center justify-center gap-2">
              <p>Pricing</p>
              <Image src={VectorDown} alt="img" />
            </div>
          </div>
          <div className="flex items-center  gap-6">
            <button className="rounded-lg bg-[#FFE492] text-[#043873] font-medium px-[16px] py-[9px]">
              Login
            </button>
            <button>Try Whitepace free</button>
          </div>
        </div>
      </nav>

      <Mains />

      <section className="h-screen flex items-center justify-center text-black bg-white p-10 max-sm:h-[110vh]  max-sm:px-[18px] max-sm:py-[80px]">
        <Div
          classe="bg-[#C4DEFD] p-12 w-[526px] h-[350px] max-sm:w-[100%]"
          img={img}
          h_text="Project Management "
          p_text="Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note."
        />
      </section>

      <section className="h-screen flex items-center justify-center text-black bg-white p-10 max-sm:h-[110vh] max-sm:px-[18px] max-sm:py-[80px]">
        <Rev_div
          img={Work}
          
          h_text="Work together"
          p_text="With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others."
        />
      </section>

      <section className="h-screen flex items-center justify-center  text-white bg-[#043873] max-sm:px-[18px] max-sm:py-[80px] p-10">
        <Div
          h_text="Use as Extension"
          img={img}
          p_text="Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes."
          classe="bg-[#C4DEFD] p-12 w-[526px] h-[350px] max-sm:w-[100%]"
        />
      </section>

      <section className="h-screen flex items-center justify-center text-black bg-white p-10 max-sm:h-[110vh] max-sm:px-[18px] max-sm:py-[80px]">
        <Rev_div
          h_text="Customise it to your needs"
          img={img}
          p_text="Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API."
          classe="bg-[#C4DEFD] p-12 w-[526px] h-[350px] max-sm:w-[100%]"
        />
      </section>

      <section className="h-[170vh] flex items-center justify-center text-black bg-white p-10 max-sm:h-[330vh]  max-md:h-[250vh]  max-sm:px-[18px] max-sm:py-[80px]">
        <Prices />
      </section>

      <section className="h-screen flex items-center justify-center text-white bg-[#043873] p-10 max-sm:px-[18px] max-sm:py-[80px]">
        <Div
          classe="bg-[#C4DEFD] p-10 w-[526px] h-[350px] max-sm:w-0 max-sm:p-0 max-sm:h-0"
          img={img}
          h_text="Your work, everywhere you are"
          p_text="Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!"
        />
      </section>

      <section className="h-screen flex items-center justify-center text-black bg-white p-10 max-sm:h-[110vh] max-sm:px-[18px] max-sm:py-[80px]">
        <Div
          img={Data}
          h_text="100% your data"
          p_text="The app is open source and your notes are saved to an open format, so you'll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them."
        />
      </section>

      <section className="h-2/4 flex flex-col items-center justify-center gap-24 pb-[140px] text-black bg-white p-10 max-sm:h-[110vh] max-sm:px-[18px] max-sm:py-[80px]">
        <h2 className="text-[64px] font-bold leading-[70px] tracking-wide max-sm:leading-10  max-sm:text-[36px]">
          Our sponsors
        </h2>
        <div className="flex gap-12 items-center justify-center max-md:flex-col max-md:gap-20">
          <Image src={Apple} alt="Sponsor Img" />
          <Image src={Microsoft} alt="Sponsor Img" />
          <Image src={Group} alt="Sponsor Img" />
          <Image src={Google} alt="Sponsor Img" />
        </div>
      </section>

      <section className="h-screen flex items-center justify-center  text-white bg-[#043873] max-sm:px-[18px] max-sm:py-[80px]">
        <Rev_div
          img={App}
          h_text="Work with Your Favorite Apps Using whitepace."
          p_text="Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success."
        />
      </section>

      <section className="h-[120vh] flex items-center flex-col justify-center gap-10 text-black bg-white max-sm:px-[18px] max-sm:py-[80px] max-md:overflow-hidden ">
        <h2 className="text-[64px] font-bold leading-[70px] tracking-wide pt-5 max-sm:leading-10  max-sm:text-[36px]">
          What Our Clients Says
        </h2>
        <div className="flex gap-20 ">
          <Client />
          <Client />
          <Client />
        </div>
        <div className="flex gap-2 pb-5">
          <div className=" p-2 rounded-[50%] bg-[#4F9CF9]"></div>
          <div className=" p-2 rounded-[50%] bg-[#043873] "></div>
          <div className=" p-2 rounded-[50%] bg-[#4F9CF9]"></div>
        </div>
      </section>

      <section className="h-screen flex items-center justify-center  text-white bg-[#043873] max-sm:px-[18px] max-sm:py-[80px]">
        <div className="w-[608px] text-center flex items-center justify-center flex-col gap-6">
          <h2 className="text-[64px] font-bold leading-[70px] tracking-wide max-sm:leading-10  max-sm:text-[36px]">
            Try Whitepace today
          </h2>
          <p className="text-[18px] max-sm:tracking-[2px]">
            Get started for free. Add your whole team as your needs grow.
          </p>
          <button>Try Taskey free</button>
          <p className="text-[18px] max-sm:tracking-[2px]">
            On a big team? Contact sales
          </p>
          <Image src={AppIteam} alt="iteam" />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
