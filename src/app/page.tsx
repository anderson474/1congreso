// pages/index.js
import Image from "next/image";
import Particle from "@/components/particle";
import Navbar from "@/components/navBar";
import Fundamento from "@/components/Fundamento";
import Objetivos from "@/components/Objetivos";
import Justificacion from "@/components/Justificacion";
import EjesTematicos from "@/components/EjesTematicos";
import Programa from "@/components/Programa";
import Participacion from "@/components/Participacion";
import Fechas from "@/components/Fechas";
import Inscripcion from "@/components/Inscripcion";
import Footer from "@/components/Footer";
//import Banner from "@/components/banner";

export default function Home() {
  return (
    <main className="relative bg-white text-black overflow-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Particle />
      </div>
      <Navbar />
      <div className="relative z-10 min-h-screen flex justify-center">
        <div className="w-full max-w-6xl bg-white bg-opacity-90 rounded-5xl shadow-lg">
          <Image src="/banner_congreso.png" alt="Orientación hacia el congreso" width={1600} height={499} quality={100} />
          <Objetivos />
          <Fundamento />
          <Justificacion />
          <EjesTematicos />
          <Programa />
          <Participacion />
          <Fechas />
          <Inscripcion />
          <Footer />
        </div>
      </div>
    </main>
  );
}