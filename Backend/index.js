import express from 'express'
import { configDotenv } from 'dotenv'
import mongoose from 'mongoose'

configDotenv()
const app = express()
const PORT  = process.env.PORT
const api = process.env.API

//! MIDDLEWARES
app.use(express.json())

//! CONNECTING DATABASE
mongoose.connect(process.env.MONGO_URI)
.then(()=>{console.log("Database Connected")})
.catch((err)=>{console.log("Error Connecting To Database",err)})


//! ROUTES
import userRouter from './Routes/userRoute.js'
app.use(`${api}/auth`, userRouter)

import eventRouter from './Routes/eventRoute.js'
app.use(`${api}/events`, eventRouter)



//! START THE SERVER
app.listen(PORT, ()=>{
    console.log(`Server Is Running At Port ${PORT}` )
})