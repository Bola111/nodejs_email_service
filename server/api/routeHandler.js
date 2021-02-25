const userRoute = require("./User/routes");
const depositRoute = require("./User/deposits.js")
const approvedRoute = require("./User/approved.js")
const adminnotifyMail = require("./User/depositnotify.js")
module.exports = (app) => {
    app.use("/user", userRoute);
    app.use("/newdeposit", depositRoute);
    app.use('/approved', approvedRoute);
    app.use('/notifyadmin', adminnotifyMail)
}