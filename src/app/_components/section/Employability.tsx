import React from "react";
import Button from "../common/Button";
import employee from "../../../../public/home-page-img/employee-img.png";
import Image from "next/image";

export default function Employee() {
  return (
    <section className="w-full mx-auto text-white py-16 lg:py-32">
      <div className="w-full lg:flex items-center px-4">
        <div className="lg:w-1/2">
          <Image src={employee} alt="online exam image" className="h-[150%]" />
        </div>

        <div className="lg:w-1/2 mx-auto">
          <Button title="Online Exam!" />
          <h2 className="text-5xl  md:text-3xl lg:text-4xl font-medium leading-tight my-6">
            State of the art examination <br /> software to show the highest
            <br />
            integrity!
          </h2>
          <p className="text-secondary_color text-base font-medium leading-6 md:text-lg lg:text-xl">
            Flexible exams that can be sat anytime 24/7. CIFA uses
            state-of-the-art examination software which enables students to sit
            exams at any time from the comfort of their own home, without any
            time restrictions.
            <br />
            <br />
            CIFA facial recognition examinations enable the verification of a
            CIFA student identity without the need to be present in a physical
            test centre giving CIFA students complete flexibility.
          </p>
          <Button title="Learn More" className="mt-6 md:mt-10" />
        </div>
      </div>
    </section>
  );
}
