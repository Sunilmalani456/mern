import React from "react";
import { Outlet } from "react-router-dom";

const Appointments = () => {
  return (
    <div className="w-full pt-20">
      <Outlet />
    </div>
  );
};

export default Appointments;
