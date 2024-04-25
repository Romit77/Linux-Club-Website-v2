const nodeMailer = require('nodemailer');
require('dotenv').config();

export const sendMail = async({email , message})=>{
  
  try {
    const transporter = nodeMailer.createTransport({
        service: 'gmail',
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // Use `true` for port 465, `false` for all other ports
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD,
        },
        });

        await new Promise((resolve, reject) => {
          // verify connection configuration
          transporter.verify(function (error, success) {
              if (error) {
                  console.log(error);
                  reject(error);
              } else {
                  console.log("Server is ready to take our messages");
                  resolve(success);
              }
          });
      });
        
        const mailData = {
          from:{
            name:'Linux Club',
            address: process.env.EMAIL,
          },
          to: process.env.EMAIL,
          subject: 'Doubt from the student',
          text: `From: ${email}\n\n${message}`,
      };
      
      await new Promise(async(resolve, reject) => {
        // send mail
         await transporter.sendMail(mailData, (err, info) => {
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