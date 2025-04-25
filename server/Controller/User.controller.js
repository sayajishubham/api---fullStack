const Usermodel = require("../Model/User.model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require("dotenv").config();

let Usercontroller = {
    Signup: async (request, response) => {
        let { Username, Email, Password, ConfirmPassword, DOB, Role, Location } = request.body;
        if (!Username || !Email || !Password || !ConfirmPassword || !DOB || !Role || !Location) {
            return response.status(400).json({
                message: "Please fill all the fields!"
            });
        }

        if (Password !== ConfirmPassword) {
            return response.status(400).json({
                message: "Password and Confirm Password must match!"
            });
        }

        try {
            let isExits = await Usermodel.findOne({ Email });
            if (isExits) {
                return response.status(400).json({
                    message: "User already registered!"
                });
            }

            bcrypt.hash(Password, 10, async function (err, hash) {
                if (err) {
                    return response.status(400).json({
                        message: err.message
                    });
                }
                if (hash) {
                    let UserSignup = await Usermodel.create({ ...request.body, Password: hash });

                    return response.status(201).json({
                        message: "User registered successfully!",
                        User: UserSignup
                    });
                }
            });
        } catch (error) {
            response.status(400).json({
                message: error.message
            });
        }
    },
    Signin: async (request, response, next) => {

        if (!request.body.Email || !request.body.Password) {
            return response.status(400).json({
                message: "Please fill all fields "
            });
        }
    
        try {
            let isExits = await Usermodel.findOne({ Email: request.body.Email });
            if (!isExits) {
                return response.status(400).json({
                    message: "Please First Register then Login!"
                });
            }
    
            let match = await bcrypt.compare(request.body.Password, isExits.Password);
            if (!match) {
                return response.status(401).json({
                    message: "Invalid Password"
                });
            }
    
            const { Password, ...rest } = isExits._doc;
    
        
            request.User = rest;
    
            let Token = jwt.sign({ User: rest }, process.env.Private_Key, { expiresIn: "5h" });
    
            next();  // Logger ko call hoga
    
            return response.cookie("Verification_Token", Token).status(200).json({
                message: "Login Successfully",
                User: rest,
                Token
            });
    
        } catch (error) {
            return response.status(400).json({
                message: error.message
            });
        }
    },
    getalldata: async (request, response) => {
        try {
            let alldetails = await Usermodel.find();

            let cleanData = alldetails.map(user => {
                const { Password, ...rest } = user._doc;
                return rest;
            });

            response.status(200).json({
                message: "All Users and Admin Details",
                data: cleanData
            });

        } catch (error) {
            return response.status(400).json({
                message: error.message
            });
        }
    },
    getIndividualUser: async (request, response) => {
        let { id } = request.params;
        if (!id) {
            return response.status(400).json({
                message: "Somthing went wrong!"
            })
        }
        try {
            let userdata = await Usermodel.findById({ _id: id });
            if (!userdata) {
                return response.status(400).json({
                    message: "User not Found!"
                })
            }
            return response.status(200).json({
                message: "Data Fetch Successfully",
                user: userdata
            })

        } catch (error) {
            return response.status(400).json({
                message: error.message
            })
        }
    },
    deletebyadmin: async (request, response) => {
        let { id } = request.params;
        if (!id) {
            return response.status(400).json({
                message: "Somthing went wrong!"
            })
        }
        try {
            let deleteuserdata = await Usermodel.findByIdAndDelete({ _id: id });
            if (!deleteuserdata) {
                return response.status(400).json({
                    message: "User not Found!"
                })
            }
            response.status(200).json({
                message: "Delete Successfully"
            })
        } catch (error) {
            return response.status(400).json({
                message: error.message
            })
        }
    },
    Updatebyadmin: async (request, response) => {
        let { id } = request.params;
        if (!id) {
            return response.status(400).json({
                message: "Somthing went wrong!"
            })
        }
        let { Username, Role, DOB, Location,Email } = request.body;
        if (!(Username, Role, DOB, Location,Email)) {
            return response.status(400).json({
                message: "Please fill the Feilds"
            })
        }
        try {
            let updatedata = await Usermodel.findByIdAndUpdate({ _id: id }, { $set: { Username: Username, Role: Role, DOB: DOB, Location: Location ,Email:Email} })

            if (!updatedata) {
                return response.status(400).json({
                    message: "User not Found!"
                })
            }
            response.status(200).json({
                message: "Update Successfully"
            })
        } catch (error) {
            return response.status(400).json({
                message: error.message
            })
        }
    }

}

module.exports = Usercontroller