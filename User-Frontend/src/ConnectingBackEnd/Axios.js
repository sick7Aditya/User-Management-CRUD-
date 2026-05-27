import axios from "axios";

const Backend = axios.create({
    baseURL : "http://localhost:8080"
})


export const GetMapping = ()=>Backend.get("/aditya/Users")

export const PostMapping = (user)=>Backend.post("/aditya/Users",user);  
// for above "user" parameter : this is a method parameter ,thats why no error occurs... 

export const DeleteMapping = (name)=>Backend.delete("/aditya/Users/"+name)

export const PutMapping = (user,name)=>Backend.put("/aditya/Users/"+name,user)
