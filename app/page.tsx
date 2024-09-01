import React from "react";

import HeroFormCenterAlignedWithAForm from "@/components/LandingPage/ContactSection";
import FeatureSection from "@/components/LandingPage/FeatureSection";
import PricingSectionCards from "@/components/LandingPage/PricingSection";
import Header from "@/components/LandingPage/Header";
import HeroSection from "@/components/LandingPage/HeroSection";
import Footer from "@/components/LandingPage/Footer";
import { MarqueeDemo } from "@/components/LandingPage/Vmark";
import TrustLogos from "@/components/LandingPage/TrustLogos";
import Problems from "@/components/LandingPage/Problems";
import FAQ from "@/components/LandingPage/FAQ";


const page = () => {
  return (
    <main>
      <Header />
     <section className=" space-y-4 relative flex w-full flex-col items-center justify-start overflow-hidden px-4 pt-32 sm:px-6 sm:pt-24 md:pt-32 lg:min-h-screen lg:px-8">
      <HeroSection />
      {/* <TrustLogos /> */}
      <Problems />
      <FeatureSection />
      <MarqueeDemo />
      <FAQ/>
      <Footer />
     </section>
    </main>
  );
};
export default page;
