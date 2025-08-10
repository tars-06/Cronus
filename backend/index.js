import express from 'express'
import http from 'http'
import {Server} from 'socket.io'
const app = express()


const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: '*',
    },
})
const rooms = new Map();

io.on("connection",(socket)=>{
    console.log("User connected!", socket.id);

    let currentRoom = null;
    let currentUser = null;

    socket.on("join",({roomId, userName})=>{
        if(currentRoom){
            socket.leave(currentRoom)
            rooms.get(currentRoom).delete(currentUser)
            io.to(currentRoom).emit("userJoined", Array.from(rooms.get(currentRoom)))
        }

        currentRoom = roomId;
        currentUser = userName;

        socket.join(roomId)

        if(!rooms.has(roomId)){
            rooms.set(roomId, new Set());
        }

        rooms.get(roomId).add(userName)

        io.to(roomId).emit("userJoined", Array.from(rooms.get(currentRoom)));
        console.log("User joined room", roomId)
    })

});



const PORT = process.env.PORT || 5000

server.listen(PORT, ()=>{
    console.log(`server is working on ${PORT}`)
})