import express from 'express'

const router = express.Router()

//@desc shows all Medical Records
//@route GET /api/medical-records/
//@access Protected
router.route('/').get(getMedicalRecords)

//@desc creates a new Medical Record
//@route POST /api/medical-records/create
//@access Protected
router.route('/create').post(createMedicalRecord)

//@desc deletes a Medical Record by ID
//@route DELETE /api/medical-records/delete
//@access Protected
router.route('/delete/:id').delete(deleteMedicalRecord)

export default router
