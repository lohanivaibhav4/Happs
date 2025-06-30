import mongoose from 'mongoose'
import User from './UserSchema.js'

const scheduleSchema = new mongoose.Schema({
    startDate:{
        type: Date,
        required:true
    },
    endDate:{
        type: Date
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
        ref:User,
        required:true
    },
    perks:[String],
    registrationRequired:{
        type:Boolean,
        required:true
    },
    registrationLink:String,
    createdAt: {
        type:Date,
        default: Date.now()
    },
    status:{
        type:String,
        enum:['Upcoming', 'Ongoing', 'Postponed', 'Cancelled', 'Completed'],
        default:'Upcoming'
    },
    peopleIntrested: {
        type:Number, 
        default: 0
    }

})

export default mongoose.model('Event',eventSchema)