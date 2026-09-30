"use client";

import React, { useState } from "react";
import { Users, Calculator, Utensils, Sparkles, ArrowRight } from "lucide-react";

interface PartyCalculatorProps {
  onOpenCheckout: (bundle?: string) => void;
}

export const PartyCalculator: React.FC<PartyCalculatorProps> = ({ onOpenCheckout }) => {
  const [guests, setGuests] = useState<number>(10);

  // Recommendations logic
  const tequenosPerGuest = guests <= 6 ? 12 : guests <= 12 ? 10 : 8;
  const totalTequenosNeeded = guests * tequenosPerGuest;
  
  // Boxes needed
  const boxesNeeded = Math.ceil(totalTequenosNeeded / 100);
  const totalPrice = boxesNeeded === 1 ? 45 : boxesNeeded === 2 ? 85 : boxesNeeded * 40;
  const costPerGuest = (totalPrice / guests).toFixed(2);

  return (
    <section id="calculadora" className="py-20 bg-[#0A0E14] relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#FB8500]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#131821] border border-white/10 text-white/80 text-xs font-semibold uppercase tracking-wider mb-4">
            <Calculator className="w-3.5 h-3.5 text-[#FFB703]" />
            El Cálculo de la Fiesta
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-[#FFFDF5] mb-4">
            ¿Cuántos vienen a casa?
          </h2>
          <p className="text-sm sm:text-base text-white/60">
            Mueve el selector para ver cuántos tequeños necesitas y cuánto te ahorras frente a pedir raciones en bares o delivery.
          </p>
        </div>

        {/* Interactive Calculator Card */}
        <div className="rounded-3xl bg-[#131821] border border-white/10 p-6 sm:p-10 shadow-2xl relative">
          
          {/* Guest Count Slider */}
          <div className="mb-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <label htmlFor="guest-slider" className="flex items-center gap-2 text-white/80 font-semibold text-sm">
                <Users className="w-5 h-5 text-[#FFB703]" />
                Número de invitados / comensales:
              </label>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-[#FFB703] font-mono">{guests}</span>
                <span className="text-sm text-white/50 font-medium">personas</span>
              </div>
            </div>

            <input
              id="guest-slider"
              type="range"
              min="4"
              max="30"
              step="1"
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              aria-label="Número de personas para la fiesta"
              className="w-full h-3 bg-[#0A0E14] rounded-lg appearance-none cursor-pointer accent-[#FFB703] border border-white/10"
            />

            <div className="flex justify-between text-xs text-white/40 mt-2 font-mono">
              <span>4 personas (Pica-pica íntimo)</span>
              <span>15 (Reunión amigos)</span>
              <span>30 (Fiestón o Evento)</span>
            </div>
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            
            {/* Metric 1 */}
            <div className="bg-[#0A0E14] p-5 rounded-2xl border border-white/5 flex flex-col justify-between">
              <span className="text-xs uppercase tracking-wider text-white/50 font-semibold mb-2">Ración sugerida</span>
              <div>
                <span className="text-3xl font-black text-white font-mono">{tequenosPerGuest}</span>
                <span className="text-xs text-white/60 ml-2">tequeños / persona</span>
              </div>
              <p className="text-[11px] text-white/40 mt-2">Nadie se queda con ganas. Ración generosa de fiesta.</p>
            </div>

            {/* Metric 2 */}
            <div className="bg-[#0A0E14] p-5 rounded-2xl border border-white/5 flex flex-col justify-between">
              <span className="text-xs uppercase tracking-wider text-white/50 font-semibold mb-2">Pack Recomendado</span>
              <div>
                <span className="text-3xl font-black text-[#FFB703] font-mono">{boxesNeeded}</span>
                <span className="text-xs text-white/60 ml-2">
                  {boxesNeeded === 1 ? "Caja (100 uds)" : `${boxesNeeded} Cajas (${boxesNeeded * 100} uds)`}
                </span>
              </div>
              <p className="text-[11px] text-white/40 mt-2">
                {boxesNeeded > 1 ? "¡Incluye ENVÍO GRATIS y salsas de regalo!" : "Sobrarán para congelar si son pocos."}
              </p>
            </div>

            {/* Metric 3 */}
            <div className="bg-gradient-to-br from-[#1E2633] to-[#121721] p-5 rounded-2xl border border-[#FFB703]/30 flex flex-col justify-between shadow-[0_0_30px_rgba(255,183,3,0.1)]">
              <span className="text-xs uppercase tracking-wider text-[#FFB703] font-bold mb-2">Coste por Invitado</span>
              <div>
                <span className="text-3xl font-black text-white font-mono">{costPerGuest} €</span>
                <span className="text-xs text-emerald-400 font-semibold ml-2">/ persona</span>
              </div>
              <p className="text-[11px] text-emerald-400/90 mt-2">
                En un bar 5 tequeños cuestan ~8,00 €. ¡Ahorras más del 65%!
              </p>
            </div>

          </div>

          {/* Sauces Pairing Suggestion */}
          <div className="bg-[#0A0E14] p-4 rounded-2xl border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#242E3D] flex items-center justify-center text-lg shrink-0">
                <Utensils className="w-5 h-5 text-[#FFB703]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Maridaje de Salsas Recomendado</h4>
                <p className="text-xs text-white/60">
                  {guests <= 10
                    ? "Salsa Tártara casera + Dip de Guayaba dulce"
                    : "Trío Estrella: Salsa Tártara, Guayaba picante y Salsa de Ajo y Cilantro"}
                </p>
              </div>
            </div>
            <div className="text-xs text-[#FFB703] font-semibold bg-[#FFB703]/10 px-3 py-1.5 rounded-lg border border-[#FFB703]/20 shrink-0 self-start sm:self-auto">
              Incluye guía de salsas en la caja
            </div>
          </div>

          {/* Dynamic Action Trigger */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
            <div>
              <span className="text-xs text-white/50 block">Presupuesto total estimado:</span>
              <span className="text-2xl font-black text-white font-display">
                {totalPrice},00 € <span className="text-xs text-white/40 font-normal">IVA inc.</span>
              </span>
            </div>

            <button
              onClick={() => onOpenCheckout(boxesNeeded > 1 ? "2_boxes" : "1_box")}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#FFB703] hover:bg-[#FB8500] text-black font-extrabold text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all active:scale-95 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 fill-black" />
              <span>Pedir {boxesNeeded === 1 ? "1 Caja (45 €)" : `${boxesNeeded} Cajas (${totalPrice} €)`}</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
