import React from "react";
import bp from "../../../../public/home-page-img/bp.png";
import hsbc from "../../../../public/home-page-img/hsbc.png";
import monzo from "../../../../public/home-page-img/monzo.png";
import morgan from "../../../../public/home-page-img/morgan.png";
import hereRight from "../../../../public/home-page-img/right-here.png";
import Image from "next/image";

export default function TrustedBy() {
  return (
    <section className="relative container mx-auto px-4 lg:px-0 pb-40">
      {/* Left Shadow Effect (Visible on MD+ Devices) */}
      <div className="absolute inset-y-0 left-0 md:w-1/2 bg-gradient-to-r from-primary_bg pointer-events-none hidden md:block"></div>

      {/* Right Shadow Effect (Visible on MD+ Devices) */}
      <div className="absolute inset-y-0 right-0 md:w-1/2 bg-gradient-to-l from-primary_bg pointer-events-none hidden md:block"></div>

      {/* Content */}
      <h2 className="text-white text-center font-semibold text-2xl mt-10">
        Trusted By
      </h2>

      {/* Responsive Images */}
      <div className="flex md:justify-between items-center mt-8 gap-4">
        <div className="">
          <Image src={bp} width={100} height={50} alt="bp image" className="w-20 md:w-26" />
        </div>
        <div className="">
          <Image src={hsbc} width={100} height={50} alt="hsbc image" className="w-24 md:w-52" />
        </div>
        <div className="">
          <Image src={monzo} width={100} height={50} alt="monzo image" className="w-12 md:w-20" />
        </div>
        <div className="">
          <Image src={morgan} width={100} height={50} alt="morgan image" className="w-24 md:w-52" />
        </div>
        <div className="">
          <Image src={hereRight} width={100} height={50} alt="here right image" className="w-24 md:w-52" />
        </div>
      </div>
    </section>
  );
}
