import React from "react";
import logo from "../../../../public/home-page-img/logo.png";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-secondary_bg text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between border-b border-primary_color pb-6 gap-y-8">
          {/* Left Section */}
          <div className="w-full sm:w-1/2 lg:w-1/4">
            <div className="flex items-center space-x-2">
              <Image src={logo} width={70} height={80} alt="CIFA Logo" />
              <h2 className="text-5xl font-bold">CIFA</h2>
            </div>
            <p className="text-gray-400 mt-4">Elevate Your Career</p>
            <p className="text-gray-400 mt-2">Email: info@cifa.ac</p>
            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-linkedin"></i> {/* LinkedIn */}
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook"></i> {/* Facebook */}
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram"></i> {/* Instagram */}
              </a>
            </div>
          </div>

          {/* Menu Sections */}
          <div className="w-full sm:w-1/2 lg:w-1/4">
            <h3 className="text-lg font-semibold mb-4">Menu</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Instructors
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Courses
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Exams
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Price List
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/4">
            <h3 className="text-lg font-semibold mb-4">Menu</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Accreditation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Employability Tools
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Hire Candidates
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Corporate Tools
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/4">
            <h3 className="text-lg font-semibold mb-4">Menu</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  University Enrolment
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  About CIFA
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-wrap justify-between items-center mt-6 text-gray-400">
          <div className="text-sm space-x-4">
            <a href="#" className="hover:text-white">
              Terms of Use
            </a>
            <a href="#" className="hover:text-white">
              Accessibility Statement
            </a>
            <a href="#" className="hover:text-white">
              Cookies Policy
            </a>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
          </div>
          <p className="text-sm">&copy; 2024 CIFA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
