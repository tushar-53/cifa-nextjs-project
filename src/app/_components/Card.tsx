import React from "react";
import Button from "./common/Button";
import Image, { StaticImageData } from "next/image";
import OnlyRightArrowIcon from "../../../shared/icon/only-right-arrow";

interface CardProps {
  image: StaticImageData;
  name: string;
  bakcground: string;
  professionOne: string;
  professionTwo: string;
  professionThree?: string;
}

export default function Card({
  image,
  name,
  bakcground,
  professionOne,
  professionTwo,
  professionThree,
}: CardProps) {
  return (
    <div className="w-[380px] h-[650px] border rounded-2xl relative"> {/* Increased height */}
      {/* Image Container with Shadow */}
      <div className="relative h-[50%] rounded-t-2xl overflow-hidden">
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="rounded-t-2xl"
        />
        {/* Shadow Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-secondary_bg via-secondary_bg/10 to-transparent pointer-events-none"></div>
      </div>

      {/* Content Section */}
      <div className="px-4 h-[40%] flex flex-col justify-between">
        <div>
          <h2 className="text-white font-medium text-xl">{name}</h2>
          <p className="text-secondary_color mt-5 mb-3">{bakcground}</p>
          <div className="flex flex-wrap gap-3">
            <Button title={professionOne} />
            <Button title={professionTwo} />
            {professionThree && <Button title={professionThree} />}
          </div>
        </div>
        <div>
          <p className="text-white text-lg mt-3">+2 More</p>
          <p className="flex items-center gap-1 text-white mt-4">
            View Profile <OnlyRightArrowIcon className="w-5 text-white" />
          </p>
        </div>
      </div>
    </div>
  );
}

