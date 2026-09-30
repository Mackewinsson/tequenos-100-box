# 🧀 TEQUEBOX — Landing Page "Caja 100 Tequeños por 45 €"

Landing page de alta conversión para la venta directa de **Cajas de 100 Tequeños Artesanales por 45,00 €** (0,45 €/unidad), desarrollada con **Next.js 16 (App Router), TypeScript y Tailwind CSS v4**.

---

## 📍 Ubicación del Proyecto
`/Users/mackewinsson/projects/tequenos-100-box`

---

## 🛠️ Stack Tecnológico
- **Framework:** Next.js (App Router, Turbopack)
- **Lenguaje:** TypeScript (`strict: true`)
- **Estilos:** Tailwind CSS v4 (`@tailwindcss/postcss` con `@theme`)
- **Tipografías:** `Syne` (Titulares) y `Plus Jakarta Sans` (Lectura) vía `next/font/google`
- **Iconos:** `lucide-react`
- **Metodología de Diseño:** `/frontend-design` (Gastro-Modernismo Nocturno, evitando clichés de IA)

---

## 🧩 Arquitectura de Componentes
```
src/
├── app/
│   ├── globals.css          # Tokens de diseño Tailwind v4, glow effects y scrollbar
│   ├── layout.tsx           # Configuración de Google Fonts (Syne + Jakarta) y metadatos SEO
│   └── page.tsx             # Ensamblado principal y gestión de estado modal
└├── components/
    ├── Navbar.tsx           # Barra superior con banner de envíos y enlace directo
    ├── Hero.tsx             # Tesis principal: "100 Tequeños. 45 €. La fiesta está resuelta."
    ├── CheeseSlider.tsx     # Hook 1: Slider táctil de estiramiento de queso (medición en cm)
    ├── PartyCalculator.tsx  # Hook 2: Calculadora de invitados (4-30 comensales, cálculo €/persona)
    ├── ProductAnatomy.tsx   # "Por qué nunca se revientan": Queso llanero real, masa fina, sellado espiral
    ├── PrepGuide.tsx        # Selector interactivo Airfryer (6 min), Sartén (3 min) y Horno (8 min)
    ├── PricingBundles.tsx   # Packs: 100 uds (45€), 200 uds (85€ + envío gratis) y 300 uds (120€)
    ├── Testimonials.tsx     # Reseñas verificadas de anfitriones y hostelería (4.9/5 estrellas)
    ├── FaqSection.tsx       # Acordeón de dudas sobre transporte en frío, conservación y cocinado
    ├── StickyMobileBar.tsx  # Barra flotante de compra rápida fija en móvil
    ├── CheckoutModal.tsx    # Modal de validación de demanda: captura lead + pantalla lote agotado / lista espera
    └── Footer.tsx           # Pie de página con registro sanitario y contacto de obrador
└── data/
    └── leads.json           # Registro de leads persistidos localmente (preparado para Neon DB)

---

## 🎯 Flujo de Validación de Demanda (Smoke Test)
1. **Captura de Intención:** El usuario elige su pack e introduce Nombre, WhatsApp, Email y Ciudad.
2. **Registro de Lead:** Envío asíncrono a `/api/leads` (almacena en local y asigna ticket correlativo con posición prioritaria).
3. **Pantalla de Conversión a Lista de Espera:**
   - Comunica que el lote artesanal de la semana está agotado (50 cajas semanales de cupo).
   - Asigna número de cola prioritaria (ej. `#20`).
   - Garantiza el precio congelado de oferta (45 €).
   - Ofrece compensación por la espera: 1 tarro de salsa artesana gratis.
   - Proporciona canal de urgencias vía WhatsApp para eventos de fin de semana.

---

## 🗄️ Próximo Paso: Integración con Base de Datos Neon
El endpoint `src/app/api/leads/route.ts` está aislado y preparado para conectar con Neon (`@neondatabase/serverless`) mediante variable de entorno `DATABASE_URL`.
```

---

## 🚀 Comandos Rápidos

### Desarrollo Local
```bash
npm run dev
```
Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Compilación para Producción
```bash
npm run build
npm run start
```

---

## 📄 Documentos de Referencia
- [`EXECUTION_PLAN.md`](file:///Users/mackewinsson/projects/tequenos-100-box/EXECUTION_PLAN.md): Especificación detallada de tokens, copy deck completo y principios de diseño.
