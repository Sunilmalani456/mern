import React from 'react'
import "./Contact.css"
import { FaLocationDot } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { IoIosMail } from "react-icons/io";



const Contact = () => {
  return (
    <>
    <div className='contact'>
        <div className='contact_container'>
            <div className='top_section'>
                <h2>Contact Us</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic maxime aperiam blanditiis harum quod expedita voluptates, dicta vel consectetur accusantium! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, magni!</p>
            </div>

            <div className='bottom_section'>
                 <div className='left_section'>
                    <div className='left_section_box'>
                        <div className='contact_icon_bg'>
                             <FaLocationDot className='contact_icon'/>
                        </div>
                        <div>
                            <h4>Address</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
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

                 <div className='right_section'>
                 <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Full Name</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Email</label>
                        <input type="password" class="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div class="mb-3">
                       <label for="floatexampleInputPassword1ingTextarea" class="form-label">Message</label>
                        <textarea class="form-control" placeholder="Leave a comment here" id="exampleInputPassword1"></textarea>                       
                    </div>
                    <button type="submit" class="contactButton">Send</button>
                </form>
                 </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact