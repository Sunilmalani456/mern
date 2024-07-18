
import { Routes, Route } from "react-router-dom"
import Prescription from "./Pages/Prescription/Prescription"
import Verification from "./Pages/Verification"
import { ToastContainer, toast } from 'react-toastify';
  


import Home from "./pages/Home";
import LoginSignup from "./components/LoginSignup/LoginSignup";
import Signup from "./components/Signup/Signup";
import Doctorslist from "./pages/Doctorslist";
import DoctorDetail from "./pages/DoctorDetail";
import BookAppointments from "./pages/BookAppointments";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Verify from "./pages/auth/verify";
import Rootlayout from "./Rootlayout";
import DoctorRegistration from "./pages/doctor/doctorRegistration";
import Appointments from "./pages/admin/appointments";
import AppointmentsWraper from "./pages/doctor/appointmentsWraper";
import Details from "./pages/doctor/details";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        
        
        <Route path="/" element={<Home />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/doctorlist" element={<Doctorslist />} />
        <Route path="/doctorDetail" element={<DoctorDetail />} />
        <Route path="/bookAppointments" element={<BookAppointments />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile/me" element={<Profile />} />
        <Route path="/prescription" element={<Prescription/>}/>
        <Route path="/contacts" element={<Contacts/>}/>

        <Route path="/admin/dashboard" element={<Rootlayout />}>
          <Route path="" element={<DoctorRegistration />} />
          <Route path="appointments" element={<Appointments />}>
            <Route path="" element={<AppointmentsWraper />} />
            <Route path="details" element={<Details />} />
              
          </Route>

          <Route
            path="meeting-type"
            element={<p className="pt-3">meeting page</p>}
          />
          <Route
            path="settings"
            element={<p className="pt-3">settings page</p>}
          />
        </Route>
      </Routes>
      <Footer />
      <ToastContainer position="top-center"/>
                     
  
}

export default App;
