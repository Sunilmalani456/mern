import React from 'react'
import "./DoctorProfile.css"

const DoctorProfile = () => {

  
  return (
    <>
    <div className='DoctorProfile'>
         <div className='doctor_profile_div'>
              <div className='doctor_img'></div>
              <div>
                <div className='doctor_profile_bg'>Surgeon</div>
                <h5>Dr. John</h5>
                <p>Specialization in Surgeon</p>
              </div>
         </div>

         <div className='about_section'>
         <div> 
            <h4>About of <span>Dr. John</span></h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In dolor hic vitae doloremque! Officia sunt suscipit facilis soluta assumenda eum saepe! Ab ut ratione tenetur sapiente quo et, architecto esse?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nobis molestiae nemo fugit ab minus eligendi ex voluptatum, tempore totam.</p>
         </div>
         <div className='education'>
             <h4>Education</h4>
             <div className='education_div'>
                   <div className='education_box'>
                        <div>
                            <h5 className='experience_year'>2017-2019</h5> 
                            <h5>BSc. Degree</h5>
                        </div>
                        <div>
                            <h6>University College</h6>
                        </div>
                   </div>
                   <div className='education_box'>
                        <div>
                            <h5 className='experience_year'>2017-2019</h5> 
                            <h5>BSc. Degree</h5>
                        </div>
                        <div>
                            <h6>University College</h6>
                        </div>
                   </div>
             </div>
         </div>
         <div className='experience'>
                <h4>Experience</h4>
                <div className='experience_box'>
                    <div className='experience_div'>
                           <h5 className='experience_year'>2017-2019</h5>
                           <h5>Associate Professor</h5>
                           <h6>Hospital</h6>
                    </div>
                    <div className='experience_div'>
                            <h5 className='experience_year'>2017-2019</h5>
                           <h5>Associate Professor</h5>
                           <h6>Hospital</h6>
                    </div>
                </div>
         </div>
         </div>
       
    </div>
    </>
  )
}

export default DoctorProfile