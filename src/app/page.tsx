// pages/index.js

import Particle from "@/components/Particle";
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
    <main className="relative bg-[#f0f4ff] text-black overflow-hidden">
      {/* Partículas de fondo */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Particle />
      </div>

      <Navbar />
      <Objetivos />
      {/* Contenido principal (con ancho restringido) */}
      <div className="relative z-10 min-h-screen flex justify-center">
        <div className="w-full max-w-6xl bg-white bg-opacity-90 rounded-5xl shadow-lg">
          
          <Fundamento />
          <Justificacion />
          <EjesTematicos />
        </div>
      </div>

      {/* Sección de Programa a pantalla completa */}
      <Programa />

      {/* Secciones finales (también dentro del contenedor si quieres) */}
      <div className="relative z-10 min-h-screen flex justify-center">
        <div className="w-full max-w-6xl bg-white bg-opacity-90 rounded-5xl shadow-lg">
          <Participacion />
          <Fechas />
          <Inscripcion />
          <Footer />
        </div>
      </div>
    </main>
  );
}
