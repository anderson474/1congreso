// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Nunito, Lora, Inter } from "next/font/google";
import Head from "@node_modules/next/head";
import dynamic from "next/dynamic";

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
const PixelTracker = dynamic(() => import("@/components/pixelTracker"), {
  ssr: false,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?                         
              n.callMethod.apply(n,arguments):n.queue.push   
              (arguments)}; if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!
              0;n.version='2.0';n.queue=[];t=b.createElement(e);
              t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,
              'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '678309121876043');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=
            PageView&noscript=1"
          />
        </noscript>
        {/* End Meta Pixel Code */}
      </head>
      <body
        className={`${nunito.className} ${inter.variable} ${lora.variable}`}
      >
        <PixelTracker />
        {children}
      </body>
    </html>
  );
}
