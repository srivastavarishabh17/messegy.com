"use client";
import PricePlan from "@/components/home/home-one/price-plan/index";
import PricingCalculator from "@/components/pricing/PricingCalculator";
import Header from "@/components/home/home-one/header/multi-page";
import Footer from "@/components/home/home-one/footer/index";
import BreadCrumb from "@/components/common/Breadcrumb";

export default function PricingPage() {
  return (
    <>
      <Header />
      <BreadCrumb title="Pricing" />
      <PricePlan />
      <PricingCalculator />
      
      <Footer />
    </>
  );
}
