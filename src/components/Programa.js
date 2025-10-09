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
    const showAgendaOnly = () => {
      if (window.location.hash === "#agenda") {
        // Esperar un poco para que el DOM esté listo
        setTimeout(() => {
          const allSections = document.querySelectorAll("section");
          const agenda = document.getElementById("agenda");

          if (agenda) {
            allSections.forEach((sec) => {
              if (sec.id !== "agenda") sec.style.display = "none";
            });

            agenda.style.minHeight = "100vh";
            agenda.scrollIntoView({ behavior: "instant" });
          } else {
            // Si aún no se encuentra, recargar la vista una vez
            window.location.reload();
          }
        }, 300);
      }
    };

    showAgendaOnly();
  }, []);

  return (
    <>
      <section id="agenda" className="relative overflow-hidden py-16 sm:py-24">
        {/* Fondo */}
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover -z-10"
          style={{ backgroundImage: `url('/fondo.jpg')` }}
        />
        <div className="absolute inset-0 bg-slate-900/60 -z-10" />

        {/* Decoración animada */}
        <div className="absolute top-4 right-4 z-10 opacity-80 pointer-events-none">
          <DotLottieReact
            src="/hello.lottie"
            loop
            autoplay
            style={{ width: 120, height: 120 }}
          />
        </div>

        {/* Contenido principal */}
        <div className="relative z-20 px-4 max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-12 text-center text-white drop-shadow-lg"
          >
            Agenda
          </motion.h2>

          <div className="relative timeline-container">
            {scheduleItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="relative mb-6 sm:mb-8 flex items-start gap-3 sm:gap-4"
              >
                <div className="absolute left-2 sm:left-1/2 sm:-translate-x-1/2 w-3 h-3 bg-white rounded-full z-20 border-4 border-[#305398] mt-2" />
                <div className="flex-shrink-0 z-30 text-white bg-[#305398] p-2 sm:p-3 rounded-full">
                  {item.icon}
                </div>
                <div className="flex-grow ml-2 sm:ml-0 w-full sm:max-w-[calc(50%-2rem)] bg-white/95 backdrop-blur-md rounded-xl shadow-md p-3 sm:p-4 hover:shadow-lg transition-all duration-300">
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

          {/* QR opcional */}
          <div className="flex flex-col items-center justify-center mt-16">
            <h3 className="text-white text-lg font-semibold mb-3 text-center">
              Escanea para abrir directamente esta agenda
            </h3>
            <div className="bg-white p-4 rounded-2xl shadow-2xl">
              <QRCodeCanvas
                value="https://congreso.avancemos.edu.co/#agenda"
                size={180}
                bgColor="#ffffff"
                fgColor="#305398"
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
          width: 3px;
          background-color: rgba(255, 255, 255, 0.4);
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
