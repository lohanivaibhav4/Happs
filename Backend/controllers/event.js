import Event from '../models/event.js'

export async function handleGetAllEvents(req, res){
    const allEvents = await Event.find({})
    res.json({allEvents})
}