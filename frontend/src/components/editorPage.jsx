import React from 'react'

const EditorPage=({roomId, copyRoomId})=> {
  return (
    <div className="editor-container">
      <div className="sidebar">
        <div className="room-info">
          <h2>Code Room: {roomId}</h2>
          <button onClick={copyRoomId}>Copy Id</button>
        </div>
        <h3>Users in Room: </h3>
        <ul>
          <li>Prashant</li>
          <li>Xyz</li>
        </ul>
        <p className='typing-indicator'>user typing....</p>
      </div>
    </div>
  )
}

export default EditorPage
