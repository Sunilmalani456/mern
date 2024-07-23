import AppointmentsCard from "@/components/shared/appointmentsCard";
import { useData } from "@/provider/constant";
import { useEffect, useState } from "react";

const DocAllAppointments = () => {
  const { userToken } = useData();
  const [loading, setLoading] = useState(false);
  console.log("User Token", userToken);
  const [appointments, setAppointments] = useState(null);

  const allBookings = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `${import.meta.env.VITE_BASE_URL}/doc/dashboard`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${userToken}`,
          },
        }
      );

      const result = await res.json();
      // console.log("Doctor Bookings", result);

      if (result.success === true) {
        setAppointments(result.data);
      }

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  console.log("appointments", appointments);

  useEffect(() => {
    allBookings();
  }, []);

  if (loading) {
    return <p>Loading ...</p>;
  }

  return (
    <>
      {appointments?.length > 0 ? (
        <div className="w-full grid grid-cols-1 pt-2 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {appointments.map((item) => (
            <AppointmentsCard key={item.bookingId} item={item} />
          ))}
        </div>
      ) : (
        <div className="w-full flex justify-center items-center h-full font-bold text-xl">
          No Appointment Found
        </div>
      )}
    </>
  );
};

export default DocAllAppointments;
