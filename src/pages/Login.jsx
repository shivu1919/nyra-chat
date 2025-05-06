import React from 'react'
import '../css/Login.css'
import { useState } from 'react'
import {Link, useNavigate} from "react-router-dom"
import { auth } from '../Firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

function Login() {

  const[email,setEmail] = useState('')
  const[password,setPassword] = useState('')
  const navigate = useNavigate()

  const userLogin = ()=>{
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Logged in successfully") 
      navigate("/chat")
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      alert("User doesn't exists or bad credentials")
      setEmail('')
      setPassword('')
    });
  }

  return (
    <>
        <div className="lgn_container">
            
            <img src="/nyra_logo.PNG" width="260" style={{borderRadius:'12px'}}/>
           
            <div className='login_form'>
                <h1>Login</h1>
                <div style={{width:'100%'}}>
                <label id="lbl">Email:</label>
                <input 
                type="email" 
                id='inp'
                value={email}
                onChange={(event)=>{setEmail(event.target.value)}}
                />
                </div>
               
               <div style={{width:'100%'}}>
               <label id="lbl">Password:</label>
               <input 
               type="password" 
               id='inp'
               value={password}
               onChange={(event)=>{setPassword(event.target.value)}}
               />
               </div>


                <button onClick={userLogin} id='login_btn'>Login</button>

                <Link to="/signup" style={{fontSize:'20px', textDecoration:"none"}}>Not a registered user? Signup</Link>
            </div>
        </div>
    </>
  )
}

export default Login