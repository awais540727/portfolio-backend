import express from 'express'
import { emailController } from '../controllers/email.js';

const router = express()

router.post("/send-email" , emailController)


export default router