let express=require("express");
let cors=require("cors");
const connection = require("./Config/db");
const Userroutes = require("./Routes/User.routes");
require("dotenv").config();
let cookieParser=require("cookie-parser");
let app=express();
app.use(express.json());
app.use(cors({
      origin:"http://localhost:5173",
      credentials:true
}));
app.use(cookieParser());

app.use("/api/user",Userroutes);


app.listen(process.env.PORT || 9000 ,async()=>{
try {
     await connection
     console.log("Server on Running Port",process.env.PORT)
} catch (error) {
      console.log(error);
}
})

