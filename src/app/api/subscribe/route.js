import mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: 'us22',
});

export async function POST(req) {
  try {
    const { nombre, apellido, correo, celular } = await req.json();

    const response = await mailchimp.lists.addListMember(process.env.MAILCHIMP_LIST_ID, {
      email_address: correo,
      status: 'subscribed',
      merge_fields: {
        FNAME: nombre,
        LNAME: apellido,
        PHONE: celular,
      },
    });

    return new Response(
      JSON.stringify({ success: true, message: 'Formulario enviado con éxito!' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, message: 'Error al enviar formulario', error: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
