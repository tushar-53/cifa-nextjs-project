import React from "react";
import bp from "../../../../public/home-page-img/bp.png";
import hsbc from "../../../../public/home-page-img/hsbc.png";
import monzo from "../../../../public/home-page-img/monzo.png";
import morgan from "../../../../public/home-page-img/morgan.png";
import hereRight from "../../../../public/home-page-img/right-here.png";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function TrustedBy() {
  return (
    <section className="relative container mx-auto px-4 lg:px-0 pb-40">
      {/* Left Shadow Effect (Visible on MD+ Devices) */}
      <div className="absolute inset-y-0 left-0 md:w-1/2 bg-gradient-to-r from-primary_bg pointer-events-none hidden md:block z-10"></div>

      {/* Right Shadow Effect (Visible on MD+ Devices) */}
      <div className="absolute inset-y-0 top-0 right-0 md:w-1/2 bg-gradient-to-l from-primary_bg pointer-events-none hidden md:block z-10"></div>

      {/* Content */}
      <h2 className="text-white text-center font-semibold text-2xl mt-10">
        Trusted By
      </h2>

      {/* Marquee for Logos */}
      <Marquee 
        speed={80} 
        pauseOnHover 
        gradient={false} 
        className="mt-8"
      >
        <div className="flex items-center gap-10 px-6">
          <Image src={bp} width={100} height={50} alt="bp logo" className="w-20 md:w-26" />
          <Image src={hsbc} width={100} height={50} alt="hsbc logo" className="w-24 md:w-52" />
          <Image src={monzo} width={100} height={50} alt="monzo logo" className="w-12 md:w-20" />
          <Image src={morgan} width={100} height={50} alt="morgan logo" className="w-24 md:w-52" />
          <Image src={hereRight} width={100} height={50} alt="here right logo" className="w-24 md:w-52" />
        </div>
      </Marquee>
    </section>
  );
}
