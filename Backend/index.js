import express from 'express'
import { configDotenv } from 'dotenv'
import connectDB from './services/connectDB.js'
import eventRouter from './routers/event.js'
import userRouter from './routers/user.js'
import cookieParser from 'cookie-parser'
configDotenv()

const MONGO_URI = process.env.MONGO_URI
const PORT = process.env.PORT || 5000
const app = express()

//CONNECT DATABASE
connectDB(MONGO_URI)

//MIDDLEWARES
app.use(express.json())
app.use(express.urlencoded({ extended:false }))
app.use(cookieParser())

//ROUTERS
app.use('/events', eventRouter)
app.use('/', userRouter)

//START SERVER
app.listen(PORT,()=>{
    console.log(`Server Started At Port ${PORT}`)
})