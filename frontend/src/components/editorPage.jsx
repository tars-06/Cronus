import React from 'react'

function EditorPage() {
  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        <div className="dol-md-2 bg-dark text-light d-flex flex-column h-100" style={{boxShadow:"2px 0px 4px rgba(0,0,0,0.1)"}}>
          Member
        </div>
        <div className="col-md-10 text-light d-flex flex-column h-100">
          Editor
        </div>
      </div>
    </div>
  )
}

export default EditorPage
