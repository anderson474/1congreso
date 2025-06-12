"use client";

import { motion } from "framer-motion";

import Image from "next/image";

const conferencistas = [
  {
    nombre: "Dra. Conie Sauma Brito",
    tema: "El poder de la diversidad en el aula, desde las habilidades blandas como ventaja competitiva del docente frente a las inteligencias artificiales",
    taller: "Neurodiversidad para potenciar la inclusión en el aula.",
    imagen:'/conferencistas/conie.jpg',
    bandera:'/conferencistas/bandera_bolivia.png'
  },
  {
    nombre: "Dr. Francisco Conejo Carrasco",
    tema: "El papel de la autorregulación del aprendizaje en la innovación educativa",
    imagen:'/conferencistas/francisco.jpg',
    bandera:'/conferencistas/bandera_españa.png'
  },
  {
    nombre: "Dr. Engels Owen Pozo Gutierrez",
    tema: "Transformando la enseñanza con IA: Experiencias didácticas en gamificación y metodologías activas",
    imagen:'/conferencistas/engels.jpg',
    bandera:'/conferencistas/bandera_engels.png'
  },
  {
    nombre: "Mg Mónica Maritza Orozco Holguin",
    tema: "Neuroeducación en el aula: Una estrategia de integración",
    imagen:'/conferencistas/monica.jpg',
    bandera:'/conferencistas/bandera_colombia.png'
    
  },
  {
    nombre: "Mg. Juan Guillermo Serna González",
    tema: "Robótica Educativa: Iniciación a la Programación con Arduino en el Aula",
    imagen:'/conferencistas/juan.png',
    bandera:'/conferencistas/bandera_colombia.png'
    
  },
  {
    nombre: "Dr. Jaime Alfredo Mariano Torres",
    tema: "Desarrollo de competencias en estudiantes neurodivergentes: La ruta hacia la inclusión.",
    imagen:'/conferencistas/jaime.png',
    bandera:'/conferencistas/bandera_mexico.png'
  },
];

export default function ConferencistasSection() {
  return (
    <section id="conferencistas" className="py-20 px-4 bg-transparent">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-12">
          Conferencistas del Congreso
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {conferencistas.slice().map((conf, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative bg-white rounded-xl shadow-md border-b-4 border-[#96b422] p-6 text-left hover:shadow-xl transition duration-300"
              >
              <div className="flex items-center gap-3 mb-3">
                <Image
                  src={conf.bandera}
                  alt='Bandera del pais de cada conferencista'
                  width={50}
                  height={100}
                  quality={100}
                  className="rounded-e-full"
                />
                <h3 className="text-lg font-semibold text-[#305398]">{conf.nombre}</h3>
              </div>
              
              <Image
                src={conf.imagen}
                alt="Conferencistas"
                width={1280}
                height={853}
                quality={100}
                className="object-contain w-full h-auto rounded-xl"
              />
              {conf.tema && (
                <p className="text-gray-700 text-sm mb-2 mt-8">
                  <strong>Conferencia:</strong> {conf.tema}
                </p>
              )}
              {conf.taller && (
                <p className="text-gray-700 text-sm">
                  <strong>Taller:</strong> {conf.taller}
                </p>
              )}
            </motion.div>
          ))}
        </div>  
      </div>
    </section>
  );
}
