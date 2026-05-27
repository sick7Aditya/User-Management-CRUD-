import { createContext , useContext , useState , useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export function AuthProvider({children})
{
    const[user , setUser] = useState(null);
    const[loading,setLoading] = useState(true);

    useEffect(()=>{
        axios.get("http://localhost:8080/Login",{ withCredentials : true})
        .then(res=>setUser(res.data))
        .catch(()=>setUser(null))
        .finally(()=>setLoading(false));
    } , []);

    return(
        <AuthContext.Provider value={{user,setUser,loading}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = ()=>useContext(AuthContext);

