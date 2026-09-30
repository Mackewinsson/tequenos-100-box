"use client";

import React, { useState } from "react";
import { Sparkles, MoveHorizontal, CheckCircle2 } from "lucide-react";

export const CheeseSlider: React.FC = () => {
  const [pull, setPull] = useState<number>(55); // percentage 0 to 100

  // Calculate dynamic stretch length in cm
  const stretchCm = Math.round((pull / 100) * 38);

  const getStatusText = (val: number) => {
    if (val < 15) return "Tequeño entero y crujiente • Desliza para partirlo";
    if (val < 50) return "Corteza dorada crujiendo • El queso llanero empieza a estirar";
    if (val < 85) return "¡Cheese-pull épico! Queso 100% artesano que estira sin romperse";
    return "¡38 cm de pura satisfacción! Textura fundente y sedosa garantizada";
  };

  return (
    <section id="experiencia" className="py-14 sm:py-20 bg-[#0A0E15] relative overflow-hidden border-y border-white/[0.06] content-auto">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Header */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFB703]/10 border border-[#FFB703]/20 text-[#FFB703] text-xs font-bold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5 fill-[#FFB703]" />
          Experiencia Sensorial
        </div>

        <h2 className="text-2xl sm:text-4xl md:text-5xl font-black font-display text-[#FFFDF7] mb-3">
          Prueba el <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB703] to-[#FB8500]">Cheese-Pull</span>
        </h2>
        
        <p className="text-xs sm:text-base text-white/60 max-w-xl mx-auto mb-8 px-2">
          Arrastra el control para partir el tequeño y comprobar la elasticidad real de nuestro queso blanco llanero. Cero pastas procesadas que se disuelven.
        </p>

        {/* Interactive Visual Stage */}
        <div className="relative max-w-2xl mx-auto rounded-3xl bg-gradient-to-b from-[#131923] to-[#0D1219] p-4 sm:p-10 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden">
          
          {/* Live Metric Pill */}
          <div className="inline-flex items-center gap-2 bg-[#080B10] px-3.5 py-1.5 rounded-full border border-white/10 text-[11px] sm:text-xs font-mono text-white/90 mb-6 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-[#FFB703] animate-ping" />
            <span>Elasticidad: <strong className="text-[#FFB703] font-display text-sm">{stretchCm} cm</strong></span>
            <span className="text-white/20">|</span>
            <span className="text-emerald-400 font-sans font-semibold">100% Llanero Real</span>
          </div>

          {/* High-Fidelity Tequeño Graphic Stage (Fluid scale for mobile) */}
          <div className="h-36 sm:h-52 flex items-center justify-center relative select-none px-2 overflow-hidden max-w-full">
            
            {/* Left Tequeño Piece */}
            <div 
              className="relative z-20 w-24 sm:w-36 md:w-44 h-14 sm:h-18 md:h-20 rounded-l-full bg-gradient-to-r from-[#8B4513] via-[#D97706] to-[#F59E0B] shadow-[0_8px_25px_rgba(0,0,0,0.7)] flex items-center justify-end pr-1 sm:pr-2 border-l-2 sm:border-l-4 border-t-2 border-b-2 sm:border-b-4 border-[#FBBF24] transition-transform duration-75 overflow-hidden shrink-0"
              style={{
                transform: `translateX(-${(pull / 100) * 48}px) rotate(-${(pull / 100) * 5}deg)`,
              }}
            >
              <div className="absolute inset-0 opacity-40 bg-[repeating-linear-gradient(45deg,#78350F,#78350F_8px,#B45309_8px,#B45309_16px)]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/30" />
              <div className="relative z-10 w-3 sm:w-4 h-9 sm:h-12 rounded-r-md bg-gradient-to-r from-[#FEF3C7] to-[#FFFDF7] shadow-inner border-r border-[#FFFBEB]" />
            </div>

            {/* Stretchy Molten Cheese Center (Scales on mobile) */}
            <div 
              className="relative z-10 flex flex-col items-center justify-center transition-all duration-75"
              style={{
                width: `${Math.max(10, (pull / 100) * 160 + 10)}px`,
                opacity: pull > 1 ? 1 : 0,
              }}
            >
              {/* Primary Thick Molten Cheese Strand */}
              <div 
                className="w-full bg-gradient-to-r from-[#FFFDF7] via-[#FFFBEB] to-[#FFFDF7] rounded-full shadow-[0_0_20px_rgba(255,253,247,0.9)]"
                style={{
                  height: `${Math.max(5, 34 - (pull / 100) * 26)}px`,
                }}
              />
              
              {/* Secondary Elastic Cheese Filaments */}
              {pull > 25 && (
                <div 
                  className="w-full h-0.5 sm:h-1 bg-[#FEF3C7] opacity-80 rounded-full mt-1 shadow-[0_0_8px_rgba(254,243,199,0.8)]"
                  style={{ transform: `scaleY(${Math.max(0.3, 1 - pull / 150)})` }}
                />
              )}
            </div>

            {/* Right Tequeño Piece */}
            <div 
              className="relative z-20 w-24 sm:w-36 md:w-44 h-14 sm:h-18 md:h-20 rounded-r-full bg-gradient-to-l from-[#8B4513] via-[#D97706] to-[#F59E0B] shadow-[0_8px_25px_rgba(0,0,0,0.7)] flex items-center justify-start pl-1 sm:pl-2 border-r-2 sm:border-r-4 border-t-2 border-b-2 sm:border-b-4 border-[#FBBF24] transition-transform duration-75 overflow-hidden shrink-0"
              style={{
                transform: `translateX(${(pull / 100) * 48}px) rotate(${(pull / 100) * 5}deg)`,
              }}
            >
              <div className="absolute inset-0 opacity-40 bg-[repeating-linear-gradient(-45deg,#78350F,#78350F_8px,#B45309_8px,#B45309_16px)]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/30" />
              <div className="relative z-10 w-3 sm:w-4 h-9 sm:h-12 rounded-l-md bg-gradient-to-l from-[#FEF3C7] to-[#FFFDF7] shadow-inner border-l border-[#FFFBEB]" />
            </div>

          </div>

          {/* Interactive Range Slider (44px touch target) */}
          <div className="mt-6 sm:mt-8 space-y-2">
            <div className="flex justify-between text-[11px] sm:text-xs text-white/50 font-medium">
              <span>0% Crujiente recién frito</span>
              <span className="flex items-center gap-1 text-[#FFB703] font-semibold">
                <MoveHorizontal className="w-3.5 h-3.5" /> Desliza
              </span>
              <span>100% Máximo Estiramiento</span>
            </div>

            <div className="py-2">
              <input
                type="range"
                min="0"
                max="100"
                value={pull}
                onChange={(e) => setPull(Number(e.target.value))}
                aria-label="Control de elasticidad de queso"
                className="w-full cursor-pointer touch-pan-y"
              />
            </div>

            <p className="text-xs sm:text-sm font-semibold text-[#FFB703] transition-all pt-1 min-h-[26px]">
              {getStatusText(pull)}
            </p>
          </div>

          {/* Quality Proof Points */}
          <div className="mt-6 pt-5 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-left">
            <div className="flex items-start gap-2 text-xs text-white/80">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Queso llanero tradicional semi-duro</span>
            </div>
            <div className="flex items-start gap-2 text-xs text-white/80">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Punto exacto de sal (sin conservantes)</span>
            </div>
            <div className="flex items-start gap-2 text-xs text-white/80">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Funde cremoso sin vaciar el tequeño</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
