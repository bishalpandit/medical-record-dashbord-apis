import mongoose from 'mongoose'
import validator from 'validator'

const { Schema } = mongoose

const medicalRecordSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    from: {
        type: Date,
        required: true,
    },
    to: {
        type: Date,
        required: true,
    },
    notes: {
        type: String,
        required: false
    }

}, {
    timestamps: true
})


const medicalRecordModel = new mongoose.model('MedicalRecord', medicalRecordSchema)

export default medicalRecordModel;