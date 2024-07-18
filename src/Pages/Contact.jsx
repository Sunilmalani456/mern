import React, { useState } from 'react'
import "./Contact.css"
import { FaLocationDot } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { IoIosMail } from "react-icons/io";



const Contact = () => {

    const [contactForm, setContactForm] = useState({
        username : "",
        email :"",
        message:""
    })


    function handleInput (e){
        const {name, value} = e.target
        setContactForm({...contactForm, [name]:value})
    }

    function submitContactForm(e){
            e.preventDefault()
            console.log("Form Submit")
        axios.post()
    }

    console.log(contactForm)


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
                 <form className='loginFormBox' onSubmit={submitContactForm}>
                    <div class="mb-3">
                        <label for="exampleInputName"  className="form-label">Full Name</label>
                        <input type="name" class="form-control" name='username' value={contactForm.username} onChange={handleInput} id="exampleInputName" aria-describedby="emailHelp"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail" class="form-label">Email</label>
                        <input type="email" class="form-control" name='email' value={contactForm.email} onChange={handleInput} id="exampleInputEmail"/>
                    </div>
                    <div class="mb-3">
                       <label for="floatexampleInputPassword1ingTextarea" class="form-label">Message</label>
                        <textarea class="form-control" placeholder="Leave a comment here" value={contactForm.message} onChange={handleInput} name='message' id="floatexampleInputPassword1ingTextarea"></textarea>                       
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