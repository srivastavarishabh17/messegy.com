"use client";
import AboutUs from "@/components/AboutUs";
import Header from "@/components/home/home-one/header/multi-page";
import Footer from "@/components/home/home-one/footer/index";
import BreadCrumb from "@/components/common/Breadcrumb";

export default function AboutPage() {
  return (
    <>
      <Header />
      <BreadCrumb title="About Us" />
      <AboutUs />
      <Footer />
    </>
  );
}
