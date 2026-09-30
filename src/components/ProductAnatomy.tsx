"use client";

import React from "react";
import { ShieldCheck, Award, Wind, Flame, CheckCircle, Gift } from "lucide-react";

interface ProductAnatomyProps {
  onOpenCheckout?: () => void;
}

export const ProductAnatomy: React.FC<ProductAnatomyProps> = () => {
  return (
    <section id="calidad" className="py-16 sm:py-20 bg-[#0E131B] border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#131821] border border-white/10 text-[#FFB703] text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            Ingeniería de Obrador
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black font-display text-[#FFFDF5] mb-3">
            Cero fugas de queso. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB703] to-[#FB8500]">
              Listos en 6 minutos en tu Airfryer.
            </span>
          </h2>
          <p className="text-xs sm:text-base text-white/60">
            El gran drama de los tequeños industriales de supermercado: la masa revienta, el queso se sale y te quedas con un rollo hueco. En TequeBox diseñamos cada unidad para que el queso quede 100% dentro.
          </p>
        </div>

        {/* 3 Core Advantage Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          
          {/* Pillar 1 */}
          <div className="rounded-2xl bg-[#131821] p-6 border border-white/5 hover:border-[#FFB703]/30 transition-all flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-xl bg-[#242E3D] flex items-center justify-center text-xl mb-4">
                🧀
              </div>
              <h3 className="text-lg font-bold text-white mb-2 font-display">
                1. Queso Blanco Macizo
              </h3>
              <p className="text-xs text-white/60 leading-relaxed mb-4">
                Barra maciza de queso blanco llanero tradicional semi-duro. A diferencia del queso industrial procesado, no suelta agua ni suero al calentarse, evitando la presión de vapor que rompe la masa.
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 pt-3 border-t border-white/5">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Queso artesano que funde y estira</span>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="rounded-2xl bg-[#131821] p-6 border border-white/5 hover:border-[#FFB703]/30 transition-all flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-xl bg-[#242E3D] flex items-center justify-center text-xl mb-4">
                🔒
              </div>
              <h3 className="text-lg font-bold text-white mb-2 font-display">
                2. Sellado Hermético Manual
              </h3>
              <p className="text-xs text-white/60 leading-relaxed mb-4">
                Cada tequeño se enrolla en espiral continua con puntas selladas a mano en obrador. Creamos una cámara estanca que resiste tanto el aire turbulento del airfryer como el aceite de la sartén.
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 pt-3 border-t border-white/5">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Garantía de cero fugas</span>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="rounded-2xl bg-[#131821] p-6 border-2 border-[#FFB703]/60 shadow-[0_0_25px_rgba(255,183,3,0.1)] flex flex-col justify-between relative">
            <span className="absolute -top-3 left-6 bg-[#FFB703] text-black text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full">
              Súper Fácil
            </span>
            <div>
              <div className="w-11 h-11 rounded-xl bg-[#242E3D] flex items-center justify-center text-xl mb-4 mt-1 text-[#FFB703]">
                <Wind className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 font-display">
                3. Del Congelador al Airfryer
              </h3>
              <p className="text-xs text-white/60 leading-relaxed mb-4">
                <strong>Sin descongelar jamás.</strong> Pasan directos del congelador a tu freidora de aire (6-7 min a 180°C) o sartén (3 min). La masa se sella al instante y consigues un dorado crujiente de pastelería.
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#FFB703] pt-3 border-t border-white/5">
              <Flame className="w-3.5 h-3.5" />
              <span>Listos en lo que pones los platos</span>
            </div>
          </div>

        </div>

        {/* Double Reassurance Strip: Guarantee & Free Sauce */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-2xl bg-gradient-to-r from-emerald-950/60 to-[#131821] border border-emerald-500/30 p-4 sm:p-5 flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-white">Garantía Anti-Fugas de Obrador</h4>
              <p className="text-[11px] sm:text-xs text-white/60">
                Si sigues la guía de 6 min y algún tequeño se vacía, te reponemos la caja gratis.
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-gradient-to-r from-amber-950/50 to-[#131821] border border-[#FFB703]/30 p-4 sm:p-5 flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-[#FFB703]/20 text-[#FFB703] flex items-center justify-center shrink-0">
              <Gift className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-white">Salsa Tártara Artesana de Regalo</h4>
              <p className="text-[11px] sm:text-xs text-white/60">
                Cada caja incluye 1 tarro de salsa tártara tradicional sin coste adicional.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
