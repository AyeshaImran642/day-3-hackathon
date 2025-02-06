
import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-[716.83px]">
        {/* Banner Image */}
        <Image
          src="/banner.png"
          alt="Banner Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-1"
        />

        {/* Hero Content */}
        <div className="absolute top-1 left-0 w-full h-full flex items-center justify-end">
          <div className="bg-[#FFF3E3] w-[90%] md:w-[643px] h-auto md:h-[443px] rounded-tl-lg flex items-start">
            <div className="px-8 py-6">
              <h1 className="text-[#333333] font-poppins font-semibold text-[16px] leading-[24px] tracking-[3px] mb-5 mt-10">
                New Arrival
              </h1>
              <h1 className="text-[#B88E2F] font-poppins font-bold text-[36px] md:text-[52px] leading-[45px] md:leading-[65px] mb-4">
                Discover Our <br /> New Collection
              </h1>
              <p className="mt-4 text-[#000000] font-poppins text-[18px] md:text-[20px] leading-[28px] md:leading-[30px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem nec ullamcorper mattis.
              </p>
              <button className="mt-6 px-6 md:px-8 py-3 md:py-4 bg-[#B88E2F] text-white rounded-md hover:bg-[#D4A553] transition">
                BUY NOW
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Browse Section */}
      <div className="w-full flex flex-col items-center lg:mt-48 lg:p-16 p-6 mt-10">
        {/* Section Heading */}
        <div className="text-center mb-8">
          <h2 className="text-[#333333] text-[32px] font-bold leading-[48px] tracking-wider uppercase">
            Browse The Range
          </h2>
          <p className="text-[#666666] text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-screen-xl px-4">
          {/* First Image */}
          <div className="flex flex-col items-center">
            <div className="relative bg-[#F9F9F9] flex items-end justify-center h-[300px] md:h-[443px] w-full rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
              <Image
                src="/picture 2.png"
                alt="Dining Room"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <p className="mt-4 text-[#333333] text-lg font-semibold">Dining</p>
          </div>

          {/* Second Image */}
          <div className="flex flex-col items-center">
            <div className="relative bg-[#F9F9F9] flex items-end justify-center h-[300px] md:h-[443px] w-full rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
              <Image
                src="/picture 1.png"
                alt="Living Room"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <p className="mt-4 text-[#333333] text-lg font-semibold">Living</p>
          </div>

          {/* Third Image */}
          <div className="flex flex-col items-center">
            <div className="relative bg-[#F9F9F9] flex items-end justify-center h-[300px] md:h-[443px] w-full rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
              <Image
                src="/picture 3.png"
                alt="Bedroom"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <p className="mt-4 text-[#333333] text-lg font-semibold">Bedroom</p>
          </div>
        </div>
      </div>
    </div>
  );
}
