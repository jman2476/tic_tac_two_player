import React, { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./styles.css"
// import { ws } from './socket'

import App from "./App"

// import { WebSocket } from 'ws'

const ws = new WebSocket('wss://127.0.0.1:4500')

ws.addEventListener("open", (event) => {
    ws.send('Heyo server boyo')
})

ws.addEventListener('error', (error) => {
    console.log('WebSocket error:', error)
})

const root = createRoot(document.getElementById('root'))
root.render(
    <StrictMode>
        <App />
    </StrictMode>
)