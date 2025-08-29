import Event from '../models/event.js'

export async function handleGetAllEvents(req, res){
    const allEvents = await Event.find({})
    res.json({allEvents})
}

export async function handleGetEventById(req, res){
    const eventId = req.params.id
    const eventFound = await Event.findById({_id:eventId})
    if(!eventFound){
        return res.status(404).json({error:"Requested Event Not Found!"})
    }
    res.json({eventFound})
}

export async function handleCreateEvent(req, res){
    const { title, description, ...rest } = req.body
    const newEvent = new Event({
        title,
        description,
        ...rest
    })
    await newEvent
    .save()
    .then(()=>res.json({newEvent}))
    .catch((err)=>res.json({err}))
    
}