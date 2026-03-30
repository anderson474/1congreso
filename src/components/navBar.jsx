/// src/components/HeaderHero.tsx
import Image from "next/image";
import Link from "next/link";
import { FaCalendarDay, FaMapMarkerAlt  } from "@node_modules/react-icons/fa";
import Button from "./Button";

export default function HeaderHero() {
  // 👇 Control simple para abrir o cerrar inscripciones
  const inscripcionesAbiertas = true; // Cambia a true para reactivar

  return (
    <section className="relative w-full text-white overflow-hidden">
      {/* CAPA DE FONDO */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Fondo_actualizado.png"
          alt="fondo"
          fill={true}
          className="object-cover"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-r from-[#4A0D66] via-[#862788] to-[#C043A3]" /> */}

        {/* Fondo del cerebro */}
        <div className="absolute bottom-20 right-0 w-1/2 md:w-2/5 lg:w-1/3 h-full opacity-60 md:opacity-80">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/Logo.png')",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "bottom right",
            }}
          />
        </div>

        {/* Texto “Vigilada MinEducación” debajo del logo de la Universidad de Medellín */}
        <div
          className="hidden lg:block absolute top-[50%] right-[2%] text-white font-semibold text-xs sm:text-sm md:text-base opacity-90 drop-shadow-lg transform rotate-90 origin-center"
          style={{
            transformOrigin: "center",
          }}
        >
          Vigilada MinEducación
        </div>

        <div className="absolute inset-0 bg-[url('/dots-pattern.svg')] opacity-10"></div>
      </div>

      {/* Logos en la esquina superior derecha */}
      <div className="absolute top-6 right-6 flex items-center gap-4 md:gap-6">
        <Image
          src="/R_cientifica.png"
          alt="Editorial Avancemos"
          width={537}
          height={536}
          className="h-40 w-auto object-cover"
        />
        <Image
          src="/aliados/udem-02.png"
          alt="Universidad de Medellín"
          width={537}
          height={535}
          className="h-20 w-20 sm:h-36 sm:w-36 object-contain"
        />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen max-w-7xl px-6 lg:px-8 py-5 sm:py-28 sm:mt-24">
        <div className="max-w-4xl text-left">
          <div className="flex items-start gap-2 sm:gap-4">
            {/* Número romano I */}
            <div className="flex flex-col items-center mt-1.5 md:mt-4">
              <div className="h-1 w-10 md:h-2 md:w-16 bg-white rounded-full"></div>
              <div className="h-[75px] w-2 md:h-48 md:w-3 bg-white"></div>
              <div className="h-1 w-10 md:h-2 md:w-16 bg-white rounded-full"></div>
            </div>
            <div className="flex flex-col items-center mt-1.5 md:mt-4">
              <div className="h-1 w-10 md:h-2 md:w-16 bg-white rounded-full"></div>
              <div className="h-[75px] w-2 md:h-48 md:w-3 bg-white"></div>
              <div className="h-1 w-10 md:h-2 md:w-16 bg-white rounded-full"></div>
            </div>

            <h1 className="text-xl leading-none sm:text-4xl md:text-6xl font-extrabold tracking-tight md:leading-none mt-1 sm:mt-2">
              <span className="block text-lg leading-tight sm:text-xl md:text-5xl md:leading-[1.1] text-white mt-1">
                Congreso Internacional de Innovación Educativa y Prácticas Pedagógicas Inclusivas
              </span>
            </h1>
          </div>

          <div className="mt-4">
            <p className="text-base leading-none sm:text-lg md:text-xl text-white/90 max-w-2xl">
              <strong>&quot;Educar desde la emoción:</strong> 
            </p>
            <p>
              prácticas pedagógicas <strong>emocionalMENTE</strong> conscientes&quot;
            </p>
            <p className="mt-6 flex flex-wrap items-center gap-3 text-lg font-semibold text-white/90">
  
              <span className="flex items-center gap-2">
                <FaMapMarkerAlt />
                Universidad de Medellín, Colombia
              </span>

              <span className="hidden sm:inline">|</span>

              <span className="flex items-center gap-2">
                <FaCalendarDay />
                06 de agosto de 2026
              </span>

            </p>
          </div>

          <div className="mt-10">
            {/* BOTÓN DE INSCRIPCIÓN (condicional) */}
            <Button disabled={!inscripcionesAbiertas} href="https://wa.me/573054240301" variant="primary">
              {inscripcionesAbiertas ? "Inscríbete ahora" : "Inscripciones Cerradas"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
