import React from 'react'
import "./editor.css"
import Editor from '@monaco-editor/react'

const EditorPage=({roomId, copyRoomId, language,setLanguage,code,setCode,handleCodeChange, copySuccess, users, typing, handleLanguageChange, leaveRoom})=> {
  return (
    <div className="editor-container">
      <div className="sidebar">
        <div className="room-info">
          <h2>Code Room: {roomId}</h2>
          <button className='copy-button' onClick={copyRoomId}>Copy Id</button>
          {copySuccess && <span className='copy-success'>{copySuccess}</span>}
        </div>
        <h3>Users in Room: </h3>
        <ul>
          {
            users.map((user,index)=>
              <li key={index}>{user.slice(0,8)}</li>
            )
          }
        </ul>
        <p className='typing-indicator'>{typing}</p>
        <select className='language-selector' value={language} onChange={handleLanguageChange}>
          <option value="javascript">Javascript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="cpp">C++</option>
        </select>
        <button className='leave-button' onClick={leaveRoom}>Leave Room</button>
      </div>
      <div className='editor-wrapper'>
        <Editor
          height="100%"
          language={language}
          value={code}
          onChange={handleCodeChange}
          theme="vs-dark"
          options={{
            minimap: { enabled: false },
            fontSize: 14,
          }}
        />
      </div>
    </div>
  )
}

export default EditorPage
