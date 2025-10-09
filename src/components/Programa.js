"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion } from "framer-motion";
import {
  Users,
  Mic,
  ClipboardList,
  Hammer,
  PanelBottom,
  DoorClosed,
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
    icon: <DoorClosed size={22} />,
  },
  {
    time: "8:15 a.m. – 8:55 a.m.",
    title: "Conferencia de apertura",
    description: "Dr. Francisco Conejo Carrasco – España",
    icon: <Mic size={22} />,
  },
  {
    time: "8:55 a.m. – 9:35 a.m.",
    title: "Conferencia",
    description: "Mg. Juan Guillermo Serna González – Colombia",
    icon: <Users size={22} />,
  },
  {
    time: "9:35 a.m. – 10:15 a.m.",
    title: "Conferencia",
    description: "Dra. Melissa González Rubio Villa – Colombia",
    icon: <PanelBottom size={22} />,
  },
  {
    time: "10:15 a.m. – 10:45 a.m.",
    title: "Refrigerio – Pausa activa",
    description: "",
    icon: <Hammer size={22} />,
  },
  {
    time: "10:45 a.m. – 11:25 a.m.",
    title: "Conferencia",
    description: "Dr. Engels Owen Pozo Gutiérrez – Perú",
    icon: <DoorClosed size={22} />,
  },
  {
    time: "11:25 a.m. – 12:05 p.m.",
    title: "Conferencia",
    description: "Dra. Carolina Cárdenas Roa – Colombia",
    icon: <Users size={22} />,
  },
  {
    time: "12:05 p.m. – 1:30 p.m.",
    title: "Receso – Almuerzo libre",
    description: "",
    icon: <DoorClosed size={22} />,
  },
  {
    time: "1:30 p.m. – 2:10 p.m.",
    title: "Conferencia",
    description: "Dr. José Alberto Rúa Vásquez – Colombia",
    icon: <DoorClosed size={22} />,
  },
  {
    time: "2:10 p.m. – 2:50 p.m.",
    title: "Conferencia",
    description: "Dr. Jaime Alfredo Mariano Torres – México",
    icon: <Users size={22} />,
  },
  {
    time: "2:50 p.m. – 3:05 p.m.",
    title: "Coffee break – Receso corto",
    description: "",
    icon: <DoorClosed size={22} />,
  },
  {
    time: "3:05 p.m. – 3:45 p.m.",
    title: "Conferencia",
    description: "Dra. Conie Sauma Brito – Bolivia",
    icon: <DoorClosed size={22} />,
  },
  {
    time: "3:45 p.m. – 4:30 p.m.",
    title: "Panel de expertos",
    description:
      "Mg. Mónica Maritza Orozco Holguín y Dra. (C) María Eugenia Patiño Atehortúa",
    icon: <DoorClosed size={22} />,
  },
  {
    time: "4:30 p.m. – 5:00 p.m.",
    title: "Clausura oficial",
    description: "Entrega de certificados.",
    icon: <DoorClosed size={22} />,
  },
];

export default function Programa() {
  return (
    <>
      <section className="relative overflow-hidden py-16 sm:py-24">
        {/* Imagen de fondo */}
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover z-0"
          style={{ backgroundImage: `url('/fondo.jpg')` }}
        />

        {/* Capa oscura */}
        <div className="absolute inset-0 bg-slate-900/50 z-0 backdrop-brightness-50" />

        {/* Lottie decorativo */}
        <div className="absolute top-4 right-4 z-20 pointer-events-none opacity-80">
          <DotLottieReact
            src="/hello.lottie"
            loop
            autoplay
            style={{ width: 130, height: 130 }}
          />
        </div>

        {/* Contenido principal */}
        <div className="relative z-10 px-4 max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-12 text-center text-white drop-shadow-lg"
          >
            Agenda
          </motion.h2>

          {/* Timeline */}
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
                {/* Punto en la línea */}
                <div className="absolute left-2 sm:left-1/2 sm:-translate-x-1/2 w-3 h-3 bg-white rounded-full z-20 border-4 border-[#305398] mt-2" />

                {/* Ícono */}
                <div className="flex-shrink-0 z-30 text-white bg-[#305398] p-2 sm:p-3 rounded-full relative ml-[0.3rem] sm:ml-0">
                  {item.icon}
                </div>

                {/* Tarjeta */}
                <div className="flex-grow ml-2 sm:ml-0 w-full sm:w-[calc(50%-2rem)] bg-white/80 backdrop-blur-md rounded-xl shadow-md p-3 sm:p-4 hover:shadow-lg transition-all duration-300">
                  <p className="text-xs sm:text-sm font-medium text-[#305398]">
                    {item.time}
                  </p>
                  <p className="text-sm sm:text-base font-semibold text-gray-800 leading-tight mt-1">
                    {item.title}
                  </p>
                  {item.description && (
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">
                      {item.description}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Estilos de la línea */}
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
            background-color: rgba(255, 255, 255, 0.5);
          }
        }
      `}</style>
    </>
  );
}
