// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Nunito, Lora, Inter } from "next/font/google";
import Script from "next/script";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700"],
});

// Configura las fuentes
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // Variable para la fuente principal
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-lora", // Variable para la fuente de la cita
});

export const metadata: Metadata = {
  title: "Congreso Internacional",
  description: "El congreso",
  icons: {
    icon: "/RevistaCientifica.png", // Asegúrate de tenerlo en /public
  },
  openGraph: {
    title: "Congreso Internacional de Innovación Educativa",
    description: "Acompáñanos en este evento transformador. ¡Inscríbete ahora!",
    url: "https://congreso.avancemos.edu.co", // La URL canónica de tu sitio
    siteName: "Congreso Avancemos",
    images: [
      {
        url: "https://avancemos.edu.co/wp-content/uploads/2025/07/foto-de-perfil-congreso-jpg.png", // URL ABSOLUTA de tu imagen
        width: 1200,
        height: 630,
        alt: "Banner del Congreso Internacional de Innovación Educativa",
      },
    ],
    locale: "es_CO", // Opcional: especifica el idioma y región
    type: "website",
  },
  // --- Opcional pero recomendado: metadatos para Twitter ---
  twitter: {
    card: "summary_large_image", // Muestra una imagen grande, es la mejor opción
    title: "Congreso Internacional de Innovación Educativa",
    description: "Acompáñanos en este evento transformador. ¡Inscríbete ahora!",
    images: [
      "https://avancemos.edu.co/wp-content/uploads/2025/07/foto-de-perfil-congreso-jpg.png",
    ], // URL ABSOLUTA
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${nunito.className} ${inter.variable} ${lora.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
