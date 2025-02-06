"use client";

import { client } from "@/sanity/lib/client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

import Navbar from "@/components/navbar";
import FeatureSection from "@/components/featuresection";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useCart } from "@/context/cartcontext";

export default function ShopPage() {
  const { addToCart } = useCart();
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product"] {
        _id,
        title,
        price,
        description,
        productImage {
          asset -> {
            url
          }
        }
      }`;
      const data = await client.fetch(query);
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <Navbar />

      {/* Header Section */}
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
            Shop
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black">
            Home &gt; Shop
          </p>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-6 bg-gray-50">
        {products.map((product) => (
          <div
            key={product._id}
            className="relative w-full bg-white shadow-lg rounded-md overflow-hidden transition-transform duration-300 hover:scale-105 flex flex-col"
          >
            {/* Product Details Link */}
            <Link href={`/shop/${product._id}`} passHref>
              <div className="cursor-pointer">
                {/* Product Image */}
                <div className="flex justify-center items-center w-full h-[350px]">
                  <img
                    src={product.productImage.asset.url}
                    alt={product.title}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Product Info */}
                <div className="p-4 text-left w-full bg-white">
                  <h3 className="font-semibold text-gray-800 text-lg">
                    {product.title}
                  </h3>
                  <p className="font-bold text-black text-lg mt-2">
                    ${product.price}
                  </p>
                </div>
              </div>
            </Link>

            {/* Add to Cart Button */}
            <div className="p-4">
              <button
                className="w-full bg-yellow-600 text-white px-4 py-2 rounded font-bold hover:bg-yellow-700 transition-colors"
                onClick={() => addToCart(product)}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <FeatureSection />
      <Footer />
    </div>
  );
}
