// src/components/HeaderHero.tsx
import Image from "next/image";
import Link from 'next/link'

export default function HeaderHero() {
  return (
    <section className="relative z-20 flex flex-col items-center justify-center text-center min-h-screen px-6 pt-20">
      <div className="flex items-center justify-between w-full max-w-7xl mb-8">
        {/* Logo izquierdo */}
        <div className="flex-shrink-0 hidden sm:block">
          <Image className="object-fill" src="/logoEditorial.png" alt="Logo Izquierdo" width={300} height={300} />
        </div>

        {/* Título principal */}
        <h1 className="text-black text-xl md:text-4xl lg:text-5xl font-bold px-4">
          CONGRESO INTERNACIONAL DE INNOVACIÓN EDUCATIVA Y PRÁCTICAS PEDAGÓGICAS INCLUSIVAS
        </h1>

        {/* Logo derecho */}
        <div className="flex-shrink-0 hidden sm:block">
          <Image className="object-fill" src="/RevistaCientifica.png" alt="Logo Derecho" width={300} height={300} />
        </div>
      </div>

      {/* Subtítulo y botón */}
      <p className="text-gray-700 text-base md:text-lg mb-6 max-w-3xl">
        Un encuentro académico para transformar la educación desde la inclusión, la innovación y las prácticas reales.
      </p>
      <Link
        href="/formulario"
        className="bg-[#96b422] text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:bg-[#7d9e1c] transition"
      >
        Inscribirse
      </Link>
    </section>
  );
}

