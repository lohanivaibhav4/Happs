import express from 'express'
import { handleGetAllEvents } from '../controllers/event.js'
const router = express.Router()


//GET ALL EVENTS
router.get('/', handleGetAllEvents) 

const eventRouter = router
export default eventRouter