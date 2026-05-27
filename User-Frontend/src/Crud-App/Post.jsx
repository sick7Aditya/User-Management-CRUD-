import React from 'react'
import { useEffect , useState } from 'react';
import { PostMapping } from '../ConnectingBackEnd/Axios';



function Post() {
  const [user,setUser] = useState({
    name:"",
    age:"",
    course:"",
    subject:""
  });


  const handleChange = (e)=>{
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
    console.log(e.target.name);
  };


  const handleSubmit = (e)=>{
    e.preventDefault();

    const FreshUser = {
      ...user,
      subject : user.subject.split(",")
    };
    PostMapping(FreshUser)
    console.log(FreshUser);
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        Name: 
        <input type="text" name="name" onChange={handleChange} /> <br/>
        Age: 
        <input type="number" name="age" onChange={handleChange} /> <br/>
        Course: 
        <input type="text" name="course" onChange={handleChange} /> <br/>
        Subjects (comma separated): 
        <input type="text" name="subject" onChange={handleChange} /> <br/>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default Post
