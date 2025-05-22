export default function Inscripcion() {
  return (
    <section className="p-8 max-w-4xl mx-auto bg-white rounded-xl shadow-lg border border-gray-200 mt-20">
      <h2 className="text-3xl font-extrabold mb-6 text-center text-[#305398]">Inscripción y beneficios</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden">
          <thead className="bg-[#e6edf8] text-[#305398] text-left">
            <tr>
              <th className="px-6 py-4 text-sm font-semibold border-b">Tipo</th>
              <th className="px-6 py-4 text-sm font-semibold border-b">Valor</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm">
            <tr className="hover:bg-[#f7faff] transition-colors">
              <td className="px-6 py-4 border-b">Público general</td>
              <td className="px-6 py-4 border-b">$120.000 COP</td>
            </tr>
            <tr className="hover:bg-[#f7faff] transition-colors">
              <td className="px-6 py-4 border-b">Aliados</td>
              <td className="px-6 py-4 border-b">$84.000 COP</td>
            </tr>
            <tr className="hover:bg-[#f7faff] transition-colors">
              <td className="px-6 py-4">Ponentes / Talleristas</td>
              <td className="px-6 py-4">Exentos</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mt-6 text-center text-gray-600">
        Incluye certificado, materiales, acceso total y refrigerios.
      </p>
    </section>
  );
}
