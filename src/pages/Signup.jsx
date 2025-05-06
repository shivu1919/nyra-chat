import React, { useState } from 'react'
import '../css/Signup.css'
import {Link, useNavigate} from "react-router-dom"
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../Firebase'


function Signup() {

    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const navigate = useNavigate()

    const createUser = ()=>{
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up
            alert("Registered successfully, you can login now")
            navigate("/login") 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            alert("User already exists or bad credentials")
            setEmail('')
            setPassword('')
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
    }

  return (
    <>
        <div className="lgn_container">
            
            <img src="/nyra_logo.PNG" width="260" style={{borderRadius:'12px'}}/>
           
            <div className='login_form'>
                <h1>Sign up</h1>
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


                <button onClick={createUser} id='login_btn'>Signup</button>

                <Link to="/login" style={{fontSize:'20px', textDecoration:"none"}}>Already registered? Login</Link>
            </div>
        </div>
    </>
  )
}

export default Signup