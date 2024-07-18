import AppointmentsCard from "@/components/shared/appointmentsCard";
import React from "react";

const AppointmentsWraper = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      <AppointmentsCard />
      <AppointmentsCard />
      <AppointmentsCard />
    </div>
  );
};

export default AppointmentsWraper;
