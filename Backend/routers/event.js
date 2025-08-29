import express from 'express'
import authRequired from '../middlewares/authRequired.js'
import { 
    handleCreateEvent, 
    handleGetAllEvents, 
    handleGetEventById } from '../controllers/event.js'
const router = express.Router()


//GET ALL EVENTS
router.get('/', handleGetAllEvents) 

//GET EVENT BY ID
router.get('/:id', handleGetEventById)

//CREATE A NEW EVENT
router.post('/create', authRequired, handleCreateEvent)

//UPDATE AN EVENT

//DELETE AN EVENT

const eventRouter = router
export default eventRouter