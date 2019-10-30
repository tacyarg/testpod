const usocket = require('uWebSockets.js')

const app = usocket.App()

app.ws('/', {
    open(ws, req) {
        console.log("ws.open")
    },
    message(ws, data, isBinary) {
        let ok = ws.send(message, isBinary);
        console.log("ws.message")
    },
    close(ws, code, message) {
        console.log("ws.close")
    },
}).any('/*', (res, req) => {
    res.writeHeader('Access-Control-Allow-Origin', '*')
    console.log("ANY")
    res.end('ok')
}).get('/*', (res, req) => {
    /* Wildcards - make sure to catch them last */
    res.writeHeader('Access-Control-Allow-Origin', '*')
    console.log("GET")
    res.end('ok')
})

app.listen('localhost', 2002, () => {
    console.log("FUCK")
})