"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "¿Cómo vienen empacados los 100 tequeños?",
      a: "La caja contiene 2 bandejas termo-selladas independientes de 50 unidades cada una. De esta forma, si tienes una cena pequeña o un antojo, abres una bandeja y cocinas los que quieras (10, 15, 20...) manteniendo el resto perfectamente sellado y protegido del hielo en el congelador.",
    },
    {
      q: "¿Cómo funciona el envío refrigerado y qué pasa si no estoy en casa?",
      a: "Enviamos mediante transporte exprés en cajas isotérmicas profesionales con geles acumuladores de frío de grado alimentario que garantizan la temperatura bajo cero durante 48 horas. Recibirás un SMS con el horario estimado de entrega y podrás gestionar un cambio de hora o punto de recogida si no te encuentras en el domicilio.",
    },
    {
      q: "¿Cuánto tiempo duran en el congelador?",
      a: "Conservados a -18°C en su empaque original, tienen una caducidad de hasta 6 meses sin perder textura, esponjosidad en la masa ni elasticidad en el queso.",
    },
    {
      q: "¿Por qué insistís en que NO se deben descongelar?",
      a: "Es el secreto número uno de los maestros tequeñeros: al colocarlos directamente congelados en aceite a 170°C o en tu airfryer a 180°C, la masa se sella inmediatamente creando una coraza crujiente antes de que el queso comience a fundirse, impidiendo cualquier escape.",
    },
    {
      q: "¿Qué tipo de queso llevan exactamente?",
      a: "Elaboramos nuestros tequeños exclusivamente con auténtico queso blanco llanero semi-duro de tradición venezolana, pasteurizado y con el punto exacto de sal. No utilizamos quesos procesados, gomas ni grasas vegetales añadidas.",
    },
    {
      q: "¿Hacéis envíos para empresas, eventos o bodas?",
      a: "Sí. Para eventos especiales o catering disponemos del Pack de 300 unidades con envío refrigerado prioritario gratuito y factura con IVA desglosado para autónomos y hostelería.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-[#0E131B] border-t border-white/5 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#131821] border border-white/10 text-white/80 text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#FFB703]" />
            Dudas Frecuentes
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-[#FFFDF5] mb-4">
            Todo lo que necesitas saber
          </h2>
          <p className="text-sm text-white/60">
            Cero dudas antes de encender la freidora o airfryer.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#131821] border border-white/5 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/5 transition-colors"
                >
                  <span className="font-bold text-sm sm:text-base text-white">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#FFB703] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-white/70 leading-relaxed border-t border-white/5 bg-[#0A0E14]/40">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
