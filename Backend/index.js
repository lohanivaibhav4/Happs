import express from 'express'
import { configDotenv } from 'dotenv'
import connectDB from './services/connectDB.js'
import eventRouter from './routers/event.js'
configDotenv()

const MONGO_URI = process.env.MONGO_URI
const PORT = process.env.PORT || 5000
const app = express()

//CONNECT DATABASE
connectDB(MONGO_URI)

//MIDDLEWARES
app.use(express.json())
app.use(express.urlencoded({ extended:false }))

//ROUTERS
app.use('/', eventRouter)

//START SERVER
app.listen(PORT,()=>{
    console.log(`Server Started At Port ${PORT}`)
})