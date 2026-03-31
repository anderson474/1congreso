"use client";

import Button from "./Button";
export default function Objetivo() {
  
  return (
      <section className="max-w-3xl mx-auto">
        <div className="max-w-6xl mx-auto items-start bg-white rounded-2xl shadow-lg z-50">
            <div className="max-w-6xl mx-auto flex flex-col items-start bg-white rounded-2xl shadow-lg p-4">
                <div>
                    <h2 className="text-3xl font-bold mb-4 text-[#305398]">
                        Objetivo del evento
                    </h2>

                    <p className="text-gray-600 text-lg">
                        Fomentar el intercambio académico sobre prácticas pedagógicas inclusivas e innovadoras emocionalmente conscientes, mediante la socialización de investigaciones y experiencias orientadas a la transformación educativa en contextos diversos.
                    </p>
                </div>
            </div>
            
        </div>
      </section>
  );
}