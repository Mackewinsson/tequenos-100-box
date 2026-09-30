"use client";

import React from "react";
import { Sparkles, ShoppingBag, MessageCircle } from "lucide-react";

interface NavbarProps {
  onOpenCheckout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCheckout }) => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[#080B10]/85 border-b border-white/[0.08] transition-all">
      {/* Top Gastro Announcement Bar */}
      <div className="bg-gradient-to-r from-[#FFB703] via-[#FB8500] to-[#E63946] text-black font-semibold text-xs py-1.5 px-4 text-center">
        <span className="inline-flex items-center gap-1.5 font-bold tracking-tight">
          <Sparkles className="w-3.5 h-3.5 fill-black shrink-0" />
          Envíos refrigerados 24/48h a toda la península • <strong>Caja Premium de 50 tequeños crudos por 45€</strong>
        </span>
      </div>

      {/* Main Bar */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#FFB703] via-[#FB8500] to-[#D97706] flex items-center justify-center font-black text-black text-sm shadow-[0_0_20px_rgba(255,183,3,0.35)] group-hover:scale-105 transition-transform">
            TQ
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-base tracking-tight font-display text-[#FFFDF7]">
              TEQUE<span className="text-[#FFB703]">BOX</span>
            </span>
            <span className="text-[9px] text-white/50 uppercase tracking-widest -mt-1 font-semibold">
              Obrador Artesanal
            </span>
          </div>
        </a>

        {/* Trust Proof Badge (Eliminates navigation leaks) */}
        <div className="hidden md:flex items-center gap-2 text-xs font-semibold text-white/70 bg-white/[0.04] px-3.5 py-1.5 rounded-full border border-white/10">
          <span className="flex text-[#FFB703]">★★★★★</span>
          <span className="text-white font-bold">4.9/5</span>
          <span className="text-white/40">•</span>
          <span>1.200+ Cajas Enviadas</span>
          <span className="text-white/40">•</span>
          <span className="text-emerald-400 font-medium">Envío Frío 24/48h</span>
        </div>

        {/* Action CTAs */}
        <div className="flex items-center gap-2.5">
          <a
            href="https://wa.me/?text=Hola%20quiero%20informacion%20de%20la%20Caja%20Premium%20de%2050%20teque%C3%B1os%20crudos%20por%2045%E2%82%AC"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-500/20 hover:bg-emerald-900/60 transition-colors whitespace-nowrap"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={onOpenCheckout}
            className="flex items-center gap-2 bg-[#FFB703] hover:bg-[#FB8500] text-black font-extrabold text-xs sm:text-sm px-4 py-2 rounded-xl transition-all shadow-[0_0_20px_rgba(255,183,3,0.3)] hover:shadow-[0_0_30px_rgba(251,133,0,0.5)] active:scale-95 cursor-pointer whitespace-nowrap"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Comprar Caja - 45€</span>
          </button>
        </div>
      </nav>
    </header>
  );
};
