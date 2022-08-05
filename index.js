import express from 'express'
import nunjucks from 'nunjucks'
import { createServer } from 'http'
import { Server } from 'socket.io'

import webRouter from './routes/web.js'

const app = express()
const httpServer = createServer(app)

const io = new Server(httpServer, {  })

import { createClient } from 'redis'

const client = createClient({ url: 'redis://127.0.0.1:6379' })


client.on('error', (err) => console.log('Redis Client Error', err))

await client.connect()


io.on('connection', () => {
    console.log(true)
})

await client.subscribe('tx', (message, channel) => {
    console.log(message, channel)

    io.sockets.emit('tx')
})

nunjucks.configure('views', {
    autoescape: true,
    express: app,
    watch: true
})

app.use(express.static('public'))

app.use('/', webRouter)

httpServer.listen(8080)