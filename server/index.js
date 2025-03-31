import { Server } from 'socket.io'
import express from 'express'
import { createServer } from 'http'
import sequelize from './config/connection.js'

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

    socket.on('history', (args) => {
        console.log('histMain', history_Main)
        if (!history_Main) history_Main = [...args]
        else if (historyChecker(history_Main, args)) {
            console.log('history accurate')
        }
        console.log('history\n', args)
    })
})

wsServer.on('error', (err) => {
    console.log(err) 
})

httpServer.listen(port)

function historyChecker (history, newHistory) {
    const length = history.length
    const newLength = newHistory.length

    console.log('hist', history)

    if (length <= 1) return false
    else if( history[length-1][0] === newHistory[newLength-2][1] && history[length-1][0] === newHistory[newLength-2][1] ) return true

    return false
}

async function checkSequelize(){
    try {
        await sequelize.authenticate()
        console.log('Connection to db established')
    } catch (err) {
        console.err('Unable to connect to db:', err)
    }
}

checkSequelize()