"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// --- DATOS DE LOS LÍDERES ---
const leadersData = [
  {
    name: 'Dr. Walter Aldana Romero',
    role: 'CEO Grupo Educativo Avancemos',
    imageSrc: '/lideres/walter.png', // IMPORTANTE: Cambia a la ruta real de la imagen
    bio: 'Liderando la visión estratégica y la innovación educativa para transformar el futuro del aprendizaje.',
  },
  {
    name: 'Dr. Andrés Felipe Gallego Hurtado',
    role: 'Líder de Investigación',
    imageSrc: '/lideres/andres.png', // IMPORTANTE: Cambia a la ruta real de la imagen
    bio: 'Impulsando la investigación y el desarrollo de prácticas pedagógicas inclusivas, que marcan la diferencia.',
  },
];


// --- DATOS DE LOS CONFERENCISTAS (tu array original) ---
const speakersData = [
  {
  nombre: "Dra. Conie Sauma Brito",
  tema: "El poder de la diversidad en el aula, desde las habilidades blandas como ventaja competitiva del docente frente a las inteligencias artificiales.",
  taller: "Neurodiversidad para potenciar la inclusión en el aula.",
  HV: "",
  imagen:'/conferencistas/conie.png',
  bandera:'/conferencistas/bandera_bolivia.png'
  },
  {
  nombre: "Dr. Francisco Conejo Carrasco",
  tema: "El papel de la autorregulación del aprendizaje en la innovación educativa.",
  imagen:'/conferencistas/francisco-02.png',
  HV: "Directivo docente de posgrados en Gerencia de instituciones educativas.",
  bandera:'/conferencistas/bandera_españa.png'
  },
  {
  nombre: "Dr. Engels Owen Pozo Gutierrez",
  tema: "Transformando la enseñanza con IA: Experiencias didácticas en gamificación y metodologías activas.",
  imagen:'/conferencistas/engels-02.png',
  HV: "docente de pregrado en la Universidad Cesar Vallejo y posgrado en la Academia Diplomática del Perú",
  bandera:'/conferencistas/bandera_engels.png'
  },
  {
  nombre: "Dr. Jaime Alfredo Mariano Torres",
  tema: "Desarrollo de competencias en estudiantes neurodivergentes: La ruta hacia la inclusión.",
  imagen:'/conferencistas/jaime-02.png',
  HV: "Actualmente, es Director del Área de Ingeniería y Ciencias Químicas de la Universidad del Noreste, en Tampico, México.",
  bandera:'/conferencistas/bandera_mexico.png'
  },
  {
  nombre: "Dra. Melissa Gonzalez Rubio Villa",
  tema: "Tensiones y desafíos para la implementación de la Educación inclusiva e intercultural para las niñeces indígenas en escuelas urbanas de la ciudad de Medellín.",
  imagen:'/conferencistas/melisa-02.png',
  HV: "Ha sido coordinadora de semilleros de investigación, asesora de tesis a nivel de pregrado y evaluadora de tesis de maestría.",
  bandera:'/conferencistas/bandera_colombia.png'
  },
  {
  nombre: "Dr. José Alberto Rúa Vásquez",
  tema: "Retos en la educación superior: inclusión, diversidad, calidad y flexibilidad.",
  imagen:'/conferencistas/joseAlberto.png',
  HV: "Vicerrector Académico de la Universidad De Medellín",
  bandera:'/conferencistas/bandera_colombia.png'
  },
];

const Talleristas =[
  {
  nombre: "Mg. Mónica Maritza Orozco Holguin",
  tema: "Neuroeducación en el aula: Una estrategia de integración.",
  imagen:'/conferencistas/monica-02.png',
  HV: "docente universitaria con experiencia en planeación, gestión de proyectos, docente de prácticas, docente apoyo pedagógico con experiencia en niños con trastornos del aprendizaje y población en riesgo de exclusión mas de 25 años. Líder empresarial en consultoría y asistencia técnica en etnoeducación, género y victimas de conflicto.",
  bandera:'/conferencistas/bandera_colombia.png'
  
  },
  {
  nombre: "Mg. Juan Guillermo Serna González",
  tema: "Robótica Educativa: Iniciación a la Programación con Arduino en el Aula.",
  imagen:'/conferencistas/juan-02.png',
  HV: "Se desempeña como docente de aula en Ciencias Naturales y líder de semillero de robótica y programación, integrando la tecnología con procesos educativos para fortalecer habilidades STEM en contextos escolares, Medellín, Colombia.",
  bandera:'/conferencistas/bandera_colombia.png'
  },
  {
  nombre: "Dra.(c) Maria Eugenia Patiño Atehortúa",
  tema: "Evaluación Formativa, auténtica e inclusiva.",
  imagen:'/conferencistas/mariaEugenia.png',
  HV: "",
  bandera:'/conferencistas/bandera_colombia.png'
  },
];

