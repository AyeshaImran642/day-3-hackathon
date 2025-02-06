
import React from 'react';
import Image from 'next/image';

export default function Inspiration() {
  return (
    <div className="bg-[#FCF8F3] min-h-screen flex flex-col items-center">
      {/* Box Section */}
      <div className="mt-10 w-full flex flex-col lg:flex-row lg:justify-start items-center lg:pl-20">
        <div className="lg:w-[422px] lg:mr-10 mb-10 lg:mb-0">
          <h1 className="text-[32px] lg:text-[40px] font-bold text-[#3A3A3A] text-center lg:text-left leading-tight lg:leading-[44px] mt-1">
            50+ Beautiful rooms inspiration
          </h1>
          <p className="text-[16px] text-[#757575] mt-2 text-center lg:text-left leading-[24px]">
            Our designer already made a lot of beautiful prototypes of rooms
            that inspire you.
          </p>
          <div className="flex justify-center lg:justify-start mt-4">
            <button className="px-6 py-3 bg-[#B88E2F] text-white text-[16px] font-semibold rounded">
              Explore More
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          {/* First Image */}
          <div className="flex justify-center">
            <Image
              src="/Rectangle 1.png"
              alt="First Image"
              width={404}
              height={582}
              className="w-[350px] md:w-[404px] h-[500px] md:h-[582px] object-cover"
            />
          </div>

          {/* Second Image */}
          <div className="flex justify-center">
            <Image
              src="/Rectangle 2.png"
              alt="Second Image"
              width={372}
              height={486}
              className="w-[300px] md:w-[372px] h-[400px] md:h-[486px] object-cover"
            />
          </div>
          </div>

      </div>
     
<div className="w-full bg-white flex justify-center mt-10">
  <Image
    src="/Share.png"
    alt="Uploaded Image"
    width={1799}
    height={780}
    className="w-full h-auto"
  />
</div>

    </div>
  );
}
