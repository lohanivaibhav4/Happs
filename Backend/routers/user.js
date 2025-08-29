import express from 'express'
import { handleUserSignin, handleUserSignout, handleUserSignup } from '../controllers/user.js'
const router = express.Router()


//SIGNUP
router.post('/signup', handleUserSignup)

//SIGNIN
router.post('/signin', handleUserSignin)

//SIGNOUT
router.post('/signout', handleUserSignout)

const userRouter = router
export default userRouter