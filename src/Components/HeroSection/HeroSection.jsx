import React from 'react'
import "./HeroSection.css"
import { NavLink } from 'react-router-dom'
import headerImage from "../../assets/headerImage.jpg"

function HeroSection() {
  return (
       <>
       <div className='heroSection '>
         <div className='container'>
            <div className='row'>
               <div className='col-md-6 d-flex flex-col justify-center'>
                     <div className='leftSection'>
                        <h4>The Best Health Solution</h4>
                        <h1>Optimal <span>Health</span>, One Click Away!</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihilreiciendis perferendis <br /> minus  accusamus itaque magni ex deserunt non et nulla?</p>
                        <NavLink to="/doctorlist"><button>Book An Appointment</button></NavLink>
                      </div>
               </div>
               <div className='col-md-6 d-flex justify-end'>
                  <div className='rightSection'>
                     <div className='headerImage_background'>
                        <div className='headerImage_background2'>
                        </div>
                     </div>            
                  </div>
               </div>
            </div>
         </div>
         
          
       </div>
       </>
  )
}

export default HeroSection