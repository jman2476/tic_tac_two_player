import { io } from 'socket.io-client'

const socket = io('ws://127.0.0.1:4500')

socket.on('connect', () => {
    console.log('connected to server', socket.id)
})

socket.on('message', (args) => {
    console.log(args)
})

export {socket}