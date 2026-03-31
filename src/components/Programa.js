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
    description: "",
    icon: <ClipboardList size={22} />,
    boton: true,
  },
  {
    time: "8:00 a.m. – 8:20 a.m.",
    title: "Acto de apertura institucional",
    description: "",
    icon: <ClipboardList size={22} />,
  },
  {
    time: "8:20 a.m. – 9:00 a.m.",
    title: "Conferencia 1 – Apertura",
    description:
      "",
    icon: <DoorOpen size={22} />,
  },
  {
    time: "9:00 a.m. – 9:40 a.m.",
    title:
      "Conferencia 2",
    description: "",
    icon: <Mic size={22} />,
  },
  {
    time: "9:40 a.m. – 10:20 a.m.",
    title:
      "Conferencia 3",
    
    icon: <Mic size={22} />,
  },
  {
    time: "10:20 a.m. – 10:50 a.m.",
    title:
      "Refrigerio – Pausa activa",
    
    icon: <Mic size={22} />,
  },
  {
    time: "10:50 a.m. – 11:30 a.m.",
    title: "Conferencia 4",
    icon: <Coffee size={22} />,
  },
  {
    time: "11:30 a.m. – 11:45 a.m.",
    title:
      "Ponencia de investigación 1",
    icon: <Mic size={22} />,
  },
  {
    time: "11:45 a.m. – 12:00 p.m.",
    title:
      "Ponencia de investigación 2",
    icon: <Mic size={22} />,
  },
  {
    time: "12:00 p.m. – 12:15 p.m.",
    title: "Ponencia de investigación 3",
    icon: <Utensils size={22} />,
  },
  {
    time: "12:15 p.m. – 12:30 p.m.",
    title:
      "Ponencia de investigación 4",
    icon: <Mic size={22} />,
  },
  {
    time: "12:30 p.m. – 2:10 p.m.",
    title:
      "Receso – Almuerzo",
    icon: <Mic size={22} />,
  },
  {
    time: "2:10 p.m. – 2:50 p.m.",
    title: "Conferencia 5",
    icon: <Coffee size={22} />,
  },
  {
    time: "2:50 p.m. – 3:30 p.m.",
    title:
      "Panel de expertos",
    icon: <Mic size={22} />,
  },
  {
    time: "3:30 p.m. – 3:50 p.m.",
    title:
      "Coffee break",
    icon: <Handshake size={22} />,
  },
  {
    time: "3:50 p.m. – 4:30 p.m.",
    title: "Conferencia 6",
    icon: <GraduationCap size={22} />,
  },
  {
    time: "4:30 p.m. – 4:40 p.m.",
    title: "Espacio de conclusiones generales",
    icon: <GraduationCap size={22} />,
  },
  {
    time: "4:40 p.m. – 5:00 p.m.",
    title: "Acto de clausura oficial",
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

      <div className="grid grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto gap-4 auto-rows-fr">
        {scheduleItems.map((item, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 h-full mt-auto bg-opacity-60 backdrop-blur-md rounded-2xl p-6 shadow-lg flex flex-col md:flex-row items-start md:items-center gap-4 border border-gray-700"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="bg-blue-600 text-white rounded-full p-3 flex items-start justify-center shadow-md">
              {item.icon}
            </div>
            <div className="flex-1">
              <p className="text-blue-400 text-sm font-medium">{item.time}</p>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              {item.description && (
                <p className="text-gray-300 text-sm">{item.description}</p>
              )}
              {item.boton && (
                <div className="flex justify-center md:block">
                  <Button href="https://wa.me/573054240301" variant="secondary" className="mt-5 mb-5 mx-auto">
                    <div className="text-lg">
                      Inscribite ahora
                    </div>
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
