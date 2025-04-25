let jwt = require('jsonwebtoken');
require("dotenv").config();
let isAuth = async (request, response, next) => {
    let Token = request.cookies.Verification_Token;
    if (!Token) {
        return response.status(400).json({
            message: "Invaild token!"
        })
    }
    try {

        const decoded = await jwt.verify(Token, process.env.Private_Key);
        if (!decoded) {
            return response.status(400).json({
                message: "You Can't Access"
            })
        }
        request.User = decoded.User;
        next();
    } catch (error) {
        return response.status(400).json({
            message: err.message
        })
    }


}


module.exports = isAuth;