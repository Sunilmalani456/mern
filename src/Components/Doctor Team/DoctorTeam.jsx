import React from 'react'
import './DoctorTeam.css'
import doctorImage3 from "../../assets/doctor3.jpg"
import { NavLink } from 'react-router-dom'



function DoctorTeam() {
   
  return (
    <>
      <div className='DoctorTeam'>
        <div className='doctorTeamContainer'>
            <div className='doctorTeamHeading'>
                <h4>Doctor Team</h4>
                <h2>Our <span>Specialist</span> Doctor Team</h2>
            </div>
           

             <div className='doctorList'>
                <div class="card" style={{width: "18rem"}}>
                    <img src={doctorImage3} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Dr. John </h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>

                <div class="card" style={{width: "18rem"}}>
                    <img src={doctorImage3} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Dr. John </h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>

                <div class="card" style={{width: "18rem"}}>
                    <img src={doctorImage3} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Dr. John </h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>

                <div class="card" style={{width: "18rem"}}>
                    <img src={doctorImage3} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Dr. John </h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                
            </div>

            <div className='viewAllDoctors'>
                <NavLink to="/doctorlist"><button className='viewAllDoctorsBtn'>View All Doctors</button></NavLink>
            </div>
           
        </div>        
      </div>
    </>

  )
}

export default DoctorTeam