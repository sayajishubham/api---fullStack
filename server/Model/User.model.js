let mongoose=require("mongoose");


let UserSchema=new mongoose.Schema({
    Username:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true,
        unique: true,
    },
    Password :{
        type:String,
        required:true
    },
    Role:{
        type:String,
        require:true
    },
    Location:{
        type:String,
        required:true
    },
    DOB:{
        type:Date,
        require:true
    }
})

let Usermodel=mongoose.model("User",UserSchema);

module.exports=Usermodel