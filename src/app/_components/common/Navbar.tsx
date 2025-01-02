import React from "react";
import BarIcon from "../../../../shared/icon/bar-icon";
import icon from "../../../../public/home-page-img/logo.png";
import Image from "next/image";

export default function Navbar() {
  return (
    <section className="bg-primary_bg">
      <div className="container  flex justify-between text-white">
        <div>
          <BarIcon className="w-10 text-white" />
        </div>
        <div className="flex items-center gap-2">
          <Image src={icon} width={50} height={50} alt="logo" />
          <h2 className="font-bold text-4xl font-aeonik">CIFA</h2>
        </div>
        <div className="flex items-center gap-3">
          <button className="border border-primary_btn px-4 py-1 rounded-lg">Login</button>
          <button className="bg-primary_btn px-4 py-1 rounded-lg">Register</button>
        </div>
      </div>
    </section>
  );
}
