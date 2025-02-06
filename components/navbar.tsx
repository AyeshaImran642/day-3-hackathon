"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { CiSearch, CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Close search bar on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setSearchOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="relative z-50 w-full bg-white shadow-md">
      <div className="flex items-center justify-between px-4 sm:px-8 h-20">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <Image
            src="/Meubel House.png"
            alt="Meubel House Logo"
            width={48}
            height={32}
            className="object-contain"
          />
          <Link href="/">
            <h1 className="text-2xl font-bold text-black">Furniro</h1>
          </Link>
        </div>

        {/* Desktop Navigation (Center) */}
        <nav className="hidden md:flex md:flex-1 justify-center space-x-8 text-sm font-medium text-gray-700">
          <Link href="/" className="hover:text-black transition-colors">
            Home
          </Link>
          <Link href="/shop" className="hover:text-black transition-colors">
            Shop
          </Link>
          <Link href="/blog" className="hover:text-black transition-colors">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-black transition-colors">
            Contact
          </Link>
        </nav>

        {/* Desktop Icons (Right) */}
        <div className="hidden md:flex space-x-6 items-center">
          <button aria-label="User">
            <FaRegUser className="text-[20px] text-black" />
          </button>
          <button aria-label="Search" onClick={() => setSearchOpen(true)}>
            <CiSearch className="text-[28px] text-black" />
          </button>
          <Link href="/wishlist" aria-label="WishList Icon">
            <CiHeart className="text-[28px] text-black" />
          </Link>
          <Link href="/cart" aria-label="Cart Icon">
            <IoCartOutline className="text-[24px]" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-black text-2xl"
          aria-label="Toggle Menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
        </button>
      </div>

      {/* Mobile Menu (Navigation + Icons) */}
      {menuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center space-y-6 text-lg font-semibold md:hidden">
          <button
            className="absolute top-6 right-6 text-3xl"
            onClick={() => setMenuOpen(false)}
          >
            <IoMdClose />
          </button>

          {/* Navigation Links */}
          <Link
            href="/"
            className="hover:text-gray-600"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/shop"
            className="hover:text-gray-600"
            onClick={() => setMenuOpen(false)}
          >
            Shop
          </Link>
          <Link
            href="/blog"
            className="hover:text-gray-600"
            onClick={() => setMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="hover:text-gray-600"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>

          {/* Icons Inside Mobile Menu */}
          <div className="flex space-x-6 items-center">
            <button aria-label="User">
              <FaRegUser className="text-[24px] text-black" />
            </button>
            <button aria-label="Search" onClick={() => setSearchOpen(true)}>
              <CiSearch className="text-[28px] text-black" />
            </button>
            <Link href="/wishlist" aria-label="WishList Icon">
              <CiHeart className="text-[28px] text-black" />
            </Link>
            <Link href="/cart" aria-label="Cart Icon">
              <IoCartOutline className="text-[24px]" />
            </Link>
          </div>
        </div>
      )}

      {/* Search Bar Overlay */}
      {searchOpen && (
        <div
          ref={searchRef}
          className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-20"
        >
          <div className="bg-white w-4/5 md:w-1/3 p-4 rounded-lg shadow-lg flex items-center relative">
            <CiSearch className="absolute left-3 text-xl text-gray-500" />
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full p-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <button
              onClick={() => setSearchOpen(false)}
              className="ml-2 text-gray-600"
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
