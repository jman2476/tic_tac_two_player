import { Server } from 'socket.io'
import express from 'express'
import { createServer } from 'http'
import cors from 'cors'

const app = express()

const httpServer = createServer(app)
const port = 4500
const wsServer = new Server(httpServer, {
    cors: {
        origin: 'http://127.0.0.1:5173'
    }
})

// wsServer.engine.use(cors({origin: 'http://127.0.0.1'}))


wsServer.on('connection', (socket) => {
    console.log('connection established', socket.id)
})

httpServer.listen(port)