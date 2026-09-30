"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, Check, ArrowRight, Truck, Gift } from "lucide-react";

interface PricingBundlesProps {
  onOpenCheckout: (bundle: string) => void;
}

export const PricingBundles: React.FC<PricingBundlesProps> = ({ onOpenCheckout }) => {
  return (
    <section id="precios" className="py-20 bg-[#0A0E15] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#10151E] border border-white/10 text-[#FFB703] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 fill-[#FFB703]" />
            Tarifas Directas de Obrador
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-[#FFFDF7] mb-3">
            Elige el formato de tu fiesta
          </h2>
          <p className="text-sm sm:text-base text-white/60">
            Sin intermediarios. Congelados artesanalmente y despachados en transporte refrigerado certificado.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Tier 1: 100 Units Standard */}
          <div className="rounded-3xl bg-[#10151E] border border-white/10 p-7 flex flex-col justify-between hover:border-white/20 transition-all shadow-xl">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs uppercase tracking-wider font-bold text-white/50">Pack Estándar</span>
                <span className="text-xs text-white/70 bg-white/5 px-2.5 py-1 rounded-full font-medium">2x50 uds</span>
              </div>

              <h3 className="text-2xl font-black font-display text-white mb-2">
                Caja 100 Tequeños
              </h3>
              <p className="text-xs text-white/60 leading-relaxed mb-6">
                Para reuniones familiares, cumpleaños o para tener siempre aperitivo gourmet en casa.
              </p>

              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl font-black text-white font-display">45,00 €</span>
                <span className="text-xs font-semibold text-white/50">/ caja</span>
              </div>

              <div className="bg-[#080B10] px-4 py-2.5 rounded-xl border border-white/5 text-xs font-mono text-[#FFB703] mb-6">
                Coste por tequeño: <strong>0,45 €/unidad</strong>
              </div>

              <ul className="space-y-3 text-xs text-white/80 mb-8">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100 tequeños artesanales de queso blanco</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>2 bandejas de 50 selladas al vacío</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Envío refrigerado con aviso SMS</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Guía impresa de salsas y temperaturas</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => onOpenCheckout("1_box")}
              className="w-full py-3.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer active:scale-95"
            >
              Pedir 1 Caja (45 €)
            </button>
          </div>

          {/* Tier 2: 200 Units Featured Hero */}
          <div className="rounded-3xl bg-gradient-to-b from-[#18202D] via-[#121722] to-[#0E131B] border-2 border-[#FFB703] p-7 flex flex-col justify-between shadow-[0_15px_50px_rgba(255,183,3,0.18)] relative scale-100 lg:-translate-y-2">
            
            {/* Best Value Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#FFB703] to-[#FB8500] text-black font-extrabold text-[11px] uppercase tracking-wider px-4 py-1 rounded-full shadow-lg flex items-center gap-1.5 whitespace-nowrap">
              <Sparkles className="w-3.5 h-3.5 fill-black" />
              Más Popular • Mejor Valor
            </div>

            <div>
              <div className="flex justify-between items-center mb-4 mt-2">
                <span className="text-xs uppercase tracking-wider font-bold text-[#FFB703]">Doble Fiesta</span>
                <span className="text-xs text-emerald-400 bg-emerald-950/80 border border-emerald-500/30 px-2.5 py-1 rounded-full font-bold">
                  Envío Gratis
                </span>
              </div>

              <h3 className="text-2xl font-black font-display text-[#FFFDF7] mb-2">
                200 Tequeños (2 Cajas)
              </h3>
              <p className="text-xs text-white/60 leading-relaxed mb-6">
                La opción preferida de fiestas grandes. Incluye 2 tarros de salsa artesana de obrador gratis.
              </p>

              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl font-black text-[#FFB703] font-display">85,00 €</span>
                <span className="text-xs line-through text-white/40">96,95 €</span>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded-full">Ahorras 12€</span>
              </div>

              <div className="bg-[#080B10] px-4 py-2.5 rounded-xl border border-[#FFB703]/30 text-xs font-mono text-[#FFB703] mb-6 flex justify-between">
                <span>Coste unitario: <strong>0,42 €/ud</strong></span>
                <span className="text-emerald-400 font-semibold">+ 2 Salsas</span>
              </div>

              <ul className="space-y-3 text-xs text-white/90 mb-8">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#FFB703] shrink-0" />
                  <span>200 tequeños (4 bandejas independientes)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Truck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="font-semibold text-emerald-400">ENVÍO REFRIGERADO 100% GRATIS</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Gift className="w-4 h-4 text-[#FB8500] shrink-0" />
                  <span className="font-semibold text-white">2 Botes de salsa artesana gratis (Tártara + Guayaba)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#FFB703] shrink-0" />
                  <span>Atención prioritaria y entrega programada</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => onOpenCheckout("2_boxes")}
              className="w-full py-4 px-4 rounded-xl bg-gradient-to-r from-[#FFB703] to-[#FB8500] hover:from-[#FB8500] hover:to-[#FFB703] text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-[0_10px_30px_rgba(255,183,3,0.3)] transition-all cursor-pointer active:scale-95 flex items-center justify-center gap-2"
            >
              <span>Pedir 2 Cajas con Envío Gratis (85 €)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Tier 3: 300 Units Catering / Pro */}
          <div className="rounded-3xl bg-[#10151E] border border-white/10 p-7 flex flex-col justify-between hover:border-white/20 transition-all shadow-xl">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs uppercase tracking-wider font-bold text-white/50">Catering & Bares</span>
                <span className="text-xs text-white/70 bg-white/5 px-2.5 py-1 rounded-full font-medium">6x50 uds</span>
              </div>

              <h3 className="text-2xl font-black font-display text-white mb-2">
                Pack 300 Tequeños
              </h3>
              <p className="text-xs text-white/60 leading-relaxed mb-6">
                Para hostelería, bodas, eventos corporativos o celebraciones con alto volumen.
              </p>

              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl font-black text-white font-display">120,00 €</span>
                <span className="text-xs font-semibold text-white/50">/ 3 cajas</span>
              </div>

              <div className="bg-[#080B10] px-4 py-2.5 rounded-xl border border-white/5 text-xs font-mono text-[#FFB703] mb-6">
                Coste por tequeño: <strong>0,40 €/unidad</strong>
              </div>

              <ul className="space-y-3 text-xs text-white/80 mb-8">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>300 tequeños (6 bandejas de 50 uds)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Truck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Envío refrigerado prioritario gratuito</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Gift className="w-4 h-4 text-[#FB8500] shrink-0" />
                  <span>Pack degustación de 4 salsas de obrador</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Factura desglosada para autónomos/empresas</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => onOpenCheckout("3_boxes")}
              className="w-full py-3.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer active:scale-95"
            >
              Pedir Pack 300 Uds (120 €)
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
