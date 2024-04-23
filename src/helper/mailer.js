const nodeMailer = require('nodemailer');
require('dotenv').config();

export const sendMail = async({email , message})=>{
  
  try {
    const transporter = nodeMailer.createTransport({
        service: 'gmail',
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // Use `true` for port 465, `false` for all other ports
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD,
        },
        });
        
        const info = await transporter.sendMail({
            from:{
              name:'Linux Club',
              address: process.env.EMAIL,
            },
            to: email,
            subject: 'Message from my website',
            text: "Hello world" ,
            });
  } catch (error) {
      console.log("Check the helper function" ,error);
  }
}