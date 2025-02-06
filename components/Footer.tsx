import React from 'react';

export default function Footer() {
  return (
   
    <footer className="bg-white text-gray-900 py-12 px-8 border-t border-white">
      <hr className="my-9 border-gray-300 "/>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Information */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Funiro.</h2>
          <p className='text-gray-400'>400 University Drive Suite 200</p>
          <p className='text-gray-400'>Coral Gables, FL 33134 USA</p>
        </div>
        
        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-400">Links</h3>
          <ul>
            <li className="mb-2"><a href="#" className="hover:underline">Home</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Shop</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Blog</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-400">Help</h3>
          <ul>
            <li className="mb-2"><a href="#" className="hover:underline">Payment Options</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Returns</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Privacy Policies</a></li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-400">Newsletter</h3>
          <p className="mb-4">Enter Your Email Address</p>
          <input
            type="email"
            placeholder="Email address"
            className="w-full p-2 mb-4 text-gray-900 bg-white border border-gray-300 rounded"
          />
          <button className="w-full py-2 bg-gray-600 hover:bg-gray-500 text-white font-semibold rounded">Subscribe</button>
        </div>
      </div>
      <hr className="my-9 border-gray-300" />
        <div className="container mx-auto  mt-3 " >
        <p>&copy; 2023 Funiro. All rights reserved.</p>
      </div>
     
    </footer>
  );
}
