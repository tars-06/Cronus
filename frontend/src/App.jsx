import { use, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/home'
import Editor from './components/editorPage'
import { Route, Routes } from 'react-router-dom'
import io from 'socket.io-client'
import EditorPage from './components/editorPage'

const socket = io("https://cronus-se1h.onrender.com")



const App =()=> {

  const [joined, setJoined] = useState(false);
  const [roomId, setRoomId] = useState("")
  const [userName, setUserName] = useState("")
  const [language, setLanguage] = useState("javascript")
  const [code, setCode] = useState("// start code here")
  const [copySuccess, setCopySuccess] = useState("")
  const [users, setUsers] = useState([])
  const [typing, setTyping]= useState()
  useEffect(()=>{
  socket.on("userJoined", (users)=>{
    setUsers(users)
    })

    socket.on("codeUpdate", (newCode)=>{
      setCode(newCode);
    })

    socket.on("userTyping", (user)=>{
      setTyping(`${user.slice(0,8)}... is typing`)
      setTimeout(()=>setTyping(""), 2000)
    })

    socket.on("languageUpdate", (newLanguage)=>{
      setLanguage(newLanguage)
    })

    return ()=>{
      socket.off("userJoined")
      socket.off("coeUpdate")
      socket.off("userTyping")
      socket.off("languageUpdate")
    }
  },[])

  useEffect(()=>{
     const handleBeforeUnload=()=>{
      socket.emit("leaveRoom")
     }

     window.addEventListener("beforeunload", handleBeforeUnload)

     return ()=>{
      window.removeEventListener("beforeunload", handleBeforeUnload)
     }
  },[])

  const copyRoomId = ()=>{
    navigator.clipboard.writeText(roomId)
    setCopySuccess("Copied!")
    setTimeout(()=>setCopySuccess(""), 2000) 
  }

  const handleCodeChange=(newCode)=>{
    setCode(newCode)
    socket.emit("codeChange", {roomId, code: newCode});
    socket.emit("typing",{roomId, userName})
  }

  const handleLanguageChange = e=>{
    const newLanguage = e.target.value
    setLanguage(newLanguage)
    socket.emit("languageChange", {roomId, language: newLanguage})
  }

  const leaveRoom = ()=>{
    socket.emit("leaveRoom")
    setJoined(false)
    setRoomId("")
    setUserName("")
    setCode("// start code here")
    setLanguage("javascript")
  }

  useEffect(()=>{
    const handleBeforeUnload=()=>{
      socket.emit("leaveRoom");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);

    }
  },[])

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
          language={language}
          setLanguage={setLanguage}
          code={code}
          setCode={setCode}
          handleCodeChange={handleCodeChange}
          copySuccess={copySuccess}
          users={users}
          typing={typing}
          handleLanguageChange={handleLanguageChange}
          leaveRoom={leaveRoom}
          />  
}

export default App
