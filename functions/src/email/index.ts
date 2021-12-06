import * as functions from 'firebase-functions';

const sendgridApiKey = '';
export const sendEmail = functions.firestore.document('contacts/{documentUid}').onCreate(async(event:any)=>{
    console.log('event',event);
    const contacts: any = event.data();
    const welcomeEmail: any = {
	to: contacts.email,
	from: '',
	templateId: ' ',
	dynamic_template_data:{
	    FirstName: contacts.FirstName,
            LastName: contacts.LastName

        }
    };
        return sendgridSendEmail(welcomeEmail);
});

function sendgridSendEmail(data:any): Promise<void>{
    console.log('Enviando correo con la siguiente información: ', data);
    const sgMail = require('sendgrid/mail')
    sgMail.setApikey(sendgridApiKey);
    return sgMail
        .send(data)
	.then((response:any[])=> console.log('Mensaje enviado ', response))
	.catch((error:any) => console.log('No se pudo enviar el mensaje', error));
} 