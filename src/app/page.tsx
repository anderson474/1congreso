// pages/index.js

import Particle from "@/components/Particle";
import Navbar from "@/components/navBar";
import Fundamento from "@/components/Fundamento";
import Objetivos from "@/components/Objetivos";
import EjesTematicos from "@/components/EjesTematicos";
import Programa from "@/components/Programa";
import Fechas from "@/components/Fechas";
import Footer from "@/components/Footer";
import BotonWhatsApp from "@/components/botonWhatsapp"

//import Banner from "@/components/banner";

export default function Home() {
  return (
    <main className="relative bg-[#f0f4ff] text-black overflow-hidden">
      {/* Partículas de fondo */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Particle />
      </div>

      <Navbar />
      <BotonWhatsApp/>
      
      
      {/* Contenido principal (con ancho restringido) */}
      
      <Fundamento />
        
      <Objetivos />

      <div className="relative z-10 min-h-screen flex justify-center">
        <div className="w-full mt-10 rounded-xl max-w-5xl bg-white bg-opacity-90 rounded-5xl shadow-lg">
          
          <EjesTematicos />
        </div>
      </div>

      {/* Sección de Programa a pantalla completa */}
      <Programa />

      {/* Secciones finales (también dentro del contenedor si quieres) */}
      <div className="relative z-10 min-h-screen flex justify-center">
        <div className="w-full max-w-6xl bg-white bg-opacity-90 rounded-5xl shadow-lg">
          
          <Fechas />
          <Footer />
        </div>
      </div>
    </main>
  );
}
