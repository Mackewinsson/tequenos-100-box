"use client";

import React from "react";
import { MessageCircle, Mail, MapPin, ShieldCheck, Heart } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#070A0F] border-t border-white/5 pt-16 pb-24 sm:pb-16 text-white/60 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/5">
          
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FFB703] to-[#FB8500] flex items-center justify-center font-extrabold text-black text-lg">
                🧀
              </div>
              <span className="font-extrabold text-base tracking-tight font-display text-[#FFFDF5]">
                TEQUE<span className="text-[#FFB703]">BOX</span>
              </span>
            </div>
            <p className="text-white/50 leading-relaxed text-xs">
              Obrador artesanal de tequeños tradicionales venezolanos. Elaborados a mano con auténtico queso blanco llanero y masa fina hojaldrada.
            </p>
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Registro Sanitario Alimentario UE</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-3 font-display">
              Navegación
            </h4>
            <ul className="space-y-2 text-white/50">
              <li><a href="#experiencia" className="hover:text-[#FFB703] transition-colors">El Cheese-Pull</a></li>
              <li><a href="#calculadora" className="hover:text-[#FFB703] transition-colors">Calculadora para Fiestas</a></li>
              <li><a href="#calidad" className="hover:text-[#FFB703] transition-colors">Por qué no revientan</a></li>
              <li><a href="#preparacion" className="hover:text-[#FFB703] transition-colors">Guía de Cocinado</a></li>
              <li><a href="#precios" className="hover:text-[#FFB703] transition-colors">Precio</a></li>
              <li><a href="#faq" className="hover:text-[#FFB703] transition-colors">Preguntas Frecuentes</a></li>
            </ul>
          </div>

          {/* Logistics & Delivery */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-3 font-display">
              Envíos & Conservación
            </h4>
            <ul className="space-y-2 text-white/50">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFB703]" />
                <span>Transporte refrigerado 24/48h</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFB703]" />
                <span>Caja isotérmica con gel acumulador</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFB703]" />
                <span>6 meses de vida útil a -18°C</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFB703]" />
                <span>Envíos gratuitos a partir de 2 cajas</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-3 font-display">
              Atención al Cliente
            </h4>
            <div className="space-y-2 text-white/50">
              <p className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp: Lunes a Domingo (9:00 - 21:00)</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#FFB703]" />
                <span>pedidos@tequebox.es</span>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-rose-400" />
                <span>Obrador Central • Envíos a toda la Península</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/40">
          <p>© {new Date().getFullYear()} TEQUEBOX S.L. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1">
            Hecho con <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> para los verdaderos amantes del queso.
          </p>
        </div>

      </div>
    </footer>
  );
};
