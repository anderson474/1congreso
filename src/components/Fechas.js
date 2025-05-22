export default function Fechas() {
  return (
    <section
      className="p-8 max-w-5xl mx-auto bg-white rounded-xl shadow-md border border-gray-200 mt-20
                 relative overflow-hidden"
      style={{
        backgroundImage: 'url("/fondo2.jpg")', // pon aquí la ruta correcta
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <h2 className="flex items-center justify-center text-3xl font-extrabold mb-8 text-blue-700 bg-white/80 px-4 py-2 rounded-md">
        <span className="mr-3 text-4xl">📅</span>Fechas
      </h2>

      <ul className="relative border-l-4 border-blue-500 pl-6 space-y-6 text-gray-700 bg-white/80 p-6 rounded-md">
        {[
          { label: "Lanzamiento de convocatoria", date: "30 mayo 2025" },
          { label: "Recepción de propuestas", date: "hasta 15 agosto 2025" },
          { label: "Evaluación", date: "16 al 31 agosto 2025" },
          { label: "Congreso", date: "24 octubre 2025" },
          { label: "Publicación de memorias", date: "noviembre 2025" },
        ].map(({ label, date }) => (
          <li key={label} className="relative">
            <span className="absolute -left-8 top-1 bg-blue-500 rounded-full w-4 h-4 ring-4 ring-white"></span>
            <strong>{label}:</strong> {date}
          </li>
        ))}
      </ul>
    </section>
  );
}
