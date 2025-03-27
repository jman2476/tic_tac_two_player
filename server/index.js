import { Server } from 'socket.io'
import express from 'express'
import { createServer } from 'http'

const app = express()

const httpServer = createServer(app)
const port = 4500
const wsServer = new Server(httpServer, {
    cors: {
        origin: ['http://127.0.0.1:5173', 'http://127.0.0.1:8005']
    }
})

app.get('/', (req, res) => {res.send("hello")})

wsServer.on('connection', (socket) => {
    console.log('connection established', socket.id)

    socket.emit('message', 'you are connected to the server')

    socket.on('message', (args) => {
        console.log(args)
    })
})

wsServer.on('error', (err) => {
    console.log(err)
})

httpServer.listen(port)