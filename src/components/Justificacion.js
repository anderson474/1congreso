// src/components/Justificacion.tsx
"use client";

import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion } from "framer-motion";
import { CheckCircle2 } from 'lucide-react'; // Iconos limpios y modernos

export default function Justificacion() {
  // Primero, instala lucide-react: npm install lucide-react

  const justificationPoints = [
    { text: <>Buscar <strong>repensar las prácticas docentes</strong> desde una perspectiva innovadora, crítica y humanista.</> },
    { text: <>Reafirmar el <strong>compromiso institucional</strong> con una educación equitativa, inclusiva y sostenible.</> },
    { text: <>Promover la generación y divulgación de <strong>conocimiento riguroso</strong> y la consolidación de <strong>redes de cooperación</strong>.</> },
  ];

  return (
    <section className="px-6 py-24 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Animación Lottie */}
        <motion.div 
          className="w-full"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <DotLottieReact
            src="/justificacionAnimacion.lottie"
            loop
            autoplay
          />
        </motion.div>

        {/* Texto con Viñetas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4 text-azul">
            ¿Por qué este congreso?
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            En un contexto global de transformación, este congreso es nuestra respuesta para impulsar una educación que mire al futuro. Surge como un <strong>espacio de encuentro, reflexión y creación colectiva</strong> entre actores del ámbito educativo. Nuestros objetivos son:
          </p>

          <ul className="space-y-4">
            {justificationPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="flex-shrink-0 h-6 w-6 text-verde mt-1" />
                <span className="text-gray-700 text-lg leading-relaxed">{point.text}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
      <div className='w-full flex justify-center'>
        <a href="#precios" className="relative mt-20 mx-auto inline-block bg-verde text-white font-bold text-3xl py-5 px-7 rounded hover:bg-verde/80 mb-5">
          ¡Cupos Limitados!
      </a>
      </div>
      
    </section>
  );
}