import express from 'express'
import { getMedicalRecords, createMedicalRecord } from '../controllers/medicalRecord.js'
import protect from '../middlewares/authMiddleware.js'

const router = express.Router()

//@desc shows all Medical Records
//@route GET /api/medical-records/
//@access Protected
router.route('/').get(protect, getMedicalRecords)

//@desc creates a new Medical Record
//@route POST /api/medical-records/create
//@access Protected
router.route('/create').post(protect, createMedicalRecord)


export default router
