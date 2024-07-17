import React from 'react'
import "./Footer.css"
import { FaUserDoctor } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";




function Footer() {
  return (
    <>
    <div className='footer_section'>
         <div className='footer_container'>
              <div>
                <p>© 2021 Company, Inc. All rights reserved.</p>
              </div>
              <div className='logo'>
                 <FaUserDoctor />
              </div>
              <div className='social_icons'>
                <FaFacebook />
                <FaTwitter />
                <FaInstagram />
              </div>
         </div>
    </div>
    </>
  )
}

export default Footer