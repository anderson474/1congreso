// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Script from "next/script";

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '700'],
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
      <body className={nunito.className}>
        {children}
      </body>
    </html>
  );
}


