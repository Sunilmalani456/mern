import React from 'react'
import "./BookAppointmentForm.css"

const BookAppointmentForm = () => {
  return (
    <>  
    <div className='BookAppointmentForm'>
        <div className='BookAppointmentForm_box'>
          <div className='heading'>
             <h2>Book An Appointment</h2>
          </div>
          <div>
            <form action="">
                <div className='inputDiv'>
                    <div class="mb-3 inputDivBox">
                        <label for="exampleInputPassword1" className="form-label">Name</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div class="mb-3 inputDivBox">
                        <label for="exampleInputPassword1" className="form-label">Email</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                </div>

                <div className='inputDiv'>
                    <div class="mb-3 inputDivBox">
                        <label for="exampleInputPassword1" className="form-label">Phone</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div class="mb-3 inputDivBox">
                        <label for="exampleInputPassword1" className="form-label">Doctor</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                </div>

                <div className='inputDiv'>
                    <div class="mb-3 inputDivBox">
                        <label for="exampleInputPassword1" className="form-label">Appointment Date</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div class="mb-3 inputDivBox">
                        <label for="exampleInputPassword1" className="form-label">Appointment Time</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                </div>

                <button className='bookButton'>Book</button>
                
            </form>
          </div>
        </div>
    </div>
        
    </>
  )
}

export default BookAppointmentForm