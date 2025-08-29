import { model, Schema } from "mongoose";
import bcrypt from 'bcryptjs'

const userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    salt:{
        type:String,
    },
    role:{
        type:String,
        enum:["ADMIN", "USER"],
        default:"USER"
    }

}, { timestamps:true })

userSchema.pre('save', async function(next){
    const user = this
    if(!user.isModified('password')){
        return next()
    }

    //Generate Unique Salt
    const salt = await bcrypt.genSalt(10)
    user.salt = salt

    //Generate Hashed Password
    const hashedPassword = await bcrypt.hash(user.password + process.env.PEPPER, salt)
    user.password = hashedPassword

    next()
})

//MATCHING PASSWORD
userSchema.methods.comparePassword = async function(plainPassword){
    return bcrypt.compare(plainPassword + process.env.PEPPER , this.password)
}

const User = model('User', userSchema)
export default User