"use client";
import Header from "@/components/home/home-one/header/multi-page";
import HeroSection from "@/components/home/home-one/hero/index";
import WhyChooseUs from "@/components/home/home-one/why-choose-us/index";
import Services from "@/components/home/home-one/services/index";
import WhatsAppChannels from "@/components/home/home-one/whatsapp-channels/index";
import PricePlan from "@/components/home/home-one/price-plan/index";
import Integrations from "@/components/home/home-one/integrations/index";
import SecureSolutions from "@/components/home/home-one/secure-solutions/index";
import Testimonial from "@/components/home/home-one/testimonial/index";
import Blog from "@/components/home/home-one/blog";
import ContactUs from "@/components/home/home-one/contact-us";
import LogoSlider from "@/components/home/home-one/logo-slider/index";
import Cta from "@/components/home/home-one/cta/index";
import AiWhatsAppPlatform from "@/components/home/home-one/ai-whatsapp-platform/AiWhatsAppPlatform";
import Statistics from "@/components/home/home-one/statistics/index";
import Footer from "@/components/home/home-one/footer/index";
import Features from "@/components/home/home-one/features";
export default function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <LogoSlider />
      <Services />
      <WhatsAppChannels />
      <WhyChooseUs />
      <Integrations />
      <Features />
      <Testimonial />
      {/* <Blog /> */}
      <Blog />
      <ContactUs />
      {/* <Cta />
      <AiWhatsAppPlatform />
      <Statistics /> */}
      <Footer />

      
    </>
  );
}
