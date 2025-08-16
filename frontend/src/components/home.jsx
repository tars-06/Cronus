import React, {useState} from 'react';
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import '../fonts.css'
import "./home.css"
const Home = ({roomId, setRoomId, userName, setUserName, joinRoom}) => {
    
    const handleSubmit = (e) => {
        e.preventDefault(); // prevent page reload
        if (roomId.trim() && userName.trim()) {
            joinRoom();
        }
    };

    return (
        <div className='container-fluid'>
            <div className="row justify-content-center align-items-center">
                <div className="col-12 col-md-6">
                    <div className="card shadow-sm p-2 mb-5 bg-secondary rounded">
                        <div className="card-body text-center bg-dark">
                            <div className="d-flex align-items-center justify-content-center">
                                <img
                                    className="img-fluid mb-2 me-5 rounded"
                                    src="/assets/cronus1.svg"
                                    alt="Cronus"
                                    style={{width: "150px", height:"200px", objectFit: "cover" }}
                                />
                                <h1 className="text-light my-2 animated-gradient fraktur-bold">𝔠  𝔯  𝔬  𝔫  𝔲́  𝔰</h1>
                            </div>
                            <h4 className='text-light mt-4 mb-4 goudy'>Enter the Room Id</h4>
                        
                        <form onSubmit={handleSubmit}>
                        
                            <div className="form-group w-100 mb-4">
                                <input type="text" className="form-control mb-2" placeholder="Room Id" value={roomId} onChange={e=>setRoomId(e.target.value)} />
                            </div>
    
                            <div className="form-group w-100 mb-4">
                                <input type="text" className="form-control mb-2" placeholder="Username" value={userName} onChange={e=>setUserName(e.target.value)} />
                            </div>
    
                            <button className='btn btn-success btn-lg btn-block cormorant' onClick={joinRoom}>JOIN</button>
                        </form>                    
                        
                            <p className='mt-3 text-light'>Don't have a room id? <span className='text-success p-1' style={{cursor: "pointer"}}>New Room</span> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Home