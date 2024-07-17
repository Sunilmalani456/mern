import React from 'react'
import "./Signup.css"
import { NavLink } from 'react-router-dom'


const Signup = () => {
  return (
    <>
    <div className='loginForm'>
           
           <form className='loginFormBox'>
               <div className='loginHeading'>
                   <h2>Signup</h2>
               </div>
               
               
                   <div className="mb-3">
                       <label htmlFor="exampleInputEmail1"  className="form-label">Username</label>
                       <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                   </div>
               
               <div className="mb-3">
                   <label htmlFor="email" className="form-label">Email</label>
                   <input type="email" className="form-control" id="email"/>
               </div>
               <div className="mb-3">
                   <label htmlFor="password" className="form-label">Password</label>
                   <input type="password" className="form-control" id="password"/>
               </div>

                  <button type="submit" className='loginSubmitBtn'>Register</button>
               

               <div className='signupLinkDiv'>                   
                    <p>Don't have an account? <NavLink to="/login"><span>Login</span></NavLink></p>                   
               </div>
           </form>
        
      </div>
    </>
  )
}

export default Signup