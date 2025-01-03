import React from "react";
import Marquee from "react-fast-marquee"; // Import the library
import DotIcon from "../../../../shared/icon/dot-icon";

export default function Marque() {
  return (
    <div className="container text-center py-5 border-t border-b border-primary_color mt-20 ">
      <Marquee
        gradient={false}
        speed={80}
        className="flex items-center gap-4 overflow-hidden"
      >
        {/* Dot Icon */}
        <DotIcon className="w-5 text-primary_color mx-2" />
        {/* Marquee Text */}
        <p className="text-primary_color text-5xl font-medium leading-snug ">
          Inspiring Education Through Innovation
        </p>
        {/* Another Dot Icon */}
        <DotIcon className="w-5 text-primary_color mx-2" />
        {/* Marquee Text */}
        <p className="text-primary_color text-5xl font-medium leading-snug ">
          Inspiring Education Through Innovation
        </p>
      </Marquee>
    </div>
  );
}
