"use client";

import React, { useState } from "react";
import { Wind, Flame, Eye, Clock, Thermometer, Lightbulb } from "lucide-react";

export const PrepGuide: React.FC = () => {
  return (
    <section id="preparacion" className="py-16 sm:py-20 bg-[#0A0E14] relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#131821] border border-white/10 text-[#FFB703] text-xs font-semibold uppercase tracking-wider mb-4">
            <Clock className="w-3.5 h-3.5" />
            Cocinado en 6 Minutos
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black font-display text-[#FFFDF5] mb-3">
            Listos en lo que abres la cerveza
          </h2>
          <p className="text-xs sm:text-base text-white/60">
            Del congelador directo al plato. Sin descongelar, sin manchar la cocina y sin líos.
          </p>
        </div>

        {/* 3 Methods Side-by-Side Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          
          {/* Method 1: Airfryer */}
          <div className="rounded-2xl bg-[#131821] border-2 border-[#FFB703] p-6 flex flex-col justify-between shadow-[0_0_30px_rgba(255,183,3,0.12)] relative">
            <div className="absolute -top-3 left-6 bg-[#FFB703] text-black text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full">
              ⭐ Opción Favorita
            </div>
            <div>
              <div className="flex items-center justify-between mb-4 mt-1">
                <div className="w-10 h-10 rounded-xl bg-[#242E3D] flex items-center justify-center text-[#FFB703]">
                  <Wind className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-[#FFB703] bg-[#FFB703]/10 px-2.5 py-1 rounded-lg border border-[#FFB703]/20 font-bold">
                  6 – 7 min • 180°C
                </span>
              </div>
              <h3 className="text-lg font-black text-white font-display mb-2">
                Airfryer (Freidora de Aire)
              </h3>
              <p className="text-xs text-white/60 leading-relaxed">
                Coloca los tequeños congelados en la cesta con una pincelada ligera de aceite. Cocina 6-7 min agitando a mitad de tiempo. Cero humos y textura crujiente brutal.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
              ✓ 0% humos y limpieza rápida
            </div>
          </div>

          {/* Method 2: Frying Pan */}
          <div className="rounded-2xl bg-[#131821] border border-white/5 p-6 flex flex-col justify-between hover:border-white/20 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#242E3D] flex items-center justify-center text-amber-400">
                  <Flame className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-white/80 bg-white/5 px-2.5 py-1 rounded-lg border border-white/10 font-bold">
                  3 – 4 min • 170°C
                </span>
              </div>
              <h3 className="text-lg font-black text-white font-display mb-2">
                Sartén o Freidora
              </h3>
              <p className="text-xs text-white/60 leading-relaxed">
                Aceite caliente abundante que los cubra por la mitad. Dóralos 3-4 minutos girándolos con pinzas hasta conseguir un dorado 360° clásico de pastelería caraqueña.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
              ✓ El crujido tradicional más intenso
            </div>
          </div>

          {/* Method 3: Oven */}
          <div className="rounded-2xl bg-[#131821] border border-white/5 p-6 flex flex-col justify-between hover:border-white/20 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#242E3D] flex items-center justify-center text-orange-400">
                  <Eye className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-white/80 bg-white/5 px-2.5 py-1 rounded-lg border border-white/10 font-bold">
                  8 – 10 min • 200°C
                </span>
              </div>
              <h3 className="text-lg font-black text-white font-display mb-2">
                Horno (Para Grupos)
              </h3>
              <p className="text-xs text-white/60 leading-relaxed">
                Bandeja con papel de hornear para hornear hasta 50 unidades de un solo golpe. Píntalos con un toque de aceite o huevo y déjalos 8-10 min hasta que doren.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
              ✓ Ideal para servir a 15 personas a la vez
            </div>
          </div>

        </div>

        {/* Golden Rule Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-amber-950/40 via-[#161D29] to-[#131821] p-4 sm:p-5 border border-[#FFB703]/25 flex items-start gap-3.5">
          <Lightbulb className="w-5 h-5 text-[#FFB703] shrink-0 mt-0.5" />
          <div className="text-xs text-white/80 leading-relaxed">
            <strong className="text-[#FFB703] text-sm block mb-0.5">Regla de oro del obrador:</strong>
            <strong>¡Nunca descongeles los tequeños antes de cocinarlos!</strong> Al meterlos directamente congelados en tu airfryer o sartén, la masa exterior se sella al instante creando una corteza crujiente que retiene todo el queso fundido dentro.
          </div>
        </div>

      </div>
    </section>
  );
};
