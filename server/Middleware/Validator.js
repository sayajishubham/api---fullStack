

const isRole=(request,response,next)=>{
    let { Role } = request.User;

    if (Role !== "Admin") {
        return response.status(403).json({
            message: "Only Admin can access this resource!"
        })
    }

    next();
}

module.exports=isRole