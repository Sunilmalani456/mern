import { Route, Routes } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer/Footer";
import LoginSignup from "./components/LoginSignup/LoginSignup";
import Navbar from "./components/Navbar/Navbar";
import Signup from "./components/Signup/Signup";
import Appointments from "./pages/admin/appointments";
import AuthForm from "./pages/auth/auth";
import LogIn from "./pages/auth/login/log-in";
import SignUp from "./pages/auth/sign-up/sign-up";
import Verify from "./pages/auth/verify";
import BookAppointments from "./pages/BookAppointments";
import Contacts from "./pages/Contacts";
import AppointmentsWraper from "./pages/doctor/appointmentsWraper";
import Details from "./pages/doctor/details";
import DoctorRegistration from "./pages/doctor/doctorRegistration";
import VerifyComplete from "./pages/doctor/verify-complete";
import DoctorDetail from "./pages/DoctorDetail";
import Doctorslist from "./pages/Doctorslist";
import Home from "./pages/Home";
import Prescription from "./pages/Prescription/Prescription";
import Profile from "./pages/Profile";
import Rootlayout from "./Rootlayout";
import DocAllAppointments from "./pages/doctor/allappointments";
import SingleBooking from "./pages/doctor/singleBooking";
import AllPrescription from "./pages/doctor/allprescription";
import PrescriptionDetails from "./pages/doctor/prescriptionDetails";
import DoctorPrescription from "./pages/doctor/doctorPrescription";
import AllTimeSlots from "./pages/doctor/allTimeslots";
import EditTimeSlot from "./pages/doctor/EditTimeSlot";
import Admin from "./pages/admin/admin";
import Doctor from "./pages/doctor/doctor";
import AllDoctor from "./pages/admin/allDoctor";
import AddPrescription from "./pages/doctor/AddPrescription";

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
        <Route path="/profile/me" element={<Profile />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/admin/sign-up" element={<SignUp />} />
        <Route path="/prescription" element={<Prescription />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route
          path="/forgotpassword"
          element={
            <div className="w-full flex justify-center items-center my-3">
              <AuthForm type="forgot" />
            </div>
          }
        />

        {/* ADMIN'S ROUTE */}
        <Route path="/admin/dashboard" element={<Rootlayout />}>
          <Route path="" element={<Admin />}>
            <Route
              path=""
              element={
                <div className="w-full flex justify-center lg:my-auto pt-10 lg:pt-0">
                  <AuthForm type={"doctor"} />
                </div>
              }
            />
            <Route path="all-doctor" element={<AllDoctor />} />
            <Route path="appointments" element={<Appointments />}>
              <Route path="" element={<AppointmentsWraper />} />
            </Route>

            <Route path="verify-complete" element={<VerifyComplete />} />
          </Route>
        </Route>

        {/* DOCTOR'S ROUTE */}
        <Route path="/doctor/dashboard" element={<Rootlayout />}>
          <Route path="" element={<Doctor />}>
            <Route path="" element={<Details />} />
            <Route path="profile" element={<DoctorRegistration />} />
            <Route path="appointments" element={<DocAllAppointments />} />
            <Route path="add-prescription" element={<AddPrescription />} />
            <Route path="appointments/:id" element={<SingleBooking />} />
            <Route path="prescription" element={<AllPrescription />} />
            <Route path="timeslots" element={<AllTimeSlots />} />
            <Route path="timeslots/:timeslotId" element={<EditTimeSlot />} />
            <Route
              path="prescription/:custId"
              element={<PrescriptionDetails />}
            />
            <Route
              path="prescription/:custId/:prescriptionId"
              element={<DoctorPrescription />}
            />
          </Route>
        </Route>
      </Routes>
      <Footer />
      <ToastContainer position="top-center" />
    </>
  );
}

export default App;
