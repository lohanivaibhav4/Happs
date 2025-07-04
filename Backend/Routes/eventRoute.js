import express from 'express'
import User from '../Models/UserSchema.js'
import Events from "../Models/EventSchema.js"

const router = express.Router()

//! GET ALL EVENTS 
router.get("/", async (req, res)=>{
    const allEvents = await Events.find()
    if(allEvents.length == 0){
        return res.status(404).json({message:"No Events Found!"})
    }
    res.status(200).json({allEvents})

})

//! CREATE AN EVENT
router.post("/create", async (req, res)=>{
    const {
        title,
        description,
        schedule,
        location,
        eventType,
        entryType,
        organizedBy,
        postedBy,
        perks,
        registrationRequired,
        registrationLink,
    } = req.body

    //! CHECK IF EVENT EXISTS
    const event = await Events.findOne({location})
    if(event?.location == location && event?.schedule.startDate == schedule.startDate){
        return res.status(409).json({message:"Possible Duplicate Event Or A Group Event!"})
    }

    //! IF NOT, CREATE EVENT
    const newEvent = await Events({
        title,
        description,
        schedule,
        location,
        eventType,
        entryType,
        organizedBy,
        postedBy,
        perks,
        registrationRequired,
        registrationLink
    })
    await newEvent
    .save()
    .then((newEvent)=>{
        res.status(201).json({
            message:"Event Created Successfully!",
            newEvent
        })
    })
    .catch((err)=>{
        res.json(err)
    })
})

//! DELETE AN EVENT

//! UPDATE AN EVENT

export default router