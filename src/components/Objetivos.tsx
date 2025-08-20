"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// --- DATOS DE LOS LÍDERES ---
const leadersData = [
  {
    name: "Dr. Walter Aldana Romero",
    role: "CEO Grupo Educativo Avancemos",
    imageSrc: "/lideres/walter.png", // IMPORTANTE: Cambia a la ruta real de la imagen
    bio: "Liderando la visión estratégica y la innovación educativa para transformar el futuro del aprendizaje.",
  },
  {
    name: "Dr. Andrés Felipe Gallego Hurtado",
    role: "Líder de Investigación",
    imageSrc: "/lideres/andres.png", // IMPORTANTE: Cambia a la ruta real de la imagen
    bio: "Doctor en Ciencias de la Educación. Impulsando la investigación y el desarrollo de prácticas pedagógicas inclusivas, que marcan la diferencia.",
  },
];

// --- DATOS DE LOS CONFERENCISTAS (tu array original) ---
const speakersData = [
  {
    nombre: "Dra. Conie Sauma Brito",
    tema: "El poder de la diversidad en el aula, desde las habilidades blandas como ventaja competitiva del docente frente a las inteligencias artificiales.",
    HV: "Doctorado en Ciencias Empresariales.",
    imagen: "/conferencistas/conie.png",
    bandera: "/conferencistas/bandera_bolivia.png",
  },
  {
    nombre: "Dr. Francisco Conejo Carrasco",
    tema: "El papel de la autorregulación del aprendizaje en la innovación educativa.",
    imagen: "/conferencistas/francisco-02.png",
    HV: "Doctorado (C) en Ciencias de la Educación.",
    bandera: "/conferencistas/bandera_españa.png",
  },
  {
    nombre: "Dr. Engels Owen Pozo Gutierrez",
    tema: "Transformando la enseñanza con IA: Experiencias didácticas en gamificación y metodologías activas.",
    imagen: "/conferencistas/engels-02.png",
    HV: "Doctorado en Ciencias de la Educación.",
    bandera: "/conferencistas/bandera_engels.png",
  },
  {
    nombre: "Dr. Jaime Alfredo Mariano Torres",
    tema: "Desarrollo de competencias en estudiantes neurodivergentes: La ruta hacia la inclusión.",
    imagen: "/conferencistas/jaime-02.png",
    HV: "Doctorado en Tecnología Avanzada.",
    bandera: "/conferencistas/bandera_mexico.png",
  },
  {
    nombre: "Dra. Melissa Gonzalez Rubio Villa",
    tema: "Tensiones y desafíos para la implementación de la Educación inclusiva e intercultural para las niñeces indígenas en escuelas urbanas de la ciudad de Medellín.",
    imagen: "/conferencistas/melisa-02.png",
    HV: "Doctorado (C) en Ciencias de la Educación.",
    bandera: "/conferencistas/bandera_colombia.png",
  },
  {
    nombre: "Dr. José Alberto Rúa Vásquez",
    tema: "Retos en la educación superior: inclusión, diversidad, calidad y flexibilidad.",
    imagen: "/conferencistas/joseAlberto.png",
    HV: "Doctorado en Ciencias Pedagógicas.",
    bandera: "/conferencistas/bandera_colombia.png",
  },
  {
    nombre: "Mg. Mónica Maritza Orozco Holguin",
    tema: "Neuroeducación en el aula: Una estrategia de integración.",
    imagen: "/conferencistas/monica-02.png",
    HV: "Magíster en Neuroeducación.",
    bandera: "/conferencistas/bandera_colombia.png",
  },
  {
    nombre: "Mg. Juan Guillermo Serna González",
    tema: "Robótica Educativa: Iniciación a la Programación con Arduino en el Aula.",
    imagen: "/conferencistas/juan-02.png",
    HV: "Magíster en Automatización y Control Industrial.",
    bandera: "/conferencistas/bandera_colombia.png",
  },
  {
    nombre: "Dra. (C) Maria Eugenia Patiño Atehortúa",
    tema: "Evaluación Formativa, auténtica e inclusiva.",
    imagen: "/conferencistas/mariaEugenia.png",
    HV: "Doctorado (C) en Humanidades.",
    bandera: "/conferencistas/bandera_colombia.png",
  },
  {
    nombre: "Dra. Carolina Cárdenas Roa",
    tema: "La inclusión educativa: más allá de las adaptaciones y los ajustes razonables",
    imagen: "/conferencistas/Carolina-Cardenas-Roa.png",
    HV: "Doctora en Educación con énfasis en Educación Especial. Es docente e investigadora de la Universidad de Antioquia.",
    bandera: "/conferencistas/bandera_colombia.png",
  },
];

