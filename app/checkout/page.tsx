
"use client"
import Navbar from '@/components/navbar';
import FeatureSection from '@/components/featuresection';
import Footer from '@/components/Footer';
import React, { useState } from 'react';
import Image from 'next/image';

export default function Checkout() {
  const [selectedPayment, setSelectedPayment] = useState('bank');

  const handlePaymentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPayment(event.target.value);
  };

  return (
    <div>    
       <Navbar />
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
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black">Checkout</h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black">Home &gt; Checkout</p>
        </div>
      </div>
    <div className="container mx-auto px-6 lg:px-20 py-10 bg-white">

      <h1 className="text-2xl font-semibold mb-6">Checkout</h1>
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Billing Details */}
        <div className="bg-white p-6 w-full lg:w-2/3">
          <h2 className="text-xl font-semibold mb-4">Billing details</h2>
          <form>
            {/* Form fields */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">First Name</label>
              <input type="text" className="w-full border border-gray-300 p-2 rounded" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Last Name</label>
              <input type="text" className="w-full border border-gray-300 p-2 rounded" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Company Name (Optional)</label>
              <input type="text" className="w-full border border-gray-300 p-2 rounded" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Country / Region</label>
              <input type="text" className="w-full border border-gray-300 p-2 rounded" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Street Address</label>
              <input type="text" className="w-full border border-gray-300 p-2 rounded" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Town / City</label>
              <input type="text" className="w-full border border-gray-300 p-2 rounded" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Province</label>
              <input type="text" className="w-full border border-gray-300 p-2 rounded" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">ZIP Code</label>
              <input type="text" className="w-full border border-gray-300 p-2 rounded" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Phone</label>
              <input type="text" className="w-full border border-gray-300 p-2 rounded" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Email Address</label>
              <input type="email" className="w-full border border-gray-300 p-2 rounded" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Additional Information</label>
              <textarea className="w-full border border-gray-300 p-2 rounded" rows={4}></textarea>
            </div>
          </form>
        </div>

        {/* Payment Options */}
        <div className="bg-white p-6 w-full lg:w-1/3">
          <h2 className="text-xl font-semibold mb-4">Payment Options</h2>
          <div className="mb-4">
            <div>
              <input type="radio" name="payment" id="bank" value="bank" checked={selectedPayment === 'bank'} onChange={handlePaymentChange} />
              <label htmlFor="bank" className="ml-2">Direct Bank Transfer</label>
              <p className="ml-6 text-sm text-gray-600">
                Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
              </p>
            </div>
            <div className="mt-2">
              <input type="radio" name="payment" id="cod" value="cod" checked={selectedPayment === 'cod'} onChange={handlePaymentChange} />
              <label htmlFor="cod" className="ml-2">Cash On Delivery</label>
            </div>
          </div>

          <p className="text-sm text-gray-600">
            Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <a href="#" className="text-blue-600">privacy policy</a>.
          </p>

          <button className="mt-4 bg-black text-white py-2 px-4 rounded">Place order</button>
        </div>
      </div>
      <FeatureSection />
        <Footer />
        </div>

    </div>
  );
}



      


