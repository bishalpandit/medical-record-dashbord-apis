import medicalRecordModel from "../models/medicalRecord.js"
import asyncHandler from "express-async-handler";

//@desc shows all Medical Records
//@route GET /api/medical-records/
//@access Protected

export const getMedicalRecords = asyncHandler(async (req, res) => {

    const name = req.query.name
    const startDate = req.query.startDate
    const endDate = req.query.endDate


    let medicalRecords

    if (name) {
        medicalRecords = await medicalRecordModel.find({ name: { $regex: name, $options: 'i' } })
    }
    else if (startDate && endDate) {
        medicalRecords = await medicalRecordModel.find({
            $and: [
                { from: { $gte: new Date(startDate) } },
                { to: { $lte: new Date(endDate) } }
            ]
        })
    } 
    else {
        medicalRecords = await medicalRecordModel.find({})
    }

    if (medicalRecords)
        res.json(medicalRecords)
    else {
        res.status(404)
        throw new Error('No medical records found!')
    }
})


//@desc creates a new Medical Record
//@route POST /api/medical-records/create
//@access Protected

export const createMedicalRecord = asyncHandler(async (req, res) => {

    const MedicalRecordData = req.body

    const medicalRecord = await medicalRecordModel.create({
        ...MedicalRecordData,
        user: req.user._id
    })

    if (medicalRecord) {

        res.status(201).json({
            _id: medicalRecord._id,
            name: medicalRecord.name,
            to: medicalRecord.to,
            from: medicalRecord.from,
            notes: medicalRecord.notes
        })
    }
    else {
        res.status(400)
        throw new Error('Record not created!')
    }


})