let User = require("./model");
let mailer = require("../config/mailer");
let firebase = require("../config/firebase")
exports.registerNewUser = async (req, res) => {
    try {
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone
        })
        let addedUser = user;
        if (addedUser) {
            mailer.welcomeMail(req.body.email, req.body.name, req.body.date)
        }


        res.status(200).json({
            msg: "Welcome Onboard",
            data: addedUser
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: err
        })
    }
}


exports.newDeposit = async (req, res) => {
    try {
        mailer.depositMail(req.body.email, req.body.name, req.body.deposit, req.body.plan, req.body.date)
        res.status(200).json({
            msg: "Deposit Succesful",
            data: req.body.deposit
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: err
        })
    }
}

exports.approved = async (req, res) => {
    try {
        mailer.approvedMail(req.body.email, req.body.name, req.body.deposit, req.body.plan, req.body.id)
        res.status(200).json({
            msg: "Deposit Approved",
            data: req.body.id
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: err
        })
    }
}

exports.admindeposit = async (req, res) => {
    try {
        mailer.adminnotifyMail(req.body.name, req.body.deposit, req.body.plan, req.body.date, req.body.id, req.body.paymentmethod)
        res.status(200).json({
            msg: "New Deposit",
            data: req.body.id
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: err
        })
    }
}

exports.declined = async (req, res) => {
    try {
        mailer.declinedMail(req.body.name, req.body.email, req.body.deposit, req.body.plan, req.body.date, req.body.id, req.body.paymentmethod, req.body.reason)
        res.status(200).json({
            msg: "Deposit Declined",
            data: req.body.reason
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: err
        })
    }
}

exports.createOtp = async (req, res) => {
    try {
        const OTP = Math.floor(100000 + Math.random() * 900000)
        firebase.database.collection('otp').add({
            otp: OTP,
            email: req.body.email
        })
        mailer.sendOTP(req.body.email, OTP)
        res.status(200).json({
            message: 'One Time Password Has Been Sent',
            data: req.body.email
        })
    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
}