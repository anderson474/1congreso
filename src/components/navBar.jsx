/// src/components/HeaderHero.tsx
import Image from "next/image";
import Link from "next/link";
import { FaCalendarDay, FaMapMarkerAlt } from "@node_modules/react-icons/fa";
import Button from "./Button";
import Countdown from "./Countdown";

export default function HeaderHero() {
  // 👇 Control simple para abrir o cerrar inscripciones
  const inscripcionesAbiertas = true; // Cambia a true para reactivar

  return (
  <section className="relative w-full min-h-screen text-white overflow-hidden flex flex-col">
    {/* CAPA DE FONDO */}
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0">
        <Image
          src="/Fondo_actualizado.png"
          alt="Fondo"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2C0B47]/95 via-[#4A0D66]/80 to-[#7A1E8C]/60" />
        <div className="absolute inset-0 bg-black/20" />
      </div>
    </div>

    {/* Logos: centrados en mobile y tablet, top-right solo en desktop (lg) */}
    <div className="relative z-10 flex justify-center lg:justify-end w-full pt-2 px-6 lg:absolute lg:top-2 lg:right-6 lg:w-auto lg:pt-0 lg:px-0">
      <div className="flex flex-wrap items-center justify-center gap-3 md:gap-5">
        <Image
          src="/R_cientifica.png"
          alt="Editorial Avancemos"
          width={537}
          height={536}
          className="h-16 sm:h-24 md:h-32 w-auto object-cover"
        />
        <Image
          src="/LogoAvancemos.png"
          alt="Universidad de Medellín"
          width={537}
          height={535}
          className="h-12 w-12 sm:h-20 sm:w-20 md:h-28 md:w-28 object-contain"
        />
        <Image
          src="/UMedellin.png"
          alt="Universidad de Medellín"
          width={537}
          height={535}
          className="h-12 sm:h-16 md:h-20 w-auto object-contain"
        />
      </div>
    </div>

    {/* Contenido principal */}
    <div className="relative z-10 flex flex-col justify-center min-h-screen max-w-7xl mx-auto w-full px-6 lg:px-8 py-10 lg:pt-32">

      {/* Fila: Título + Cerebro. Mobile/Tablet: cerebro arriba. Desktop: cerebro a la derecha */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] lg:items-center justify-items-center lg:justify-items-stretch gap-6 md:gap-8 lg:gap-10">

        {/* Cerebro */}
        <div className="
          relative
          w-40 h-40
          sm:w-52 sm:h-52
          md:w-56 md:h-56
          lg:w-52 lg:h-52
          xl:w-64 xl:h-64
          shrink-0
          order-2
          lg:order-2
          justify-self-center"
        >
          <Image
            src="/Logo.png"
            alt="Cerebro"
            fill
            quality={100}
            priority
            sizes="(max-width: 768px) 240px, (max-width: 1024px) 288px, 352px"
            className="object-contain"
          />
        </div>

        {/* Título */}
        <div className="flex items-center gap-2 sm:gap-4 justify-center lg:justify-start order-1 lg:order-1 w-full">
          <div className="flex flex-col items-center mt-1.5 md:mt-2.5 lg:mt-4 shrink-0">
            <div className="h-1 w-10 md:h-1.5 md:w-14 lg:h-2 lg:w-16 bg-white rounded-full"></div>
            <div className="h-[75px] w-2 md:h-28 md:w-2.5 lg:h-48 lg:w-3 bg-white"></div>
            <div className="h-1 w-10 md:h-1.5 md:w-14 lg:h-2 lg:w-16 bg-white rounded-full"></div>
          </div>
          <div className="flex flex-col items-center mt-1.5 md:mt-2.5 lg:mt-4 shrink-0">
            <div className="h-1 w-10 md:h-1.5 md:w-14 lg:h-2 lg:w-16 bg-white rounded-full"></div>
            <div className="h-[75px] w-2 md:h-28 md:w-2.5 lg:h-48 lg:w-3 bg-white"></div>
            <div className="h-1 w-10 md:h-1.5 md:w-14 lg:h-2 lg:w-16 bg-white rounded-full"></div>
          </div>

          <h1 className="text-xl leading-snug sm:text-3xl md:text-4xl lg:text-6xl font-extrabold tracking-tight mt-1 sm:mt-2 text-center lg:text-left">
            <span className="block text-lg leading-snug sm:text-xl md:text-3xl lg:text-5xl md:leading-[1.25] lg:leading-[1.1] text-white mt-1">
              Congreso Internacional de Innovación Educativa y Prácticas
              Pedagógicas Inclusivas
            </span>
          </h1>
        </div>
      </div>

      {/* Resto del contenido: debajo del bloque título + cerebro */}
      <div className="max-w-4xl mx-auto lg:mx-0 text-center lg:text-left mt-8">
        <p className="text-base leading-none sm:text-lg md:text-2xl text-white/90 max-w-2xl mx-auto lg:mx-0">
          <strong>&quot;Educar desde la emoción:</strong>
        </p>
        <p className="text-base leading-none sm:text-lg md:text-2xl text-white/90 max-w-2xl mx-auto lg:mx-0">
          prácticas pedagógicas <strong>emocionalMENTE</strong>{" "}
          conscientes&quot;
        </p>
        <p className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-lg font-semibold text-white/90">
          <span className="flex items-center gap-2 text-base md:text-xl">
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

      {/* Botón de inscripción + Temporizador */}
      <div
        className="
        mt-10
        flex
        flex-col
        lg:flex-row
        items-center
        justify-center
        lg:justify-start
        gap-6
      "
      >
        <Button
          disabled={!inscripcionesAbiertas}
          href="https://wa.me/573054240301"
          variant="primary"
        >
          {inscripcionesAbiertas
            ? "Inscríbete ahora"
            : "Inscripciones Cerradas"}
        </Button>

        <Countdown />
      </div>
    </div>
  </section>
);
}
