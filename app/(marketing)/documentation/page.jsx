"use client";
import Header from "@/components/home/home-one/header/multi-page";
import Footer from "@/components/home/home-one/footer/index";

export default function DocumentationPage() {
  return (
    <>
      <Header />
      <div className="container py-5">
        <h1>Documentation</h1>
        <p>Learn how to use Messegy with our comprehensive documentation.</p>
      </div>
      <Footer />
    </>
  );
}