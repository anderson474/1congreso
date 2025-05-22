"use client";

import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion } from "framer-motion";

export default function Justificacion() {
  return (
    <section className="px-6 py-12 bg-gradient-to-r from-[#f0f4ff] to-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Animación Lottie */}
        <div className="w-full max-w-xl aspect-[4/3] mx-auto">
          <DotLottieReact
            src="/justificacionAnimacion.lottie"
            loop
            autoplay
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>

        {/* Texto animado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-[#305398] text-center md:text-left">
            Justificación Institucional
          </h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            En un contexto global de transformación social y tecnológica acelerada por la pandemia, el I Congreso Internacional de Innovación Educativa y Prácticas Pedagógicas Inclusivas surge como un espacio de encuentro, reflexión y creación colectiva entre diversos actores del ámbito educativo, con el objetivo de repensar las prácticas docentes desde una perspectiva innovadora, crítica y humanista. Convocado por el Grupo Educativo Avancemos y respaldado por la Editorial Avancemos, el evento reafirma el compromiso institucional con una educación equitativa, inclusiva y sostenible, promoviendo la generación y divulgación de conocimiento riguroso, así como la consolidación de redes de cooperación en torno a la innovación curricular, el uso ético de la tecnología y las prácticas pedagógicas inclusivas.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
