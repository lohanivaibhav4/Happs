import express from 'express'
import User from '../Models/UserSchema.js'
import Events from "../Models/EventSchema.js"

const router = express.Router()

//! GET ALL EVENTS 
router.get("/", async (req, res)=>{
    
})

export default router