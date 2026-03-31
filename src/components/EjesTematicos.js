"use client";

import { motion } from "framer-motion";
import { Book, Cpu, Users, FileSearch } from "lucide-react";
import Button from "./Button";

const ejes = [
  {
    icon: <Book className="w-8 h-8 text-azul" />,
    title: "Transformación educativa e innovación pedagógica",
    bullets: [
      "Rediseño de planes y programas desde enfoques inclusivos y centrados en el estudiante.",
      "Estrategias metodológicas activas que integran dimensiones cognitivas y emocionales.",
      "Evaluación formativa orientada al aprendizaje significativo.",
      "Liderazgo pedagógico y gestión del cambio en contextos educativos.",
    ],
  },
  {
    icon: <Cpu className="w-8 h-8 text-azul" />,
    title: "Tecnologías emergentes y educación emocional",
    bullets: [
      "Aplicación de inteligencia artificial en procesos de aprendizaje y desarrollo socioemocional. ",
      "Uso de plataformas virtuales y modelos híbridos de enseñanza.",
      "Analítica del aprendizaje para la toma de decisiones pedagógicas.",
      "Diseño de recursos digitales accesibles, inclusivos y éticamente responsables.",
    ],
  },
  {
    icon: <Users className="w-8 h-8 text-azul" />,
    title: "Competencia digital docente e inclusión",
    bullets: [
      "Formación docente para el fortalecimiento de competencias digitales con enfoque inclusivo.",
      "Implementación del Diseño Universal para el Aprendizaje (DUA).",
      "Atención a la diversidad, interculturalidad y enfoque de género.",
      "Prácticas pedagógicas inclusivas en contextos educativos diversos y vulnerables.",
    ],
  },
  {
    icon: <FileSearch className="w-8 h-8 text-azul" />,
    title: " Investigación, impacto y sostenibilidad educativa",
    bullets: [
      "Desarrollo de proyectos de investigación en innovación educativa e inclusión.",
      "Análisis de políticas públicas con enfoque en equidad, bienestar y calidad educativa.",
      "Participación de la comunidad académica en redes de colaboración.",
      "Estudios comparados en contextos latinoamericanos y globales.",
    ],
  },
];

export default function EjesTematicos() {
  return (
    <section className="py-16 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center text-azul mb-12">
        Ejes temáticos
      </h2>

      <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
        {ejes.map((eje, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-[#f0f4ff] p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
          >
            <div className="flex items-center gap-4 mb-4">
              {eje.icon}
              <h3 className="text-xl font-semibold text-azul">{eje.title}</h3>
            </div>
            <ul className="list-disc list-inside text-gray-700 space-y-2 pl-2">
              {eje.bullets.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
        <div className="col-span-1 md:col-span-2 flex justify-center mt-8">
          <Button href="https://wa.me/573054240301" variant="secondary" className="mb-5 mx-auto">
            Inscribete ahora
          </Button>
        </div>
      </div>
    </section>
  );
}
