import mongoose from 'mongoose'
import validator from 'validator'

const { Schema } = mongoose

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    }, 
    email: {
        type: String,
        required: true,
        unique: true,
    }, 
    password: {
        type: String,
        required: true,
    }

}, {
    timestamps: true
})


const userModel = new mongoose.model('User', userSchema)

export default userModel;