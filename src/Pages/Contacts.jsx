import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import "./Contacts.css"

const Contacts = () => {
  return (
    <>
    <div className='container mt-3 mb-5'>
        <div className='row mb-10'>
            <div className='col-md-12 text-center bg-slate-100 p-10'>
                <h2>Contact Us</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic maxime aperiam blanditiis harum quod expedita voluptates, dicta vel consectetur accusantium! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, magni!</p>
            </div>
        </div>

        <div className='row box'>
            <div className='col-md-6 d-flex flex-col justify-center'>
                 <div className='row d-flex flex-col'>
                    <div className='col-md-4'>
                        <div className='left_section_box'>
                            <div className='contact_icon_bg'>
                                <FaLocationDot className='contact_icon'/>
                            </div>
                            <div>
                                <h4>Address</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'></div>
                    <div className='col-md-4'></div>
                 </div>

                   
                    <div className='left_section_box'>
                        <div className='contact_icon_bg'>
                             <IoMdCall className='contact_icon'/>
                        </div>
                        <div>
                            <h4>Phone</h4>
                            <p>9785368790</p>
                        </div>
                    </div>
                    <div className='left_section_box'>
                            <div className='contact_icon_bg'>
                                <IoIosMail className='contact_icon'/>
                            </div>
                            <div>
                                <h4>Email</h4>
                                <p>example@gmail.com</p>
                            </div>
                    </div>
            </div>
            <div className='col-md-6 '>
                <form className='loginFormBox' >
                        <div class="mb-3">
                            <label for="exampleInputName"  className="form-label">Full Name</label>
                            <input type="name" class="form-control" name='username'  id="exampleInputName" aria-describedby="emailHelp"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail" class="form-label">Email</label>
                            <input type="email" class="form-control" name='email' id="exampleInputEmail"/>
                        </div>
                        <div class="mb-3">
                        <label for="floatexampleInputPassword1ingTextarea" class="form-label">Message</label>
                            <textarea class="form-control" placeholder="Leave a comment here"  name='message' id="floatexampleInputPassword1ingTextarea"></textarea>                       
                        </div>
                        <button type="submit" class="contactButton">Send</button>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contacts