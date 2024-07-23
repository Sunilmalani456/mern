import { useData } from "@/provider/constant";
import { Navigate, Outlet } from "react-router-dom";

const Doctor = () => {
  const { user, loading, role } = useData();
  if (loading) {
    return <div>Loading...</div>;
  }

  console.log("doctor", role);

  if (role === "DOCTOR") {
    return (
      <div className="w-full relative">
        <Outlet />
      </div>
    );
  } else {
    return <Navigate to="/log-in" />;
  }
};

export default Doctor;
