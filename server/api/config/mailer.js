const nodemailer = require('nodemailer');
const hbs = require("nodemailer-express-handlebars")

let transporter = nodemailer.createTransport({
    service: 'Mailgun',
    host: process.env.MAILGUN_HOST,
    port: process.env.MAILGUN_SMTP_PORT,
    auth: {
        user: process.env.MAILGUN_USERNAME,
        pass: process.env.MAILGUN_PASSWORD
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



exports.welcomeMail = (email, name, date) => transporter.sendMail({
    from: '"Chsterfinace" <support@checterfinance.com>',
    to: email,
    subject: "Account Creation",
    template: "welcome",
    context: {
        user: name,
        date: date
    }
});

exports.depositMail = (email, name, deposit, date) => transporter.sendMail({
    from: '"Chsterfinace" <support@checterfinance.com>',
    to: email,
    subject: "New Deposits",
    template: "pendingdeposits",
    context: {
        user:  name,
        deposit: deposit,
        date: date
    }
});