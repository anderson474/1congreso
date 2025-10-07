export default function Participacion() {
  return (
    <section className="p-8 max-w-5xl mx-auto text-gray-700 bg-gray-50 rounded-lg shadow-lg">
      <h2 className="text-4xl font-extrabold mb-10 text-center bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
        Criterios de postulación y participación
      </h2>

      {/* Modalidades */}
      <div className="mb-8 p-6 bg-white rounded-xl shadow-md border border-gray-200">
        <h3 className="flex items-center text-2xl font-semibold text-blue-700 mb-4">
          <span className="mr-3 text-3xl">📋</span> 1. Modalidades de
          participación
        </h3>
        <ul className="space-y-4 list-none">
          <li className="flex items-start gap-3">
            <span className="text-blue-500 mt-1">•</span>
            <p>
              <strong>Ponencia:</strong> presentación individual o grupal de
              resultados de investigación, sistematización de experiencias,
              estudios de caso o propuestas de innovación. Se enmarcarán en los
              ejes temáticos y serán evaluadas por el comité académico. Las
              aceptadas podrán postularse para un capítulo de libro con ISBN,
              editado por la Editorial Avancemos, con arbitraje y acceso
              abierto.
            </p>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-500 mt-1">•</span>
            <p>
              <strong>Asistencia general:</strong> participación sin ponencia,
              con acceso completo a actividades y certificación.
            </p>
          </li>
        </ul>
      </div>

      {/* Requisitos ponencias */}
      <div className="mb-8 p-6 bg-white rounded-xl shadow-md border border-gray-200">
        <h3 className="flex items-center text-2xl font-semibold text-blue-700 mb-4">
          <span className="mr-3 text-3xl">✅</span> 2. Requisitos para ponencias
        </h3>
        <ul className="list-disc list-inside space-y-3 text-gray-800">
          <li>
            Resumen (300–400 palabras) con título, autores, institución,
            objetivo, metodología (si aplica), resultados esperados o alcanzados
            y eje temático.
          </li>
          <li>Indicar modalidad preferida.</li>
          <li>Ficha biográfica breve de los autores (máx. 150 palabras).</li>
          <li>
            De ser aceptado, enviar presentación o póster digital en el formato
            del comité académico.
          </li>
        </ul>
      </div>

      {/* Criterios de evaluación */}
      <div className="p-6 bg-white rounded-xl shadow-md border border-gray-200">
        <h3 className="flex items-center text-2xl font-semibold text-blue-700 mb-4">
          <span className="mr-3 text-3xl">🔍</span> 3. Criterios de evaluación
        </h3>
        <ul className="list-disc list-inside space-y-3 text-gray-800">
          <li>Pertinencia con los ejes temáticos.</li>
          <li>Rigor conceptual y/o metodológico.</li>
          <li>Originalidad, innovación o aplicabilidad educativa.</li>
          <li>Claridad y coherencia en la redacción.</li>
          <li>Contribución al enfoque inclusivo e intercultural.</li>
        </ul>
      </div>
      <div className="p-6 bg-white rounded-xl shadow-md border border-gray-200 mt-10">
        <h3 className="flex items-center text-2xl font-semibold text-blue-700 mb-4">
          <span className="mr-3 text-3xl">📋</span> 4. Contacto
        </h3>
        <>
          <p>
            Para mayor información sobre el congreso, ponencias o talleres, por
            favor comunicarse al correo:
          </p>
          <a
            href="mailto:auxiliar.mercadeo@avancemos.edu.co"
            className="text-blue-400 underline"
          >
            📧 comunicaciones@avancemos.edu.co
          </a>
          <p>Contacto: Mariana Marín Mejía </p>
          <strong>Comunicaciones – Grupo Educativo Avancemos</strong>
        </>
      </div>
    </section>
  );
}
