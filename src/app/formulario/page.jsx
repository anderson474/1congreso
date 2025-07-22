'use client'

import React, { useState } from 'react';
import Particle from "@/components/Particle";
import Image from "next/image";
import BotonWhatsApp from "@/components/botonWhatsapp"

// 1. Definimos los estados iniciales para cada tipo de formulario.
// Esto ayuda a mantener el código limpio y a resetear los formularios fácilmente.
const initialParticipantData = {
  nombre: '',
  apellido: '',
  correo: '',
  celular: '',
  NdeIdentidad: '',
  medio: '',
  tDocument: ''
};

const initialSponsorData = {
  nombreORazonSocial: '',
  telefono: '',
  correo: ''
};
const paymentURL= "https://portalpagos.davivienda.com/#/comercio/11272/FUNDACIONES%20AVANCEMOS%20SERVICIOS%20INTEGRALES"


const Formulario = () => {
  // 2. Estado para saber si el usuario quiere ser patrocinador.
  const [isSponsor, setIsSponsor] = useState(false);

  // 3. El estado del formulario se inicializa con los datos del participante.
  const [formData, setFormData] = useState(initialParticipantData);

  // 4. Estado para la casilla de aceptación de tratamiento de datos.
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
    // --- NUEVOS ESTADOS ---
  // 1. Estado para el tipo de asistente ('publico' o 'aliado')
  const [userType, setUserType] = useState('publico');


  // Función para cambiar entre formularios
  const handleFormTypeChange = (isSponsorForm) => {
    setIsSponsor(isSponsorForm);
    // Reseteamos el formulario al estado inicial correspondiente
    setFormData(isSponsorForm ? initialSponsorData : initialParticipantData);
    // También reseteamos los mensajes y la aceptación de términos
    setError('');
    setSuccess('');
    setAcceptedTerms(false);
    setUserType('publico');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!acceptedTerms) {
      setError('Debes aceptar los términos y condiciones para continuar.');
      return;
    }
    

    setLoading(true);
    setError('');
    setSuccess('');

    try {
      // 5. Agregamos el campo 'esPatrocinador' al cuerpo de la solicitud.
      // Tu API recibirá este valor y sabrá cómo procesar los datos.
      const body = JSON.stringify({
        ...formData,
        esPatrocinador: isSponsor,
        tipoAsistente: isSponsor ? null : userType 
      });

      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: body
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(data.message);
        // Reseteamos el formulario al estado inicial correcto y los términos
        setFormData(isSponsor ? initialSponsorData : initialParticipantData);
        setAcceptedTerms(false);
        setUserType('publico'); // Reseteamos también aquí

        setTimeout(() => {
            window.location.href = paymentURL;
          }, 2000); // Espera de 2 segundos
        


        //window.location.href = 'https://portalpagos.davivienda.com/#/comercio/11272/FUNDACIONES%20AVANCEMOS%20SERVICIOS%20INTEGRALES';
      } else {
        throw new Error(data.message || 'Hubo un error en el servidor.');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // 6. Creamos funciones separadas para renderizar cada formulario.
  // Esto hace que el return principal sea mucho más legible.
  // 4. Modificamos el formulario de inscripción para añadir la nueva lógica
  const renderParticipantForm = () => {

    return (
      <>
        {/* --- SECCIÓN NUEVA: TIPO DE ASISTENTE --- */}
        <label htmlFor="userType">Tipo de asistente:</label>
        <select 
          id="userType" 
          name="userType" 
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
          value={userType} 
          onChange={(e) => setUserType(e.target.value)}
        >
          <option value="publico">Público General - 120.000</option>
          <option value="aliado">Aliado - 84.000</option>
          <option value="Virtual">Virtual - 60.000</option>
        </select>
  
  
        {/* --- RESTO DEL FORMULARIO DE INSCRIPCIÓN (sin cambios) --- */}
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required placeholder='Escribe tu nombre aquí' className='border border-gray-300 rounded-xl px-4' />
        
        {/* ...otros campos... */}
        <label htmlFor="apellido">Apellido:</label>
        <input type="text" id="apellido" name="apellido" value={formData.apellido} onChange={handleChange} required placeholder='Escribe tu apellido aquí' className='border border-gray-300 rounded-xl px-4' />
        
        <label htmlFor="correo">Correo:</label>
        <input type="email" id="correo" name="correo" value={formData.correo} onChange={handleChange} required placeholder='Escribe tu correo aquí' className='border border-gray-300 rounded-xl px-4' />
        
        <label htmlFor="celular">Celular:</label>
        <input type="tel" id="celular" name="celular" value={formData.celular} onChange={handleChange} required placeholder='Escribe tu celular aquí' className='border border-gray-300 rounded-xl px-4' />
  
        <label htmlFor="tDocument">Tipo de documento:</label>
        <select id="tDocument" name="tDocument" className="w-full p-2 border border-gray-300 rounded-lg" value={formData.tDocument} onChange={handleChange} required>
          <option value="">Elige tu tipo de documento...</option>
          <option value="Cedula de Ciudadania">Cedula de Ciudadania</option>
          <option value="Pasaporte">Pasaporte</option>
          <option value="Cedula de extranjería">Cedula de extranjería</option>
        </select>
        
        <label htmlFor="NdeIdentidad">Número de identificación:</label>
        <input type="number" id="NdeIdentidad" name="NdeIdentidad" value={formData.NdeIdentidad} onChange={handleChange} required placeholder='Tu número de identificación' className='border border-gray-300 rounded-xl px-4' />
        
        <label htmlFor="medio">¿Cómo nos encontraste?</label>
        <input type="text" id="medio" name="medio" value={formData.medio} onChange={handleChange} required placeholder='Escribe aquí' className='border border-gray-300 rounded-xl px-4' />
      </>
    );
  }

  const renderSponsorForm = () => (
    <>
      <label htmlFor="nombreORazonSocial">Nombre o Razón Social:</label>
      <input type="text" id="nombreORazonSocial" name="nombreORazonSocial" value={formData.nombreORazonSocial} onChange={handleChange} required placeholder='Nombre de la empresa o persona' className='border border-gray-300 rounded-xl px-4' />

      <label htmlFor="telefono">Teléfono de Contacto:</label>
      <input type="tel" id="telefono" name="telefono" value={formData.telefono} onChange={handleChange} required placeholder='Escribe el teléfono aquí' className='border border-gray-300 rounded-xl px-4' />

      <label htmlFor="correo">Correo de Contacto:</label>
      <input type="email" id="correo" name="correo" value={formData.correo} onChange={handleChange} required placeholder='Escribe el correo aquí' className='border border-gray-300 rounded-xl px-4' />
    </>
  );
  const isButtonDisabled = 
    loading || 
    !acceptedTerms;

  return (
    <div>

      <div className="fixed inset-0 -z-10">
        <Particle />
      </div>
      <BotonWhatsApp/>
      <main className='min-h-screen w-full flex items-center justify-center p-4'>
        <div className="bg-blue-100 bg-opacity-30 backdrop-blur-md p-6 sm:p-8 rounded-lg shadow-lg my-5 w-full max-w-2xl relative">
          <div className='flex flex-row justify-center gap-4 sm:gap-8 md:gap-56'>
            <div className="relative w-36 h-36 sm:w-40 sm:h-40">
              <Image
                  src="/logoEditorial.png"
                  alt="Logo Editorial"
                  fill // 2. La imagen llenará el div padre
                  className="object-contain" // 3. Se ajustará sin deformarse
                  sizes="(max-width: 640px) 9rem, 10rem" // Opcional pero recomendado para performance
              />
            </div>

            {/* Contenedor para la segunda imagen */}
            <div className="relative w-36 h-36 sm:w-40 sm:h-40">
              <Image
                  src="/RevistaCientifica.png"
                  alt="Logo Revista Científica"
                  fill // 2. La imagen llenará el div padre
                  className="object-contain" // 3. Se ajustará sin deformarse
                  sizes="(max-width: 640px) 9rem, 10rem" // Opcional pero recomendado para performance
              />
          </div>
          </div>

          {/* 7. Botones de selección de tipo de formulario */}
          <div className="flex justify-center my-6">
            <button
              onClick={() => handleFormTypeChange(false)}
              className={`px-6 py-2 rounded-l-lg transition-colors ${!isSponsor ? 'bg-blue-800 text-white' : 'bg-gray-200 text-black'}`}
            >
              Inscripción
            </button>
            <button
              onClick={() => handleFormTypeChange(true)}
              className={`px-6 py-2 rounded-r-lg transition-colors ${isSponsor ? 'bg-blue-800 text-white' : 'bg-gray-200 text-black'}`}
            >
              Quiero ser Patrocinador
            </button>
          </div>

          <h2 className='text-center text-3xl font-bold mb-4'>
            {isSponsor ? 'Formulario de Patrocinador' : 'Formulario de Inscripción'}
          </h2>

          <form className='grid grid-cols-[auto_1fr] gap-y-3 gap-x-4 items-center' onSubmit={handleSubmit}>
            {/* Renderizado condicional del formulario */}
            {isSponsor ? renderSponsorForm() : renderParticipantForm()}
            
            {/* 8. Sección para aceptar el tratamiento de datos */}
            <div className="col-span-2 flex items-center justify-center mt-4">
                <input 
                    type="checkbox"
                    id="terms"
                    checked={acceptedTerms}
                    onChange={(e) => setAcceptedTerms(e.target.checked)}
                    className="mr-2 h-4 w-4"
                />
                <label htmlFor="terms" className="text-sm">
                    Acepto el <a href="/politica-de-datos" target="_blank" className="underline text-blue-400">tratamiento de mis datos personales</a>.
                </label>
            </div>
            <div className='col-span-2 flex justify-center'>
              <p className=''>
                  <strong>Después de realizar el pago,</strong> compártenos tu <p className='inline-block text-blue-800 font-bold underline'>comrobante de pago</p> a nuestro número de Whatsapp presionado el botón al lado inferior derecho o al correo <a href="mailto:auxiliar.mercadeo@avancemos.edu.co" class="hover:text-blue-500 text-blue-700 font-bold py-2 rounded">auxiliar.mercadeo@avancemos.edu.co</a>
              </p>
            </div>
            
            <div className="col-span-2 flex justify-center">
              <button
                type="submit"
                // 9. El botón se deshabilita si se está cargando O si no se han aceptado los términos.
                disabled={loading || !acceptedTerms}
                className='bg-blue-800 md:mt-5 rounded-full py-4 px-8 text-white font-bold text-xl disabled:bg-gray-400 disabled:cursor-not-allowed'
              >
                {loading ? 'Enviando...' : 'Enviar'}
              </button>
            </div>
          </form>

          {error && <p className="text-red-500 text-center mt-4">{error}</p>}
          {success && <p className="text-green-400 text-center mt-4">{success}</p>}
        </div>
      </main>
    </div>
    
  );
};

export default Formulario;
