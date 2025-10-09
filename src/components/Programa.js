"use client";

import { useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
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

/**
 * Lista completa de actividades (aseguré que estén todas)
 */
const scheduleItems = [
  { time: "7:30 a.m. – 8:00 a.m.", title: "Registro de participantes", description: "Entrega de materiales y acreditaciones.", icon: <ClipboardList size={22} /> },
  { time: "8:00 a.m. – 8:15 a.m.", title: "Acto de apertura institucional", description: "Palabras de bienvenida – Grupo Educativo Avancemos y Universidad de Medellín. Presentación artística.", icon: <DoorOpen size={22} /> },
  {
    time: "8:15 a.m. – 8:55 a.m.",
    title: "Conferencia de apertura: El papel de la autorregulación del aprendizaje en la innovación educativa.",
    description: "Dr. Francisco Conejo Carrasco – España",
    icon: <Mic size={22} />,
  },
  {
    time: "8:55 a.m. – 9:35 a.m.",
    title: "Conferencia: Robótica educativa: iniciación a la programación con Arduino en el aula.",
    description: "Mg. Juan Guillermo Serna González – Colombia",
    icon: <Mic size={22} />,
  },
  {
    time: "9:35 a.m. – 10:15 a.m.",
    title: "Conferencia: Tensiones y desafíos para la implementación de la educación inclusiva e intercultural para la niñez indígena en escuelas urbanas de Medellín.",
    description: "Dra. Melissa González Rubio Villa – Colombia",
    icon: <Mic size={22} />,
  },
  { time: "10:15 a.m. – 10:45 a.m.", title: "Refrigerio – Pausa activa", description: "", icon: <Coffee size={22} /> },
  {
    time: "10:45 a.m. – 11:25 a.m.",
    title: "Conferencia: Transformando las enseñanzas con IA. Experiencias didácticas en gamificación y metodologías activas.",
    description: "Dr. Engels Owen Pozo Gutiérrez – Perú",
    icon: <Mic size={22} />,
  },
  {
    time: "11:25 a.m. – 12:05 p.m.",
    title: "Conferencia: La inclusión educativa: más allá de las adaptaciones y los ajustes razonables.",
    description: "Dra. Carolina Cárdenas Roa – Colombia",
    icon: <Mic size={22} />,
  },
  { time: "12:05 p.m. – 1:30 p.m.", title: "Receso – Almuerzo libre", description: "", icon: <Utensils size={22} /> },
  {
    time: "1:30 p.m. – 2:10 p.m.",
    title: "Conferencia: Retos en la educación superior e inclusión, diversidad, calidad y flexibilidad.",
    description: "Dr. José Alberto Rúa Vásquez – Colombia",
    icon: <Mic size={22} />,
  },
  {
    time: "2:10 p.m. – 2:50 p.m.",
    title: "Conferencia: Desarrollo de competencias en estudiantes neurodivergentes. La ruta hacia la inclusión.",
    description: "Dr. Jaime Alfredo Mariano Torres – México",
    icon: <Mic size={22} />,
  },
  { time: "2:50 p.m. – 3:05 p.m.", title: "Coffee break – Receso corto", description: "", icon: <Coffee size={22} /> },
  {
    time: "3:05 p.m. – 3:45 p.m.",
    title: "Conferencia: El poder de la diversidad en el aula desde las habilidades blandas como ventaja competitiva del docente frente a las inteligencias artificiales.",
    description: "Dra. Conie Sauma Brito – Bolivia",
    icon: <Mic size={22} />,
  },
  {
    time: "3:45 p.m. – 4:30 p.m.",
    title: "Panel de expertos: Neuroeducación en el aula, una estrategia de integración.",
    description: "Mg. Mónica Maritza Orozco Holguín y Dra. (C) María Eugenia Patiño Atehortúa",
    icon: <Handshake size={22} />,
  },
  { time: "4:30 p.m. – 5:00 p.m.", title: "Clausura oficial", description: "Entrega de certificados y cierre del evento.", icon: <GraduationCap size={22} /> },
];

export default function Programa() {
  /**
   * Cuando la página se abre con #agenda:
   * - Creamos un OVERLAY full-screen que contiene una CLONACIÓN del elemento #agenda
   * - Esto asegura que SOLO se vea la agenda (sin tener que manipular/ocultar el header/nav que podrían estar fuera de <section>)
   * - Añadimos un botón para "Ver sitio completo" que limpia el hash y quita el overlay
   */
  useEffect(() => {
    let overlayEl = null;

    const showAgendaOverlay = () => {
      // si ya existe overlay, no volver a crear
      if (document.getElementById("agenda-overlay")) return;

      if (window.location.hash === "#agenda") {
        const source = document.getElementById("agenda");
        if (!source) return;

        // crear overlay
        overlayEl = document.createElement("div");
        overlayEl.id = "agenda-overlay";
        // estilos inline para asegurar que se muestre correctamente en cualquier layout
        overlayEl.style.cssText = `
          position: fixed;
          inset: 0;
          z-index: 99999;
          overflow: auto;
          -webkit-overflow-scrolling: touch;
          background: linear-gradient(180deg, rgba(11,18,32,0.98), rgba(11,18,32,0.99));
          padding: 20px;
          display: flex;
          justify-content: center;
          box-sizing: border-box;
        `;

        // contenedor interno para ancho y centrado
        const wrapper = document.createElement("div");
        wrapper.style.cssText = "width:100%;max-width:900px;box-sizing:border-box;";

        // barra superior con mensaje y botón
        const topBar = document.createElement("div");
        topBar.style.cssText = "display:flex;gap:12px;align-items:center;justify-content:space-between;margin-bottom:14px;";

        const msg = document.createElement("div");
        msg.style.cssText = "color:#fff;font-weight:600;font-size:15px;";
        msg.innerHTML = "🗓️ <strong>Modo Agenda</strong> — mostrando solo el programa del evento.";

        const btn = document.createElement("button");
        btn.textContent = "Ver sitio completo";
        btn.style.cssText = "background:#fff;color:#305398;padding:8px 12px;border-radius:8px;border:none;font-weight:700;cursor:pointer;";
        btn.onclick = () => {
          // quitar overlay y limpiar hash sin recargar
          overlayEl.remove();
          document.documentElement.style.overflow = "";
          // limpiar hash de la url
          const path = window.location.pathname + window.location.search;
          window.history.replaceState({}, "", path);
        };

        topBar.appendChild(msg);
        topBar.appendChild(btn);

        // clonar contenido del elemento agenda (clon estático)
        const clone = source.cloneNode(true);
        // evitar IDs duplicados conflictivos
        clone.id = "agenda-clone";

        // opcional: ajustar estilos del clon (más contraste para móvil)
        clone.style.boxSizing = "border-box";

        wrapper.appendChild(topBar);
        wrapper.appendChild(clone);
        overlayEl.appendChild(wrapper);
        document.body.appendChild(overlayEl);

        // prevenir scroll del fondo
        document.documentElement.style.overflow = "hidden";
        // desplazar overlay al inicio
        overlayEl.scrollTop = 0;
      }
    };

    // Ejecuta en carga y al cambiar hash
    showAgendaOverlay();
    window.addEventListener("hashchange", showAgendaOverlay);

    // Cleanup
    return () => {
      window.removeEventListener("hashchange", showAgendaOverlay);
      const existing = document.getElementById("agenda-overlay");
      if (existing) existing.remove();
      document.documentElement.style.overflow = "";
    };
  }, []);

  return (
    <>
      {/* SECCIÓN AGENDA (fuente del clon) */}
      <section id="agenda" className="relative overflow-hidden py-16 sm:py-24">
        {/* Fondo */}
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover z-0"
          style={{ backgroundImage: `url('/fondo.jpg')` }}
        />
        <div className="absolute inset-0 bg-slate-900/60 z-0 backdrop-blur-sm" />

        {/* Decoración */}
        <div className="absolute top-4 right-4 z-20 pointer-events-none opacity-80 hidden sm:block">
          <DotLottieReact src="/hello.lottie" loop autoplay style={{ width: 130, height: 130 }} />
        </div>

        {/* Contenido */}
        <div className="relative z-10 px-4 max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 text-center text-white drop-shadow-lg"
          >
            Agenda
          </motion.h2>

          <div className="relative timeline-container">
            {scheduleItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.05 * idx }}
                className="relative mb-5 sm:mb-8 flex items-start gap-3 sm:gap-4"
              >
                <div className="absolute left-2 sm:left-1/2 sm:-translate-x-1/2 w-3 h-3 bg-white rounded-full z-20 border-4 border-[#305398] mt-2" />
                <div className="flex-shrink-0 z-30 text-white bg-[#305398] p-2 sm:p-3 rounded-full relative ml-[0.3rem] sm:ml-0">
                  {item.icon}
                </div>

                <div className="flex-grow ml-2 sm:ml-0 w-full sm:max-w-[calc(50%-2rem)] bg-white/95 backdrop-blur-md rounded-xl shadow-md p-3 sm:p-4 hover:shadow-lg transition-all duration-300">
                  <p className="text-xs sm:text-sm font-medium text-[#305398]">{item.time}</p>
                  <p className="text-[15px] sm:text-base font-semibold text-gray-900 leading-normal mt-1 whitespace-pre-wrap break-words">
                    {item.title}
                  </p>
                  {item.description && (
                    <p className="text-xs sm:text-sm text-gray-700 mt-2 whitespace-pre-wrap break-words">{item.description}</p>
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
