const nodemailer = require('nodemailer');
const hbs = require("nodemailer-express-handlebars")

let transporter = nodemailer.createTransport({
    service: 'Mailgun',
    port: process.env.MAILGUN_SMTP_PORT,
    auth: {
        user: process.env.MAILGUN_SMTP_LOGIN,
        pass: process.env.MAILGUN_SMTP_PASSWORD,
        api_key: process.env.MAILGUN_API_KEY,
        domain: process.env.MAILGUN_DOMAIN
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