"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Button from "./Button";

// --- DATOS DE LOS CONFERENCISTAS (tu array original) ---
const speakersData = [
  {
    nombre: "Mg (c) Walter Aldana Romero",
    HV: "CEO Grupo Educativo Avancemos",
    imagen: "/lideres/walter.png", // IMPORTANTE: Cambia a la ruta real de la imagen
    descripcion: "Liderando la visión estratégica y la innovación educativa para transformar el futuro del aprendizaje.",
    bandera: "/conferencistas/bandera_colombia.png",
  },
  {
    nombre: "Dr. Andrés Felipe Gallego Hurtado",
    HV: "Líder de Investigación",
    imagen: "/lideres/andres.png", // IMPORTANTE: Cambia a la ruta real de la imagen
    descripcion: "Doctor en Ciencias de la Educación. Impulsando la investigación y el desarrollo de prácticas pedagógicas inclusivas, que marcan la diferencia.",
    bandera: "/conferencistas/bandera_colombia.png",
  },
  {
    nombre: "Dra. Carina Viviana Kaplan",
    tema: "Las emociones y las violencias en la convivencia escolar. ¿Cómo aprender a reparar el daño?",
    HV: "Doctora en Educación",
    imagen: "/conferencistas/carina.png",
    bandera: "/conferencistas/banderaArgentina.png",
  },
  {
    nombre: "Dra. Rosani Evelinda Zavaleta Aguilar",
    tema: "El papel de la autorregulación del aprendizaje en la innovación educativa.",
    imagen: "/conferencistas/rosani.png",
    HV: "Doctorado en Ciencias de la Educación.",
    bandera: "/conferencistas/bandera_engels.png",
  },
  {
    nombre: "Dra. Etelvina Sandoval Flores",
    tema: "La primera infancia en la ciudad de México en el marco de un sistema de cuidados",
    imagen: "/conferencistas/etelvina.png",
    HV: "Doctora en Pedagogía",
    bandera: "/conferencistas/bandera_mexico.png",
  },
  {
    nombre: "Dra. Claudia Carrasco Aguilar",
    tema: "Relaciones intergeneracionales en la escuela: adultocentrismo, silenciamiento juvenil y nuevas formas de violencia",
    imagen: "/conferencistas/claudia.png",
    HV: "Doctora en Ciencias de la Educación.",
    bandera: "/conferencistas/bandera_chile.png",
  },
  {
    nombre: "Dr. Daniel Castaño Zapata",
    tema: "Pedagogía: ¿el fin de un sujeto de la educación?",
    imagen: "/conferencistas/daniel.png",
    HV: "Doctor en Ciencias Sociales",
    bandera: "/conferencistas/bandera_colombia.png",
  },
  {
    nombre: "Dra. Nini Johana Marín Rodríguez",
    tema: "Scientometric Analysis of Active Learning and Authentic Assessment Between 2002 and 2024: Recent Trends and Further Research.",
    imagen: "/conferencistas/nini.png",
    HV: "Doctorado en Filosofía (PhD) en Ingeniería",
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
        {/* <h2 className="text-3xl font-semibold text-[#305398] mb-12">
          Liderazgo del congreso
        </h2> */}

        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="min-w-96 mx-auto px-3"
        >
          <CarouselPrevious className="rounded-full bg-gray-100 relative sm:left-1/2" />
          <CarouselNext className="rounded-full bg-gray-100 relative sm:left-1/2" />
          <CarouselContent>
            {Array.from(speakersData).map((conf, index) => (
              <CarouselItem key={index} className="md:basis-1/3 flex">
                <div className="p-1 py-20">
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative h-full bg-white rounded-tl-3xl min-w-36 rounded-br-3xl shadow-md border-s-4 border-[#96b422] p-6 mr-6 sm:mr-0 text-left hover:shadow-xl transition duration-300"
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
                      <h3 className="text-xl font-semibold text-[#305398]">
                        {conf.nombre}
                      </h3>
                    </div>
                    {conf.HV && (
                      <p className="text-gray-700 text-base">
                        <strong>{conf.HV}</strong>
                      </p>
                    )}
                    {conf.tema && (
                      <p className="text-gray-700 text-base mb-2 mt-8">
                        <strong>Conferencia:</strong> {conf.tema}
                      </p>
                    )}
                    {conf.descripcion && (
                      <p className="text-gray-700 text-base mb-2 mt-8">
                       {conf.descripcion}
                      </p>
                    )}
                  </motion.div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="flex justify-center w-full">
          <Button
            href="https://wa.me/573054240301"
            variant="secondary"
            className="mt-4 mb-5 mx-auto"
          >
            Inscribete ahora
          </Button>
        </div>
      </div>
    </section>
  );
}
