"use client";
import Header from "@/components/home/home-one/header/multi-page";
import Footer from "@/components/home/home-one/footer/index";

export default function EcommercePage() {
  return (
    <>
      <Header />
      <div className="container py-5">
        <h1>E-commerce</h1>
        <p>WhatsApp solutions for the e-commerce industry.</p>
      </div>
      <Footer />
    </>
  );
}