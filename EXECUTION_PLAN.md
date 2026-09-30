# Blueprint & Execution Plan: Landing Page "Caja 100 Tequeños Artesanales (€45)"

> **Project Location:** `/Users/mackewinsson/projects/tequenos-100-box`  
> **Tech Stack:** **Next.js (App Router) + TypeScript + Tailwind CSS v4**  
> **Methodology:** `/frontend-design` (Distinctive, non-templated, high-conversion visual design & copy)  
> **Product Offer:** Caja Fiesta de 100 Tequeños de Queso Blanco por **45,00 €** (0,45 €/unidad).

---

## 1. Grounding in the Subject & Strategic Thesis

### 1.1 The Subject
Tequeños are the undisputed soul of Latin celebrations (Venezuela/Colombia) and a runaway sensation across tapas bars, parties, and gatherings in Spain and Europe. A crisp, golden outer layer of rolled wheat pastry encasing a generous stick of semi-hard, melted white cheese (*queso blanco llanero*) that produces an iconic, photogenic cheese pull.

### 1.2 The Audience & Buying Mindset
1. **Party & Event Hosts:** Throwing birthdays, house parties, football/game nights, or celebrations. They want high-impact, crowd-pleasing finger food without cooking for hours or spending €15+ per tapas platter.
2. **Caterers & Bar Owners:** Looking for reliable, artisanal wholesale finger food with instant margin.
3. **Foodies & Freezer Stockers:** People who want gourmet comfort food ready in their airfryer in 6 minutes at only **€0.45 per piece** (versus €1.50–€2.50 in restaurants).

### 1.3 The Page's Single Job
Convert visitors immediately into buying the **100-piece Party Box for 45 €** (via frictionless express checkout or 1-tap WhatsApp ordering for local delivery/pickup).

---

## 2. Design Identity & Token System (Avoiding AI Clichés)

### 2.1 Aesthetic Direction: *Festive Gastro-Modernism*
- **What we are avoiding:**
  - ❌ *AI Cliché #1:* Warm beige/cream background (`#F4F1EA`) + terracotta + high-contrast serif.
  - ❌ *AI Cliché #2:* Deep dark cyber-mode + acid neon green.
  - ❌ *AI Cliché #3:* Dry broadsheet newspaper layout with sterile hairlines.
- **Our Distinctive Choice:** A vibrant, appetite-stimulating **warm nocturnal party vibe** paired with **sun-kissed golden crispness**. It captures the energy of late-night celebrations, sizzling oil, and warm glowing kitchen counters.

### 2.2 Curated Color Palette (Tailwind CSS v4 `@theme`)
```css
@theme {
  --color-bg-base: #0A0E14;          /* Midnight Navy Base */
  --color-surface: #131821;          /* Card Surfaces */
  --color-surface-hover: #1B2330;    /* Card Hover */
  --color-golden-crust: #FFB703;     /* Tequeño Fried Gold */
  --color-golden-glow: #FB8500;      /* Amber Glow / Sizzle */
  --color-queso-melt: #FFFDF5;       /* Stretchy Molten Ivory */
  --color-salsa-tartara: #94D2BD;    /* Fresh Herb Mint */
  --color-salsa-picante: #E63946;    /* Red Hot Sauce Accent */
}
```

### 2.3 Typography System
- **Display & Headings:** `Syne` (weights 700 / 800 via `next/font/google`)
  - *Personality:* Bold, confident, sculptural, high energy.
- **Body & Functional UI:** `Plus Jakarta Sans` (weights 400, 500, 600)
  - *Personality:* Crisp, modern geometric grotesque, ultra-readable on mobile screens and price breakdowns.

---

## 3. Implemented Components

1. **`Navbar.tsx`**: Top promotional banner (chilled 24/48h delivery) + Logo + Quick anchors + WhatsApp express CTA.
2. **`Hero.tsx`**: Thesis H1: *"100 Tequeños. 45 €. La fiesta está resuelta."*, price-per-unit highlight (`0,45 €/ud`), trust badges, and packaging display.
3. **`CheeseSlider.tsx` (Signature Hook 1)**: Interactive horizontal slider pulling a golden tequeño apart with elastic cheese simulation and stretch distance meter (up to 38 cm).
4. **`PartyCalculator.tsx` (Signature Hook 2)**: Dynamic guest slider (4 to 30 people), calculating required tequeños, recommended boxes, sauce pairings, and savings per guest compared to bars.
5. **`ProductAnatomy.tsx`**: Explains why they never leak or burst: 100% Llanero cheese, butter dough, spiral seal, and 2x50 vacuum trays.
6. **`PrepGuide.tsx`**: Interactive tab switcher for Airfryer (6 min), Pan/Frier (3 min), and Oven (8 min) with chef tips.
7. **`PricingBundles.tsx`**: Transparent tiers: 100 units (45 €), 200 units (85 € + Free Delivery + 2 Sauces), and 300 units (120 €).
8. **`Testimonials.tsx`**: Real reviews from party hosts and bar owners with 4.9/5 star ratings.
9. **`FaqSection.tsx`**: Accordion addressing cold delivery, storage, cooking without defrosting, and catering orders.
10. **`StickyMobileBar.tsx`**: Sticky bottom bar on mobile screens with instant purchase trigger.
11. **`CheckoutModal.tsx`**: Modal dialog with bundle selection, customer address input, and 1-tap WhatsApp message generator.
12. **`Footer.tsx`**: Sanitary food assurance, logistics recap, and direct contact.

---

## 4. Verification & Build Status
- Next.js build validated: `npm run build` runs with zero TypeScript or compilation errors.
- Start local development server with `npm run dev` in `/Users/mackewinsson/projects/tequenos-100-box`.
