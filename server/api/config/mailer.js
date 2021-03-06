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
    from: '"Chesterfinance" <support@chesterfinance.uk>',
    to: email,
    subject: "Account Creation",
    template: "welcome",
    context: {
        user: name,
        date: date
    }
});

exports.depositMail = (email, name, deposit, plan, date) => transporter.sendMail({
    from: '"Chesterfinance" <support@chesterfinance.uk>',
    to: email,
    subject: "New Deposits",
    template: "pendingdeposits",
    context: {
        user:  name,
        deposit: deposit,
        date: date,
        plan: plan
    }
});

exports.approvedMail = (email, name, deposit, plan, id) => transporter.sendMail({
    from: '"Chesterfinance" <support@chesterfinance.uk>',
    to: email,
    subject: "Deposit Approved",
    template: "approveddeposit",
    context: {
        user:  name,
        deposit: deposit,
        plan: plan,
        id: id
    }
});

exports.adminnotifyMail = (name, deposit, plan, date, id, paymentmethod) => transporter.sendMail({
    from: '"Chesterfinance" <support@chesterfinance.uk>',
    to: 'godswillchibuzororie@gmail.com',
    subject: "New Deposit",
    template: "newdeposit",
    context: {
        user:  name,
        deposit: deposit,
        plan: plan,
        date: date,
        id: id,
        paymentmethod: paymentmethod
    }
});

exports.declinedMail = (name, email, deposit, plan, date, id, paymentmethod, reason) => transporter.sendMail({
    from: '"Chesterfinance" <support@chesterfinance.uk>',
    to: email,
    subject: "Deposit Declined",
    template: "declinedDeposit",
    context: {
        user:  name,
        deposit: deposit,
        plan: plan,
        date: date,
        id: id,
        paymentmethod: paymentmethod,
        reason: reason
    }
});

exports.sendOTP = (name, email, OTP) => transporter.sendMail({
    from: '"Chesterfinance" <support@chesterfinance.uk>',
    to: email,
    subject: "One Time Password",
    template: "otp",
    context: {
        user:  name,
        otp: OTP
    }
})