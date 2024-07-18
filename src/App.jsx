import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Appointments from "./pages/admin/appointments";
import LogIn from "./pages/auth/login/log-in";
import SignUp from "./pages/auth/sign-up/sign-up";
import Verify from "./pages/auth/verify";
import DoctorRegistration from "./pages/doctor/doctorRegistration";
import Rootlayout from "./Rootlayout";
import AppointmentsWraper from "./pages/doctor/appointmentsWraper";
import Details from "./pages/doctor/details";

function App() {
  return (
    // <div>App</div>
    <main className="">
      <Router>
        {/* public routes */}
        <Routes>
          <Route>
            <Route path="/sign-in" element={<LogIn />} />
            <Route path="/verify" element={<Verify />} />
            <Route
              path="/sign-up"
              element={
                <p className="">
                  <SignUp />
                </p>
              }
            />
          </Route>

          <Route path="/admin/dashboard" element={<Rootlayout />}>
            <Route path="" element={<DoctorRegistration />} />

            <Route path="appointments" element={<Appointments />}>
              <Route path="" element={<AppointmentsWraper />} />
              <Route path="details" element={<Details />} />
            </Route>

            <Route
              path="meeting-type"
              element={<p className="pt-20">meeting</p>}
            />
            <Route
              path="settings"
              element={<p className="pt-20">settings</p>}
            />
          </Route>
        </Routes>
      </Router>
    </main>
  );
}

export default App;
