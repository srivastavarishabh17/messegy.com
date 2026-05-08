"use client";
import Blog from "@/components/blog-page";
import Header from "@/components/home/home-one/header/multi-page";
import Footer from "@/components/home/home-one/footer/index";
import BreadCrumb from "@/components/common/Breadcrumb";

export default function BlogsPage() {
  return (
    <>
      <Header />
      <BreadCrumb title="Blog" />
      <Blog />
      <Footer />
    </>
  );
}