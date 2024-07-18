// import Admin from "./pages/admin/admin";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Import } from "lucide-react";
import { Button } from "./Components/ui/button";
import PageLayout from "./PageLayout";
// import router from "./router.js"
// import { RouterProvider } from "react-router-dom"
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar/Navbar";
import LoginSignup from "./Components/LoginSignup/LoginSignup";
import Doctorslist from "./Pages/Doctorslist";
import BookAppointments from "./Pages/BookAppointments";
import Contact from "./Pages/Contact";
import DoctorDetail from "./Pages/DoctorDetail";
import Footer from "./Components/Footer/Footer";
import Profile from "./Pages/Profile";
import Signup from "./Components/Signup/Signup";

function App() {
  return (
    <>
      <Navbar />
      {/* <RouterProvider router={router} /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/doctorlist" element={<Doctorslist />} />
        <Route path="/doctorDetail" element={<DoctorDetail />} />
        <Route path="/bookAppointments" element={<BookAppointments />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile/me" element={<Profile />} />
      </Routes>
      <Footer />
    </>
  );
  //     <div>App</div>
  // <Router>
  //   <div>
  //     {/* public routes */}
  //     <Routes>
  //       <Route>
  //         <Route path="/" element={<p>Home page</p>} />
  //         <Route path="/dashboard" element={<p>dashboard</p>} />
  //       </Route>
  //     </Routes>
  //     <Admin />
  //   </div>
  // </Router>
  //   );
}

export default App;
