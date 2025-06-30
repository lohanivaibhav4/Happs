import mongoose from 'mongoose'
import UserSchema from './UserSchema'

const scheduleSchema = new mongoose.Schema({
    startDate:{
        type:Date(),
        required:true
    },
    endDate:{
        type:Date()
    }
})

const eventSchema = new mongoose.Schema({
    
    title:{
        type:String,
        required:true
    },
    description:String,
    schedule:{
        type: [scheduleSchema],
        required:true
    },
    location:{
        type:String,
        required: true
    },
    eventType:{
        type:String,
        required:true
    },
    entryType:{
        type:String,
        enum:['Free', 'Paid', 'Invite Only'],
        required:true
    },
    organizedBy:String,
    postedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:UserSchema,
        required:true
    },
    perks:[String],
    registrationRequired:{
        type:Boolean,
        required:true
    },
    registrationLink:String

})

export default mongoose.model('Event',eventSchema)