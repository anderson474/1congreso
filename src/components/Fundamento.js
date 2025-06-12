"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaChalkboardTeacher, FaUsers, FaLightbulb } from "react-icons/fa";

export default function Fundamento() {
  return (
    <section className="relative bg-[#f9fafb] py-20 px-4 md:px-10 w-full overflow-hidden">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-stretch">
        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="p-8 w-full bg-white rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-[#305398] text-center">
              Fundamentación Teórica
            </h2>

            {/* Iconos animados */}
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center mb-8">
              <div className="flex items-center gap-3 text-[#96b422] text-sm">
                <FaChalkboardTeacher />
                <p className="font-medium text-2xl">Innovación</p>
              </div>

              <div className="flex items-center gap-3 text-[#305398] text-sm">
                <FaUsers />
                <p  className="font-medium text-2xl">Diversidad</p>
              </div>

              <div className="flex items-center gap-3 text-[#f7a600] text-sm">
                <FaLightbulb />
                <p className="font-medium text-2xl">Creatividad</p>
              </div>
            </div>

            {/* Texto explicativo */}
            <div className="text-gray-700 space-y-4 text-sm leading-relaxed">
              <p>
                La transformación de los sistemas educativos actuales requiere respuestas ágiles e inclusivas ante los cambios sociales, tecnológicos y pedagógicos. La{" "}
                <span className="font-semibold text-[#305398]">innovación educativa</span> se presenta como un eje clave para las reformas curriculares, la integración tecnológica y el compromiso con una educación equitativa.
              </p>
              <blockquote className="border-l-4 border-[#96b422] pl-4 italic text-[#305398]">
                “Esta innovación debe entenderse como un proceso estratégico y colectivo, más allá del uso de tecnología.” <br /> — Gómez (2023)
              </blockquote>
              <p>
                Espinosa y Cartagena (2021) sostienen que las <span className="font-medium text-[#305398]">tecnologías avanzadas</span> deben ser integradas con una planificación pedagógica sólida, evitando enfoques tecnocentristas.
              </p>
              <p>
                La <span className="font-semibold text-[#305398]">inclusión educativa</span> también es clave: según Kerexeta-Brazal et al. (2022), la{" "}
                <span className="underline">competencia digital docente</span> es vital para atender la diversidad del alumnado y promover la equidad.
              </p>
              <p>
                Este congreso se plantea como un espacio para <span className="text-[#305398] font-medium">dialogar, innovar y co-crear</span> propuestas que impulsen una educación más justa, inclusiva y sostenible.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Ilustración */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-xl overflow-hidden"
        >
          <Image
            src="/niñosEstudiando.jpg"
            alt="Educación Inclusiva"
            width={1280}
            height={853}
            quality={100}
            className="object-contain w-full h-auto rounded-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
