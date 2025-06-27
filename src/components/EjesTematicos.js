"use client";

import { motion } from "framer-motion";
import { Book, Cpu, Users, FileSearch } from "lucide-react";

const ejes = [
  {
    icon: <Book className="w-8 h-8 text-azul" />,
    title: "Innovación curricular y transformación pedagógica",
    bullets: [
      "Rediseño de planes y programas desde enfoques inclusivos.",
      "Estrategias metodológicas activas y centradas en el estudiante.",
      "Evaluación innovadora y formativa.",
      "Liderazgo pedagógico y gestión para el cambio.",
    ],
  },
  {
    icon: <Cpu className="w-8 h-8 text-azul" />,
    title: "Tecnologías emergentes",
    bullets: [
      "Inteligencia artificial, realidad aumentada y analítica del aprendizaje.",
      "Plataformas virtuales y aprendizaje híbrido.",
      "Gamificación, simulación y aprendizaje inmersivo.",
      "Diseño de recursos digitales inclusivos y accesibles.",
    ],
  },
  {
    icon: <Users className="w-8 h-8 text-azul" />,
    title: "Competencia digital docente e inclusión",
    bullets: [
      "Formación docente para la equidad digital.",
      "Diseño universal para el aprendizaje (DUA).",
      "Educación intercultural, atención a la diversidad y género.",
      "Prácticas inclusivas en contextos vulnerables.",
    ],
  },
  {
    icon: <FileSearch className="w-8 h-8 text-azul" />,
    title: "Investigación y políticas públicas",
    bullets: [
      "Proyectos de investigación-acción en innovación e inclusión.",
      "Marco normativo y políticas educativas con enfoque de derechos.",
      "Participación de la comunidad educativa y redes colaborativas.",
      "Experiencias comparadas en innovación inclusiva (Latinoamérica y otros contextos).",
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
      </div>
    </section>
  );
}
