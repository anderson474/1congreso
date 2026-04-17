// pages/index.js

import Particle from "@/components/Particle";
import Navbar from "@/components/navBar";
//import Fundamento from "@/components/Fundamento";
import Objetivo from "@/components/objetivo";
import Descripcion from "@/components/descripcion";
import Objetivos from "@/components/Objetivos";
import EjesTematicos from "@/components/EjesTematicos";
import Programa from "@/components/Programa";
import Fechas from "@/components/Fechas";
import Footer from "@/components/Footer";
import BotonWhatsApp from "@/components/botonWhatsapp";
import Button from "@/components/Button";

//import Banner from "@/components/banner";

export default function Home() {
  return (
    <main className="relative bg-[#f0f4ff] text-black overflow-hidden">
      {/* Partículas de fondo */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Particle />
      </div>

      <Navbar />
      <BotonWhatsApp />

      <div className="relative z-10 flex justify-center">
        <div className="w-full mt-10 rounded-xl max-w-3xl bg-white bg-opacity-90 rounded-5xl shadow-lg">
          <Descripcion />
        </div>
      </div>

      {/* Contenido principal (con ancho restringido) */}
      <div className="relative z-10 flex justify-center">
        <div className="mt-10 bg-white bg-opacity-90 rounded-xl shadow-lg ">
          <Objetivo />
        </div>
      </div>
      {/* Botón abajo */}
      <div className="flex items-center">
        <Button
          href="https://wa.me/573054240301"
          variant="secondary"
          className="mx-auto"
        >
          Inscríbete ahora
        </Button>
      </div>

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
