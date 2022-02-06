import express from 'express'
import userRoutes from './routes/user.js'
import medicalRecordRoutes from './routes/medicalRecord.js'
import { connectDB } from './config/db.js'
import dotenv from 'dotenv'
import chalk from 'chalk'
import generateToken from './utils/generateToken.js'
import path from 'path'

const app = express()

//Configs
dotenv.config()
connectDB()

//Parsing Request Body
app.use(express.json())

//Routes
app.use('/api/users', userRoutes)
app.use('/api/medical-records', medicalRecordRoutes)