"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CheeseSlider } from "@/components/CheeseSlider";
import { PartyCalculator } from "@/components/PartyCalculator";
import { ProductAnatomy } from "@/components/ProductAnatomy";
import { PrepGuide } from "@/components/PrepGuide";
import { PricingBundles } from "@/components/PricingBundles";
import { Testimonials } from "@/components/Testimonials";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";
import { StickyMobileBar } from "@/components/StickyMobileBar";
import { CheckoutModal } from "@/components/CheckoutModal";

export default function Home() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleOpenCheckout = () => {
    setIsCheckoutOpen(true);
  };

  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false);
  };

  return (
    <main className="min-h-screen bg-[#0A0E14] text-[#FFFDF5] selection:bg-[#FFB703] selection:text-black">
      {/* Navigation */}
      <Navbar onOpenCheckout={handleOpenCheckout} />

      {/* Hero Section */}
      <Hero onOpenCheckout={handleOpenCheckout} />

      {/* Signature 1: Interactive Cheese-Pull Experience */}
      <CheeseSlider />

      {/* Signature 2: Party Guests & Cost Math Calculator */}
      <PartyCalculator onOpenCheckout={handleOpenCheckout} />

      {/* Quality & Why they never leak */}
      <ProductAnatomy />

      {/* Quick Prep Guide: Airfryer, Pan, Oven */}
      <PrepGuide />

      {/* Single Product Pricing Section: Caja Premium de 50 tequeños crudos (45 €) */}
      <PricingBundles onOpenCheckout={handleOpenCheckout} />

      {/* Social Proof & Customer Reviews */}
      <Testimonials />

      {/* Frequently Asked Questions */}
      <FaqSection />

      {/* Footer */}
      <Footer />

      {/* Persistent Bottom Bar for Mobile Viewports */}
      <StickyMobileBar onOpenCheckout={handleOpenCheckout} />

      {/* Checkout & Demand Validation Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={handleCloseCheckout}
      />
    </main>
  );
}
