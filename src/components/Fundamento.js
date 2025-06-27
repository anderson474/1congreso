// src/components/Fundamento.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaChalkboardTeacher, FaUsers, FaLightbulb, FaQuoteLeft } from "react-icons/fa";

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
    <section className="bg-slate-50 py-24 px-4 sm:px-6 lg:px-8">
      {/* 
        AQUÍ ESTÁ EL CAMBIO CLAVE:
        Cambiamos de 'lg:grid-cols-2' a 'lg:grid-cols-12' para tener un control preciso.
      */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Columna de Texto (ahora ocupa 7 de 12 columnas) */}
        <motion.div 
          className="lg:col-span-7"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4 text-[#305398]">
            Fundamentación y Principios
          </h2>
          <p className="text-gray-600 mb-10 text-lg">
            Este congreso se basa en tres pilares interconectados, que responden a los desafíos actuales de la educación:
          </p>

          <ul className="space-y-8">
            {keyPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-[#96b422] text-white p-3 rounded-full mt-1">
                  {point.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{point.title}</h3>
                  <p className="text-gray-600 mt-1">{point.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Columna con Cita e Imagen (ahora ocupa 5 de 12 columnas) */}
        <div className="lg:col-span-5 space-y-8">
          <motion.blockquote 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative bg-white p-8 rounded-2xl shadow-xl"
          >
            <FaQuoteLeft className="absolute top-4 left-4 text-6xl text-slate-100" />
            <p className="relative font-serif text-xl italic text-gray-700 leading-relaxed">
              “La innovación debe entenderse como un proceso estratégico y colectivo, más allá del mero uso de tecnología.”
            </p>
            <cite className="relative block mt-4 font-sans text-md font-semibold text-[#305398] text-right">
              — Gómez (2023)
            </cite>
          </motion.blockquote>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-lg bg-white"
          >
            <Image
              src="/niñosEstudiando.jpg" // <-- Asegúrate de que esta sea la ruta correcta a tu nueva imagen
              alt="Estudiantes colaborando en un entorno inclusivo"
              width={800}
              height={750}
              className="w-full h-auto"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}