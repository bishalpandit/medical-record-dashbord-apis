import userModel from '../models/user.js'
import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js';


//@desc register a new user
//@route POST /api/users/register
//@access Public
export const registerUser = asyncHandler(async (req, res) => {

    const { email, name, password } = req.body

    const userExists = await userModel.findOne({ email: email })

    if (userExists) {
        res.status(400)
        throw new Error('User already exists. Login instead!')
    }

    const userDoc = await userModel.create({
        name,
        email,
        password,
    })

    if (userDoc) {
        res.status(200).json({
            _id: userDoc._id,
            name: userDoc.name,
            email: userDoc.email,
            token: generateToken(userDoc._id)
        })
    }
    else {
        res.status(400)
        throw new Error('Could not register! Something went wrong!')
    }

})

//@desc authenticate user to login
//@route POST /api/users/login
//@access Public

export const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email })

    if (user && user.password === password) {
        res.json(
            {
                _id: user._id,
                name: user.name,
                email: user.email,
                token: generateToken(user._id)
            }
        )
    }
    else {
        res.status(401)
        throw new Error('Invalid email or password')
    }

})
