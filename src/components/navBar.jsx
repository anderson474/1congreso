import Image from "next/image";

export default function Navbar() {
  return (
    <header className="flex items-center text-black justify-between px-8 py-4 mb-20 bg-transparent sticky top-0 z-50">
      <div className="flex-shrink-0">
        <Image src="/logo.png" alt="Logo Izquierdo" width={200} height={200} />
      </div>
      <h1 className="text-center text-base md:text-5xl font-bold flex-1 px-4 text-[#96b422]">
        CONGRESO INTERNACIONAL DE INNOVACIÓN EDUCATIVA Y PRÁCTICAS PEDAGÓGICAS INCLUSIVAS
      </h1>
      <div className="flex-shrink-0">
        <Image src="/RevistaCientifica.png" alt="Logo Derecho" width={200} height={200} />
      </div>
    </header>
  );
}