'use client';

import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion } from 'framer-motion';
import { Users, Mic, ClipboardList, Hammer, PanelBottom, DoorClosed } from 'lucide-react';

const scheduleItems = [
  { time: '7:30 a.m. – 8:00 a.m.', text: 'Registro de participantes y entrega de materiales', icon: <ClipboardList size={24} /> },
  { time: '8:00 a.m. – 8:30 a.m.', text: 'Acto de apertura institucional', icon: <DoorClosed size={24} textInside='Palabras de bienvenida – Grupo Educativo Avancemos y Universidad de Medellín.
 Presentación artística.' /> },
  { time: '8:30 a.m. – 9:15 a.m.', text: 'Conferencia de apertura Dr. Francisco Conejo Carrasco – España', icon: <Mic size={24} /> },
  { time: '9:15 a.m. – 10:00 a.m.', text: 'Conferencia Dr. Jaime Alfredo Mariano Torres – México', icon: <Users size={24} /> },
  { time: '10:00 a.m. – 10:30 a.m.', text: 'Refrigerio – Pausa activa', icon: <Hammer size={24} /> },
  { time: '10:30 a.m. – 11:15 a.m.', text: 'Conferencia Dra. Melissa González Rubio Villa – Colombia', icon: <PanelBottom size={24} /> },
  { time: '11:15 a.m. – 12:00 p.m.', text: 'Conferencia Dr. Engels Owen Pozo Gutiérrez – Perú', icon: <DoorClosed size={24} /> },
  { time: '12:00 p.m. – 12:45 p.m.', text: 'Conferencia Dr. José Alberto Rúa Vásquez – Colombia', icon: <DoorClosed size={24} /> },
  { time: '12:45 p.m. – 2:00 p.m.', text: 'Receso – Almuerzo libre', icon: <DoorClosed size={24} /> },
  { time: '2:30 p.m. – 3:30 p.m.', text: 'Talleres simultáneos', icon: <DoorClosed size={24} /> },
  { time: '3:30 p.m. – 3:45 p.m.', text: 'Coffee break – Receso corto', icon: <DoorClosed size={24} /> },
  { time: '3:45 p.m. – 4:30 p.m.', text: 'Conferencia de cierre Dra. Conie Sauma Brito – Bolivia', icon: <DoorClosed size={24} /> },
  { time: '4:30 p.m. – 5:00 p.m.', text: 'Clausura oficial y entrega de certificados', icon: <DoorClosed size={24} /> },
];

export default function Programa() {
  return (
    <>
      <section className="relative overflow-hidden py-16 sm:py-24">
        {/* Imagen de fondo con parallax */}
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover z-0"
          style={{ backgroundImage: `url('/fondo.jpg')` }}
        />

        {/* Capa oscura para mejor contraste */}
        <div className="absolute inset-0 bg-slate-900/40 z-0 backdrop-brightness-50" />

        {/* Lottie decorativo */}
        <div className="absolute top-4 right-4 z-20 pointer-events-none opacity-80">
          <DotLottieReact
            src="/hello.lottie"
            loop
            autoplay
            style={{ width: 160, height: 160 }}
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

          {/* Contenedor de la línea de tiempo */}
          <div className="relative timeline-container">
            {scheduleItems.map((item, index) => {
              const isOdd = index % 2 !== 0;
              
              const cardVariants = {
                hidden: { opacity: 0, x: isOdd ? 50 : -50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.1 * index } }
              };

              return (
                <div key={index} className="relative mb-8">
                  {/* El punto en la línea de tiempo */}
                  <div className="absolute w-5 h-5 bg-white rounded-full left-1/2 -translate-x-1/2 mt-1.5 z-20 border-4 border-[#305398]" />

                  {/* La tarjeta de contenido */}
                  <motion.div
                    className={`w-[calc(50%-2rem)] p-4 rounded-xl shadow-xl backdrop-blur-lg transition-all duration-300 hover:shadow-2xl hover:scale-105
                      ${isOdd ? 'ml-auto' : ''}
                      ${isOdd ? 'bg-white/70' : 'bg-white/70'}
                    `}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    <div className={`flex items-center gap-4 ${isOdd ? 'flex-row' : 'flex-row-reverse'}`}>
                      <div className={`flex-grow ${isOdd ? 'text-left' : 'text-right'}`}>
                        <p className="text-sm font-medium text-[#305398]">{item.time}</p>
                        <p className="text-lg font-semibold text-gray-800 mt-1">{item.text}</p>
                      </div>
                      <div className="flex-shrink-0 text-white bg-[#305398] p-3 rounded-full">
                        {item.icon}
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Estilos para la línea vertical (mejor ponerlo en un archivo CSS global, pero funciona aquí) */}
      <style jsx global>{`
        .timeline-container::before {
          content: '';
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          top: 0;
          bottom: 0;
          width: 3px;
          background-color: rgba(255, 255, 255, 0.25);
          border-radius: 2px;
        }
      `}</style>
    </>
  );
}
