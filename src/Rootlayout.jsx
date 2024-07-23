/* eslint-disable no-unused-vars */
import Cookies from "js-cookie";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import LeftSidebar from "./components/shared/leftsidebar";
import Navbar from "./components/shared/navbar";

const Rootlayout = () => {
  const navigate = useNavigate();
  const token = Cookies.get("accessToken");

  useEffect(() => {
    if (!token) {
      return navigate("/");
    }
  }, [token]);

  return (
    <main className="w-full relative">
      <Navbar />
      {/* MIDDLE SECTION */}
      <div className="flex">
        <LeftSidebar />
        <section className="flex min-h-screen flex-1 flex-col pt-1 px-6 pb-6 max-md:pb-14 sm:px-14">
          <Outlet />
        </section>
      </div>
    </main>
  );
};

export default Rootlayout;
