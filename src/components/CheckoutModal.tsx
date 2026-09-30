"use client";

import React, { useState, useEffect } from "react";
import { X, Clock, AlertCircle, MessageCircle, Gift, ShieldAlert, ArrowRight, Loader2, CheckCircle2 } from "lucide-react";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
}) => {
  // Clean single-product state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [notes, setNotes] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [isWaitlisted, setIsWaitlisted] = useState(false);
  const [waitlistNumber, setWaitlistNumber] = useState<number>(24);
  const [errorMessage, setErrorMessage] = useState("");

  // Single static product specifications
  const PRODUCT_NAME = "Caja Premium de 50 tequeños crudos";
  const PRODUCT_DESC = "Caja de 50 unidades";
  const FIXED_PRICE = 45;

  // Lock body scroll on mobile when modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmitLead = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!name.trim()) {
      setErrorMessage("Por favor, introduce tu nombre.");
      return;
    }
    if (!phone.trim() && !email.trim()) {
      setErrorMessage("Por favor, introduce al menos un teléfono móvil o email para avisarte.");
      return;
    }

    setIsLoading(true);

    try {
      // Clean single-product payload
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          city,
          product: PRODUCT_NAME,
          description: PRODUCT_DESC,
          price: FIXED_PRICE,
          notes,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setWaitlistNumber(data.waitlistPosition || 28);
        setIsWaitlisted(true);
      } else {
        setErrorMessage(data.error || "Hubo un problema. Por favor inténtalo de nuevo.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setWaitlistNumber(26);
      setIsWaitlisted(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmergencyWhatsApp = () => {
    const text = `¡Hola! Me acabo de apuntar a la lista de espera para la ${PRODUCT_NAME} (posición #${waitlistNumber}), pero tengo un cumpleaños/evento urgente este fin de semana. ¿Queda alguna cancelación de última hora en el obrador?`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Surface with safe area padding */}
      <div className="relative w-full max-w-lg rounded-t-3xl sm:rounded-3xl bg-[#10151E] border-t sm:border border-white/10 p-5 sm:p-8 shadow-2xl overflow-y-auto max-h-[92vh] overscroll-contain pb-[calc(1.5rem+env(safe-area-inset-bottom))] sm:pb-8">
        
        {/* Mobile Swipe / Close Bar */}
        <div className="w-12 h-1 bg-white/20 rounded-full mx-auto mb-4 sm:hidden" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 sm:top-5 right-4 sm:right-5 text-white/40 hover:text-white bg-white/5 hover:bg-white/10 rounded-full p-2 transition-colors cursor-pointer z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {isWaitlisted ? (
          /* ============================================================ */
          /* PANTALLA FINAL: LOTE AGOTADO & LISTA DE ESPERA PRIORITARIA   */
          /* ============================================================ */
          <div className="text-left py-1">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-950/80 border border-rose-500/40 text-rose-300 text-xs font-bold uppercase tracking-wider mb-4">
              <ShieldAlert className="w-3.5 h-3.5 text-rose-400" />
              Lote de esta semana: 100% Agotado
            </div>

            <h3 className="text-2xl sm:text-3xl font-black font-display text-white mb-2 leading-tight">
              ¡Casi llegas! Tu plaza prioritaria <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB703] to-[#FB8500]">
                ha quedado reservada.
              </span>
            </h3>

            <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-5">
              Elaboramos nuestros tequeños a mano cada madrugada con queso blanco fresco y limitamos la producción a <strong>50 cajas semanales</strong> para garantizar la máxima calidad. El cupo de esta semana se acaba de completar.
            </p>

            {/* Waitlist Ticket Box */}
            <div className="rounded-2xl bg-[#080B10] border border-[#FFB703]/30 p-4 sm:p-5 mb-5 relative overflow-hidden shadow-inner">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFB703]/5 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
                <div>
                  <span className="text-[10px] uppercase text-white/40 font-semibold block">Tu posición en lista</span>
                  <span className="text-lg sm:text-xl font-black text-[#FFB703] font-display">
                    #{waitlistNumber} en Cola Prioritaria
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase text-emerald-400 font-bold block">Precio Congelado</span>
                  <span className="text-sm font-black text-white font-mono">{FIXED_PRICE},00 €</span>
                </div>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between text-white/80">
                  <span className="text-white/40">Producto reservado:</span>
                  <span className="font-semibold text-white">{PRODUCT_NAME}</span>
                </div>
                <div className="flex justify-between text-white/80">
                  <span className="text-white/40">Formato:</span>
                  <span className="font-semibold text-white">{PRODUCT_DESC}</span>
                </div>
                <div className="flex justify-between text-white/80">
                  <span className="text-white/40">Contacto:</span>
                  <span className="font-semibold text-white truncate max-w-[200px]">{phone || email || name}</span>
                </div>
                <div className="flex items-start gap-2 text-emerald-400 bg-emerald-950/40 p-2.5 rounded-xl border border-emerald-500/20 mt-2">
                  <Gift className="w-4 h-4 shrink-0 mt-0.5" />
                  <span className="text-[11px] leading-snug">
                    <strong>Compensación por la espera:</strong> Te incluiremos <strong>1 tarro de salsa tártara artesana GRATIS</strong> en tu pedido.
                  </span>
                </div>
              </div>
            </div>

            <p className="text-xs text-white/60 mb-5 flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#FFB703] shrink-0" />
              <span>Te avisaremos por WhatsApp / Email el <strong>próximo lunes a las 10:00</strong> cuando salga la nueva hornada.</span>
            </p>

            {/* Emergency WhatsApp Option */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.03] border border-white/10 mb-5">
              <p className="text-xs text-white/80 mb-2.5 leading-snug">
                <strong>¿Tienes un cumpleaños o evento urgente este fin de semana?</strong>
                <br />
                Escríbenos y comprobamos si queda alguna cancelación de última hora en el obrador:
              </p>
              <button
                onClick={handleEmergencyWhatsApp}
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Consultar por WhatsApp Urgente</span>
              </button>
            </div>

            <button
              onClick={() => {
                setIsWaitlisted(false);
                onClose();
              }}
              className="w-full py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              Entendido, Guardar Mi Reserva
            </button>
          </div>
        ) : (
          /* ============================================================ */
          /* PANTALLA 1: FORMULARIO DE COMPRA / CAPTURA DE DEMANDA        */
          /* ============================================================ */
          <form onSubmit={handleSubmitLead}>
            <div className="mb-4">
              <span className="text-xs font-bold text-[#FFB703] uppercase tracking-wider block mb-0.5">
                Finalizar Pedido Directo
              </span>
              <h3 className="text-xl sm:text-2xl font-black font-display text-white">
                {PRODUCT_NAME}
              </h3>
              <p className="text-xs text-white/60 mt-0.5">
                Completa tus datos para asignarte una caja del lote fresco de nuestro obrador.
              </p>
            </div>

            {errorMessage && (
              <div className="mb-3.5 p-3 rounded-xl bg-rose-950/80 border border-rose-500/40 text-rose-300 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Fixed Single Product Card (No variant selectors) */}
            <div className="p-4 rounded-2xl bg-[#080B10] border border-[#FFB703]/30 mb-4 shadow-sm">
              <div className="flex items-start justify-between gap-3 mb-2">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[#FFB703]/10 text-[#FFB703] text-[10px] font-bold uppercase tracking-wider mb-1">
                    <CheckCircle2 className="w-3 h-3 text-[#FFB703]" />
                    Único Producto Disponible
                  </div>
                  <h4 className="font-extrabold text-sm sm:text-base text-white font-display">
                    {PRODUCT_NAME}
                  </h4>
                  <p className="text-[11px] text-white/60 mt-0.5">
                    {PRODUCT_DESC} artesanas listas para freír o airfryer • Queso llanero 100%
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <div className="font-display font-black text-xl text-[#FFB703]">{FIXED_PRICE},00 €</div>
                  <span className="text-[10px] text-emerald-400 font-semibold block">Envío refrigerado inc.</span>
                </div>
              </div>
            </div>

            {/* Inputs - minimum 16px text-base on mobile to eliminate iOS Safari auto-zoom! */}
            <div className="space-y-3 mb-4">
              <div>
                <label className="text-[11px] text-white/70 font-semibold block mb-1">
                  Nombre completo <span className="text-[#FFB703]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Tu nombre y apellidos"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#080B10] border border-white/10 rounded-xl px-3.5 py-2.5 text-base sm:text-xs text-white placeholder-white/30 focus:border-[#FFB703] focus:outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label className="text-[11px] text-white/70 font-semibold block mb-1">
                    Teléfono móvil (WhatsApp) <span className="text-[#FFB703]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Ej. 612 345 678"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#080B10] border border-white/10 rounded-xl px-3.5 py-2.5 text-base sm:text-xs text-white placeholder-white/30 focus:border-[#FFB703] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="text-[11px] text-white/70 font-semibold block mb-1">
                    Correo electrónico <span className="text-[#FFB703]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="tu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#080B10] border border-white/10 rounded-xl px-3.5 py-2.5 text-base sm:text-xs text-white placeholder-white/30 focus:border-[#FFB703] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] text-white/70 font-semibold block mb-1">
                  Ciudad o Código Postal (para reparto en frío):
                </label>
                <input
                  type="text"
                  placeholder="Ej. Madrid 28001 / Valencia"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full bg-[#080B10] border border-white/10 rounded-xl px-3.5 py-2.5 text-base sm:text-xs text-white placeholder-white/30 focus:border-[#FFB703] focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Pricing Summary Box */}
            <div className="bg-[#080B10] p-3.5 rounded-2xl border border-white/5 mb-4 text-xs space-y-1 shadow-inner">
              <div className="flex justify-between text-white/60">
                <span>Producto:</span>
                <span className="font-semibold text-white">{PRODUCT_NAME}</span>
              </div>
              <div className="flex justify-between text-white/60">
                <span>Transporte en frío 24/48h:</span>
                <span className="font-mono text-emerald-400 font-bold">INCLUIDO</span>
              </div>
              <div className="flex justify-between text-sm font-bold text-white pt-1.5 border-t border-white/5">
                <span>Total a Pagar:</span>
                <span className="text-[#FFB703] font-display text-lg font-black">{FIXED_PRICE},00 €</span>
              </div>
            </div>

            {/* Submit Action: Comprar Caja - 45€ */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#FFB703] to-[#FB8500] hover:from-[#FB8500] hover:to-[#FFB703] text-black font-extrabold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_10px_25px_rgba(255,183,3,0.3)] transition-all active:scale-[0.98] cursor-pointer disabled:opacity-50 mb-2.5"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Comprobando disponibilidad de lote...</span>
                </>
              ) : (
                <>
                  <span>Comprar Caja - 45€</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            <p className="text-[11px] text-white/40 text-center">
              Pago 100% seguro tras verificar franja de entrega • Sin cargos por adelantado
            </p>
          </form>
        )}

      </div>
    </div>
  );
};
