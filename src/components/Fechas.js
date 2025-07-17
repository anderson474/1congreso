// src/components/FechasInscripcion.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarDays, Ticket, Star } from "lucide-react";

// Datos para las fechas y precios para mantener el JSX limpio
const keyDates = [
  { label: "Lanzamiento de convocatoria", date: "15 julio 2025" },
  { label: "Recepción de propuestas", date: "hasta 15 agosto 2025" },
  { label: "Fecha límite de inscripción como asistentes", date: "01 octubre 2025" },
  { label: "Congreso", date: "24 octubre 2025" },
  { label: "Publicación de memorias", date: "Febrero 2026" },
];

const pricingTiers = [
  {
    type: "Público general",
    price: "$120.000",
    currency: "COP",
    highlighted: true, // Para destacar esta tarjeta
    modalidad: "Modalidad: Presencial Universidad de Medellin"
  },
  {
    type: "Aliados",
    price: "$84.000",
    currency: "COP",
    text:'Clientes y docentes del Grupo Educativo Avancemos',
    modalidad: "Modalidad: Presencial Universidad de Medellin"
  },
  {
    type: "Virtual",
    price: "60.000",
    currency: "COP",
    text:'Los participantes virtuales tendrán acceso a una plataforma, con conexión individual y acceso exclusivo. Recibirán certificación y las memorias.'
  }
];

export default function FechasInscripcion() {
  return (
    <section
      className="relative py-20 sm:py-24 px-4"
      style={{
        backgroundImage: 'url("/fondo2.jpg")', // Asegúrate que la ruta sea correcta
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
      id="precios"
    >
      {/* Capa oscura para mejorar contraste del texto */}
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Columna Izquierda: Fechas Clave */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-white shadow-2xl border border-white/20"
        >
          <h2 className="flex items-center text-3xl font-bold mb-6">
            <CalendarDays className="mr-3 h-8 w-8 text-cyan-300" />
            Fechas Clave
          </h2>
          <h2 className="flex items-center text-3xl font-bold mb-6">
            ¡Cupos Limitados!
          </h2>
          <ul className="relative border-l-2 border-cyan-400/50 pl-8 space-y-6">
            {keyDates.map((item, index) => (
              <li key={index} className="relative">
                <div className="absolute -left-[34px] top-1 h-4 w-4 rounded-full bg-cyan-300 ring-8 ring-slate-800/50"></div>
                <strong className="block text-lg">{item.label}</strong>
                <span className="text-slate-300">{item.date}</span>
              </li>
            ))}
          </ul>
        </motion.div>
        
        {/* Columna Derecha: Inscripción y Beneficios */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="flex items-center text-3xl font-bold mb-2 text-white">
            <Ticket className="mr-3 h-8 w-8 text-cyan-300" />
            Inscripción y Beneficios
          </h2>
          
          {/* Tarjetas de Precios */}
          <div className="space-y-4">
            {pricingTiers.map((tier) => (
              <div 
                key={tier.type}
                className={`rounded-xl p-6 transition-all duration-300 shadow-lg border
                  ${tier.highlighted 
                    ? 'bg-white text-slate-800 border-cyan-400 transform lg:scale-105' 
                    : 'bg-white/10 text-white border-white/20 hover:bg-white/20'
                  }`}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-semibold">{tier.type}</h3>
                    {tier.text &&
                    <p>{tier.text}</p>
                    }
                    {tier.modalidad &&
                      <p className="text-lg text-cyan-600 ">{tier.modalidad}</p>
                    }
                    {tier.highlighted && <p className="text-sm text-cyan-600 font-medium flex items-center gap-1"><Star className="h-4 w-4" /> Opción popular</p>}
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold">{tier.price}</p>
                    {tier.currency && <p className={`text-sm ${tier.highlighted ? 'text-slate-500' : 'text-slate-300'}`}>{tier.currency}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-center text-slate-200 bg-black/20 py-3 px-4 rounded-lg">
            Todas las inscripciones incluyen: certificado, materiales, acceso total y refrigerios.
          </p>
          
          {/* BOTÓN DE INSCRIPCIÓN DESTACADO */}
          <Link
            href="/formulario"
            className="block w-full text-center bg-[#96b422] text-white text-xl px-10 py-4 rounded-lg font-bold shadow-xl
                       transform transition-all duration-300 ease-in-out 
                       hover:bg-[#a8c928] hover:scale-105 hover:shadow-2xl 
                       focus:outline-none focus:ring-4 focus:ring-[#c8e658]/50"
          >
            Inscríbete Ahora
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
