import React from "react";
import Card from "../Card";
import drHamdan from "../../../../public/home-page-img/instructors-01.png";
import drErtanin from "../../../../public/home-page-img/instructors-02.png";
import Fiona from "../../../../public/home-page-img/instructors-03.png";
import bgBlur from "../../../../public/home-page-img/bg.png";
import Image from "next/image";

export default function Instructors() {
  return (
    <section className="bg-secondary_bg py-40 lg:py-20 relative">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
    <Image src={bgBlur} width={500} alt="bg blur" />
  </div>
      <div className="lg:container w-full mx-auto">
        <div className="text-center text-white">
          <h2 className="text-5xl font-semibold">Instructors</h2>
          <p className="text-2xl my-12 lg:my-4 pb-10 text-[#adacac]">
            Continuing professional development at its finest!
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-10 lg:gap-5">
          <Card
            image={drHamdan} // Pass the image as a prop
            name="Dr Mohammed Hamdan"
            bakcground="Education"
            professionOne="PhD in Accounting"
            professionTwo="MSc Accounting"
            professionThree="Pg. DIP in Accounting"
          />
          <Card
            image={drErtanin} // Pass the image as a prop
            name="Dr Mustafa Rifat Ertanin"
            bakcground="Education"
            professionOne="PhD Economics"
            professionTwo="MSc BL and ML combined degree in Law"
          />
          <Card
            image={Fiona} // Pass the image as a prop
            name="Fiona Addington Bsc"
            bakcground="Education"
            professionOne="BSc honours Degree in Psychology"
            professionTwo="BL and ML combinCertified ..."
          />
        </div>
      </div>
    </section>
  );
}
