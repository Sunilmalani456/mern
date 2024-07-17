import React from 'react'
import Navbar from '@/Components/Navbar/Navbar'
import Footer from '@/Components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import HeroSection from './Components/HeroSection/HeroSection'
import LoginSignup from './Components/LoginSignup/LoginSignup'
import Doctorslist from './Pages/Doctorslist'


function PageLayout() {
  return (
    <>
    {/* <LoginSignup/> */}
     <Navbar/>
        <Outlet/>
     <Footer/>
    </>   
  )
}

export default PageLayout