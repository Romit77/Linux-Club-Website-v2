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
        
        const mailData = {
          from:{
            name:'Linux Club',
            address: email,
          },
          to: process.env.EMAIL,
          subject: 'Doubt from the student',
          text: `From: ${email}\n\n${message}`,
      };
      
      await new Promise((resolve, reject) => {
        // send mail
        transporter.sendMail(mailData, (err, info) => {
            if (err) {
                console.error(err);
                reject(err);
            } else {
                console.log(info);
                resolve(info);
            }
        });
    });

  } catch (error) {
      console.log("Check the helper function" ,error);
  }
}