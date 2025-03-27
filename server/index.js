import { Server } from 'socket.io'
import express from 'express'
import { createServer } from 'http'

const app = express()

const httpServer = createServer(app)
const port = 4500
const wsServer = new Server(httpServer, {
    cors: {
        origin: 'http://127.0.0.1:5173'
    }
})

app.get('/', (req, res) => {res.send("hello")})

wsServer.on('connection', (socket) => {
    console.log('connection established', socket.id)
})

httpServer.listen(port)