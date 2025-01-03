import React from "react";
import Button from "../common/Button";
import exam from "../../../../public/home-page-img/online-exam.png";
import Image from "next/image";

export default function OnlineExam() {
  return (
    <section className="lg:container mx-auto text-white py-32">
      <div className="lg:flex justify-center items-center">
        <div className="lg:w-1/2 px-10 text-center md:text-start">
          <Button title="Online Exams!" />
          <h2 className="text-3xl lg:text-5xl my-6">
            State of the art examination software to show the highest integrity!
          </h2>
          <p className="text-secondary_color text-lg lg:text-xl">
            Flexible exams that can be sat anytime 24/7. CIFA uses state-of-the-art 
            examination software which enables students to sit exams at any time 
            from the comfort of their own home, without any time restrictions.
            <br />
            <br />
            CIFA facial recognition examinations enable the verification of a 
            CIFA student identity without the need to be present in a physical 
            test centre giving CIFA students complete flexibility.
          </p>
          <Button title="Learn More" className="mt-10" />
        </div>
        <div className="lg:w-1/2 relative mt-10 lg:mt-0">
          {/* Full shadow overlay from left to right */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary_bg via-primary_bg/10 to-transparent opacity-90 z-20"></div>
          <Image
            src={exam}
            width={700}
            height={400}
            alt="Online Exam Image"
            className="relative z-10 mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
