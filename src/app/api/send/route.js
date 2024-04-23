const nodeMailer = require('nodemailer');
require('dotenv').config();
import { sendMail}  from '../../../helper/mailer';

export const POST = async (req, res) => {
   const {email , message} = await req.json();
   console.log(email , message);
    try {
        await sendMail({ email, message });
        return new Response("successful in sending the mail" , {
            status:200 ,
        })
    } catch (error) {
        console.log('Check the helper function', error);
        return new Response("Failed to create a new prompt" , {
            status:500 ,
        })
    }
}