"use client";
import Navbar from "@/components/navbar";
import { useCart } from "@/context/cartcontext";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FiTrash } from "react-icons/fi";

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart } = useCart();
  const router = useRouter();

  return (
    <div>
      <Navbar />
      <div className="bg-white min-h-screen p-4 md:p-10">
        <h1 className="text-3xl font-bold text-center mb-6">Your Cart</h1>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 rounded-lg shadow-md">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left">Product</th>
                <th className="p-3">Price</th>
                <th className="p-3">Quantity</th>
                <th className="p-3">Total</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.length > 0 ? (
                cart.map((item) => (
                  <tr key={item._id} className="border-t text-center">
                    <td className="flex items-center gap-4 p-3">
                      <Image
                        src={item.productImage.asset.url}
                        alt={item.title}
                        width={60}
                        height={60}
                        className="rounded-md object-cover"
                      />
                      <span>{item.title}</span>
                    </td>
                    <td className="p-3">${item.price}</td>
                    <td className="p-3 flex items-center justify-center gap-2">
                      <button
                        className="px-2 py-1 bg-gray-300 rounded"
                        onClick={() =>
                          updateQuantity(item._id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button
                        className="px-2 py-1 bg-gray-300 rounded"
                        onClick={() =>
                          updateQuantity(item._id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </td>
                    <td className="p-3">${item.price * item.quantity}</td>
                    <td className="p-3">
                      <button
                        onClick={() => removeFromCart(item._id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <FiTrash size={20} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="p-4 text-center text-gray-500">
                    Your cart is empty
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="flex justify-center mt-6">
          <button
            onClick={() => router.push("/checkout")}
            className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
