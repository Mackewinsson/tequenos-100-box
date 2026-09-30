"use client";

import React from "react";
import { Star, Quote, CheckCircle } from "lucide-react";

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Carlos M. (Madrid)",
      role: "Organizador de cumpleaños (30 invitados)",
      quote:
        "Pedí 2 cajas para mi fiesta de 30 años y volaron en 15 minutos. Ninguno se rompió en el airfryer, el queso estira una barbaridad y nos salió a menos de 3€ por persona. No vuelvo a comprar tequeños en el supermercado jamás.",
      rating: 5,
      date: "Hace 4 días",
    },
    {
      name: "Valentina R. (Barcelona)",
      role: "Auténtica tequeño lover",
      quote:
        "Como venezolana viviendo en España, soy súper exigente con el queso. Este es queso llanero de verdad, con su salinidad perfecta. La masa es crujiente y nada grasienta. La Caja de 50 tequeños crudos es comodísima: cocinas unos pocos cuando tienes antojo o toda la caja en una cena con amigos.",
      rating: 5,
      date: "Hace 1 semana",
    },
    {
      name: "Bar & Tapas El Rincón (Valencia)",
      role: "Hostelería / Menú tapas",
      quote:
        "Metimos la ración de 5 tequeños a 7,50€ en nuestra carta usando las cajas de TequeBox. El margen de ganancia es brutal y los clientes siempre preguntan de dónde los sacamos porque son puro queso artesanal.",
      rating: 5,
      date: "Hace 2 semanas",
    },
  ];

  return (
    <section className="py-20 bg-[#0A0E14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#131821] border border-white/10 text-white/80 text-xs font-semibold mb-4">
            <div className="flex text-[#FFB703]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FFB703]" />
              ))}
            </div>
            <span className="font-bold text-white ml-1">4.9 / 5</span>
            <span className="text-white/40">• Más de 1.200 cajas enviadas</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-[#FFFDF5]">
            La opinión de quienes ya no celebran sin ellos
          </h2>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-[#131821] p-6 border border-white/5 flex flex-col justify-between hover:border-[#FFB703]/20 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-[#FFB703]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FFB703]" />
                    ))}
                  </div>
                  <span className="text-[11px] text-white/40">{rev.date}</span>
                </div>

                <Quote className="w-6 h-6 text-white/10 mb-2" />
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-6 italic">
                  "{rev.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-white flex items-center gap-1">
                    {rev.name}
                    <CheckCircle className="w-3 h-3 text-emerald-400" />
                  </h4>
                  <span className="text-[10px] text-white/50">{rev.role}</span>
                </div>
                <span className="text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  Compra Verificada
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
