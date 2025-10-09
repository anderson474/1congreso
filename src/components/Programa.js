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
  Hammer,
  DoorClosed,
  PanelBottom,
  Handshake,
} from "lucide-react";
import { QRCodeCanvas } from "qrcode.react";

// 🕒 Agenda basada en el código madre original
const scheduleItems = [
  {
    time: "7:30 a.m. – 8:00 a.m.",
    title: "Registro de participantes y entrega de materiales",
    description: "",
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
    title: "Conferencia: Mg. Juan Guillermo Serna González – Colombia",
    description: "",
    icon: <Users size={22} />,
  },
  {
    time: "9:35 a.m. – 10:15 a.m.",
    title: "Conferencia: Dra. Melissa González Rubio Villa – Colombia",
    description: "",
    icon: <PanelBottom size={22} />,
  },
  {
    time: "10:15 a.m. – 10:45 a.m.",
    title: "Refrigerio – Pausa activa",
    description: "",
    icon: <Coffee size={22} />,
  },
  {
    time: "10:45 a.m. – 11:25 a.m.",
    title: "Conferencia: Dr. Engels Owen Pozo Gutiérrez – Perú",
    description: "",
    icon: <Mic size={22} />,
  },
  {
    time: "11:25 a.m. – 12:05 p.m.",
    title: "Conferencia: Dra. Carolina Cárdenas Roa – Colombia",
    description: "",
    icon: <Users size={22} />,
  },
  {
    time: "12:05 p.m. – 1:30 p.m.",
    title: "Receso – Almuerzo libre",
    description: "",
    icon: <Utensils size={22} />,
  },
  {
    time: "1:30 p.m. – 2:10 p.m.",
    title: "Conferencia: Dr. José Alberto Rúa Vásquez – Colombia",
    description: "",
    icon: <Mic size={22} />,
  },
  {
    time: "2:10 p.m. – 2:50 p.m.",
    title: "Conferencia: Dr. Jaime Alfredo Mariano Torres – México",
    description: "",
    icon: <Users size={22} />,
  },
  {
    time: "2:50 p.m. – 3:05 p.m.",
    title: "Coffee break – Receso corto",
    description: "",
    icon: <Coffee size={22} />,
  },
  {
    time: "3:05 p.m. – 3:45 p.m.",
    title: "Conferencia: Dra. Conie Sauma Brito – Bolivia",
    description:
      "El poder de la diversidad en el aula desde las habilidades blandas como ventaja competitiva del docente frente a las inteligencias artificiales.",
    icon: <Mic size={22} />,
  },
  {
    time: "3:45 p.m. – 4:30 p.m.",
    title: "Panel de expertos",
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
    // ✅ Muestra solo la agenda si se accede con #agenda
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
      <section id="agenda" className="relative overflow-hidden py-16 sm:py-24">
        {/* 🌄 Fondo */}
        <div
          className="absolute inset-0 bg-cover bg-center -z-10"
          style={{ backgroundImage: "url('/fondo.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-800/90 -z-10" />

        {/* ✨ Lottie decorativo */}
        <div className="absolute top-6 right-6 z-10 opacity-80 pointer-events-none hidden sm:block">
          <DotLottieReact
            src="/hello.lottie"
            loop
            autoplay
            style={{ width: 120, height: 120 }}
          />
        </div>

        {/* 🕓 Contenido */}
        <div className="relative z-20 px-4 max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-12 text-center text-white drop-shadow-lg"
          >
            Agenda Académica
          </motion.h2>

          {/* Timeline */}
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

          {/* 🔗 QR */}
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

      {/* 🧭 Línea central */}
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
