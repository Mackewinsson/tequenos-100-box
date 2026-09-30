"use client";

import React from "react";
import { ShoppingBag } from "lucide-react";

interface StickyMobileBarProps {
  onOpenCheckout: (bundle?: string) => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ onOpenCheckout }) => {
  return (
    <aside
      aria-label="Barra de compra rápida"
      className="fixed bottom-0 left-0 right-0 z-40 bg-[#080B10]/95 backdrop-blur-xl border-t border-white/10 px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] sm:hidden shadow-[0_-10px_30px_rgba(0,0,0,0.8)]"
    >
      <div className="max-w-md mx-auto flex items-center justify-between gap-3">
        <div>
          <span className="text-[10px] text-white/50 uppercase block font-semibold tracking-wider">
            Caja Fiesta 100 Uds
          </span>
          <div className="flex items-baseline gap-1.5">
            <span className="text-xl font-black text-[#FFB703] font-display">45,00 €</span>
            <span className="text-[11px] text-emerald-400 font-mono font-medium">0,45 €/ud</span>
          </div>
        </div>

        <button
          onClick={() => onOpenCheckout("1_box")}
          className="flex-1 max-w-[210px] min-h-[48px] flex items-center justify-center gap-2 bg-gradient-to-r from-[#FFB703] to-[#FB8500] active:scale-[0.98] text-black font-extrabold text-xs tracking-wider uppercase py-3 px-4 rounded-xl shadow-[0_4px_20px_rgba(255,183,3,0.35)] cursor-pointer transition-transform"
        >
          <ShoppingBag className="w-4 h-4 fill-black shrink-0" />
          <span className="whitespace-nowrap">Comprar Ahora</span>
        </button>
      </div>
    </aside>
  );
};
