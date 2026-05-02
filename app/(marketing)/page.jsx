"use client";
import Header from "@/components/home/home-one/header/multi-page";
import HeroSection from "@/components/home/home-one/hero/index";
import WhyChooseUs from "@/components/home/home-one/why-choose-us/index";
import Services from "@/components/home/home-one/services/index";
import PricePlan from "@/components/home/home-one/price-plan/index";
import Testimonial from "@/components/home/home-one/testimonial/index";
import Integrations from "@/components/home/home-one/integrations/index";
import LogoSlider from "@/components/home/home-one/logo-slider/index";
import Cta from "@/components/home/home-one/cta/index";
import Footer from "@/components/home/home-one/footer/index";

export default function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <WhyChooseUs />
      <Services />
      <PricePlan />
      <Testimonial />
      <Integrations />
      <LogoSlider />
      <Cta />
      <Footer />
    </>
  );
}
