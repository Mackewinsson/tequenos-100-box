"use client";

import React, { useState } from "react";
import { Wind, Flame, Eye, Clock, Thermometer, Lightbulb } from "lucide-react";

export const PrepGuide: React.FC = () => {
  const [activeMethod, setActiveMethod] = useState<"airfryer" | "frier" | "oven">("airfryer");

  const methods = {
    airfryer: {
      name: "Airfryer (Opción Favorita)",
      icon: Wind,
      badge: "⭐ 0% Humos • Súper Crujientes",
      temp: "180 °C (Precalentada)",
      time: "6 – 7 Minutos",
      difficulty: "Ultra Fácil",
      steps: [
        "Precalienta tu freidora de aire a 180°C durante 3 minutos.",
        "Coloca los tequeños directamente congelados en la cesta sin amontonar.",
        "Aplica una pincelada ligera o spray de aceite de oliva o girasol para un dorado espectacular.",
        "Cocina de 6 a 7 minutos, agitando suavemente la cesta a mitad de tiempo hasta verlos doraditos.",
      ],
    },
    frier: {
      name: "Sartén o Freidora de Aceite",
      icon: Flame,
      badge: "El Crujido Tradicional de Calle",
      temp: "170 °C (Aceite caliente abundante)",
      time: "3 – 4 Minutos",
      difficulty: "Fácil",
      steps: [
        "Calienta abundante aceite limpio (que cubra al menos hasta la mitad de los tequeños).",
        "Introduce los tequeños congelados en tandas pequeñas para no enfriar el aceite.",
        "Gira constantemente con pinzas para un dorado 360° homogéneo durante 3–4 minutos.",
        "Retira y escurre sobre papel absorbente 1 minuto antes de servir para máxima textura.",
      ],
    },
    oven: {
      name: "Horno Tradicional",
      icon: Eye,
      badge: "Perfecto para 50 unidades de golpe",
      temp: "200 °C (Calor arriba y abajo)",
      time: "8 – 10 Minutos",
      difficulty: "Muy Fácil",
      steps: [
        "Precalienta el horno a 200°C con bandeja central.",
        "Coloca papel de hornear en la bandeja y distribuye hasta 50 tequeños dejando 1 cm entre ellos.",
        "Píntalos con una yema de huevo batida o pincelada de aceite para un acabado brillante de pastelería.",
        "Hornea entre 8 y 10 minutos hasta que alcancen un apetitoso tono dorado.",
      ],
    },
  };

  const current = methods[activeMethod];

  return (
    <section id="preparacion" className="py-20 bg-[#0A0E14] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#131821] border border-white/10 text-white/80 text-xs font-semibold uppercase tracking-wider mb-4">
            <Clock className="w-3.5 h-3.5 text-[#FFB703]" />
            Guía de Preparación Rápida
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-[#FFFDF5] mb-4">
            Listos en lo que pones la mesa
          </h2>
          <p className="text-sm sm:text-base text-white/60">
            Pasan directamente del congelador a tu método de cocción preferido. Sin descongelar, sin esperas.
          </p>
        </div>

        {/* Method Switcher Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <button
            onClick={() => setActiveMethod("airfryer")}
            className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeMethod === "airfryer"
                ? "bg-[#FFB703] text-black shadow-[0_0_25px_rgba(255,183,3,0.3)] scale-105"
                : "bg-[#131821] text-white/70 hover:text-white hover:bg-[#1B2330] border border-white/5"
            }`}
          >
            <Wind className="w-4 h-4" />
            <span>Airfryer (Recomendado)</span>
          </button>

          <button
            onClick={() => setActiveMethod("frier")}
            className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeMethod === "frier"
                ? "bg-[#FFB703] text-black shadow-[0_0_25px_rgba(255,183,3,0.3)] scale-105"
                : "bg-[#131821] text-white/70 hover:text-white hover:bg-[#1B2330] border border-white/5"
            }`}
          >
            <Flame className="w-4 h-4" />
            <span>Sartén / Freidora</span>
          </button>

          <button
            onClick={() => setActiveMethod("oven")}
            className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeMethod === "oven"
                ? "bg-[#FFB703] text-black shadow-[0_0_25px_rgba(255,183,3,0.3)] scale-105"
                : "bg-[#131821] text-white/70 hover:text-white hover:bg-[#1B2330] border border-white/5"
            }`}
          >
            <Eye className="w-4 h-4" />
            <span>Horno para Grupos</span>
          </button>
        </div>

        {/* Dynamic Method Card */}
        <div className="rounded-3xl bg-[#131821] border border-white/10 p-6 sm:p-10 shadow-2xl">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
            <div>
              <span className="text-xs font-bold text-[#FFB703] uppercase tracking-wider block mb-1">
                {current.badge}
              </span>
              <h3 className="text-2xl font-black text-white font-display">
                {current.name}
              </h3>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-[#0A0E14] px-4 py-2 rounded-xl border border-white/5">
                <Thermometer className="w-4 h-4 text-[#FB8500]" />
                <span className="text-xs font-bold text-white font-mono">{current.temp}</span>
              </div>
              <div className="flex items-center gap-2 bg-[#0A0E14] px-4 py-2 rounded-xl border border-white/5">
                <Clock className="w-4 h-4 text-[#FFB703]" />
                <span className="text-xs font-bold text-white font-mono">{current.time}</span>
              </div>
            </div>
          </div>

          {/* Steps List */}
          <div className="space-y-4 mb-8">
            {current.steps.map((step, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#242E3D] text-[#FFB703] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <p className="text-sm text-white/80 leading-relaxed">{step}</p>
              </div>
            ))}
          </div>

          {/* Pro Chef Tip Banner */}
          <div className="bg-gradient-to-r from-amber-950/40 via-[#1A202C] to-[#131821] p-4 rounded-2xl border border-[#FFB703]/20 flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-[#FFB703] shrink-0 mt-0.5" />
            <div className="text-xs text-white/80">
              <strong className="text-[#FFB703] block mb-0.5">Regla de oro del obrador:</strong>
              ¡Nunca descongeles los tequeños antes de cocinarlos! Al cocinarlos directamente congelados, la masa exterior se sella y dora en segundos antes de que el queso interior empiece a hervir, evitando cualquier tipo de fuga.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
