import React from 'react'
import "./Profile.css"

const Profile = () => {
  return (
    <>
        <div className='profile_section'>
            <div className='user_profile'>
                
                    <div className='user_image_div'>
                    </div>                
               
                <div className='userName'>
                     <h5>User</h5>
                     <h6>user@gmail.com</h6>
                </div>
                <button className='logoutBtn'>Logout</button>
                <button className='deleteBtn'>Delete Account</button>
            </div>
            <div className='update_profile'>
                <div className='settingButton'>
                    <button>My Booking</button>
                    <button>Settings</button>
                </div>
                <div>
                    <form className='loginFormBox'>
                        <h5>Profile Settings</h5>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Name</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Email</label>
                            <input type="password" class="form-control" id="exampleInputPassword1"/>
                        </div>
                        <div class="mb-3">
                        <label for="floatexampleInputPassword1ingTextarea" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1"/>
                        </div>
                        <button type="submit" class="contactButton">Update Profile</button>
                    </form>
                </div>
                
            </div>
        </div>
    </>
  )
}

export default Profile