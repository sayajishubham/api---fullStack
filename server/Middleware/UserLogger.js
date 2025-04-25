const fs = require("fs");

let userLogger = (request, response, next) => {
    if (!request.User) {
        console.log("User data not found for logging.");
        return next();
    }

    let { Email, Username, Role } = request.User;

    const log = `User: ${Username}, Email: ${Email}, Role: ${Role}, Time: ${new Date().toLocaleString()}\n`;

    try {
        fs.appendFileSync("./log.txt", log);
        next();
    } catch (err) {
        console.log(err.message);
        next();
    }
};

module.exports = userLogger;
