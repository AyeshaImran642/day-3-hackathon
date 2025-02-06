
"use client"
import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Footer from "@/components/Footer";
import { useCart } from "@/context/cartcontext";

interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  productImage: {
    asset: {
      url: string;
    };
  };
}

interface CartProduct extends Product {
  quantity: number;
}

export default function ProductPage({ params }: { params: { productId: string } }) {
  const { productId } = params;
  const { addToCart } = useCart();

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const query = `*[_type == "product" && _id == $productId][0] {
          _id,
          title,
          description,
          price,
          productImage {
            asset -> {
              url
            }
          }
        }`;
        const productData = await client.fetch(query, { productId });
        setProduct(productData);
      } catch (error) {
        console.error("Error fetching product data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, [productId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-semibold">Loading...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-semibold text-red-600">Product not found.</p>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="relative group">
            <Image
              src={product.productImage.asset.url}
              alt={product.title}
              width={600}
              height={500}
              className="rounded-lg object-cover transform transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
            <p className="text-xl text-gray-500 mb-6">${product.price}</p>
            <p className="text-gray-600 mb-6">{product.description}</p>

            {/* Quantity Controls */}
            <div className="flex items-center space-x-4 mb-6">
              <button
                className="px-3 py-1 bg-gray-200 rounded text-lg font-bold"
                onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
              >
                -
              </button>
              <input
                type="text"
                value={quantity}
                readOnly
                className="w-12 text-center border border-gray-300 rounded"
              />
              <button
                className="px-3 py-1 bg-gray-200 rounded text-lg font-bold"
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                +
              </button>
            </div>

            {/* Add to Cart Button */}
            <button
              className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors"
              onClick={() => addToCart({ ...product, quantity } as CartProduct)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
