const nodeMailer = require("nodemailer");

const sendRegistrationMail = (email) => {
  const transpotor = nodeMailer.createTransport({
    secure: true,
    port: 587,
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.MAIL_PASSWORD,
    },
  });
  const mailOptions={
    from:"preetbhardwaj517@gmail.com",
    to:email,
    subject:"registration",
    text:"Your account has been created successfully"
  }
  transpotor.sendMail(mailOptions,(err,info)=>{
    if(err){
        return console.log("err mail",err);
    }else{
        return console.log("mail has been send",info.response);
    }
  })
};

module.exports = { sendRegistrationMail };
