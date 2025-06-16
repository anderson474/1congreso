// Ubicación del archivo: app/politica-de-datos/page.js

// 1. Importa tu componente Particle
import Particle from '@/components/Particle';

const PoliticaDeDatosPage = () => {
  return (
    // El contenedor principal no necesita clases especiales
    <div>
      {/* 2. Contenedor del fondo. Fijo, ocupa toda la pantalla y está detrás de todo (-z-10) */}
      <div className="fixed inset-0 -z-10">
        <Particle />
      </div>

      {/* 3. Contenedor del contenido. 'relative' crea un contexto de apilamiento para que z-10 funcione */}
      <main className="relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 max-w-4xl">
          
          {/* 4. Se cambian los colores del texto a tonos claros para que contrasten con el fondo oscuro */}
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-verde">
            Política de Tratamiento de Datos Personales
          </h1>
          
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              En cumplimiento de la Ley 1581 de 2012 y sus Decretos reglamentarios (Decreto 1727 de 2009, Decreto 2952 de 2010, Decreto 1377 de 2013 y Decreto 886 de 2014), usted autoriza a la <strong className="font-semibold text-black">FUNDACIÓN AVANCEMOS S.I</strong> para que recopile, almacene, use y suprima los datos personales por usted suministrados, con el fin de remitir información de temas académicos, administrativos y publicitarios.
            </p>

            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg border border-white/20">
                <h2 className="text-2xl font-semibold mb-4 text-verde">
                  Autorización de Privacidad
                </h2>
                <p className="mb-4">
                  Declaro bajo la gravedad de juramento que todos los datos aquí contenidos son exactos y veraces y que la <strong className="font-semibold text-black">FUNDACIÓN AVANCEMOS S.I</strong>, con NIT <strong className="font-semibold text-black">900.673.949-6</strong>, me ha informado de manera previa y expresa, los derechos que me asisten y la finalidad, tratamiento y vigencia que se le dará a mis datos personales.
                </p>
                <p>
                  La <strong className="font-semibold text-black">FUNDACIÓN AVANCEMOS S.I</strong> informa al titular de los datos personales que le asisten los siguientes derechos:
                </p>
                <ol className="list-decimal list-inside space-y-3 mt-4">
                  <li>Conocer, actualizar y rectificar sus datos personales frente a FUNDACIÓN AVANCEMOS S.I como Responsable o Encargado o frente a cualquier Encargado del Tratamiento del dato.</li>
                  <li>Solicitar prueba de la autorización otorgada.</li>
                  <li>Ser informado por FUNDACIÓN AVANCEMOS S.I del uso que le ha dado a sus datos personales.</li>
                  <li>Elevar cualquier solicitud, petición, queja o reclamo referente al tratamiento de datos personales.</li>
                  <li>Presentar ante la Superintendencia de Industria y Comercio quejas, solicitudes y reclamos.</li>
                  <li>Revocar la autorización y/o solicitar ante la Superintendencia de Industria y Comercio la supresión del dato cuando en el tratamiento no se respeten los principios, derechos y garantías constitucionales y legales.</li>
                  <li>Acceder en forma gratuita a sus datos personales.</li>
                </ol>
            </div>

            <p className="text-center italic text-gray-700">
              En consecuencia de lo anterior, autorizo expresamente de manera libre, previa, voluntaria y debidamente informada, a la <strong className="font-semibold text-verde">FUNDACIÓN AVANCEMOS S.I</strong>, para que haga el tratamiento de mis datos, de acuerdo con las finalidades y condiciones mencionadas en el aviso de privacidad, el cual declaro conocer y aceptar.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PoliticaDeDatosPage;