import React from 'react'
import "./Prescription.css"

const Prescription = () => {
  return (
    <div className='container'>
        <div className='prescription mt-10'>
        <div className='row'> 
            <div className='col-md-12 prescription_div'>
                <div className='row mb-5'>
                    
                    <div className='col-md-12 text-center'>
                        <h5>Doctor Name : Doctor</h5>
                        <h5>Name of Clinic : Apollo</h5>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6'>
                    <h5>Patient Name</h5>
                    <h5>Address</h5>
                    </div>
                    <div className='col-md-6'>
                    <h5>Age</h5>
                    <h5>Date</h5>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12'>

                    </div>
                </div>

                <div className='row'>
                    <div className='col-md-3 d-flex flex-col justify-start'>
                        
                        <h5>Medicine Name</h5>
                        <ul >
                            <li>Paracetamol</li>
                            <li>Paracetamol</li>
                        </ul>
                  
                       
                    </div>
                    <div className='col-md-3'>
                        <h5>Strength</h5>
                        <ul>
                            <li>500mg</li>
                            <li>500mg</li>
                        </ul>
                    </div>
                    <div className='col-md-3'>
                        <h5>Dose</h5>
                        <ul>
                            <li>1-0-1</li>
                            <li>1-0-0</li>
                        </ul>
                    </div>
                    <div className='col-md-3'>
                        <h5>Duration</h5>
                        <ul>
                            <li>6 days</li>
                            <li>1 Month</li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </div>

        <div className='row'>
            <div className='col-md-12 prescription_div'>
                <div className='row mb-5'>                    
                    <div className='col-md-12 text-center '>
                        <div className='text'>
                            <h5>Doctor Name : Doctor</h5>
                            <h5>Name of Clinic : Apollo</h5>
                        </div>                       
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6'>
                    <h5>Patient Name</h5>
                    <h5>Address</h5>
                    </div>
                    <div className='col-md-6'>
                    <h5>Age</h5>
                    <h5>Date</h5>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12'>

                    </div>
                </div>

                <div className='row'>
                    <div className='col-md-3 d-flex flex-col justify-start'>
                        
                        <h5>Medicine Name</h5>
                        <ul >
                            <li>Paracetamol</li>
                            <li>Paracetamol</li>
                        </ul>                  
                       
                    </div>
                    <div className='col-md-3'>
                        <h5>Strength</h5>
                        <ul>
                            <li>500mg</li>
                            <li>500mg</li>
                        </ul>
                    </div>
                    <div className='col-md-3'>
                        <h5>Dose</h5>
                        <ul>
                            <li>1-0-1</li>
                            <li>1-0-0</li>
                        </ul>
                    </div>
                    <div className='col-md-3'>
                        <h5>Duration</h5>
                        <ul>
                            <li>6 days</li>
                            <li>1 Month</li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default Prescription