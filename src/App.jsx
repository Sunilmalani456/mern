import Admin from "./pages/admin/admin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Import } from "lucide-react"
import { Button } from "./Components/ui/button"
import PageLayout from "./PageLayout"
// import router from "./router.js"
import { RouterProvider } from "react-router-dom"
import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Navbar from "./Components/Navbar/Navbar"
import LoginSignup from "./Components/LoginSignup/LoginSignup"
import Doctorslist from "./Pages/Doctorslist"
import BookAppointments from "./Pages/BookAppointments"
import Contact from "./Pages/Contact"


function App() {
  return (
    <>
      <Navbar/>
      {/* <RouterProvider router={router} /> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<LoginSignup/>}/>
        <Route path="/doctorlist" element={<Doctorslist/>}/>
        <Route path="/bookAppointments" element={<BookAppointments/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </>
  )
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
