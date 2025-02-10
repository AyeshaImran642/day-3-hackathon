
"use client";
import { CartProvider, useCart } from "@/context/cartcontext";
import Navbar from "@/components/navbar";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function CartPage() {
  const { cart } = useCart();
  const router = useRouter();

  return (
    <div className="bg-white">
      <Navbar />

      <div className="text-center my-6">
        <h1 className="text-3xl font-bold">Your Cart</h1>
      </div>

      {/* Cart Items Table */}
      <div className="container mx-auto px-6">
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Product</th>
              <th className="border p-2">Price</th>
            </tr>
          </thead>
          <tbody>
            {cart.length > 0 ? (
              cart.map((item, index) => (
                <tr key={index}>
                  <td className="border p-2 flex items-center gap-4">
                    <Image src={item.productImage.asset.url} alt={item.title} className="w-16 h-16 object-cover" />
                    {item.title}
                  </td>
                  <td className="border p-2">${item.price}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={2} className="border p-4 text-center">
                  Your cart is empty
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Checkout Button */}
      <div className="flex justify-center my-6">
        <button 
          onClick={() => router.push("/checkout")}
          className="bg-black text-white px-6 py-3 rounded"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
