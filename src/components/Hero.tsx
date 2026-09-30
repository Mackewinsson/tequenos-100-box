"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, ShieldCheck, Clock, Snowflake, Star, ArrowRight } from "lucide-react";

interface HeroProps {
  onOpenCheckout: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCheckout }) => {
  const [activePhoto, setActivePhoto] = useState<"platter" | "box">("platter");

  return (
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden">
      {/* Ambient Bistro Glows */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FFB703]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-[#FB8500]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Conversion Thesis & Value Proof */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-[#FFB703]/30 text-[#FFB703] text-xs font-bold tracking-wider uppercase mb-5 shadow-[0_0_15px_rgba(255,183,3,0.12)]">
              <Sparkles className="w-3.5 h-3.5 fill-[#FFB703]" />
              Edición Única • Obrador Artesanal
            </div>

            {/* H1 Main Headline - Single Product Focus */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-[#FFFDF7] leading-[1.12] mb-5">
              50 Tequeños Crudos <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB703] via-[#FB8500] to-[#FFD166]">
                por 45 €.
              </span>{" "}
              <br />
              La fiesta está resuelta.
            </h1>

            {/* Subheadline */}
            <p className="text-sm sm:text-base text-white/70 max-w-lg font-normal leading-relaxed mb-6">
              Auténtico queso blanco llanero que funde y estira de verdad, envuelto en masa fina y crujiente. <strong className="text-white font-semibold">Caja Premium de 50 tequeños crudos</strong> ultracongelados al momento por solo <strong className="text-white font-semibold underline decoration-[#FFB703] decoration-2">0,90 € la unidad</strong> con envío en frío incluido.
            </p>

            {/* Price Transparency Card */}
            <div className="w-full max-w-md p-4 rounded-2xl bg-[#10151E] border border-white/10 mb-6 flex items-center justify-between shadow-xl">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-white/50 block font-semibold">Producto Único</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-[#FFB703] font-display">45,00 €</span>
                  <span className="text-xs line-through text-white/40">60,00 €</span>
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/70 border border-emerald-500/30 px-2 py-0.5 rounded-full">-25%</span>
                </div>
              </div>
              <div className="text-right border-l border-white/10 pl-4">
                <span className="text-[11px] uppercase tracking-wider text-white/50 block font-semibold">Coste unitario</span>
                <span className="text-2xl font-black text-[#FFFDF7] font-mono">0,90 €</span>
                <span className="text-[10px] text-white/50 block">por tequeño</span>
              </div>
            </div>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-8">
              <button
                onClick={onOpenCheckout}
                className="group flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#FFB703] to-[#FB8500] hover:from-[#FB8500] hover:to-[#FFB703] text-black font-extrabold text-sm sm:text-base px-7 py-3.5 rounded-xl shadow-[0_10px_35px_rgba(255,183,3,0.3)] hover:shadow-[0_15px_45px_rgba(251,133,0,0.5)] transition-all active:scale-[0.98] cursor-pointer"
              >
                <span>Comprar Caja - 45€</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="https://wa.me/?text=Hola%2C%20quiero%20hacer%20un%20pedido%20de%20la%20Caja%20Premium%20de%2050%20Teque%C3%B1os%20Crudos%20por%2045%E2%82%AC"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white font-semibold text-xs sm:text-sm border border-white/10 transition-colors"
              >
                <span>💬 Pedir por WhatsApp</span>
              </a>
            </div>

            {/* Trust Micro-Bullets */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 w-full max-w-lg text-[11px] text-white/80">
              <div className="flex items-center gap-2 bg-[#10151E] px-3 py-2 rounded-xl border border-white/5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#FFB703] shrink-0" />
                <span>100% Queso Real</span>
              </div>
              <div className="flex items-center gap-2 bg-[#10151E] px-3 py-2 rounded-xl border border-white/5">
                <Clock className="w-3.5 h-3.5 text-[#FFB703] shrink-0" />
                <span>Listo en 6 min</span>
              </div>
              <div className="flex items-center gap-2 bg-[#10151E] px-3 py-2 rounded-xl border border-white/5">
                <Snowflake className="w-3.5 h-3.5 text-[#FFB703] shrink-0" />
                <span>50 Uds Crudas</span>
              </div>
              <div className="flex items-center gap-2 bg-[#10151E] px-3 py-2 rounded-xl border border-white/5">
                <Star className="w-3.5 h-3.5 text-[#FFB703] fill-[#FFB703] shrink-0" />
                <span>4.9/5 (1.200+)</span>
              </div>
            </div>

          </div>

          {/* Right Column: Gourmet Real Food Photography Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Image Frame Container */}
              <div className="relative rounded-3xl bg-gradient-to-b from-[#18202D] to-[#10151E] p-3 border border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden">
                
                {/* Photo Tabs Switcher */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3 px-1 pt-1">
                  <div className="flex items-center gap-1 bg-[#080B10]/80 p-1 rounded-xl border border-white/5 w-full sm:w-auto">
                    <button
                      onClick={() => setActivePhoto("platter")}
                      className={`flex-1 sm:flex-none px-3 py-1.5 rounded-lg text-[11px] sm:text-xs font-bold transition-all cursor-pointer text-center ${
                        activePhoto === "platter"
                          ? "bg-[#FFB703] text-black shadow-sm"
                          : "text-white/60 hover:text-white"
                      }`}
                    >
                      Servidos & Queso Fundido
                    </button>
                    <button
                      onClick={() => setActivePhoto("box")}
                      className={`flex-1 sm:flex-none px-3 py-1.5 rounded-lg text-[11px] sm:text-xs font-bold transition-all cursor-pointer text-center ${
                        activePhoto === "box"
                          ? "bg-[#FFB703] text-black shadow-sm"
                          : "text-white/60 hover:text-white"
                      }`}
                    >
                      Caja Premium (50 Uds)
                    </button>
                  </div>

                  <span className="text-[10px] sm:text-[11px] text-emerald-400 font-bold bg-emerald-950/70 border border-emerald-500/20 px-2.5 py-1 rounded-full flex items-center gap-1 self-start sm:self-auto">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    En Frío 24/48h
                  </span>
                </div>

                {/* Primary Photo Showcase */}
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-white/5 group">
                  <Image
                    src={activePhoto === "platter" ? "/images/hero-platter.jpg" : "/images/party-box.jpg"}
                    alt={activePhoto === "platter" ? "Tequeños artesanales con queso fundido" : "Caja Premium de 50 tequeños crudos"}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority
                  />

                  {/* Gradient Overlay for badges */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

                  {/* Floating Badges */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                    <div className="bg-[#080B10]/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#FFB703]" />
                      <span className="font-semibold">
                        {activePhoto === "platter" ? "Masa Crujiente & Queso Fundido" : "Caja Premium • 50 Tequeños Crudos"}
                      </span>
                    </div>

                    <div className="bg-[#E63946] text-white font-black text-[11px] uppercase tracking-wider px-3 py-1 rounded-xl shadow-lg">
                      Solo 45 €
                    </div>
                  </div>
                </div>

                {/* Bottom Card Summary */}
                <div className="p-3 pt-4 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-white/40 block text-[10px] uppercase">Formato</span>
                    <strong className="text-white font-semibold">Caja Premium de 50 tequeños crudos (1.250 g)</strong>
                  </div>
                  <div className="text-right">
                    <span className="text-white/40 block text-[10px] uppercase">Precio Total</span>
                    <strong className="text-lg font-black text-[#FFB703] font-display">45,00 €</strong>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
