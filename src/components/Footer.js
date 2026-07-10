// components/Footer.js
import Image from "next/image";
import Link from "next/link";

const allies = [
  { name: "revista cientifica avancemos", logoSrc: "/R_cientifica.png", size: "h-28" },
  { name: "LogoAvancemos", logoSrc: "/LogoAvancemos.png", size: "h-28" },
  { name: "Universidad de Medellín", logoSrc: "/UMedellin.png", size: "h-28" },
  { name: "U de Colombia", logoSrc: "/Ucolombia_logo_color.png", size: "h-28" },
  { name: "Universidad Cooperativa de Colombia", logoSrc: "/UCC_logo.png", size: "h-28" },
];

const medellinAlly = {
  name: "Medellín aqui todo florece",
  logoSrc: "/medellin_logo.png",
};

export default function Footer() {
  return (
    <footer className="bg-azul text-gray-400">
      <div className="container mx-auto px-4 py-12">
        {/* --- Sección de Aliados --- */}
        <div className="text-center mb-10">
          <h3 className="text-2xl font-semibold text-white mb-8">
            Nuestros Aliados Estratégicos
          </h3>

          {/* Grid principal de aliados */}
          <div className="flex justify-center items-center gap-x-8 md:gap-x-12 flex-wrap gap-y-6">
            {allies.map((ally) => (
              <div key={ally.name} className="relative" title={ally.name}>
                <Image
                  src={ally.logoSrc}
                  alt={`Logo de ${ally.name}`}
                  width={150}
                  height={150}
                  className={`${ally.size} w-auto object-fill`}
                />
              </div>
            ))}
          </div>

          {/* Logo de Medellín, solo, más grande, debajo del grid */}
          <div className="flex justify-center mt-6">
            <div className="relative" title={medellinAlly.name}>
              <Image
                src={medellinAlly.logoSrc}
                alt={`Logo de ${medellinAlly.name}`}
                width={1536}
                height={1024}
                className="h-32 md:h-40 w-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* --- Separador y Copyright --- */}
        <hr className="border-gray-800 my-8" />

        <div className="text-center text-sm">
          <p>
            © {new Date().getFullYear()} Grupo Educativo Avancemos. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}