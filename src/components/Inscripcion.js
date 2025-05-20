// components/Inscripcion.js
export default function Inscripcion() {
  return (
    <section className="p-8 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center text-[#305398]">Inscripción y Beneficios</h2>
      <table className="w-full border text-gray-700">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Tipo</th>
            <th className="border px-4 py-2">Valor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">Público general</td>
            <td className="border px-4 py-2">$120.000 COP</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Aliados</td>
            <td className="border px-4 py-2">$84.000 COP</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Ponentes/talleristas</td>
            <td className="border px-4 py-2">Exentos</td>
          </tr>
        </tbody>
      </table>
      <p className="mt-4">Incluye certificado, materiales, acceso total y refrigerios.</p>
    </section>
  );
}
