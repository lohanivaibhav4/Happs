import User from "../models/user.js";
import jwt from 'jsonwebtoken'

export async function handleUserSignup(req, res){
    try{
        const { name, email, password } = req.body
        const newUser = new User({
        name,
        email,
        password
        })
        await newUser
        .save()
        .then(()=> res.status(201).json({message:"User Registered Successfully!"}))
    }catch(error){
        res.json({error})
    }
}

export async function handleUserSignin(req, res){
    try{
        const { email, password } = req.body
        //CHECK IF USER EXISTS
        const user = await User.findOne({email}) 
        if(!user){
            return res.status(400).json({error:"Invalid Credentials!"})
        }
        //VERIFY PASSWORD
        const isMatched = await user.comparePassword(password)
        if(!isMatched){
            return res.status(400).json({error:"Invalid Credentials!"})
        }
        //GENERATE TOKEN
        const token = jwt.sign({id:user._id}, process.env.JWT_SECRET)
        //SET COOKIE
        res.cookie('token',token)
        res.json({token})
    }catch(error){
        res.json({error})
    }

}

export async function handleUserSignout(req, res){
    res.clearCookie('token')
    res.status(200).json({message:"Signed Out Successfully!"})
}

