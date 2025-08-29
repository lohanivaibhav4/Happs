import {Schema, model} from "mongoose";
import User from "./user.js";

const eventSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    postedBy:{
        type:Schema.Types.ObjectId,
        ref:User
    },
    eventDate:{
        type: Date,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    eventType:{
        type:String,
        required:true
    },
    entryType:{
        type:String,
        enum:[ "Free","Invite_Only","Paid" ],
        required:true
    },
    registrationRequired:{
        type:Boolean,
        required:true
    },
    registrationLink:{
        type:String,
    },
    perks:{
        type:[String],
        default:[]
    },
    peopleInterested:{
        type:Number,
        default:0
    },
    organizedBy:{
        type:String
    }

},{ timestamps:true })

const Event = model('Event', eventSchema)
export default Event
