import React from 'react'
import HeroSection from '@/Components/HeroSection/HeroSection'
import DoctorTeam from '@/Components/Doctor Team/DoctorTeam'
import Solution from '@/Components/Solution/Solution'
import Footer from '@/Components/Footer/Footer'
//  import Service from '@/Components/Service/Service'

function Home() {
  return (
    <>
     <HeroSection/>
     <Solution/>
     {/* <Service/> */}
     <DoctorTeam/>

    </>
   
  )
}

export default Home