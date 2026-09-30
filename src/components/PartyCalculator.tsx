"use client";

import React, { useState } from "react";
import { Users, Calculator, Utensils, Sparkles, ArrowRight } from "lucide-react";

interface PartyCalculatorProps {
  onOpenCheckout: () => void;
}

export const PartyCalculator: React.FC<PartyCalculatorProps> = ({ onOpenCheckout }) => {
  const [selectedGroup, setSelectedGroup] = useState<"small" | "medium" | "large">("medium");

  const groups: Record<
    "small" | "medium" | "large",
    {
      label: string;
      type: string;
      unitsPerPerson: string;
      costPerPerson: string;
      description: string;
      popular?: boolean;
    }
  > = {
    small: {
      label: "4 – 6 personas",
      type: "Cena o Picoteo Intenso",
      unitsPerPerson: "8 – 12",
      costPerPerson: "7,50 €",
      description: "Ración muy abundante para auténticos amantes del queso.",
    },
    medium: {
      label: "8 – 10 personas",
      type: "Reunión de Amigos / Cumpleaños",
      unitsPerPerson: "5 – 6",
      costPerPerson: "4,50 €",
      description: "La ración perfecta para picar y triunfar en cualquier reunión.",
      popular: true,
    },
    large: {
      label: "12 – 15 personas",
      type: "Fiesta Grande / Pica-pica",
      unitsPerPerson: "3 – 4",
      costPerPerson: "3,00 €",
      description: "Aperitivo gourmet abundante para complementar tu mesa.",
    },
  };

  const current = groups[selectedGroup];

  return (
    <section id="calculadora" className="py-16 sm:py-20 bg-[#0A0E14] relative overflow-hidden border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#131821] border border-white/10 text-[#FFB703] text-xs font-semibold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            Matemática de la Fiesta
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-[#FFFDF5] mb-3">
            50 Tequeños resuelven tu reunión <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB703] to-[#FB8500]">
              por menos de lo que cuesta una ronda
            </span>
          </h2>
          <p className="text-xs sm:text-base text-white/60">
            Elige el tamaño de tu reunión y comprueba el coste real por persona:
          </p>
        </div>

        {/* 1-Click Group Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 max-w-3xl mx-auto">
          {(Object.keys(groups) as Array<keyof typeof groups>).map((key) => {
            const item = groups[key];
            const isSelected = selectedGroup === key;
            return (
              <button
                key={key}
                onClick={() => setSelectedGroup(key)}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer relative ${
                  isSelected
                    ? "bg-[#161D29] border-[#FFB703] shadow-[0_0_25px_rgba(255,183,3,0.15)]"
                    : "bg-[#10151E] border-white/5 hover:border-white/20 text-white/70"
                }`}
              >
                {item.popular && (
                  <span className="absolute -top-2.5 right-4 bg-[#FFB703] text-black text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full">
                    Más Habitual
                  </span>
                )}
                <div className="text-base sm:text-lg font-black font-display text-white mb-0.5">
                  {item.label}
                </div>
                <div className="text-xs text-white/50">{item.type}</div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Result Card */}
        <div className="max-w-3xl mx-auto rounded-3xl bg-[#131821] border border-white/10 p-5 sm:p-8 shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            
            <div className="bg-[#0A0E14] p-4 rounded-2xl border border-white/5">
              <span className="text-[11px] uppercase tracking-wider text-white/50 font-semibold block mb-1">
                Ración por invitado
              </span>
              <div className="text-2xl sm:text-3xl font-black text-white font-mono">
                {current.unitsPerPerson} <span className="text-xs text-white/50 font-normal">uds</span>
              </div>
              <p className="text-[11px] text-white/40 mt-1">{current.description}</p>
            </div>

            <div className="bg-[#0A0E14] p-4 rounded-2xl border border-white/5">
              <span className="text-[11px] uppercase tracking-wider text-white/50 font-semibold block mb-1">
                Salsa de Regalo
              </span>
              <div className="text-lg font-black text-emerald-400 font-display flex items-center gap-1.5 mt-1">
                <Utensils className="w-4 h-4 text-emerald-400" />
                <span>Tártara 100% Gratis</span>
              </div>
              <p className="text-[11px] text-white/40 mt-1">1 tarro artesanal incluido en cada caja</p>
            </div>

            <div className="bg-gradient-to-br from-[#1E2633] to-[#121721] p-4 rounded-2xl border border-[#FFB703]/30 shadow-[0_0_20px_rgba(255,183,3,0.1)]">
              <span className="text-[11px] uppercase tracking-wider text-[#FFB703] font-bold block mb-1">
                Coste por persona
              </span>
              <div className="text-2xl sm:text-3xl font-black text-white font-mono">
                {current.costPerPerson}
              </div>
              <p className="text-[11px] text-emerald-400 font-medium mt-1">
                En un bar 5 tequeños cuestan ~8 €. ¡Ahorras más del 50%!
              </p>
            </div>

          </div>

          {/* Quick CTA strip */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
            <div>
              <span className="text-xs text-white/50 block">Caja Premium de 50 tequeños crudos:</span>
              <span className="text-2xl font-black text-white font-display">
                45,00 € <span className="text-xs text-emerald-400 font-normal ml-1">Envío frío 24/48h incluido</span>
              </span>
            </div>

            <button
              onClick={onOpenCheckout}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#FFB703] hover:bg-[#FB8500] text-black font-extrabold text-sm px-6 py-3 rounded-xl shadow-lg transition-all active:scale-95 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 fill-black" />
              <span>Comprar Caja - 45€</span>
              <ArrowRight className="w-4 h-4 ml-0.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
