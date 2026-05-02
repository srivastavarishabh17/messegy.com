"use client";
import Contact from "@/components/contact-us-page";
import Header from "@/components/home/home-one/header/multi-page";
import Footer from "@/components/home/home-one/footer/index";
import BreadCrumb from "@/components/common/Breadcrumb";

export default function ContactPage() {
  return (
    <>
      <Header />
      <BreadCrumb title="Contact" />
      <Contact />
      <Footer />
    </>
  );
}