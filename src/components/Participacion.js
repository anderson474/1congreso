// components/Participacion.js
export default function Participacion() {
  return (
    <section className="p-8 max-w-5xl mx-auto text-gray-800">
      <h2 className="text-3xl font-bold mb-6 text-center text-[#305398]">Criterios de Postulación y Participación</h2>

      {/* Modalidades */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-blue-800 mb-2">1. Modalidades de participación</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Ponencia:</strong> Presentación individual o grupal de resultados de investigación, sistematización de experiencias, estudios de caso o propuestas de innovación. Se enmarcarán en los ejes temáticos y serán evaluadas por el comité académico. Las aceptadas podrán postularse para un capítulo de libro con ISBN, editado por la Editorial Avancemos, con arbitraje y acceso abierto.
          </li>
          <li>
            <strong>Taller temático:</strong> Sesiones prácticas para el desarrollo de competencias aplicables en contextos educativos.
          </li>
          <li>
            <strong>Asistencia general:</strong> Participación sin ponencia, con acceso completo a actividades y certificación.
          </li>
        </ul>
      </div>

      {/* Requisitos ponencias */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-blue-800 mb-2">2. Requisitos para ponencias</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Resumen (300–400 palabras) con título, autores, institución, objetivo, metodología (si aplica), resultados esperados o alcanzados y eje temático.</li>
          <li>Indicar modalidad preferida.</li>
          <li>Ficha biográfica breve de los autores (máx. 150 palabras).</li>
          <li>De ser aceptado, enviar presentación o póster digital en el formato del comité académico.</li>
        </ul>
      </div>

      {/* Requisitos talleres */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-blue-800 mb-2">3. Requisitos para talleres</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Propuesta (máx. 600 palabras) con título, objetivos de aprendizaje, metodología participativa, perfil del público, recursos y CV del facilitador/a.</li>
          <li>Se valorarán enfoques prácticos y replicables.</li>
        </ul>
      </div>

      {/* Criterios de evaluación */}
      <div>
        <h3 className="text-xl font-semibold text-blue-800 mb-2">4. Criterios de evaluación</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Pertinencia con los ejes temáticos.</li>
          <li>Rigor conceptual y/o metodológico.</li>
          <li>Originalidad, innovación o aplicabilidad educativa.</li>
          <li>Claridad y coherencia en la redacción.</li>
          <li>Contribución al enfoque inclusivo e intercultural.</li>
        </ul>
      </div>
    </section>
  );
}
