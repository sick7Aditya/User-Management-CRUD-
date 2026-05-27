import React from 'react'
import { useState , useEffect } from 'react';
import axios from 'axios';
import { GetMapping } from '../ConnectingBackEnd/Axios';
function Get() {

    const [user,setUser] = useState([]);

    useEffect(()=>{
        GetMapping()
          .then(res=>setUser(res.data))
          .catch(err=>console.error(err))
      },[]);
  return (
     <div>
      <h1>
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
      }
    </div>
  )
}

export default Get
