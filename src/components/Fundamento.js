// src/components/Fundamento.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaChalkboardTeacher, FaUsers, FaLightbulb, FaQuoteLeft } from "react-icons/fa";
import Button from "./Button";

// He creado iconos personalizados para que coincidan con tu nueva imagen
const IconInnovacion = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>;
const IconTecnologia = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2v10"/><path d="m4.93 4.93 7.07 7.07"/></svg>;
const IconInclusion = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10c0-2.2-1-4-2-4"/><path d="M12 7a2.5 2.5 0 0 1 0 5 2.5 2.5 0 0 1 0-5z"/></svg>;


export default function Fundamento() {
  const keyPoints = [
    {
      icon: <IconInnovacion />,
      title: "Innovación como eje central",
      text: "La transformación educativa requiere respuestas ágiles. La innovación es clave para las reformas curriculares, la integración tecnológica y el compromiso con la equidad."
    },
    {
      icon: <IconTecnologia />,
      title: "Tecnología con propósito pedagógico",
      text: "Las tecnologías avanzadas deben integrarse con una planificación sólida, evitando enfoques tecnocentristas que dejen de lado la pedagogía (Espinosa y Cartagena, 2021)."
    },
    {
      icon: <IconInclusion />,
      title: "Inclusión y competencia digital",
      text: "La competencia digital docente, es vital para atender la diversidad del alumnado. Es una herramienta fundamental para promover la equidad real en el aula (Kerexeta-Brazal et al., 2022)."
    }
  ];

  return (
      <section className="max-w-3xl mt-10 mx-auto">
      <div className="max-w-6xl mx-auto items-start bg-white rounded-2xl shadow-lg p-4">

        {/* 🔹 DESCRIPCIÓN */}
        
          <h2 className="text-3xl font-bold mb-4 text-[#305398]">
            Descripción del evento
          </h2>

          <p className="text-gray-600 mb-4 text-lg">
            El <strong>II Congreso Internacional de Innovación Educativa y Prácticas Pedagógicas</strong> Inclusivas es un espacio académico que reúne a docentes, investigadores y profesionales para analizar los retos actuales de la educación.
          </p>

          <p className="text-gray-600 mb-4 text-lg">
            En esta edición, centrada en “Educar desde la emoción: prácticas pedagógicas emocionalmente conscientes”, se abordarán temas como innovación pedagógica, inclusión educativa, inteligencia artificial y desarrollo socioemocional.
          </p>

          <p className="text-gray-600 text-lg">
            Una oportunidad para actualizar conocimientos, fortalecer la práctica docente y conectar con expertos internacionales.
          </p>
        
      </div>
        {/* 🔹 OBJETIVO */}
      <div className="max-w-6xl mx-auto flex flex-col items-start bg-white rounded-2xl shadow-lg p-4 mt-32">
        <div>
          <h2 className="text-3xl font-bold mb-4 text-[#305398]">
            Objetivo del evento
          </h2>

          <p className="text-gray-600 text-lg">
            Fomentar el intercambio académico sobre prácticas pedagógicas inclusivas e innovadoras emocionalmente conscientes, mediante la socialización de investigaciones y experiencias orientadas a la transformación educativa en contextos diversos.
          </p>
        </div>

        {/* Botón abajo */}
        <Button href="https://wa.me/573054240301" variant="secondary">
          Inscríbete ahora
        </Button>
      </div>
    </section>
  );
}