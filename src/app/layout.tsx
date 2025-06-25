// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Nunito, Lora, Inter } from "next/font/google";
import Script from "next/script";

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '700'],
});

// Configura las fuentes
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter', // Variable para la fuente principal
});

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-lora', // Variable para la fuente de la cita
});

export const metadata: Metadata = {
  title: "Congreso Internacional",
  description: "El congreso",
  icons: {
    icon: "/RevistaCientifica.png", // Asegúrate de tenerlo en /public
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${nunito.className} ${inter.variable} ${lora.variable}`}>
        {children}
      </body>
    </html>
  );
}


