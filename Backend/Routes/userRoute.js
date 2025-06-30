import express from 'express'
import User from '../Models/UserSchema.js' 
const router = express.Router()

//! REGISTER USER
router.post('/register',async (req, res)=>{
    const { name, email, password } = req.body
    const user = await User.findOne({email})
    if(user.email == email){
        return res.status(409).json({message:"User Already Exists!"})
    }
    const newUser = new User({
        name,
        email, 
        password
    })
    await newUser
    .save()
    .then((newUser)=>{
        res.status(201).json({
            message:"User Created Successfully!",
            newUser
        })
    })
    .catch((err)=>{
        console.log("Error Creating User",err)
        res.status(500)
    })
})

//! LOGIN USER
router.post('/login', async(req, res)=>{
    const { email, password } = req.body
    const user = await User.findOne({email})
    if(!user || password !== user.password){
        res.status(401).send("Username Or Password Is Incorrect!")
    }
    res.status(200).json({
        message:"Login Successful!",
        user
    })
})

export default router


