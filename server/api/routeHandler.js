const userRoute = require("./User/routes");
const depositRoute = require("./User/deposits.js")
const approvedRoute = require("./User/approved.js")
const adminnotifyRoute = require("./User/depositnotify.js")
const declinedRoute = require("./User/declined.js")
const createOtp = require("./User/createOtp")
const verifyOtp = require("./User/verifyotp")
module.exports = (app) => {
    app.use("/user", userRoute);
    app.use("/newdeposit", depositRoute);
    app.use('/approved', approvedRoute);
    app.use('/notifyadmin', adminnotifyRoute);
    app.use('/declined', declinedRoute);
    app.use('/createOtp', createOtp);
    app.use('/verifyOtp', verifyOtp)
}