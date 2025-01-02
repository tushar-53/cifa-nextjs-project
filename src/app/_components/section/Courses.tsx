"use client";

import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import RightArrowIcon from "../../../../shared/icon/right-arrow";
import LeftArrowIcon from "../../../../shared/icon/left-arrow";
import iac from "../../../../public/home-page-img/iac-cover-01.png";
import saf from "../../../../public/home-page-img/iac-cover-02.png";
import iti from "../../../../public/home-page-img/iac-cover-03.png";
import aml from "../../../../public/home-page-img/iac-cover-04.png";
import bgBlur from '../../../../public/home-page-img/bg.png'
import Button from "../common/Button";

const courses = [iac, saf, iti, aml, iac, saf, iti, aml];

export default function Courses() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
  
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
  
    emblaApi.on("select", onSelect);
  
    // Proper cleanup
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);
  

  // Navigation Handlers
  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <div className="bg-secondary_bg py-20 relative">
  {/* Shadow Effect */}
  <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
    <Image src={bgBlur} width={500} alt="bg blur" />
  </div>

  <section className="lg:container mx-auto px-4 lg:px-0">
    {/* Header */}
    <div className="text-center">
      <h2 className="text-4xl font-semibold text-white">
        Explore a Wide Range of <br /> Accredited Courses!
      </h2>
      <p className="text-secondary_color my-8 text-xl">
        Gain skills and certifications designed to accelerate your career in
        the <br /> finance industry.
      </p>
    </div>

    {/* Carousel */}
    <div className="relative">
      {/* Embla Carousel */}
      <div
        className="overflow-hidden px-6 md:px-12 lg:w-[1200px] mx-auto"
        ref={emblaRef}
      >
        <div className="flex space-x-4">
          {courses.map((course, index) => (
            <div
              className="flex-[0_0_50%] md:flex-[0_0_25%] px-2 md:px-4"
              key={index}
            >
              <Image
                src={course}
                alt={`Course ${index + 1}`}
                width={220}
                height={160}
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      {/* For md and larger devices */}
      <div className="hidden lg:block">
        <button
          onClick={scrollPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 transform text-white hover:bg-opacity-30 transition mr-12"
        >
          <LeftArrowIcon className="w-12 h-12" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 transform text-white hover:bg-opacity-30 transition ml-12"
        >
          <RightArrowIcon className="w-12 h-12" />
        </button>
      </div>

      
    </div>

    {/* Dots Navigation */}
    <div className="flex justify-center mt-6">
      {courses.map((_, index) => (
        <button
          key={index}
          className={`w-3 h-3 rounded-full mx-1 transition ${
            index === selectedIndex
              ? "bg-primary_color"
              : "bg-secondary_color hover:bg-primary_color"
          }`}
          onClick={() => emblaApi && emblaApi.scrollTo(index)}
        ></button>
      ))}
    </div>

    {/* For mobile devices */}
    <div className="flex lg:hidden justify-center gap-5 mt-4">
        <button
          onClick={scrollPrev}
          className="text-white hover:bg-opacity-30 transition p-2"
        >
          <LeftArrowIcon className="w-10 h-10" />
        </button>
        <button
          onClick={scrollNext}
          className="text-white hover:bg-opacity-30 transition p-2"
        >
          <RightArrowIcon className="w-10 h-10" />
        </button>
      </div>

    <div className="text-center my-10">
      <Button title="view all courses" />
    </div>
  </section>
</div>

  );
}
