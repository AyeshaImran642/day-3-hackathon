import React from "react";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Productsection from "../components/Productsection";
import Inspiration from "../components/inspiration";
import Footer from "../components/Footer";
import ToasterComponent from "@/components/ToasterComponent";

export default function HomePage() {
  return (
    <div>
      <Navbar />

      <main>
        <Hero />
        <Productsection />
        <Inspiration />
        <Footer />
        <ToasterComponent />
      </main>
    </div>
  );
}