export default function ConferencistasSection() {
  return (
    <section id="conferencistas" className="py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-black mb-16">
          Conferencistas y líderes del evento
        </h1>

        {/* --- SECCIÓN DE LÍDERES --- */}
        <div className="mb-24">
          <h2 className="text-3xl font-semibold text-[#305398] mb-12">
            Liderazgo del congreso
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {leadersData.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-lg flex flex-col items-center border-t-4 border-[#96b422] z-50"
              >
                <Image
                  src={leader.imageSrc}
                  alt={`Fotografía de ${leader.name}`}
                  width={300}
                  height={300}
                  quality={100}
                  className="rounded-full object-cover -mt-20 mb-10"
                />
                <h3 className="text-xl font-bold text-[#305398]">{leader.name}</h3>
                <p className="text-md font-semibold text-gray-600 mb-3">{leader.role}</p>
                <p className="text-gray-500 text-sm">{leader.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- SECCIÓN DE CONFERENCISTAS (tu diseño original) --- */}
        <div>
           <h2 className="text-3xl font-semibold text-[#305398] mb-40">
            Conferencistas
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-40">
            {speakersData.map((conf, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative bg-white rounded-tl-3xl rounded-br-3xl shadow-md border-s-4 border-[#96b422] p-6 text-left hover:shadow-xl transition duration-300"
                >
                  <Image
                  src={conf.imagen}
                  alt={`Fotografía de ${conf.nombre}`}
                  width={100}
                  height={100}
                  quality={100}
                  className="absolute right-1 top-0 transform -translate-y-1/2 
                        w-40 h-40 object-cover rounded-full shadow-lg"
                />
                <div className="flex items-center gap-3 mb-3 mt-20">
                  <Image
                    src={conf.bandera}
                    alt={`Bandera del país de ${conf.nombre}`}
                    width={50}
                    height={100}
                    quality={100}
                    className="rounded-e-full"
                  />
                  <h3 className="text-lg font-semibold text-[#305398]">{conf.nombre}</h3>
                </div>
                {conf.HV && (
                  <p className="text-gray-700 text-sm">
                    <strong>{conf.HV}</strong> 
                  </p>
                )}
                {conf.tema && (
                  <p className="text-gray-700 text-sm mb-2 mt-8">
                    <strong>Conferencia:</strong> {conf.tema}
                  </p>
                )}
                {conf.taller && (
                  <p className="text-gray-700 text-sm">
                    <strong>Taller:</strong> {conf.taller}
                  </p>
                )}
                
              </motion.div>
            ))}
          </div>  
        </div>
        <div>
          <h2 className="text-3xl font-semibold text-[#305398] mb-40 mt-20">
            Talleristas
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-40">
              {Talleristas.map((conf, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative bg-white rounded-tl-3xl rounded-br-3xl shadow-md border-s-4 border-[#96b422] p-6 text-left hover:shadow-xl transition duration-300"
                >
                  <Image
                  src={conf.imagen}
                  alt={`Fotografía de ${conf.nombre}`}
                  width={100}
                  height={100}
                  quality={100}
                  className="absolute right-1 top-0 transform -translate-y-1/2 
                        w-40 h-40 object-cover rounded-full shadow-lg"
                />
                <div className="flex items-center gap-3 mb-3 mt-20">
                  <Image
                    src={conf.bandera}
                    alt={`Bandera del país de ${conf.nombre}`}
                    width={50}
                    height={100}
                    quality={100}
                    className="rounded-e-full"
                  />
                  <h3 className="text-lg font-semibold text-[#305398]">{conf.nombre}</h3>
                </div>
                
                {conf.tema && (
                  <p className="text-gray-700 text-sm mb-2 mt-8">
                    <strong>Taller:</strong> {conf.tema}
                  </p>
                )}
                
              </motion.div>
            ))}
          </div> 
        </div>
      </div>
    </section>
  );
}
