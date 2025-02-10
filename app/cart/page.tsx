
// "use client";
// import { useCart } from "@/context/cartcontext";
// import Navbar from "@/components/navbar";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import { FaTrash, FaPlus, FaMinus } from "react-icons/fa"; // Icons for buttons

// export default function CartPage() {
//   const { cart = [], increaseQuantity, decreaseQuantity, removeFromCart } = useCart();
//   const router = useRouter();

//   return (
//     <div className="bg-white">
//       <Navbar />

//       <div className="text-center my-6">
//         <h1 className="text-3xl font-bold">Your Cart</h1>
//       </div>

//       {/* Cart Items Table */}
//       <div className="container mx-auto px-6">
//         <table className="w-full border-collapse border border-gray-200">
//           <thead>
//             <tr className="bg-gray-100">
//               <th className="border p-3">Product</th>
//               <th className="border p-3">Price</th>
//               <th className="border p-3">Quantity</th>
//               <th className="border p-3">Total</th>
//               <th className="border p-3">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {cart.length > 0 ? (
//               cart.map((item, index) => (
//                 <tr key={index} className="text-center">
//                   <td className="border p-2 flex items-center gap-4">
//                     <Image
//                       src={item.productImage?.asset?.url || "/placeholder.png"}
//                       alt={item.title}
//                       width={64}
//                       height={64}
//                       className="object-cover rounded"
//                     />
//                     {item.title}
//                   </td>
//                   <td className="border p-3">${item.price}</td>
                  
//                   {/* Quantity Controls */}
//                   <td className="border p-3 flex items-center justify-center gap-3">
//                     <button 
//                       onClick={() => decreaseQuantity(item._id)}
//                       className="px-2 py-1 bg-gray-200 rounded"
//                     >
//                       <FaMinus />
//                     </button>
//                     <span className="font-bold">{item.quantity}</span>
//                     <button 
//                       onClick={() => increaseQuantity(item._id)}
//                       className="px-2 py-1 bg-gray-200 rounded"
//                     >
//                       <FaPlus />
//                     </button>
//                   </td>

//                   {/* Total Price */}
//                   <td className="border p-3">${item.price * item.quantity}</td>

//                   {/* Delete Button */}
//                   <td className="border p-3">
//                     <button 
//                       onClick={() => removeFromCart(item._id)}
//                       className="text-red-600 hover:text-red-800"
//                     >
//                       <FaTrash size={18} />
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan={5} className="border p-4 text-center">
//                   Your cart is empty
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Checkout Button */}
//       <div className="flex justify-center my-6">
//         {cart.length > 0 && (
//           <button 
//             onClick={() => router.push("/checkout")}
//             className="bg-black text-white px-6 py-3 rounded"
//           >
//             Proceed to Checkout
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }
"use client"
import { useCart } from "@/context/cartcontext";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FiTrash } from "react-icons/fi";

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart } = useCart();
  const router = useRouter();

  return (
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
                      onClick={() => updateQuantity(item._id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button
                      className="px-2 py-1 bg-gray-300 rounded"
                      onClick={() => updateQuantity(item._id, item.quantity + 1)}
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
  );
}
