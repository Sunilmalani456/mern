import React, { useState } from 'react'
import "./LoginSignup.css"

function LoginSignup() {

    const [loginState, setLoginState] = useState("Login")
  return (
    <>
       <div className='loginForm'>
           
            <form className='loginFormBox'>
                <div className='loginHeading'>
                    {loginState === "Login"?(<h2>Login</h2>):(<h2>Signup</h2>)}
                </div>
                
                {loginState === "Login"? "" :
                    <div class="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Username</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                }
                <div class="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Email</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>

                {loginState === "Login"?
                   <button type="submit" className='loginSubmitBtn'>Login</button>:
                   <button type="submit" className='loginSubmitBtn'>Register</button>
                }

                <div className='signupLinkDiv'>
                    {
                       loginState === "Login"? 
                       <p onClick={()=>setLoginState("Signup")}>Don't have an account? <span>Register</span></p>:
                       <p onClick={()=>setLoginState("Login")}>Already have an account? <span>Login</span></p>
                    }
                    
                </div>
            </form>
         
       </div>
    </>
  )
}

export default LoginSignup