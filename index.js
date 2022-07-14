import express from 'express'
import nunjucks from 'nunjucks'

import webRouter from './routes/web.js'

const app = express()

nunjucks.configure('views', {
    autoescape: true,
    express: app,
    watch: true
});

app.use('/', webRouter)

app.listen(8080)