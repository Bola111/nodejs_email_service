const nodemailer = require('nodemailer');
const hbs = require("nodemailer-express-handlebars")

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    service: 'gmail',
    secure: false,
    port:587,
    auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_PASSWORD
    }
});
const handlebarOptions = {
    viewEngine: {
        extName: '.handlebars',
        partialsDir: 'server/views/partials',
        layoutsDir: 'server/views/layouts',
        defaultLayout: '',
    },
    viewPath: 'server/views/templates',
    extName: '.handlebars',
};

transporter.use('compile', hbs(handlebarOptions));



exports.welcomeMail = (email, name) => transporter.sendMail({
    from: 'SecureInvests',
    to: email,
    subject: "Account Creation",
    template: "welcome",
    context: {
        user: name
    }
});