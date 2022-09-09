import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"

import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"




const app = express()
dotenv.config()

const connect = async()=>{
try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected to mongoDB.")
} 
  catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", ()=>{
    console.log("mongoDB disconnected")
})

mongoose.connection.on("connected", ()=>{
    console.log("mongoDB connected")
})

//middleyer

app.use(express.json());

app.use("/api/auth",authRoute);
app.use("/api/hotels",hotelsRoute);
app.use("/api/users",usersRoute);
app.use("/api/rooms",roomsRoute);

// app.use((err,req,res,next)=>{
//     const errorStatus = err.status || 500;
//     const errorMessage = err.message || "Something went wrong!";
//     return res.status(errorStatus).json({
//         successs:false,
//         status:errorStatus,
//         message:errorMessage,
//         stack:err.stack,
//     });
// });

app.use((req,res,next)=>{
    res.send("Hello from middleware!")
})

// app.get("/users",(req,res)=>{
//     res.send("hello")
// })

app.listen(8800, ()=> {
    connect()
    console.log("connected to backend")
})
