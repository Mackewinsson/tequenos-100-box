"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, Check, ArrowRight, Truck, Gift, ShieldCheck } from "lucide-react";

interface PricingBundlesProps {
  onOpenCheckout: () => void;
}

export const PricingBundles: React.FC<PricingBundlesProps> = ({ onOpenCheckout }) => {
  return (
    <section id="precios" className="py-20 bg-[#0A0E15] border-t border-white/[0.06] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#10151E] border border-white/10 text-[#FFB703] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 fill-[#FFB703]" />
            Tarifa Directa de Obrador
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-[#FFFDF7] mb-3">
            Nuestro Producto Único
          </h2>
          <p className="text-sm sm:text-base text-white/60">
            Sin variantes complejas ni intermediarios. La auténtica receta artesanal en su formato perfecto de 50 unidades.
          </p>
        </div>

        {/* Single Featured Product Card */}
        <div className="max-w-xl mx-auto rounded-3xl bg-gradient-to-b from-[#18202D] via-[#121722] to-[#0E131B] border-2 border-[#FFB703] p-6 sm:p-9 shadow-[0_20px_60px_rgba(255,183,3,0.18)] relative">
          
          {/* Best Value Badge */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#FFB703] to-[#FB8500] text-black font-extrabold text-[11px] uppercase tracking-wider px-4 py-1 rounded-full shadow-lg flex items-center gap-1.5 whitespace-nowrap">
            <Sparkles className="w-3.5 h-3.5 fill-black" />
            Edición Limitada • 50 Unidades
          </div>

          <div>
            <div className="flex justify-between items-center mb-4 mt-2">
              <span className="text-xs uppercase tracking-wider font-bold text-[#FFB703]">Obrador Artesanal</span>
              <span className="text-xs text-emerald-400 bg-emerald-950/80 border border-emerald-500/30 px-2.5 py-1 rounded-full font-bold">
                Envío Refrigerado
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black font-display text-[#FFFDF7] mb-2">
              Caja Premium de 50 tequeños crudos
            </h3>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-6">
              50 tequeños crudos de auténtico queso blanco llanero envueltos en masa fina hojaldrada. Ultracongelados al momento para que los disfrutes recién hechos en tu casa.
            </p>

            {/* Price Box */}
            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-5xl font-black text-[#FFB703] font-display">45,00 €</span>
              <span className="text-xs text-white/50 font-semibold">/ caja completa</span>
            </div>

            <div className="bg-[#080B10] px-4 py-2.5 rounded-xl border border-[#FFB703]/30 text-xs font-mono text-[#FFB703] mb-6 flex justify-between items-center">
              <span>Coste unitario: <strong>0,90 € / tequeño</strong></span>
              <span className="text-emerald-400 font-semibold text-[11px]">+ Salsa Tártara Incluida</span>
            </div>

            {/* Included Features */}
            <ul className="space-y-3.5 text-xs sm:text-sm text-white/90 mb-8">
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-[#FFB703] shrink-0" />
                <span>50 tequeños crudos de queso blanco llanero auténtico</span>
              </li>
              <li className="flex items-center gap-3">
                <Truck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Transporte refrigerado 24/48h con cadena de frío garantizada</span>
              </li>
              <li className="flex items-center gap-3">
                <Gift className="w-4 h-4 text-[#FB8500] shrink-0" />
                <span>Tarro de salsa tártara artesana incluido de regalo</span>
              </li>
              <li className="flex items-center gap-3">
                <ShieldCheck className="w-4 h-4 text-[#FFB703] shrink-0" />
                <span>Listos en 6 minutos en tu airfryer o sartén (sin descongelar)</span>
              </li>
            </ul>
          </div>

          {/* Single High-Conversion Button: Comprar Caja - 45€ */}
          <button
            onClick={onOpenCheckout}
            className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#FFB703] to-[#FB8500] hover:from-[#FB8500] hover:to-[#FFB703] text-black font-extrabold text-sm sm:text-base uppercase tracking-wider shadow-[0_10px_30px_rgba(255,183,3,0.3)] transition-all cursor-pointer active:scale-95 flex items-center justify-center gap-2"
          >
            <span>Comprar Caja - 45€</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <p className="text-[11px] text-white/40 text-center mt-3">
            Sin suscripciones • Pago seguro al verificar la franja de entrega
          </p>

        </div>

      </div>
    </section>
  );
};
