import express from 'express'
const router = express.Router()

router.get('/', (request, response) => {
    response.render('gateway.html')
})

export default router