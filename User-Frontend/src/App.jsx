import React, { useEffect } from 'react'
import { GetMapping } from './ConnectingBackEnd/Axios';
import { useState } from 'react';
import Get from './Pages/Get';
import Post from './Pages/Post';
import Navbar from './Pages/Navbar';
import Put from './Pages/Put';
import Delete from './Pages/Delete';
import { Route,Routes } from 'react-router-dom';

function App() {
  // const [user,setUser] = useState([]);

  // useEffect(()=>{
  //   GetMapping()
  //     .then(res=>setUser(res.data))
  //     .catch(err=>console.error(err))
  // },[]);
  
  return (
    <div>
      <Navbar/>
      <h1> The Home Page </h1>
      {/* <h1>
        All User :
      </h1>
      {
        user.map(u=>(
          <div key={u.id}>
            <p>{u.name} , {u.age} years old</p>
            <p> {u.course}</p>
              {u.subject.map((sub, index) => (
                <span key={index}>{sub+"   "}</span>
              ))}
            </div>
        ))
      } */}


      <Routes>
        <Route path="/get" element={<Get />} />
        <Route path="/post" element={<Post />} />
        <Route path="/put" element={<Put />} />
        <Route path="/delete" element={<Delete />} />
      </Routes>
    </div>
  )
}

export default App