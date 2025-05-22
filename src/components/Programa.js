'use client';

import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion } from 'framer-motion';
import { Users, Mic, ClipboardList, Hammer, PanelBottom, DoorClosed } from 'lucide-react';

const items = [
  { time: '08:00', text: 'Registro y entrega de materiales', icon: <ClipboardList size={20} /> },
  { time: '08:30', text: 'Ceremonia de apertura', icon: <DoorClosed size={20} /> },
  { time: '09:00', text: 'Conferencia magistral', icon: <Mic size={20} /> },
  { time: '10:00', text: 'Mesas de ponencias', icon: <Users size={20} /> },
  { time: '14:00', text: 'Talleres prácticos', icon: <Hammer size={20} /> },
  { time: '15:45', text: 'Panel de cierre', icon: <PanelBottom size={20} /> },
  { time: '16:45', text: 'Clausura oficial', icon: <DoorClosed size={20} /> },
];

export default function Programa() {
  return (
    <section className="relative overflow-hidden">
      {/* Imagen de fondo con parallax */}
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover z-0"
        style={{ backgroundImage: `url('/fondo.jpg')` }}
      />

      {/* Capa oscura opcional para mejor contraste */}
      <div className="absolute inset-0 bg-black/30 z-0 backdrop-brightness-75" />

      {/* Lottie decorativo en la esquina superior derecha */}
      <div className="absolute top-4 right-4 z-20 pointer-events-none">
        <DotLottieReact
          src="/hello.lottie"
          loop
          autoplay
          style={{ width: 160, height: 160 }}
        />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 p-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-center text-white drop-shadow-xl">
            Programa Académico
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {items.map(({ time, text, icon }, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="flex flex-col items-center text-center bg-white/80 p-6 rounded-2xl shadow-lg hover:shadow-xl backdrop-blur-md transition"
              >
                <div className="text-[#305398] mb-2">{icon}</div>
                <p className="text-sm text-gray-600">{time}</p>
                <p className="text-lg font-semibold text-gray-800 mt-1">{text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

