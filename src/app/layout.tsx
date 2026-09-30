import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tequebox.es"),
  title: "Caja 100 Tequeños Artesanales • 45 € (0,45 €/ud) | TEQUEBOX Obrador",
  description:
    "100 Tequeños de queso blanco llanero auténtico por solo 45 € (0,45 €/ud). Formato fiesta dividido en 2 bandejas de 50. Listos en 6 minutos. Transporte refrigerado 24/48h.",
  keywords: [
    "tequeños",
    "caja 100 tequeños",
    "tequeños 45 euros",
    "tequeños queso blanco",
    "comprar tequeños espana",
    "tequeños catering fiesta",
    "tequeños airfryer",
  ],
  openGraph: {
    title: "100 Tequeños Artesanales por 45 € • TEQUEBOX",
    description:
      "Auténtico queso blanco llanero que funde y estira. 100 unidades por solo 0,45 € cada una. Envíos refrigerados 24/48h.",
    type: "website",
    locale: "es_ES",
    images: [
      {
        url: "/images/hero-platter.jpg",
        width: 1200,
        height: 900,
        alt: "Caja 100 Tequeños Artesanales",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${outfit.variable} ${plusJakarta.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#080B10] text-[#FFFDF7] selection:bg-[#FFB703] selection:text-black">
        {children}
      </body>
    </html>
  );
}
