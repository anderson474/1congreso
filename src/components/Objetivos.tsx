"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  BookOpenCheck,
  Lightbulb,
  Users,
  GraduationCap,
  Share2,
  FileSearch,
} from "lucide-react";

const objetivos = [
  {
    titulo: "Objetivo General",
    descripcion:
      "Fomentar el intercambio académico y profesional en torno a prácticas pedagógicas inclusivas e innovadoras, mediante la socialización de experiencias, investigaciones y propuestas que fortalezcan la transformación educativa en contextos diversos.",
    Icon: BookOpenCheck,
  },
  {
    titulo: "Objetivo Específico 1",
    descripcion:
      "Visibilizar iniciativas educativas que integren enfoques inclusivos y estrategias innovadoras en distintos niveles y modalidades del sistema educativo.",
    Icon: Lightbulb,
  },
  {
    titulo: "Objetivo Específico 2",
    descripcion:
      "Promover el diálogo interdisciplinario entre actores educativos nacionales e internacionales que trabajan en la mejora de la equidad, calidad y pertinencia de los procesos de enseñanza-aprendizaje.",
    Icon: Users,
  },
  {
    titulo: "Objetivo Específico 3",
    descripcion:
      "Fortalecer las capacidades profesionales de docentes, investigadores y gestores mediante ponencias, talleres y mesas de trabajo centradas en la innovación curricular, el uso de tecnologías emergentes y la atención a la diversidad.",
    Icon: GraduationCap,
  },
  {
    titulo: "Objetivo Específico 4",
    descripcion:
      "Impulsar redes de colaboración académica e institucional para el desarrollo de proyectos conjuntos orientados al diseño y evaluación de prácticas pedagógicas inclusivas.",
    Icon: Share2,
  },
  {
    titulo: "Objetivo Específico 5",
    descripcion:
      "Difundir evidencias científicas sobre el impacto de la innovación educativa y la competencia digital docente en la construcción de entornos de aprendizaje más accesibles y justos.",
    Icon: FileSearch,
  },
];

export default function ObjetivosSection() {
  const [expandido, setExpandido] = useState<number | null>(null);

  return (
    <section id="objetivos" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#305398] mb-12">
          Objetivos del Congreso
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {objetivos.map((obj, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md border-b-4 border-[#96b422] p-6 text-left hover:shadow-xl transition duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <obj.Icon className="text-[#96b422] w-6 h-6" />
                <h3 className="text-lg font-semibold text-[#305398]">
                  {obj.titulo}
                </h3>
              </div>
              <p className="text-gray-700 text-sm line-clamp-3">
                {expandido === index ? obj.descripcion : obj.descripcion.slice(0, 100) + "..."}
              </p>
              <button
                onClick={() => setExpandido(expandido === index ? null : index)}
                className="mt-2 text-[#96b422] text-sm underline"
              >
                {expandido === index ? "Ver menos" : "Ver más"}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
