import { WebSocketServer } from 'ws'

const wss = new WebSocketServer({ port: 4500 })

wss.on('connection', function connection(ws) {
    ws.on('error', (error) => {
        console.log('connection error:', error)
    })

    ws.on('wsClientError', console.log('clienterror'))

    ws.on('message', function(data) {
        console.log('received %s', data)
    })

    ws.send('something')
})