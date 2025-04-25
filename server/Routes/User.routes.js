let express = require("express");
const Usercontroller = require("../Controller/User.controller");
const userLogger = require("../Middleware/UserLogger");
const isAuth = require("../Middleware/Authenticator");
const isRole = require("../Middleware/Validator");

let Userroutes = express.Router();


Userroutes.post("/signup", Usercontroller.Signup);
Userroutes.post("/signin", Usercontroller.Signin,userLogger);
Userroutes.get("/", isAuth,  Usercontroller.getalldata);
Userroutes.get("/:id", isAuth, Usercontroller.getIndividualUser);
Userroutes.delete("/delete/:id", isAuth, isRole, Usercontroller.deletebyadmin);
Userroutes.patch("/update/:id",isAuth,isRole,Usercontroller.Updatebyadmin);


module.exports = Userroutes;