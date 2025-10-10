// ruta: /app/api/inscribir/route.js

import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import { Resend } from "resend";

// --- INICIALIZACIÓN DE CLIENTES (sin cambios) ---
const resend = new Resend(process.env.RESEND_API_KEY);
const serviceAccountAuth = new JWT({
  email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});
const doc = new GoogleSpreadsheet(
  process.env.GOOGLE_SHEET_ID,
  serviceAccountAuth
);

// --- FUNCIÓN POST ACTUALIZADA ---
export async function POST(req) {
  try {
    // 1. Obtener el cuerpo completo de la solicitud
    const body = await req.json();
    const { esPatrocinador } = body; // La clave para decidir la lógica

    // 2. Preparar variables que se llenarán condicionalmente
    let rowData;
    let adminEmailSubject;
    let adminEmailHtml;
    let userConfirmationSubject;
    let userConfirmationHtml;
    let successMessage;

    const fromEmail = "Congreso <noreply@avancemos.edu.co>";
    const adminEmail = process.env.ADMIN_EMAIL;
    const fecha = new Date().toLocaleString("es-CO", {
      timeZone: "America/Guayaquil",
    });

    // 3. Lógica condicional basada en si es patrocinador o no
    if (esPatrocinador) {
      // --- LÓGICA PARA PATROCINADORES ---
      const { nombreORazonSocial, telefono, correo } = body;

      // Datos para Google Sheets
      rowData = {
        "Nombre o Razón Social": nombreORazonSocial,
        Correo: correo,
        "Contacto (Celular/Teléfono)": telefono,
        "Es Patrocinador": "Sí", // Marcamos como patrocinador
        FechaInscripcion: fecha,
      };

      // Contenido de los correos para patrocinadores
      adminEmailSubject = "¡Interés de Nuevo Patrocinador!";
      adminEmailHtml = `
        <h1>Solicitud de Patrocinio Recibida</h1>
        <p>Una nueva empresa/persona ha mostrado interés en ser patrocinador del congreso.</p>
        <p><strong>Nombre o Razón Social:</strong> ${nombreORazonSocial}</p>
        <p><strong>Correo de Contacto:</strong> ${correo}</p>
        <p><strong>Teléfono de Contacto:</strong> ${telefono}</p>
      `;

      userConfirmationSubject =
        "Hemos recibido tu interés para ser patrocinador";
      userConfirmationHtml = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
          
          <!-- Encabezado con color de marca (se mantiene el mismo) -->
          <div style="background-color: #2da836; color: white; padding: 20px; text-align: center;">
              <h1 style="margin: 0; font-size: 24px;">Gracias por tu Interés en Colaborar</h1>
          </div>
          
          <!-- Contenido del correo adaptado para patrocinadores -->
          <div style="padding: 25px;">
              <h2 style="font-size: 20px; color: #333;">¡Hola, ${nombreORazonSocial}! 👋</h2>
              
              <p>Hemos recibido con gran interés tu solicitud para ser patrocinador de nuestro <strong>I Congreso Internacional de Innovación Educativa y Prácticas Pedagógicas Inclusivas</strong>. ¡Gracias por considerar unirte a nuestra misión!</p>
              
              <p>El apoyo de organizaciones y líderes como tú es fundamental para crear un evento de alto impacto, capaz de generar un cambio real en la educación. Valoramos enormemente tu disposición a ser parte de esta iniciativa. 🤝</p>
              
              <p><strong>Nuestro equipo de alianzas estratégicas revisará tu solicitud y se pondrá en contacto contigo a la brevedad</strong> para explorar las oportunidades de colaboración y presentarte nuestro portafolio de patrocinios. 📈</p>
              
              <p>Si tienes alguna pregunta inmediata, no dudes en responder a este correo o escribirnos a <strong>auxiliar.mercadeo@avancemos.edu.co</strong>.</p>
          </div>
          
          <!-- Footer (se mantiene el mismo para consistencia de marca) -->
          <div style="background-color: #f7f7f7; padding: 20px; text-align: center;">
              <p style="margin: 0 0 10px 0;">Cordialmente,</p>
              <p style="margin: 0; font-weight: bold;">El Equipo Organizador</p>
              <p style="margin: 0; font-style: italic; color: #555;">Grupo Educativo Avancemos</p>
              
              <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 20px 0;">
              
              <!-- Redes Sociales (se mantienen las mismas) -->
              <p style="margin: 0 0 15px 0; font-weight: bold;">Síguenos para no perderte ninguna novedad:</p>
              <div>
                  <a href="https://www.instagram.com/grupoeducativoavancemos/?hl=es-la" style="margin: 0 10px; text-decoration: none;">
                      <img src="https://img.icons8.com/color/48/000000/instagram-new--v1.png" alt="Instagram" width="32" />
                  </a>
                  <a href="https://www.facebook.com/GrupoEducativoAvancemos/?locale=es_LA" style="margin: 0 10px; text-decoration: none;">
                      <img src="https://img.icons8.com/color/48/000000/facebook-new.png" alt="Facebook" width="32" />
                  </a>
                  <a href="https://www.linkedin.com/company/grupo-educativo-avancemos" style="margin: 0 10px; text-decoration: none;">
                      <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="LinkedIn" width="32" />
                  </a>
              </div>
              
              <p style="margin-top: 20px; font-size: 12px; color: #777;">
                  <a href="mailto:auxiliar.mercadeo@avancemos.edu.co " style="color: #96b422;">auxiliar.mercadeo@avancemos.edu.co </a> | 
                  <a href="tel:+573054240301" style="color: #96b422;">305 424 0301</a>
              </p>
          </div>
      </div>
      `;

      successMessage =
        "¡Gracias por tu interés! Hemos recibido tu solicitud y pronto nos pondremos en contacto contigo.";
    } else {
      // --- LÓGICA PARA PARTICIPANTES (tu código original) ---
      const {
        nombre,
        apellido,
        correo,
        celular,
        tDocument,
        NdeIdentidad,
        medio,
        tipoAsistente = "Público General",
      } = body;

      // Datos para Google Sheets
      rowData = {
        Nombre: nombre,
        Apellido: apellido,
        Correo: correo,
        "Contacto (Celular/Teléfono)": celular,
        TipoDocumento: tDocument,
        NumeroIdentidad: NdeIdentidad,
        ComoNosEncontro: medio,
        "Es Patrocinador": "No", // Marcamos como no patrocinador
        FechaInscripcion: fecha,
        "Tipo Asistente": tipoAsistente,
      };

      // Contenido de los correos para participantes
      adminEmailSubject = "¡Nueva inscripción al Congreso!";
      adminEmailHtml = `
        <h1>Nueva Inscripción Recibida</h1>
        <p><strong>Nombre:</strong> ${nombre} ${apellido}</p>
        <p><strong>Correo:</strong> ${correo}</p>
        <p><strong>Celular:</strong> ${celular}</p>
      `;

      userConfirmationSubject =
        "✅ ¡Inscripción Confirmada! Congreso Internacional de Innovación Educativa";
      // Aquí usamos tu HTML original para el participante
      userConfirmationHtml = `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <!-- Encabezado con color de marca -->
          <div style="background-color: #2da836; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">¡Bienvenido(a) al Congreso!</h1>
          </div>
          
          <!-- Contenido del correo -->
          <div style="padding: 25px;">
            <h2 style="font-size: 20px; color: #333;">¡Hola, ${nombre}! 👋</h2>
            
            <p>¡Gracias por inscribirte a nuestro <strong>I Congreso Internacional de Innovación Educativa y Prácticas Pedagógicas Inclusivas</strong>! 🎉</p>
            
            <p>Es un honor contar con tu participación en este espacio diseñado para compartir experiencias, fortalecer saberes y construir juntos una educación más <strong>transformadora, inclusiva y pertinente</strong> para los desafíos del presente. 💡</p>
            
            <p>Muy pronto recibirás más información sobre la agenda, ponencias y recursos exclusivos del evento. ¡Mantente atento(a) a tu correo! 🗓️</p>
            
            <p>Si tienes alguna pregunta o necesitas asistencia, no dudes en escribirnos al correo <strong>auxiliar.mercadeo@avancemos.edu.co </strong> . ¡Nos alegra que hagas parte de esta gran experiencia!</p>
          </div>
          
          <!-- Footer -->
          <div style="background-color: #f7f7f7; padding: 20px; text-align: center;">
            <p style="margin: 0 0 10px 0;">Cordialmente,</p>
            <p style="margin: 0; font-weight: bold;">El Equipo Organizador</p>
            <p style="margin: 0; font-style: italic; color: #555;">Grupo Educativo Avancemos</p>
            
            <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 20px 0;">
            
            <!-- Redes Sociales -->
            <p style="margin: 0 0 15px 0; font-weight: bold;">Síguenos para no perderte ninguna novedad:</p>
            <div>
              <a href="https://www.instagram.com/grupoeducativoavancemos/?hl=es-la" style="margin: 0 10px; text-decoration: none;">
                <img src="https://img.icons8.com/color/48/000000/instagram-new--v1.png" alt="Instagram" width="32" />
              </a>
              <a href="https://www.facebook.com/GrupoEducativoAvancemos/?locale=es_LA" style="margin: 0 10px; text-decoration: none;">
                <img src="https://img.icons8.com/color/48/000000/facebook-new.png" alt="Facebook" width="32" />
              </a>
              <a href="https://www.linkedin.com/company/grupo-educativo-avancemos" style="margin: 0 10px; text-decoration: none;">
                <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="LinkedIn" width="32" />
              </a>
            </div>
            
            <p style="margin-top: 20px; font-size: 12px; color: #777;">
              <a href="mailto:auxiliar.mercadeo@avancemos.edu.co" style="color: #96b422;">auxiliar.mercadeo@avancemos.edu.co</a> | 
              <a href="tel:+573054240301" style="color: #96b422;">305 424 0301</a>
            </p>
          </div>
        </div>
      `;
      successMessage =
        "¡Inscripción exitosa! Revisa tu correo para la confirmación.";
    }

    // --- 4. Ejecutar las acciones comunes ---

    // Guardar en Google Sheets
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];
    await sheet.addRow(rowData);

    // Enviar email al administrador
    await resend.emails.send({
      from: fromEmail,
      to: [adminEmail, "auxiliar.mercadeo@avancemos.edu.co"],
      subject: adminEmailSubject,
      html: adminEmailHtml,
    });

    // Enviar email de confirmación al usuario
    await resend.emails.send({
      from: fromEmail,
      to: [body.correo], // 'correo' es el campo común en ambos formularios
      subject: userConfirmationSubject,
      html: userConfirmationHtml,
    });

    // --- 5. Respuesta Exitosa ---
    return new Response(
      JSON.stringify({ success: true, message: successMessage }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error en la API de inscripción:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Hubo un error al procesar la solicitud.",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
