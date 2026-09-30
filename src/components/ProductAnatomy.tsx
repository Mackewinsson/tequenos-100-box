"use client";

import React from "react";
import { ShieldCheck, Award, Layers, Snowflake, CheckCircle } from "lucide-react";

export const ProductAnatomy: React.FC = () => {
  return (
    <section id="calidad" className="py-20 bg-[#0E131B] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#131821] border border-white/10 text-[#FFB703] text-xs font-bold uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5" />
            Calidad de Obrador
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-[#FFFDF5] mb-4">
            Por qué nuestros tequeños <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB703] to-[#FB8500]">
              nunca se revientan
            </span>
          </h2>
          <p className="text-sm sm:text-base text-white/60">
            El mayor drama al freír tequeños baratos es que se sale el queso y queda la masa vacía. En TequeBox diseñamos cada unidad con ingeniería artesanal para que el queso quede 100% dentro.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1 */}
          <div className="rounded-2xl bg-[#131821] p-6 border border-white/5 hover:border-[#FFB703]/30 transition-all group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#242E3D] flex items-center justify-center text-xl mb-4 group-hover:scale-110 group-hover:bg-[#FFB703] group-hover:text-black transition-all">
                🧀
              </div>
              <h3 className="text-lg font-bold text-white mb-2 font-display">
                Queso Blanco Llanero Real
              </h3>
              <p className="text-xs text-white/60 leading-relaxed mb-4">
                Barras macizas de 25g de queso artesanal semi-duro. A diferencia del queso industrial barato, no libera exceso de suero ni agua al calentarse, evitando la presión de vapor que rompe la masa.
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Cero sucedáneos</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl bg-[#131821] p-6 border border-white/5 hover:border-[#FFB703]/30 transition-all group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#242E3D] flex items-center justify-center text-xl mb-4 group-hover:scale-110 group-hover:bg-[#FFB703] group-hover:text-black transition-all">
                🥐
              </div>
              <h3 className="text-lg font-bold text-white mb-2 font-display">
                Masa Fina con Mantequilla
              </h3>
              <p className="text-xs text-white/60 leading-relaxed mb-4">
                Elaborada con harina de trigo de fuerza y un toque de mantequilla pura (cero grasas hidrogenadas). Fina, elástica durante el armado y súper crujiente y hojaldrada tras la cocción.
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Crujido garantizado</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl bg-[#131821] p-6 border border-white/5 hover:border-[#FFB703]/30 transition-all group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#242E3D] flex items-center justify-center text-xl mb-4 group-hover:scale-110 group-hover:bg-[#FFB703] group-hover:text-black transition-all">
                🌀
              </div>
              <h3 className="text-lg font-bold text-white mb-2 font-display">
                Enrollado en Espiral Hermético
              </h3>
              <p className="text-xs text-white/60 leading-relaxed mb-4">
                Cada tequeño se enrolla en solapa continua con puntas selladas a mano. Creamos una cámara hermética que resiste tanto el choque de calor de la freidora como el aire turbulento del airfryer.
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Cero fugas de queso</span>
            </div>
          </div>

          {/* Card 4 */}
          <div className="rounded-2xl bg-[#131821] p-6 border border-white/5 hover:border-[#FFB703]/30 transition-all group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#242E3D] flex items-center justify-center text-xl mb-4 group-hover:scale-110 group-hover:bg-[#FFB703] group-hover:text-black transition-all">
                ❄️
              </div>
              <h3 className="text-lg font-bold text-white mb-2 font-display">
                Formato Dividido: 2 x 50 Uds
              </h3>
              <p className="text-xs text-white/60 leading-relaxed mb-4">
                No tienes que descongelar los 100 de golpe. Vienen en 2 bandejas independientes termo-selladas de 50 tequeños. Sacas los 10 que te apetecen para cenar y el resto sigue perfecto hasta 6 meses.
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Consumo a tu ritmo</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
