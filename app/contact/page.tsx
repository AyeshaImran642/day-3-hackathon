import React from "react";
import Navbar from "../../components/navbar";
import Image from "next/image";
import { FaLocationDot, FaPhone, FaClock } from "react-icons/fa6";
import Footer from "../../components/Footer";
import Featuresection from "../../components/featuresection";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <div className="relative w-full flex flex-col items-center">
        <Image
          src="/contact image.png"
          alt="Contact Header"
          width={1440}
          height={316}
          layout="responsive"
          className="object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black">
            Contact
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black">
            Home &gt; Contact
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-white py-16 px-8">
        <h2 className="text-[36px] font-semibold leading-[54px] text-center font-poppins">
          Get In Touch With Us
        </h2>
        <p className="text-center text-gray-600 mt-4 text-[16px] leading-[24px] font-poppins">
          For More Information About Our Products & Services, Please Feel Free
          To Drop
          <br /> Us An Email. Our Staff Is Always Here To Help You Out. Do Not
          Hesitate!
        </p>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Left Section */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <FaLocationDot className="text-black text-2xl" />
              <div>
                <h3 className="text-lg font-semibold">Address</h3>
                <p className="text-gray-600">
                  226 5th SE Avenue, New
                  <br /> York NY10000, United States
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaPhone className="text-black text-2xl" />
              <div>
                <h3 className="text-lg font-semibold">Phone</h3>
                <p className="text-gray-600">
                  Mobile: +1 (84) 546-6789 <br />
                  Hotline: +1 (84) 456-8789
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaClock className="text-black text-2xl" />
              <div>
                <h3 className="text-lg font-semibold">Working Time</h3>
                <p className="text-gray-600">
                  Monday–Friday: 9:00 –<br /> 22:00 <br />
                  Saturday–Sunday: 9:00 –<br /> 21:00
                </p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Abc"
                  className="mt-1 p-5 block w-full border border-gray-300 shadow-sm focus:border-black focus:ring-0 sm:text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="abc@def.com"
                  className="mt-1 p-5 block w-full border border-gray-300 shadow-sm focus:border-black focus:ring-0 sm:text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="This is an optional"
                  className="mt-1 p-5 block w-full border border-gray-300 shadow-sm focus:border-black focus:ring-0 sm:text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Hi! I'd like to ask about..."
                  className="mt-1 p-5 block w-full border border-gray-300 shadow-sm focus:border-black focus:ring-0 sm:text-sm"
                ></textarea>
              </div>

              <button
                type="submit"
                className="py-2 px-10 bg-[#B88E2F] text-white font-semibold shadow hover:bg-yellow-600"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <Featuresection />
      <Footer />
    </div>
  );
}
