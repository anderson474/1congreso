"use client";

import React, { useState, useEffect } from "react";
import Particle from "@/components/Particle";
import Image from "next/image";
import BotonWhatsApp from "@/components/botonWhatsapp";

const initialParticipantData = {
  nombre: "",
  apellido: "",
  correo: "",
  celular: "",
  NdeIdentidad: "",
  medio: "",
  tDocument: "",
  referidoPor: "",
};

const initialSponsorData = {
  nombreORazonSocial: "",
  telefono: "",
  correo: "",
};

const paymentURL =
  "https://portalpagos.davivienda.com/#/comercio/11272/FUNDACIONES%20AVANCEMOS%20SERVICIOS%20INTEGRALES";

const Formulario = () => {
  const [isSponsor, setIsSponsor] = useState(false);
  const [formData, setFormData] = useState(initialParticipantData);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [userType, setUserType] = useState("publico");

  // 👇 Limpia el campo "referidoPor" si NO es cortesía
  useEffect(() => {
    if (!userType.startsWith("Cortesía") && formData.referidoPor) {
      setFormData((prev) => ({ ...prev, referidoPor: "" }));
    }
  }, [userType, formData.referidoPor]);

  const handleFormTypeChange = (isSponsorForm) => {
    setIsSponsor(isSponsorForm);
    setFormData(isSponsorForm ? initialSponsorData : initialParticipantData);
    setError("");
    setSuccess("");
    setAcceptedTerms(false);
    setUserType("publico");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!acceptedTerms) {
      setError("Debes aceptar los términos y condiciones para continuar.");
      return;
    }

    if (userType.startsWith("Cortesía") && !formData.referidoPor) {
      setError("Por favor selecciona quién refirió la cortesía.");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const body = JSON.stringify({
        ...formData,
        esPatrocinador: isSponsor,
        tipoAsistente: isSponsor ? null : userType,
      });

      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body,
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(data.message);
        setFormData(isSponsor ? initialSponsorData : initialParticipantData);
        setAcceptedTerms(false);
        setUserType("publico");

        if (!userType.startsWith("Cortesía")) {
          setTimeout(() => {
            window.location.href = paymentURL;
          }, 2000);
        }
      } else {
        throw new Error(data.message || "Hubo un error en el servidor.");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const renderParticipantForm = () => (
    <>
      <label htmlFor="userType">Tipo de asistente:</label>
      <select
        id="userType"
        name="userType"
        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={userType}
        onChange={(e) => setUserType(e.target.value)}
      >
        <option value="publico">Público general - 180.000</option>
        <option value="aliado">Presencial aliado - 140.000</option>
        <option value="Virtual">Virtual - 120.000</option>
        <option value="Cortesía presencial">Cortesía presencial</option>
        <option value="Cortesía virtual">Cortesía virtual</option>
      </select>

      {(userType === "Cortesía presencial" ||
        userType === "Cortesía virtual") && (
        <>
          <label htmlFor="referidoPor">¿Quién refirió la cortesía?</label>
          <select
            id="referidoPor"
            name="referidoPor"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={formData.referidoPor}
            onChange={handleChange}
            required
          >
            <option value="">Selecciona...</option>
            <option value="Álvaro">Álvaro</option>
            <option value="Walter Aldana">Walter Aldana</option>
          </select>
        </>
      )}

      <label htmlFor="nombre">Nombre:</label>
      <input
        type="text"
        id="nombre"
        name="nombre"
        value={formData.nombre}
        onChange={handleChange}
        required
        placeholder="Escribe tu nombre aquí"
        className="border border-gray-300 rounded-xl px-4"
      />

      <label htmlFor="apellido">Apellido:</label>
      <input
        type="text"
        id="apellido"
        name="apellido"
        value={formData.apellido}
        onChange={handleChange}
        required
        placeholder="Escribe tu apellido aquí"
        className="border border-gray-300 rounded-xl px-4"
      />

      <label htmlFor="correo">Correo:</label>
      <input
        type="email"
        id="correo"
        name="correo"
        value={formData.correo}
        onChange={handleChange}
        required
        placeholder="Escribe tu correo aquí"
        className="border border-gray-300 rounded-xl px-4"
      />

      <label htmlFor="celular">Celular:</label>
      <input
        type="tel"
        id="celular"
        name="celular"
        value={formData.celular}
        onChange={handleChange}
        required
        placeholder="Escribe tu celular aquí"
        className="border border-gray-300 rounded-xl px-4"
      />

      <label htmlFor="tDocument">Tipo de documento:</label>
      <select
        id="tDocument"
        name="tDocument"
        className="w-full p-2 border border-gray-300 rounded-lg"
        value={formData.tDocument}
        onChange={handleChange}
        required
      >
        <option value="">Elige tu tipo de documento...</option>
        <option value="Cédula de Ciudadanía">Cédula de Ciudadanía</option>
        <option value="Pasaporte">Pasaporte</option>
        <option value="Cédula de extranjería">Cédula de extranjería</option>
      </select>

      <label htmlFor="NdeIdentidad">Número de identificación:</label>
      <input
        type="number"
        id="NdeIdentidad"
        name="NdeIdentidad"
        value={formData.NdeIdentidad}
        onChange={handleChange}
        required
        placeholder="Tu número de identificación"
        className="border border-gray-300 rounded-xl px-4"
      />

      <label htmlFor="medio">¿Cómo nos encontraste?</label>
      <input
        type="text"
        id="medio"
        name="medio"
        value={formData.medio}
        onChange={handleChange}
        required
        placeholder="Escribe aquí"
        className="border border-gray-300 rounded-xl px-4"
      />
    </>
  );

  const renderSponsorForm = () => (
    <>
      <label htmlFor="nombreORazonSocial">Nombre o Razón Social:</label>
      <input
        type="text"
        id="nombreORazonSocial"
        name="nombreORazonSocial"
        value={formData.nombreORazonSocial}
        onChange={handleChange}
        required
        placeholder="Nombre de la empresa o persona"
        className="border border-gray-300 rounded-xl px-4"
      />

      <label htmlFor="telefono">Teléfono de Contacto:</label>
      <input
        type="tel"
        id="telefono"
        name="telefono"
        value={formData.telefono}
        onChange={handleChange}
        required
        placeholder="Escribe el teléfono aquí"
        className="border border-gray-300 rounded-xl px-4"
      />

      <label htmlFor="correo">Correo de Contacto:</label>
      <input
        type="email"
        id="correo"
        name="correo"
        value={formData.correo}
        onChange={handleChange}
        required
        placeholder="Escribe el correo aquí"
        className="border border-gray-300 rounded-xl px-4"
      />
    </>
  );

  return (
    <div>
      <div className="fixed inset-0 -z-10">
        <Particle />
      </div>
      <BotonWhatsApp />
      <main className="min-h-screen w-full flex items-center justify-center p-4">
        <div className="bg-blue-100 bg-opacity-30 backdrop-blur-md p-6 sm:p-8 rounded-lg shadow-lg my-5 w-full max-w-2xl relative">
          <div className="flex flex-row justify-center gap-4 sm:gap-8 md:gap-56">
            <div className="relative w-36 h-36 sm:w-40 sm:h-40">
              <Image
                src="/logoEditorial.png"
                alt="Logo Editorial"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative w-36 h-36 sm:w-40 sm:h-40">
              <Image
                src="/RevistaCientifica.png"
                alt="Logo Revista Científica"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="flex justify-center my-6">
            <button
              onClick={() => handleFormTypeChange(false)}
              className={`px-6 py-2 rounded-l-lg transition-colors ${
                !isSponsor ? "bg-blue-800 text-white" : "bg-gray-200 text-black"
              }`}
            >
              Inscripción
            </button>
            <button
              onClick={() => handleFormTypeChange(true)}
              className={`px-6 py-2 rounded-r-lg transition-colors ${
                isSponsor ? "bg-blue-800 text-white" : "bg-gray-200 text-black"
              }`}
            >
              Quiero ser Patrocinador
            </button>
          </div>

          <h2 className="text-center text-3xl font-bold mb-4">
            {isSponsor
              ? "Formulario de Patrocinador"
              : "Formulario de Inscripción"}
          </h2>

          <form
            className="grid grid-cols-[auto_1fr] gap-y-3 gap-x-4 items-center"
            onSubmit={handleSubmit}
          >
            {isSponsor ? renderSponsorForm() : renderParticipantForm()}

            <div className="col-span-2 flex items-center justify-center mt-4">
              <input
                type="checkbox"
                id="terms"
                checked={acceptedTerms}
                onChange={(e) => setAcceptedTerms(e.target.checked)}
                className="mr-2 h-4 w-4"
              />
              <label htmlFor="terms" className="text-sm">
                Acepto el{" "}
                <a
                  href="/politica-de-datos"
                  target="_blank"
                  className="underline text-blue-400"
                >
                  tratamiento de mis datos personales
                </a>
                .
              </label>
            </div>

            {!userType.startsWith("Cortesía") && (
              <div className="col-span-2 flex justify-center">
                <p>
                  <strong>Después de realizar el pago,</strong> compártenos tu{" "}
                  <span className="text-blue-800 font-bold underline">
                    comprobante de pago
                  </span>{" "}
                  a nuestro número de Whatsapp o al correo{" "}
                  <a
                    href="mailto:auxiliar.mercadeo@avancemos.edu.co"
                    className="hover:text-blue-500 text-blue-700 font-bold"
                  >
                    auxiliar.mercadeo@avancemos.edu.co
                  </a>
                </p>
              </div>
            )}

            <div className="col-span-2 flex justify-center">
              <button
                type="submit"
                disabled={loading || !acceptedTerms}
                className="bg-blue-800 md:mt-5 rounded-full py-4 px-8 text-white font-bold text-xl disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {loading ? "Enviando..." : "Enviar"}
              </button>
            </div>
          </form>

          {error && <p className="text-red-500 text-center mt-4">{error}</p>}
          {success && (
            <p className="text-green-400 text-center mt-4">{success}</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default Formulario;
