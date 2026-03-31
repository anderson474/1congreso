"use client";

export default function Descripcion() {
  
  return (
      <section className="max-w-3xl mt-10 mx-auto">
      <div className="max-w-6xl mx-auto items-start bg-white rounded-2xl shadow-lg p-4 z-50">

        {/* 🔹 DESCRIPCIÓN */}
        
          <h2 className="text-3xl font-bold mb-4 text-[#305398]">
            Descripción del evento
          </h2>

          <p className="text-gray-600 mb-4 text-lg">
            El <strong>II Congreso Internacional de Innovación Educativa y Prácticas Pedagógicas</strong> Inclusivas es un espacio académico que reúne a docentes, investigadores y profesionales para analizar los retos actuales de la educación.
          </p>

          <p className="text-gray-600 mb-4 text-lg">
            En esta edición, centrada en “Educar desde la emoción: prácticas pedagógicas emocionalmente conscientes”, se abordarán temas como innovación pedagógica, inclusión educativa, inteligencia artificial y desarrollo socioemocional.
          </p>

          <p className="text-gray-600 text-lg">
            Una oportunidad para actualizar conocimientos, fortalecer la práctica docente y conectar con expertos internacionales.
          </p>
        
      </div>
    </section>
  );
}