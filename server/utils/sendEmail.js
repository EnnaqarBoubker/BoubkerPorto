const nodemailer = require('nodemailer')

const sendEmail = (email, token, subject, url) => {
    const mailTransporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });

    const mailDetails = {
        from: process.env.EMAIL,
        to: email,
        subject: subject,
        text: 'test',
        html: url
    };

    try {
        mailTransporter.sendMail(mailDetails)
    } catch (error) {
        console.log(error);
    }
}


module.exports = sendEmail