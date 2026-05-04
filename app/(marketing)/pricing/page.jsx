"use client";
import WhatsAppPricing from "@/components/pricing/WhatsAppPricing";
import Header from "@/components/home/home-one/header/multi-page";
import Footer from "@/components/home/home-one/footer/index";
import BreadCrumb from "@/components/common/Breadcrumb";

export default function PricingPage() {
  return (
    <>
      <Header />
      <BreadCrumb title="Pricing" />
      <WhatsAppPricing />
      <Footer />
    </>
  );
}
