"use client";

import { useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
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
      "Conferencia: Tensiones y desafíos para la implementación de la educación inclusiva e intercultural para la niñez indígena en escuelas urbanas de Medellín",
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
    title: "Clausura oficial",
    description: "Entrega de certificados y cierre del evento.",
    icon: <GraduationCap size={22} />,
  },
];

export default function Programa() {
  useEffect(() => {
    // Si se accede con #agenda, oculta otras secciones
    if (window.location.hash === "#agenda") {
      const allSections = document.querySelectorAll("section");
      const agenda = document.getElementById("agenda");
      allSections.forEach((sec) => {
        if (sec.id !== "agenda") sec.style.display = "none";
      });
      if (agenda) {
        agenda.style.minHeight = "100vh";
        agenda.style.display = "block";
      }
    }
  }, []);

  return (
    <>
      <section id="agenda" className="relative overflow-hidden py-16 sm:py-24">
        {/* 🌄 Fondo con imagen y capa oscura */}
        <div
          className="absolute inset-0 bg-cover bg-center -z-10"
          style={{
            backgroundImage: `url('/fondo-congreso.jpg')`,
            backgroundAttachment: "fixed",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/70 to-slate-800/80 -z-10" />

        {/* Animación decorativa */}
        <div className="absolute top-6 right-6 z-10 opacity-80 pointer-events-none hidden sm:block">
          <DotLottieReact
            src="/hello.lottie"
            loop
            autoplay
            style={{ width: 130, height: 130 }}
          />
        </div>

        {/* Contenido */}
        <div className="relative z-20 px-4 max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-12 text-center text-white drop-shadow-lg"
          >
            Agenda Académica
          </motion.h2>

          <div className="relative timeline-container">
            {scheduleItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.08 * index }}
                className="relative mb-6 sm:mb-8 flex items-start gap-3 sm:gap-4"
              >
                <div className="absolute left-2 sm:left-1/2 sm:-translate-x-1/2 w-3 h-3 bg-white rounded-full z-20 border-4 border-[#305398] mt-2" />
                <div className="flex-shrink-0 z-30 text-white bg-[#305398] p-2 sm:p-3 rounded-full">
                  {item.icon}
                </div>
                <div className="flex-grow ml-2 sm:ml-0 w-full sm:max-w-[calc(50%-2rem)] bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-3 sm:p-4 hover:shadow-xl transition-all duration-300">
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
        </div>
      </section>

      {/* Línea vertical */}
      <style jsx global>{`
        .timeline-container::before {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          width: 3px;
          background-color: rgba(255, 255, 255, 0.3);
          border-radius: 2px;
          left: 50%;
          transform: translateX(-50%);
        }

        @media (max-width: 640px) {
          .timeline-container::before {
            left: 1.3rem;
            width: 2px;
          }
        }
      `}</style>
    </>
  );
}
