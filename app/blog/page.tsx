import Navbar from "@/components/navbar";
import Image from "next/image";
import React from "react";

export default function BlogPage() {
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
          className="object-cover w-full"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black">
            Blog
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black">
            Home &gt; Blog
          </p>
        </div>
      </div>

      {/* Blog Section */}
      <div className="container mx-auto py-10 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Blog Content */}
          <div className="lg:col-span-9 space-y-8">
            {[
              {
                id: 1,
                title: "Going all-in with millennial design",
                date: "14 Oct 2022",
                category: "Wood",
                image: "/Blog 1.png",
              },
              {
                id: 2,
                title: "Exploring new ways of decorating",
                date: "14 Oct 2022",
                category: "Handmade",
                image: "/Blog 2.png",
              },
              {
                id: 3,
                title: "Handmade pieces that took time to make",
                date: "14 Oct 2022",
                category: "Wood",
                image: "/Blog 3.png",
              },
            ].map((post) => (
              <div
                key={post.id}
                className="bg-white shadow-md rounded-md overflow-hidden"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  width={800}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-2 text-gray-500 text-sm mb-4">
                    <span>👤 Admin</span>
                    <span>📅 {post.date}</span>
                    <span>📂 {post.category}</span>
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam esse optio quo, officiis ratione fugit fugiat. Nemo
                    corrupti iste ex incidunt? Similique odio temporibus esse
                    dignissimos voluptatum iure placeat nihil.
                  </p>
                  <button className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900">
                    Read more
                  </button>
                </div>
              </div>
            ))}

            {/* Pagination */}
            <div className="flex justify-center space-x-2 mt-8">
              <button className="px-4 py-2 bg-gray-800 text-white rounded">
                1
              </button>
              <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
                2
              </button>
              <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
                3
              </button>
              <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
                Next
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-3 space-y-8">
            {/* Search Bar */}
            <div className="bg-white shadow-md rounded-md p-4">
              <input
                type="text"
                placeholder="Search categories..."
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Categories Section */}
            <div className="bg-white shadow-md rounded-md p-4">
              <h3 className="text-lg font-semibold mb-4">Categories</h3>
              <ul className="space-y-2 text-gray-600">
                {[
                  { name: "Crafts", count: 2 },
                  { name: "Design", count: 8 },
                  { name: "Handmade", count: 7 },
                  { name: "Interior", count: 1 },
                  { name: "Wood", count: 6 },
                ].map((category) => (
                  <li key={category.name} className="flex justify-between">
                    <button className="w-full text-left px-2 py-1 rounded hover:bg-blue-100">
                      <span>{category.name}</span>
                      <span className="float-right">({category.count})</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Posts Section */}
            <div className="bg-white shadow-md rounded-md p-4">
              <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
              <ul className="space-y-4">
                {[
                  {
                    title: "Going all-in with millennial design",
                    date: "03 Aug 2022",
                    image: "/Rectangl 69 (5).png",
                  },
                  {
                    title: "Exploring new ways of decorating",
                    date: "03 Aug 2022",
                    image: "/Rectangle 69 (1).png",
                  },
                  {
                    title: "Handmade pieces that took time to make",
                    date: "03 Aug 2022",
                    image: "/Rectangle 69 (2).png",
                  },
                  {
                    title: "Modern home in Milan",
                    date: "03 Aug 2022",
                    image: "/Rectangle 69 (3).png",
                  },
                  {
                    title: "Colorful office redesign",
                    date: "03 Aug 2022",
                    image: "/Rectangle 69 (4).png",
                  },
                ].map((post, index) => (
                  <li key={index} className="flex items-center space-x-4">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={50}
                      height={50}
                      className="w-12 h-12 object-cover rounded-md"
                    />
                    <div>
                      <h4 className="text-gray-800 font-semibold">
                        {post.title}
                      </h4>
                      <p className="text-gray-500 text-sm">{post.date}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
