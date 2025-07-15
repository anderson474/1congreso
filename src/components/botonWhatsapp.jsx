// components/BotonWhatsApp.jsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const BotonWhatsApp = () => {
  // Configura tu número de teléfono y el mensaje
  const numeroTelefono = '573054240301'; // Reemplaza con tu número (código de país + número)
  const mensaje = '👋🏻Hola, me interesa el congreso, quiero saber más💯'; // Tu mensaje predeterminado

  // Codifica el mensaje para la URL
  const mensajeCodificado = encodeURIComponent(mensaje);

  const whatsappUrl = `https://wa.me/${numeroTelefono}?text=${mensajeCodificado}`;

  return (
    // Contenedor principal que posiciona todo
    <div className="fixed bottom-5 right-4 z-50 flex flex-col items-center gap-3">
      
      {/* La burbuja de mensaje */}
      <div className="relative">
        <div className="bg-white text-slate-800 text-sm font-semibold px-4 py-2 rounded-xl shadow-lg">
          ¿Necesitas ayuda?
        </div>
        {/* El puntero/flecha de la burbuja */}
        <div 
          className="absolute left-2/3 -translate-x-1/2 w-4 h-4 bg-white transform rotate-45"
          style={{ bottom: '-8px' }} // Posiciona la flecha para que se solape con el borde
        ></div>
      </div>

      {/* El botón de WhatsApp */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="
          bg-green-500 text-white p-4 ml-12 rounded-full 
          shadow-lg hover:bg-green-600 transition-all duration-300 
          flex items-center justify-center
          hover:scale-110
        "
        aria-label="Contactar por WhatsApp"
      >
        <FaWhatsapp size={30} />
      </a>
    </div>
  );
};

export default BotonWhatsApp;