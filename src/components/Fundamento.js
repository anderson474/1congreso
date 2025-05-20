// components/Fundamento.js
import Image from "next/image";
export default function Fundamento() {
  return (
    <section className="p-8 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center text-[#305398]">Fundamentación Teórica</h2>
      <p className="text-gray-700 mb-4">
        La transformación de los sistemas educativos actuales requiere respuestas ágiles e inclusivas ante los cambios sociales, tecnológicos y pedagógicos. La innovación educativa se presenta como un eje clave para las reformas curriculares, la integración tecnológica y el compromiso con una educación equitativa. Según Gómez (2023), esta innovación debe entenderse como un proceso estratégico y colectivo, más allá del uso de tecnología, vinculado estrechamente con una gestión curricular contextualizada y participativa.

        Espinosa y Cartagena (2021) señalan que las tecnologías avanzadas son esenciales para crear entornos de aprendizaje flexibles y colaborativos, pero su uso debe estar guiado por una sólida planificación pedagógica que evite enfoques tecnocentristas.

        Además, la inclusión educativa es fundamental en este proceso. Kerexeta-Brazal et al. (2022) destacan que la competencia digital docente es clave para adaptar la enseñanza a la diversidad del alumnado, promoviendo así la equidad. Esto resalta la importancia de la formación continua con enfoque inclusivo.

        En conjunto, la innovación y la inclusión deben integrarse como dimensiones interdependientes. Este congreso se plantea como un espacio para dialogar y co-crear propuestas que impulsen una educación más justa, inclusiva y sostenible.
      </p>
      <Image src="/books.jpg" alt="Orientación hacia el congreso" width={1280} height={853} quality={100} />
      
    </section>
  );
}
