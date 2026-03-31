// src/components/FechasInscripcion.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, Monitor, MapPin } from "lucide-react";
import Button from "./Button";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


// Datos de Modalidades unificados (precio y beneficios)
const modalidades = [
  {
    type: "Presencial",
    subtitle: "Lugar por confirmar",
    price: "$262.500",
    currency: "COP",
    color: "#934292", // Color resaltado principal
    icon: MapPin,
    badges: ["Todo incluido", "Cupos limitados"],
    benefits: [
      "Acceso completo",
      "Kit del participante",
      "Coffee breaks",
      "Networking VIP",
      "Certificado Digital",
      "Refrigerio",
      "Memoría del evento"
    ],
    high:true
  },
  {
    type: "Virtual",
    subtitle: "Desde cualquier país",
    price: "$127.000",
    currency: "COP",
    color: "#6b21a8", // Color secundario (morado)
    icon: Monitor,
    badges: ["Acceso completo", "Global"],
    benefits: [
      "Acceso a plataforma HD",
      "Conexión individual",
      "Certificado digital",
      "Memorias del evento"
    ]
  }
];

export default function FechasInscripcion() {
  // 👇 Cambia esto a `true` cuando quieras volver a habilitar el botón
  const inscripcionesAbiertas = true;

  return (
    <section
      className="relative py-20 sm:py-24 px-4"
      style={{
        backgroundImage: 'url("/fondo2.jpg")',
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      id="precios"
    >
      {/* Capa oscura para mejorar contraste del texto */}
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        {/* Título de Sección */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Modalidades e Inversión
          </h2>
        </motion.div>

        {/* Grid de Modalidades */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mb-12">
          {modalidades.map((mod, index) => {
            const Icon = mod.icon;
            return (
              <motion.div
                key={mod.type}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`
                  relative 
                  bg-white 
                  rounded-2xl 
                  shadow-2xl 
                  flex flex-col 
                  overflow-hidden 
                  shadow-[#934292]
                  ${mod.high ? "scale-105" : ""}
                `}
                style={{ borderTop: `8px solid ${mod.color}` }}
              >

                
                {mod.high && (
                  <div>
                    {/* <DotLottieReact
                      src="/hello.lottie"
                      loop
                      autoplay
                      className="absolute top-0 left-3/4 z-50 w-32 h-24"
                    /> */}
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 z-50  
                  overflow-visible">
                    
                    <span className="
                      relative
                      bg-[#934292] 
                      text-white 
                      text-sm md:text-base 
                      font-bold 
                      px-4 py-1.5 
                      rounded-full 
                      shadow-lg 
                      uppercase tracking-wide
                      overflow-visible
                    ">
                      ⭐ Recomendado
                    </span>
                  </div>
                  </div>
                )}

                {/* Cabecera */}
                <div className="p-8 pb-6 text-center border-b border-gray-100">
                  <div 
                    className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 text-white shadow-lg"
                    style={{ backgroundColor: mod.color }}
                  >
                    <Icon className="w-8 h-8" />
                  </div>

                  <h3 className="text-3xl font-bold text-slate-800">
                    {mod.type}
                  </h3>

                  <p className="text-slate-500 font-medium text-lg mt-1">
                    {mod.subtitle}
                  </p>
                </div>

                {/* Precio */}
                <div className="px-8 py-6 bg-slate-50/50 text-center">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <span className="text-4xl font-extrabold text-slate-800">
                      {mod.price}
                    </span>
                    <span className="text-xl font-bold text-slate-500">
                      {mod.currency}
                    </span>
                  </div>

                  <div className="flex justify-center flex-wrap gap-2">
                    {mod.badges.map((badge, idx) => (
                      <span 
                        key={idx} 
                        className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide"
                        style={{ backgroundColor: `${mod.color}15`, color: mod.color }}
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
                

                <Button disabled={false} href="https://portalpagos.davivienda.com/#/comercio/11272/FUNDACIONES%20AVANCEMOS%20SERVICIOS%20INTEGRALES" variant="primary">
                  Inscríbete ahora
                </Button>


                {/* Beneficios */}
                <div className="p-8 pt-6 flex-grow border-t border-gray-100">
                  <ul className="space-y-4">
                    {mod.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle2 
                          className="w-6 h-6 mr-3 shrink-0" 
                          style={{ color: mod.color }} 
                        />
                        <span className="text-slate-700 font-medium text-lg">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Textos de contacto y demás que se mantienen igual (de ahí para abajo) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="w-full max-w-3xl space-y-6"
        >
          <p className="text-center text-slate-200 bg-black/20 py-4 px-6 rounded-lg text-lg">
            <br />
            Más información sobre el congreso, ponencias o talleres, por favor comunicarse al correo:
            <br />
            <a 
              href="mailto:comercial@avancemos.edu.co"
              className="text-cyan-300 hover:text-cyan-200 underline font-semibold transition-colors mt-2 inline-block"
            >
              📧 comercial@avancemos.edu.co 
            </a>
                  .  +57 305 4240301
          </p>
          

          <p className="text-center text-slate-200 bg-black/20 py-3 px-6 rounded-lg text-lg">
            <strong>Contacto:</strong> Luisa Giraldo / Sara Villa Martínez <br className="sm:hidden" />
             – Grupo Educativo Avancemos
          </p>

          {/* BOTÓN DE INSCRIPCIÓN (condicional) */}
          <div className="pt-4 flex justify-center w-full">
            <Button disabled={!inscripcionesAbiertas} href="https://portalpagos.davivienda.com/#/comercio/11272/FUNDACIONES%20AVANCEMOS%20SERVICIOS%20INTEGRALES" variant="primary" className="block w-full max-w-lg mx-auto py-5 relative !mt-4">
              {inscripcionesAbiertas ? "Inscríbete Ahora" : "Inscripciones Cerradas"}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