// const Talleristas = [

// ];

export default function ConferencistasSection() {
  return (
    <section id="conferencistas" className="py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-black mb-16">
          Conferencistas y líderes del evento
        </h1>

        {/* --- SECCIÓN DE LÍDERES --- */}
        <div className="mb-24">
          <h2 className="text-3xl font-semibold text-[#305398] mb-12">
            Liderazgo del congreso
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {leadersData.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-lg flex flex-col items-center border-t-4 border-[#96b422] z-50"
              >
                <Image
                  src={leader.imageSrc}
                  alt={`Fotografía de ${leader.name}`}
                  width={300}
                  height={300}
                  quality={100}
                  className="rounded-full object-cover -mt-20 mb-10"
                />
                <h3 className="text-xl font-bold text-[#305398]">
                  {leader.name}
                </h3>
                <p className="text-md font-semibold text-gray-600 mb-3">
                  {leader.role}
                </p>
                <p className="text-gray-500 text-sm">{leader.bio}</p>
              </motion.div>
            ))}
          </div>
          <a
            href="#precios"
            className="mt-20 inline-block bg-verde text-white font-bold text-3xl py-5 px-4 rounded hover:bg-verde/80 mb-5"
          >
            Ver planes y precios
          </a>
        </div>

        {/* --- SECCIÓN DE CONFERENCISTAS (tu diseño original) --- */}
        <div>
          <h2 className="text-3xl font-semibold text-[#305398] mb-40">
            Conferencistas
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-40">
            {speakersData.map((conf, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative bg-white rounded-tl-3xl rounded-br-3xl shadow-md border-s-4 border-[#96b422] p-6 text-left hover:shadow-xl transition duration-300"
              >
                <Image
                  src={conf.imagen}
                  alt={`Fotografía de ${conf.nombre}`}
                  width={100}
                  height={100}
                  quality={100}
                  className="absolute right-1 top-0 transform -translate-y-1/2 
                        w-40 h-40 object-cover rounded-full shadow-lg"
                />
                <div className="flex items-center gap-3 mb-3 mt-20">
                  <Image
                    src={conf.bandera}
                    alt={`Bandera del país de ${conf.nombre}`}
                    width={50}
                    height={100}
                    quality={100}
                    className="rounded-e-full"
                  />
                  <h3 className="text-lg font-semibold text-[#305398]">
                    {conf.nombre}
                  </h3>
                </div>
                {conf.HV && (
                  <p className="text-gray-700 text-sm">
                    <strong>{conf.HV}</strong>
                  </p>
                )}
                {conf.tema && (
                  <p className="text-gray-700 text-sm mb-2 mt-8">
                    <strong>Conferencia:</strong> {conf.tema}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
        <div>
          <div className=""></div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-40 mt-32">
            {/* {Talleristas.map((conf, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative bg-white rounded-tl-3xl rounded-br-3xl shadow-md border-s-4 border-[#96b422] p-6 text-left hover:shadow-xl transition duration-300"
              >
                <Image
                  src={conf.imagen}
                  alt={`Fotografía de ${conf.nombre}`}
                  width={100}
                  height={100}
                  quality={100}
                  className="absolute right-1 top-0 transform -translate-y-1/2 
                        w-40 h-40 object-cover rounded-full shadow-lg"
                />
                <div className="flex items-center gap-3 mb-3 mt-20">
                  <Image
                    src={conf.bandera}
                    alt={`Bandera del país de ${conf.nombre}`}
                    width={50}
                    height={100}
                    quality={100}
                    className="rounded-e-full"
                  />
                  <h3 className="text-lg font-semibold text-[#305398]">
                    {conf.nombre}
                  </h3>
                </div>
                {conf.HV && (
                  <p className="text-gray-700 text-sm">
                    <strong>{conf.HV}</strong>
                  </p>
                )}
                {conf.tema && (
                  <p className="text-gray-700 text-sm mb-2 mt-8">
                    <strong>Conferencia:</strong> {conf.tema}
                  </p>
                )}
              </motion.div>
            ))} */}
          </div>
          <a
            href="#precios"
            className="mt-20 inline-block bg-verde text-white font-bold text-3xl py-5 px-7 rounded hover:bg-verde/80 mb-5"
          >
            ¡Separa tu cupo!
          </a>
        </div>
      </div>
    </section>
  );
}
