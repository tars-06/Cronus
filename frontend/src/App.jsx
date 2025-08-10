import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/home'
import Editor from './components/editorPage'
import { Route, Routes } from 'react-router-dom'
import io from 'socket.io-client'
import EditorPage from './components/editorPage'

const socket = io("http://localhost:5000")



const App =()=> {

  const [joined, setJoined] = useState(false);
  const [roomId, setRoomId] = useState("")
  const [userName, setUserName] = useState("")

  const joinRoom = ()=>{
    if(roomId && userName){
      socket.emit('join', {roomId, userName})
      setJoined(true)
    }
  }

  if(!joined){
    return(
      <Home 
        roomId={roomId}
        setRoomId={setRoomId}
        userName={userName}
        setUserName={setUserName}
        joinRoom={joinRoom}
        />
    )
  }

  return <EditorPage 
          roomId={roomId}
          copyRoomId={copyRoomId}
          />  
}

export default App
