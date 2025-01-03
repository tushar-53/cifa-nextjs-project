import React from "react";
import Button from "../common/Button";
import Image from "next/image";
import traning from "../../../../public/home-page-img/corporate-training.png";

export default function Traning() {
  return (
    <section className="lg:container mx-auto text-white py-32 border border-secondary_bg mb-20 rounded-2xl">
      <div className="lg:flex justify-center items-center">
        <div className="lg:w-1/2 px-10 text-center md:text-start">
          <Button title="Online Exams!" />
          <h2 className="text-5xl my-6">
            Innovative Corporate training solutions.
          </h2>
          <p className="text-secondary_color text-xl">
          Develop the skills that your workforce needs with CIFA’S corporate training packages. CIFA has innovative features and functions that enable corporations to monitor and track their employees continuing professional development progress in real time.
            <br />
            <br />
            The professional workplace is evolving with the ever increasing need for upskilling. CIFA has the corporate training solutions to meet your companies’ needs.
          </p>
          <Button title="Learn More" className="mt-10" />
        </div>
        <div className="lg:w-1/2 relative mt-10 lg:mt-0">
          <Image
            src={traning}
            width={500}
            height={400}
            alt="Online Exam Image"
            className="relative z-10 mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
