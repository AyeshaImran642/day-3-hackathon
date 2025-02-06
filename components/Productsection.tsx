
"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const products = [
  {
    id: 1,
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    image: "/image 1.png",
  },
  {
    id: 2,
    name: "Leviosa",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    image: "/image 2.png",
  },
  {
    id: 3,
    name: "Lolito",
    description: "Luxury big sofa",
    price: "Rp 7.000.000",
    image: "/image 3.png",
  },
  {
    id: 4,
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: "Rp 500.000",
    image: "/image 4.png",
  },
  {
    id: 5,
    name: "Grifo",
    description: "Night lamp",
    price: "Rp 1.500.000",
    image: "/image 5.png",
  },
  {
    id: 6,
    name: "Muggo",
    description: "Small mug",
    price: "Rp 1.50.000",
    image: "/image 6.png",
  },
  {
    id: 7,
    name: "Pingky",
    description: "Cute bed set",
    price: "Rp 7.000.000",
    image: "/image 7.png",
  },
  {
    id: 8,
    name: "Coffee",
    description: "Minimalist Flower Pot",
    price: "Rp 500.000",
    image: "/image 8.png",
  },
];

export default function ProductSection() {
  return (
    <div className="w-full flex flex-col items-center mt-6 ">
      {/* Section Heading */}
      <div className="text-center mb-8">
        <h2 className="text-[#333333] text-[32px] font-bold uppercase tracking-wider">
          Our Products
        </h2>
        <p className="text-[#666666] text-lg">
          Browse our latest products for your home and office.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 bg-gray-50">
        {products.map((product) => (
          <Link key={product.id} href={`/shop/${product.id}`}>
            <div
              className="relative w-full bg-white shadow-lg rounded-md overflow-hidden 
            transition-transform duration-300 hover:scale-105"
            >
              {/* Product Image */}
              <Image
                src={product.image}
                alt={product.name}
                width={285}
                height={350}
                className="object-cover w-full h-[350px]"
              />

              {/* Description Section */}
              <div className="p-4 text-left">
                <h3 className="font-semibold text-gray-800 text-lg">
                  {product.name}
                </h3>
                <p className="text-gray-500 text-sm truncate">
                  {product.description}
                </p>
                <p className="font-bold text-black mt-2">{product.price}</p>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <button className="bg-white text-yellow-600 px-4 py-2 rounded font-bold mb-4">
                  Add to cart
                </button>
                <div className="flex gap-4 text-white">
                  <span className="cursor-pointer">Share</span>
                  <span className="cursor-pointer">Compare</span>
                  <span className="cursor-pointer">Like</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Show More Button */}
      <div className="mt-8 flex justify-center">
        <button className="bg-white border-2 border-[#B88E2F] text-[#B88E2F] px-20 py-2 text-lg font-semibold transition duration-300 hover:bg-zinc-200">
          Show More
        </button>
      </div>
    </div>
  );
}
