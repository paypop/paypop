import express from 'express'
const router = express.Router()

import * as LoginController from '../controllers/API/LoginController.js'
import * as InvoicesController from '../controllers/API/InvoicesController.js'
import jwtVerifyToken from '../middleware/jwt.js'

router.get('/', (request, response) => {
    response.render('gateway.html')
})

router.post('/api/login',  LoginController.login)

router.get('/api/invoices', jwtVerifyToken, InvoicesController.index)

export default router