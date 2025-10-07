// src/components/HeaderHero.tsx
import Image from "next/image";
import Link from 'next/link';

export default function HeaderHero() {
  return (
    <section className="relative w-full text-white overflow-hidden bg-[#4A0D66]">
      {/* CAPA DE FONDO */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#4A0D66] via-[#862788] to-[#C043A3]" />
        <div 
          className="absolute bottom-0 right-0 w-1/2 md:w-2/5 lg:w-1/3 h-full opacity-60 md:opacity-80"
          style={{
            backgroundImage: "url('/Imagen-cerebro.png')",
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom right',
          }}
        />
        <div className="absolute inset-0 bg-[url('/dots-pattern.svg')] opacity-10"></div>
      </div>
      {/* 
        CAPA DE CONTENIDO:
        Hemos movido los logos aquí para que estén dentro del flujo del layout principal.
      */}
      {/* Logos en la esquina superior derecha - CORREGIDO */}
        <div className="absolute top-6 right-6 flex items-center gap-4 md:gap-6">
          {/* 
            - width/height: Dimensiones REALES o proporcionales del archivo original.
            - className: h-16 (64px) en pantallas medianas, h-12 (48px) en pequeñas. w-auto mantiene la proporción.
          */}
          <Image 
            src="/RevistaCientifica.png" 
            alt="Revista Científica Avancemos" 
            width={537} // Proporción rectangular 3:1
            height={536}
            className="h-20 w-20 sm:h-36 sm:w-36 object-contain" 
          />
          <Image 
            src="/logoEditorial.png" 
            alt="Editorial Avancemos" 
            width={537} // Proporción cuadrada
            height={536} 
            className="h-20 w-20 sm:h-36 sm:w-36 object-cover" 
          />
          <Image 
            src="/aliados/udem-02.png" 
            alt="Universidad de Medellín" 
            width={537} // Proporción rectangular
            height={535}
            className="h-20 w-20 sm:h-36 sm:w-36 object-contain" // Este logo es más ancho, lo hacemos un poco menos alto para equilibrar
          />
        </div>
      <div className="relative z-10 flex flex-col justify-center min-h-screen max-w-7xl mx-auto px-6 lg:px-8 py-5 sm:py-28 sm:mt-24">
        {/* Contenido principal del Hero */}
        <div className="max-w-4xl text-left">
          <div className="flex items-start gap-2 sm:gap-4">
            {/* ====================================================== */}
            {/* == NÚMERO ROMANO "I" CONSTRUIDO CON DIVS - COMIENZO == */}
            {/* ====================================================== */}
            <div className="flex flex-col items-center mt-1.5 md:mt-4">
              {/* Serifa Superior */}
              <div className="h-1 w-10 md:h-2 md:w-16 bg-white rounded-full"></div>
              {/* Barra Vertical */}
              <div className="h-[75px] w-2 md:h-48 md:w-3 bg-white"></div>
              {/* Serifa Inferior */}
              <div className="h-1 w-10 md:h-2 md:w-16 bg-white rounded-full"></div>
            </div>
            {/* ====================================================== */}
            {/* == NÚMERO ROMANO "I" CONSTRUIDO CON DIVS - FINAL   == */}
            {/* ====================================================== */}
            <h1 className="text-xl leading-none sm:text-4xl md:text-6xl font-extrabold tracking-tight md:leading-none mt-1 sm:mt-2">
              CONGRESO INTERNACIONAL 
              <span className="block text-lg leading-tight sm:text-xl md:text-5xl md:leading-[1.1] text-white mt-1">
                DE INNOVACIÓN EDUCATIVA Y PRÁCTICAS PEDAGÓGICAS INCLUSIVAS
              </span>
            </h1>
          </div>
          
          <div className="mt-4 space-y-4">
            <p className="text-base leading-none sm:text-lg md:text-xl text-white/90 max-w-2xl">
              Avances, prácticas y desafíos hacia una educación verdaderamente inclusiva.
            </p>
            <p className="mt-2 px-4 py-1.5 inline-block bg-transparent rounded-full border-2 border-white/30 text-base md:text-lg font-semibold backdrop-blur-sm">
              24 de octubre 2025
            </p>
          </div>

          <div className="mt-10">
            <Link
              href="#precios"
              className="inline-block bg-[#96b422] text-white text-xl md:text-3xl px-10 py-4 rounded-lg font-bold shadow-xl
                         transform transition-all duration-300 ease-in-out 
                         hover:bg-[#a8c928] hover:scale-105 hover:shadow-2xl 
                         focus:outline-none focus:ring-4 focus:ring-[#c8e658]/50"
            >
              Inscribirse
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}