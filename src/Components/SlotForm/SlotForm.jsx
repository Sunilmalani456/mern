import React from 'react'
import "./SlotForm.css"
import { NavLink } from 'react-router-dom'


const SlotForm = () => {
  return (
    <>
    <div className='SlotForm'>
        <div className='SlotForm_box'>
            <h5>Available Time Slots</h5>
            <div className='timeSlotBox'>
                <div>
                <h6>Sunday:</h6>
                </div>
                <div>
                    <h6>4:30pm - 9:30pm</h6>
                </div>            
            </div>

            <div className='timeSlotBox'>
                <div>
                <h6>Sunday:</h6>
                </div>
                <div>
                    <h6>4:30pm - 9:30pm</h6>
                </div>            
            </div>

            <div className='timeSlotBox'>
                <div>
                <h6>Sunday:</h6>
                </div>
                <div>
                    <h6>4:30pm - 9:30pm</h6>
                </div>            
            </div>

                
            <NavLink to="/bookAppointments"><button>Book Appointment</button></NavLink>            
            
        </div>
    </div>
    
    </>
  )
}

export default SlotForm