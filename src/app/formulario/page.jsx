'use client'

import React, { useState } from 'react';
import Particle from "@/components/Particle";
import Image from "next/image";



const Formulario = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    celular: '',
    NdeIdentidad: '',
    medio:'',
    tDocument: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      // Enviar datos a Mailchimp
      const response = await fetch('/api/subscribe', {  // API que vamos a crear
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        setSuccess('Formulario enviado con éxito!');
      } else {
        throw new Error(data.message || 'Hubo un error.');
      }
    } catch (err) {
      setError('Error al enviar el formulario. Intenta nuevamente.', err);
      setError(`Error al enviar el formulario: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-0">
        <Particle />
    <div/>
        
        <div className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <div className="bg-transparent bg-opacity-30 backdrop-blur-md p-8 rounded-lg shadow-lg my-5 overflow-auto">
                <div className='flex flex-row justify-center place-content-around gap-56'>
                    <Image src="/logo.png" alt="Logo Izquierdo" width={150} height={150} />
                    <Image src="/RevistaCientifica.png" alt="Logo Izquierdo" width={150} height={150} />
                </div>
                
                <h2 className='text-center text-3xl font-bold mb-50 pb-8'>Formulario de Inscripción</h2>
                <form className='grid grid-cols-[30%_50%] gap-y-5 gap-x-36 justify-center' onSubmit={handleSubmit}>
                    
                    <label  htmlFor="nombre">Nombre:</label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                        placeholder='Escribe tú nombre aquí'
                        className='border border-gray-300 rounded-xl px-4'
                    />
                    
                    
                    <label  htmlFor="apellido">Apellido:</label>
                    <input
                        type="text"
                        id="apellido"
                        name="apellido"
                        value={formData.apellido}
                        onChange={handleChange}
                        required
                        placeholder='Escribe tú apellido aquí'
                        className='border border-gray-300 rounded-xl px-4'
                    />
                    
                    
                    <label  htmlFor="correo">Correo:</label>
                    <input
                        type="email"
                        id="correo"
                        name="correo"
                        value={formData.correo}
                        onChange={handleChange}
                        required
                        placeholder='Escribe tú correo aquí'
                        className='border border-gray-300 rounded-xl px-4'
                    />
                    
                    
                    <label  htmlFor="celular">Celular:</label>
                    <input
                        type="tel"
                        id="celular"
                        name="celular"
                        value={formData.celular}
                        onChange={handleChange}
                        required
                        placeholder='Escribe tú celular aquí'
                        className='border border-gray-300 rounded-xl px-4'
                    />

                    <label  htmlFor="NdeIdentidad">Número de identificación:</label>
                    <input
                        type="number"
                        id="NdeIdentidad"
                        name="NdeIdentidad"
                        value={formData.NdeIdentidad}
                        onChange={handleChange}
                        required
                        placeholder='Tu número identificación'
                        className='border border-gray-300 rounded-xl px-4'
                    />
                    <label  htmlFor="medio">Como nos encontraste:</label>
                    <input
                        type="text"
                        id="medio"
                        name="medio"
                        value={formData.medio}
                        onChange={handleChange}
                        required
                        placeholder='Escribe aquí'
                        className='border border-gray-300 rounded-xl px-4'
                    />
                    <label htmlFor="tDocument">Tipo de documento:</label>
                    <select 
                        id="tDocument" 
                        name="tDocument" 
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={formData.tDocument}
                        onChange={handleChange}
                    >
                        <option value="">Elige tu tipo de documento...</option>
                        <option value="opcion1">Cedula de Ciudadania</option>
                        <option value="opcion2">Pasaporte</option>
                        <option value="opcion3">Cedula de extranjería</option>
                    </select>
                    
                    <button
                        type="submit" 
                        disabled={loading}
                        className='bg-blue-800 mt-5 mx-auto col-span-2 rounded-full py-4 px-8 text-white font-bold text-xl'
                        >
                        {loading ? 'Enviando...' : 'Enviar'}
                    </button>
                    
                </form>
                

                {error && <p style={{ color: 'red' }}>{error}</p>}
                {success && <p style={{ color: 'green' }}>{success}</p>}

                
            </div>
            
        </div>
        </div>


  );
};

export default Formulario;
