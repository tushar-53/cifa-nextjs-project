import React from 'react'
import Button from '../common/Button'
import Image from 'next/image'
import exployee from "../../../../public/home-page-img/employeementTool.png";

export default function EmployabilityTools() {
  return (
    <section className="lg:container mx-auto text-white py-32">
      <div className=" lg:flex justify-center">
      <div className="lg:w-1/2 relative mt-10 lg:mt-0">
          {/* Full shadow overlay from left to right */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-secondary_bg via-black to-transparent opacity-80 z-20"></div>
          <Image
            src={exployee}
            width={800}
            height={400}
            alt="Online Exam Image"
            className="relative z-10 mx-auto "
          />
        </div>

        <div className="lg:w-1/2 px-10 text-center md:text-start">
          <Button title=" Employability Tools" />
          <h2 className="text-5xl my-6">
          Stand out from the crowd!
          </h2>
          <p className="text-secondary_color text-xl">
          Explore CIFA’s advanced employability tools to enhance your career prospects. Our Digital CV includes a video resume feature, live CPD progress tracking, and social media integration for sharing your profile on LinkedIn and other platforms. With instant interview scheduling and access to tailored employment services, elevate your professional presence and unlock new opportunities with CIFA comprehensive career support.
          </p>
          <Button title="Learn More" className="mt-10" />
        </div>
        
      </div>
    </section>
  )
}
