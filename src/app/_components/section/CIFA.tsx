import React from "react";
import Button from "../common/Button";
import cpd from '../../../../public/home-page-img/logo.png'
import Image from "next/image";

export default function CIFA() {
  return (
    <section className="lg:container mx-auto text-white py-20">
      <div className="lg:flex justify-center items-center border border-primary_color rounded-2xl py-28">
        <div className="lg:w-1/2 px-10 text-center md:text-start">
          <Button title="Who is CIFA?" />
          <h2 className="text-5xl my-6">The Future of Education Starts Here</h2>
          <p className="text-secondary_color text-xl">
          Unleash the power of CPD and kick start your career! CIFA’S Continuing Professional Development (CPD) certifications will help you gain a competitive edge over your competition!
            <br />
            <br />
            To demonstrate our commitment to excellence and dedication to providing education at the highest levels, CIFA are proud members of the CPD Certification Service.
          </p>
        </div>
        <div className="lg:w-1/2">
            <Image src={cpd} width={550} height={400} alt="Certified Image" className="mx-auto"/>
        </div>
      </div>
    </section>
  );
}
