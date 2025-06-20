// components/Footer.js
import Image from 'next/image';
import Link from 'next/link';

// 1. Creamos un array con los datos de los aliados.
// Esto hace que el código sea más limpio y fácil de actualizar en el futuro.
const allies = [
  { name: 'Universidad de Antioquia', logoSrc: '/aliados/udea-02.png' }, // Reemplaza con el nombre real de tu archivo
  { name: 'Adecopria', logoSrc: '/aliados/adecopria-02.png' },             // Reemplaza con el nombre real de tu archivo
  { name: 'Adida', logoSrc: '/aliados/adida-02.png' },                   // Reemplaza con el nombre real de tu archivo
  { name: 'Conaceb', logoSrc: '/aliados/conaceb-02.png' },                 // Reemplaza con el nombre real de tu archivo
  { name: 'Universidad de Medellín', logoSrc: '/aliados/udem-02.png' }, // Reemplaza con el nombre real de tu archivo
];

export default function Footer() {
  return (
    // 2. Usamos un fondo oscuro para un look más elegante y profesional.
    <footer className="bg-azul text-gray-400">
      <div className="container mx-auto px-4 py-12">
        
        {/* --- Sección de Aliados --- */}
        <div className="text-center mb-10">
          <h3 className="text-2xl font-semibold text-white mb-8">
            Nuestros Aliados Estratégicos
          </h3>
          {/* 3. Contenedor flexible para los logos, que se adapta a diferentes pantallas. */}
          <div className="flex justify-center items-center gap-x-8 md:gap-x-12 flex-wrap gap-y-6">
            {allies.map((ally) => (
              <div key={ally.name} className="relative" title={ally.name}>
                <Image
                  src={ally.logoSrc}
                  alt={`Logo de ${ally.name}`}
                  width={150} // Ancho base
                  height={150}  // Altura base
                  // 4. Clases para unificar el estilo y añadir interactividad
                  className="h-15 w-15 md:h-22 md:w-22 object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* --- Separador y Copyright --- */}
        <hr className="border-gray-800 my-8" />
        
        <div className="text-center text-sm">
          {/* 5. El año se genera dinámicamente para que siempre esté actualizado. */}
          <p>© {new Date().getFullYear()} Grupo Educativo Avancemos. Todos los derechos reservados.</p>
        </div>

      </div>
    </footer>
  );
}
