
import React from 'react';
import Image from 'next/image';

export default function FeatureSection() {
  return (
    <div className="flex flex-wrap justify-center items-start bg-[#FAF3EA] p-14 gap-6">
      {/* High Quality */}
      <div className="flex flex-row items-center space-x-4 w-full sm:w-auto">
        <Image src="/trophy 1.png" alt="High Quality" width={48} height={48} className="w-12 h-12" />
        <div>
          <span className="font-bold text-gray-800">High Quality</span>
          <span className="text-sm text-gray-600 block">Crafted from top materials</span>
        </div>
      </div>

      {/* Warranty Protection */}
      <div className="flex flex-row items-center space-x-4 w-full sm:w-auto">
        <Image src="/guarantee.png" alt="Warranty Protection" width={48} height={48} className="w-12 h-12" />
        <div>
          <span className="font-bold text-gray-800">Warranty Protection</span>
          <span className="text-sm text-gray-600 block">Over 2 years</span>
        </div>
      </div>

      {/* Free Shipping */}
      <div className="flex flex-row items-center space-x-4 w-full sm:w-auto">
        <Image src="/shipping.png" alt="Free Shipping" width={48} height={48} className="w-12 h-12" />
        <div>
          <span className="font-bold text-gray-800">Free Shipping</span>
          <span className="text-sm text-gray-600 block">Order over 150 $</span>
        </div>
      </div>

      {/* 24/7 Support */}
      <div className="flex flex-row items-center space-x-4 w-full sm:w-auto">
        <Image src="/Vector 1.png" alt="24/7 Support" width={48} height={48} className="w-12 h-12" />
        <div>
          <span className="font-bold text-gray-800">24/7 Support</span>
          <span className="text-sm text-gray-600 block">Dedicated support</span>
        </div>
      </div>
    </div>
  );
}
