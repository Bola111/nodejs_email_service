const userRoute = require("./User/routes");
const depositRoute = require("./User/deposits.js")
module.exports = (app) => {
    app.use("/user", userRoute);
    app.use("/newdeposit", depositRoute)
}