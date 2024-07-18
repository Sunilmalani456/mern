import LeftSidebar from "@/components/shared/leftsidebar";
import Navbar from "@/components/shared/navbar";
import React from "react";
import { Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <div className="w-full relative">
      <Navbar />

      <div className="flex">
        <LeftSidebar />

        <section className="flex-1 pt-20">
          <Outlet />
        </section>
      </div>
    </div>
  );
};

export default Admin;
