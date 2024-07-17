import React, { useState } from 'react'
import "./Navbar.css"
import { FaUserDoctor } from "react-icons/fa6";
import { Link, NavLink } from 'react-router-dom';



function Navbar() {

  const [activeLink, setActiveLink] = useState("home")
  return (
    <>
      <div className='navbar_section'>
        <nav className='navbar'>
              <div>
                 <FaUserDoctor  className='logo'/>
              </div>
              <div>
                  <ul className='navLinks'>
                    <li className={activeLink === "home"? "": "navlink_option"}><NavLink to="/" onClick={()=>setActiveLink("home")} className="navlink_option">Home</NavLink></li>
                    <li className={activeLink === "doctors"?"": "navlink_option"}><NavLink to="/doctorlist" className="navlink_option" onClick={()=>setActiveLink("doctors")}>Doctors</NavLink></li>
                    <li className={activeLink === "book_appointment"?"": "navlink_option"}><NavLink to="/bookAppointments" className="navlink_option" onClick={()=>setActiveLink("book_appointment")}>Book Appointment</NavLink></li>
                    <li className={activeLink === "contact"?"": "navlink_option"}><NavLink to="/contact" className="navlink_option" onClick={()=>setActiveLink("contact")}>Contact Us</NavLink></li>
                  </ul>
              </div> 
              <div>
                  <NavLink to="/login"><button className='loginSignupBtn'>Login</button></NavLink>
              </div>
        </nav>
      </div>
      
    </>
  )
}

export default Navbar