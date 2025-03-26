import React, { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { io } from 'socket.io-client'

import "./styles.css"
import App from "./App"

const socket = io('ws://127.0.0.1:4500')
socket.on('connect', () => {
    console.log('connected to server', socket.id)
})

const root = createRoot(document.getElementById('root'))
root.render(
    <StrictMode>
        <App />
    </StrictMode>
)