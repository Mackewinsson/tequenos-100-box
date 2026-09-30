"use client";

import React from "react";
import { MessageCircle, Mail, MapPin, ShieldCheck, Heart, Snowflake } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#070A0F] border-t border-white/5 pt-12 pb-24 sm:pb-12 text-white/60 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-white/5">
          
          {/* Brand & Craft */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FFB703] to-[#FB8500] flex items-center justify-center font-extrabold text-black text-sm">
                TQ
              </div>
              <span className="font-extrabold text-base tracking-tight font-display text-[#FFFDF5]">
                TEQUE<span className="text-[#FFB703]">BOX</span>
              </span>
            </div>
            <p className="text-white/50 leading-relaxed text-xs">
              Obrador artesanal especializado en tequeños tradicionales de queso blanco llanero. Elaboración manual y ultracongelación inmediata.
            </p>
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Registro Sanitario Alimentario UE</span>
            </div>
          </div>

          {/* Guarantees & Cold Shipping */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs font-display mb-1">
              Garantía de Frío & Calidad
            </h4>
            <div className="flex items-center gap-2 text-white/60">
              <Snowflake className="w-4 h-4 text-[#FFB703] shrink-0" />
              <span>Envío refrigerado 24/48h a toda la Península</span>
            </div>
            <div className="flex items-center gap-2 text-white/60">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Cadena de frío garantizada a -18°C</span>
            </div>
            <div className="flex items-center gap-2 text-white/60">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFB703] ml-1.5 mr-1" />
              <span>Conservación hasta 6 meses en congelador</span>
            </div>
          </div>

          {/* Direct Support */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs font-display mb-1">
              Atención de Obrador
            </h4>
            <a
              href="https://wa.me/?text=Hola%20tengo%20una%20consulta%20sobre%20la%20Caja%20de%2050%20Teque%C3%B1os"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span>WhatsApp Obrador (9:00 - 21:00)</span>
            </a>
            <p className="flex items-center gap-2 text-white/50">
              <Mail className="w-4 h-4 text-[#FFB703] shrink-0" />
              <span>pedidos@tequebox.es</span>
            </p>
            <p className="flex items-center gap-2 text-white/40">
              <MapPin className="w-4 h-4 text-rose-400 shrink-0" />
              <span>Envíos a toda la Península Ibérica</span>
            </p>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/40 text-[11px]">
          <p>© {new Date().getFullYear()} TEQUEBOX Obrador. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1">
            Hecho con <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> para auténticos amantes del queso.
          </p>
        </div>

      </div>
    </footer>
  );
};
