let User = require("./model");
let mailer = require("../config/mailer");

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
        mailer.depositMail(req.body.email, req.body.name, req.body.deposit, req.body.date)
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