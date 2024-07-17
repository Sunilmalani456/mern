import LeftSidebar from "@/components/shared/leftsidebar";
import Navbar from "@/components/shared/navbar";
import React from "react";

const Admin = () => {
  return (
    <div className="w-full relative">
      <Navbar />

      <div className="flex">
        <LeftSidebar />
        Admin page
      </div>
    </div>
  );
};

export default Admin;
