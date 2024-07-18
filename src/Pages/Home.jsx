import DoctorTeam from "@/components/Doctor Team/DoctorTeam";
import HeroSection from "@/components/HeroSection/HeroSection";
import Solution from "@/components/Solution/Solution";
import React from "react";
// import HeroSection from '@/Components/HeroSection/HeroSection'
// import DoctorTeam from '@/Components/Doctor Team/DoctorTeam'
// import Solution from '@/Components/Solution/Solution'
// import Footer from '@/Components/Footer/Footer'

function Home() {
  return (
    <>
      <HeroSection />
      <Solution />
      <DoctorTeam />
    </>
  );
}

export default Home;
