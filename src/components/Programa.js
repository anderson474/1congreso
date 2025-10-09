"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Users,
  Mic,
  ClipboardList,
  Coffee,
  Utensils,
  DoorOpen,
  GraduationCap,
  Handshake,
} from "lucide-react";
import { QRCodeCanvas } from "qrcode.react";

const scheduleItems = [
  {
    time: "7:30 a.m. – 8:00 a.m.",
    title: "Registro de participantes",
    description: "Entrega de materiales y acreditaciones.",
    icon: <ClipboardList size={22} />,
  },
  {
    time: "8:00 a.m. – 8:15 a.m.",
    title: "Acto de apertura institucional",
    description:
      "Palabras de bienvenida – Grupo Educativo Avancemos y Universidad de Medellín. Presentación artística.",
    icon: <DoorOpen size={22} />,
  },
  {
    time: "8:15 a.m. – 8:55 a.m.",
    title:
      "Conferencia de apertura: El papel de la autorregulación del aprendizaje en la innovación educativa.",
    description: "Dr. Francisco Conejo Carrasco – España",
    icon: <Mic size={22} />,
  },
  {
    time: "8:55 a.m. – 9:35 a.m.",
    title:
      "Conferencia: Robótica educativa: iniciación a la programación con Arduino en el aula",
    description: "Mg. Juan Guillermo Serna González – Colombia",
    icon: <Mic size={22} />,
  },
  {
    time: "9:35 a.m. – 10:15 a.m.",
    title:
      "Conferencia: Tensiones y desafíos para la educación inclusiva e intercultural",
    description: "Dra. Melissa González Rubio Villa – Colombia",
    icon: <Mic size={22} />,
  },
  {
    time: "10:15 a.m. – 10:45 a.m.",
    title: "Refrigerio – Pausa activa",
    description: "",
    icon: <Coffee size={22} />,
  },
  {
    time: "10:45 a.m. – 11:25 a.m.",
    title:
      "Conferencia: Transformando las enseñanzas con IA. Experiencias didácticas en gamificación y metodologías activas.",
    description: "Dr. Engels Owen Pozo Gutiérrez – Perú",
    icon: <Mic size={22} />,
  },
  {
    time: "11:25 a.m. – 12:05 p.m.",
    title:
      "Conferencia: La inclusión educativa: más allá de las adaptaciones y los ajustes razonables",
    description: "Dra. Carolina Cárdenas Roa – Colombia",
    icon: <Mic size={22} />,
  },
  {
    time: "12:05 p.m. – 1:30 p.m.",
    title: "Receso – Almuerzo libre",
    description: "",
    icon: <Utensils size={22} />,
  },
  {
    time: "1:30 p.m. – 2:10 p.m.",
    title:
      "Conferencia: Retos en la educación superior e inclusión, diversidad, calidad y flexibilidad",
    description: "Dr. José Alberto Rúa Vásquez – Colombia",
    icon: <Mic size={22} />,
  },
  {
    time: "2:10 p.m. – 2:50 p.m.",
    title:
      "Conferencia: Desarrollo de competencias en estudiantes neurodivergentes. La ruta hacia la inclusión",
    description: "Dr. Jaime Alfredo Mariano Torres – México",
    icon: <Mic size={22} />,
  },
  {
    time: "2:50 p.m. – 3:05 p.m.",
    title: "Coffee break – Receso corto",
    description: "",
    icon: <Coffee size={22} />,
  },
  {
    time: "3:05 p.m. – 3:45 p.m.",
    title:
      "Conferencia: El poder de la diversidad en el aula desde las habilidades blandas como ventaja competitiva del docente frente a las inteligencias artificiales.",
    description: "Dra. Conie Sauma Brito – Bolivia",
    icon: <Mic size={22} />,
  },
  {
    time: "3:45 p.m. – 4:30 p.m.",
    title:
      "Panel de expertos: Neuroeducación en el aula, una estrategia de integración",
    description:
      "Mg. Mónica Maritza Orozco Holguín y Dra. (C) María Eugenia Patiño Atehortúa",
    icon: <Handshake size={22} />,
  },
  {
    time: "4:30 p.m. – 5:00 p.m.",
    title: "Clausura oficial y entrega de certificados",
    description: "",
    icon: <GraduationCap size={22} />,
  },
];

export default function Programa() {
  useEffect(() => {
    if (window.location.hash === "#agenda") {
      const hideSections = () => {
        const allSections = document.querySelectorAll("section");
        const agenda = document.getElementById("agenda");
        if (!agenda) return;
        allSections.forEach((sec) => {
          if (sec.id !== "agenda") sec.style.display = "none";
        });
        agenda.style.minHeight = "100vh";
        agenda.scrollIntoView({ behavior: "instant" });
      };
      setTimeout(hideSections, 300);
    }
  }, []);

  return (
    <>
      <section
        id="agenda"
        className="relative overflow-hidden py-16 sm:py-24 bg-black"
      >
        {/* Fondo negro sólido */}
        <div className="absolute inset-0 bg-black -z-10" />

        {/* Contenido */}
        <div className="relative z-20 px-4 max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-12 text-center text-white tracking-tight"
          >
            Agenda
          </motion.h2>

          <div className="relative timeline-container">
            {scheduleItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 * i }}
                className="relative mb-6 sm:mb-8 flex items-start gap-3 sm:gap-4"
              >
                <div className="flex-shrink-0 z-30 text-white bg-[#305398] p-2 sm:p-3 rounded-full">
                  {item.icon}
                </div>
                <div className="flex-grow bg-white/90 backdrop-blur-md rounded-xl shadow-lg p-3 sm:p-4 hover:shadow-xl transition-all duration-300">
                  <p className="text-xs sm:text-sm font-medium text-[#305398]">
                    {item.time}
                  </p>
                  <p className="text-sm sm:text-base font-semibold text-gray-900 mt-1 leading-normal">
                    {item.title}
                  </p>
                  {item.description && (
                    <p className="text-xs sm:text-sm text-gray-700 mt-2">
                      {item.description}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* QR */}
          <div className="flex flex-col items-center justify-center mt-16">
            <h3 className="text-white text-lg font-semibold mb-3 text-center">
              Escanea para abrir la agenda directamente
            </h3>
            <div className="bg-white p-4 rounded-2xl shadow-2xl">
              <QRCodeCanvas
                value="https://congreso.avancemos.edu.co/#agenda"
                size={180}
                bgColor="#ffffff"
                fgColor="#000000"
                level="H"
                includeMargin
              />
            </div>
            <p className="text-slate-300 text-sm mt-3 text-center break-all">
              https://congreso.avancemos.edu.co/#agenda
            </p>
          </div>
        </div>
      </section>

      <style jsx global>{`
        .timeline-container::before {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          width: 2px;
          background-color: rgba(255, 255, 255, 0.25);
          left: 1.8rem;
        }
        @media (min-width: 640px) {
          .timeline-container::before {
            left: 50%;
            transform: translateX(-50%);
            width: 3px;
          }
        }
      `}</style>
    </>
  );
}
