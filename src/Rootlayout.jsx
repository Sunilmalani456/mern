import React from "react";
import Admin from "./pages/admin/admin";
import Navbar from "./components/shared/navbar";
import LeftSidebar from "./components/shared/leftsidebar";
import { Outlet } from "react-router-dom";

const Rootlayout = () => {
  return (
    <main className="w-full relative">
      <Navbar />
      {/* MIDDLE SECTION */}
      <div className="flex">
        <LeftSidebar />
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 max-md:pb-14 sm:px-14">
          <Outlet />
        </section>
      </div>
    </main>
  );
};

export default Rootlayout;
