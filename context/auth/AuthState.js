import React,{useState} from 'react'
import authContext from './authContext'
import { useRouter } from 'next/router'

const AuthState=(props)=>{
const [user,setUser]=useState()

const Login = async (email,password) => {
  let history=useRouter();
    const response = await fetch("http://localhost:5000/api/auth/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: credentials.email, password: credentials.password})
    });
    const json = await response.json()
   
    if (json.success){
        // Save the auth token and redirect
        setUser(json.authtoken)
        localStorage.setItem('token', json.authtoken);
         
         window.location.href="/";
      

    }
    else{
        alert("Invalid credentials");
    }
}



return(
    <authContext.Provider>
        {props.children}
    </authContext.Provider>
)
}