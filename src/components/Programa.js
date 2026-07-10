"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Mic,
  ClipboardList,
  Coffee,
  Utensils,
  DoorOpen,
  GraduationCap,
  Handshake,
} from "lucide-react";
import Button from "./Button";

const scheduleItems = [
  {
    time: "7:30 a.m. – 8:00 a.m.",
    title: "Registro de participantes y entrega de materiales",
    titulo: "",
    conferencista: "",
    description: "",
    icon: <ClipboardList size={22} />,
    boton: true,
  },
  {
    time: "8:00 a.m. – 8:20 a.m.",
    title: "Acto de apertura institucional",
    titulo: "",
    conferencista: "",
    description: "",
    icon: <ClipboardList size={22} />,
  },
  {
    time: "8:20 a.m. – 9:00 a.m.",
    title: "Conferencia de Apertura",
    titulo: "Las emociones y las violencias en la convivencia escolar. ¿Cómo aprender a reparar el daño?",
    conferencista: "Dra. Carina Viviana Kaplan (Argentina)",
    description: "",
    icon: <DoorOpen size={22} />,
  },
  {
    time: "9:00 a.m. – 9:40 a.m.",
    title: "Conferencia",
    titulo: "PedagogIA: ¿el fin de un sujeto de la educación?",
    conferencista: "Dr. Daniel Castaño Zapata (Colombia)",
    description: "",
    icon: <Mic size={22} />,
  },
  {
    time: "9:40 a.m. – 10:20 a.m.",
    title: "Conferencia",
    titulo: "Dialéctica de las emociones y la racionalidad consciente en la construcción de una educación transformadora",
    conferencista: "Dra. Rosani Evelinda Zavaleta Aguilar (Perú)",
    description: "",
    icon: <Mic size={22} />,
  },
  {
    time: "10:20 a.m. – 10:50 a.m.",
    title: "Refrigerio – Pausa activa y espacio de networking",
    titulo: "",
    conferencista: "",
    description: "",
    icon: <Coffee size={22} />,
  },
  {
    time: "10:50 a.m. – 11:30 a.m.",
    title: "Conferencia",
    titulo: "La primera infancia en la ciudad de México en el marco de un sistema de cuidados",
    conferencista: "Dra. Etelvina Sandoval Flores (México)",
    description: "",
    icon: <Mic size={22} />,
  },
  {
    time: "11:30 a.m. – 11:50 a.m.",
    title: "Ponencia de investigación 1",
    titulo: "Gestión educativa y permanencia estudiantil: estudio de caso en la educación superior",
    conferencista: "Dr. Fausto Orlando Maussa Pérez (Universidad de Medellín)",
    description: "",
    icon: <Mic size={22} />,
  },
  {
    time: "11:50 a.m. – 12:10 p.m.",
    title: "Ponencia de investigación 2",
    titulo: "Gastronomía local como fuente motivadora para mejorar la competencia de la lectura y la escritura de los niños y niñas del grado 2, 3 y 4 del Instituto Técnico Agroambiental de Tadó",
    conferencista: "Mg. Claudia Fermina Murillo Copete (Universidad de Medellín)",
    description: "",
    icon: <Mic size={22} />,
  },
  {
    time: "12:10 p.m. – 12:30 p.m.",
    title: "Ponencia de investigación 3",
    titulo: "Hacia la identificación de estrategias educativas de cuidado: formulación de un proyecto sobre la relación entre riesgo psicosocial, la salud cardiovascular y el bienestar docente.",
    conferencista: "Claudia Lucía Vargas y Juan Camilo Foronda (Universidad U de Colombia)",
    description: "",
    icon: <Mic size={22} />,
  },
  {
    time: "12:30 p.m. – 12:50 p.m.",
    title: "Ponencia de investigación 4",
    titulo: "Ponente y título por confirmar",
    conferencista: "",
    description: "",
    icon: <Mic size={22} />,
  },
  {
    time: "12:50 p.m. – 2:10 p.m.",
    title: "Receso – Almuerzo",
    titulo: "",
    conferencista: "",
    description: "",
    icon: <Utensils size={22} />,
  },
  {
    time: "2:10 p.m. – 2:50 p.m.",
    title: "Conferencia",
    titulo: "Scientometric Analysis of Active Learning and Authentic Assessment Between 2002 and 2024: Recent Trends and Further Research",
    conferencista: "Dra. Nini Johana Marín Rodríguez (Colombia)",
    description: "",
    icon: <Coffee size={22} />,
  },
  {
    time: "2:50 p.m. – 3:30 p.m.",
    title: "Conferencia",
    titulo: "Relaciones intergeneracionales en la escuela: adultocentrismo, silenciamiento juvenil y nuevas formas de violencia",
    conferencista: "Dra. Claudia Carrasco Aguilar (Chile)",
    description: "",
    icon: <GraduationCap size={22} />,
  },
  {
    time: "3:30 p.m. – 3:50 p.m.",
    title: "Coffee break y espacio de networking",
    titulo: "",
    conferencista: "",
    description: "",
    icon: <Handshake size={22} />,
  },
  {
    time: "3:50 p.m. – 4:35 p.m.",
    title: "Panel de expertos",
    titulo: "",
    conferencista: "",
    description: "",
    icon: <Mic size={22} />,
  },
  {
    time: "4:35 p.m. – 4:45 p.m.",
    title: "Espacio de conclusiones generales",
    titulo: "",
    conferencista: "",
    description: "",
    icon: <GraduationCap size={22} />,
  },
  {
    time: "4:45 p.m. – 5:05 p.m.",
    title: "Acto de clausura oficial y entrega de certificados",
    titulo: "",
    conferencista: "",
    description: "",
    icon: <GraduationCap size={22} />,
  },
];

export default function Programa() {
  useEffect(() => {
    if (window.location.hash === "#agenda") {
      setTimeout(() => {
        const allSections = document.querySelectorAll("section");
        const agenda = document.getElementById("agenda");
        if (agenda) {
          allSections.forEach((sec) => {
            if (sec.id !== "agenda") sec.style.display = "none";
          });
          agenda.scrollIntoView({ behavior: "smooth" });
        }
      }, 500);
    }
  }, []);

  return (
    <section
      id="agenda"
      className="min-h-screen py-16 px-4 md:px-12"
      style={{
        background: "linear-gradient(180deg, #0b0c10 0%, #1f2833 100%)",
        color: "white",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-10 text-white drop-shadow-lg"
      >
        Agenda
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto gap-4 auto-rows-fr place-items-center">
        {scheduleItems.map((item, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 h-full w-full bg-opacity-60 backdrop-blur-md rounded-2xl p-6 shadow-lg flex flex-col items-center text-center gap-3 border border-gray-700"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="bg-blue-600 text-white rounded-full p-3 flex items-center justify-center shadow-md mx-auto">
              {item.icon}
            </div>
            <div className="flex-1 flex flex-col items-center">
              <p className="text-blue-400 text-lg font-medium">{item.time}</p>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>

              {item.conferencista && (
                <p className="text-white text-base font-medium  mt-1">
                  {item.conferencista}
                </p>
              )}

              {item.titulo && (
                <p className="text-gray-300 text-sm italic mt-1">
                  {item.titulo}
                </p>
              )}

              {item.description && (
                <p className="text-gray-300 text-sm mt-1">{item.description}</p>
              )}

              {item.boton && (
                <div className="flex justify-center">
                  <Button
                    href="https://wa.me/573054240301"
                    variant="secondary"
                    className="mt-5 mb-5 mx-auto"
                  >
                    <div className="text-lg">Inscríbite ahora</div>
                  </Button>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}