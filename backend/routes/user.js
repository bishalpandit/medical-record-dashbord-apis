import express from 'express'
import { registerUser, loginUser } from '../controllers/user.js'

const router = express.Router()

//@desc registers new user
//@route POST /api/users/register
//@access Public
router.route('/register').post(registerUser)

//@desc logs in user
//@route POST /api/users/login
//@access Public
router.route('/login').post(loginUser)


export default router
