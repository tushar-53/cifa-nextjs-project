import React from "react";
import Button from "../common/Button";
import exam from "../../../../public/home-page-img/online-exam-02.png";
import Image from "next/image";

export default function OnlineExam() {
  return (
    <section className="w-full mx-auto text-white py-16 lg:py-32">
      <div className="flex flex-wrap lg:flex-nowrap justify-center items-center">
        {/* Content Section */}
        <div className="w-full flex justify-center items-center">
        <div className="w-full lg:w-1/2 px-6 md:px-10 text-center lg:text-start relative z-10">
          <Button title="Online Exams!" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium leading-tight my-6">
            State of the art examination <br /> software to show the highest
            <br />
            integrity!
          </h2>
          <p className="text-secondary_color text-base md:text-lg lg:text-xl">
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
        <div>
          <Image src={exam} alt="online exam image"/>
        </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 relative mt-8 lg:mt-0 px-6 md:px-10 lg:px-0">
          <div className="relative w-full h-64 md:h-96 lg:h-full overflow-hidden rounded-lg">
            <Image
              src={exam}
              alt="Online Exam Image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>

          {/* Overlay Content for Mobile/Medium Devices */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black/50 p-6 lg:hidden">
            <Button title="Online Exams!" />
            <h2 className="text-2xl md:text-3xl font-medium leading-tight my-4">
              State of the art examination <br /> software to show the highest
              <br />
              integrity!
            </h2>
            <p className="text-secondary_color text-sm md:text-lg">
              Flexible exams that can be sat anytime 24/7. CIFA uses
              state-of-the-art examination software which enables students to
              sit exams at any time from the comfort of their own home, without
              any time restrictions.
              <br />
              <br />
              CIFA facial recognition examinations enable the verification of a
              CIFA student identity without the need to be present in a physical
              test centre giving CIFA students complete flexibility.
            </p>
            <Button title="Learn More" className="mt-6" />
          </div>
        </div>
      </div>
    </section>
  );
}
