import React from 'react'
import DoctorProfile from '@/Components/DoctorProfile/DoctorProfile'
import SlotForm from '@/Components/SlotForm/SlotForm'

const DoctorDetail = () => {
  return (
    <>
    <div className='doctorProfile_container' style={{display:"flex"}}>
       <div>
        <DoctorProfile/>          
       </div>
       <div>
       <SlotForm/>   
        </div>
    </div>
      
    </>
  )
}

export default DoctorDetail