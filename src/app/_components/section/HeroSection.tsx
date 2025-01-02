import React from "react";
import BarIcon from "../../../../shared/icon/bar-icon";
import icon from "../../../../public/home-page-img/logo.png";
import banner from "../../../../public/home-page-img/banner-img.png";
import Image from "next/image";
import Button from "../common/Button";
import PlayIcon from "../../../../shared/icon/play-icon";

export default function HeroSection() {
  return (
    <div className="relative">
      {/* Shadow Effect */}
      <div className="absolute top-0 inset-x-0 w-[550px] mx-auto h-[800px] bg-gradient-to-b from-[#646049] via-transparent to-transparent blur-3xl opacity-90 z-20"></div>

      {/* Navbar Section */}
      <section className="lg:container mx-auto border-b border-b-primary_color">
        <div className="flex items-center justify-between text-white px-4 py-3">
          {/* Left Section */}
          <div className="flex items-center shrink-0">
            <BarIcon className="w-6 sm:w-8 md:w-10 text-white" />
          </div>

          {/* Center Section */}
          <div className="flex items-center gap-2 shrink z-20">
            <Image
              src={icon}
              width={50}
              height={50}
              alt="logo"
              className="w-8 sm:w-8 md:w-14"
            />
            <h2 className="font-semibold text-sm sm:text-lg md:text-5xl font-aeonik">
              CIFA
            </h2>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-2">
            <Button title="Login" />
            <Button title="Register" />
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative mx-auto lg:container ">
        {/* Banner Image */}
        <Image
          src={banner}
          width={1400}
          height={500}
          alt="banner"
          className="w-full h-[700px] bg-cover relative"
        />

        {/* Content Overlay */}
        <div className="w-full absolute inset-0 flex flex-col items-center lg:items-start justify-center px-6 md:px-12 lg:px-20 space-y-4 lg:space-y-8">
          {/* Tagline Button */}
          <div className="text-center lg:text-start">
            <button className="w-44 px-2 py-1 text-xs sm:text-sm lg:text-base rounded-full border border-primary_color bg-primary_color text-white font-aeonik">
              Elevate Your Career
            </button>

            {/* Heading */}
            <h2 className="text-white font-medium text-4xl md:text-7xl leading-snug my-4">
              Transform <br />
              Your{" "}
              <span className="text-[#e2bf7a]">
                Career in <br />
                Finance
              </span>
            </h2>

            {/* Subheading */}
            <p className="md:w-[390px] text-[#b9b4b8] text-sm sm:text-base md:text-lg font-medium font-aeonik leading-relaxed my-10">
              Earn accredited qualifications online with CIFA and access tools
              to boost your career in finance.
            </p>

            {/* Buttons */}
            <div className="md:flex items-center gap-6 mt-7">
              <Button title="Learn More" />
              <div className="flex items-center gap-1 my-2 md:my-0">
                <PlayIcon className="w-8 text-secondary_color" />

                <button className="uppercase text-white hover:text-primary_color transition ease-in-out duration-300">
                  Watch Introduction Video
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
