import React from 'react'
import "./Card.css"
import doctorImage from "../../assets/doctor1.avif"
import doctorImage2 from "../../assets/doctor2.avif"
import doctorImage3 from "../../assets/doctor3.jpg"
import { NavLink } from 'react-router-dom'


function Card() {
  return (
    <>
    
      <div className='searchDoctor'>
        
         <h2>Find A Doctor</h2>
        <form class="d-flex searchForm" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>

      <div className='doctorList'>
        <div class="card" style={{width: "18rem"}}>
          <img src={doctorImage} className="card-img-top" alt="..." />  
          <div className="card-body">
            <h5 className="card-title">Dr. John </h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <NavLink to="/doctorDetail"><button className='viewDoctor'>Profile</button></NavLink>           </div>
        </div>

        <div class="card" style={{width: "18rem"}}>
          <img src={doctorImage2} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Dr. John </h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <NavLink to="/doctorDetail"><button className='viewDoctor'>Profile</button></NavLink> 
          </div>
        </div>

        <div class="card" style={{width: "18rem"}}>
          <img src={doctorImage3} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Dr. John </h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>          
            <NavLink to="/doctorDetail"><button className='viewDoctor'>Profile</button></NavLink> 
          </div>
        </div>

        <div class="card" style={{width: "18rem"}}>
          <img src="..." className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Dr. John </h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>          
            <NavLink to="/doctorDetail"><button className='viewDoctor'>Profile</button></NavLink> 
          </div>
        </div>

        <div class="card" style={{width: "18rem"}}>
          <img src="..." className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Dr. John </h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>          
            <NavLink to="/doctorDetail"><button className='viewDoctor'>Profile</button></NavLink> 
          </div>
        </div>
      </div>
    </>
  )
}

export default Card