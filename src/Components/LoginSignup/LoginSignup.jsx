import React, { useState } from 'react'
import "./LoginSignup.css"
import { NavLink } from 'react-router-dom'
import axios from 'axios'


function LoginSignup() {

    

    const [loginData, setLoginData] = useState({
        email:"",
        password:""
    })

    function handleLoginInput (e) {
      const {name, value} = e.target;
      setLoginData({...loginData, [name]:value})
    }

    const submitLogin = async (e) => {
        e.preventDefault()
        console.log(loginData)
        try {
            const response = await fetch("https://backend-sush-vineets-projects-44621f19.vercel.app/api/v1/sign-in",{
                method: 'POST', 
                headers: {
                  'Content-Type': 'application/json',
                  "Accept" : "application/json"
                },
                body: JSON.stringify(loginData)               
            }
            )

            const res = await response.json()
            console.log(res);
            
        } catch (error) {  
            console.log(error)          
        }       
    }

  return (
    <>
       <div className='loginForm'>
           
            <form className='loginFormBox' onSubmit={submitLogin}>
                <div className='loginHeading'>
                    <h2>Login</h2>
                </div>
                
                <div className="mb-3">
                    <label for="email" className="form-label">Email</label>
                    <input type="email" name='email' value={loginData.email} onChange={handleLoginInput} className="form-control" id="email"/>
                </div>
                <div className="mb-3">
                    <label for="password" className="form-label">Password</label>
                    <input type="password" name='password' value={loginData.password} onChange={handleLoginInput}  className="form-control" id="password"/>
                </div>               
                   <button type="submit" className='loginSubmitBtn'>Login</button>

                <div className='signupLinkDiv'>                    
                    <p >Already have an account? <NavLink to="/register"><span>Register</span></NavLink></p>                                        
                </div>
            </form>
         
       </div>
    </>
  )
}

export default LoginSignup