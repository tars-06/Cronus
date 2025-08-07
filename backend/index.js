import express from 'express'
import http from 'http'
import {Server} from 'socket.io'
const app = express()


const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: "*",
    },
})

const PORT = process.env.PORT || 5000

server.listen(PORT, ()=>{
    console.log(`server is working on ${PORT}`)
})