import AppointmentsCard from "@/components/shared/appointmentsCard";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

const AppointmentsWraper = () => {
  const token = Cookies.get("accessToken");
  const [data, setData] = useState([]);

  const allBookings = async () => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_BASE_URL}/doc/dashboard/all-bookings`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const result = await res.json();
      console.log("result", result);

      if (result.success === true) {
        setData([...result.data]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    allBookings();
  }, []);

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {data.length > 0 ? <AppointmentsCard /> : "No Appointment Found"}
    </div>
  );
};

export default AppointmentsWraper;
