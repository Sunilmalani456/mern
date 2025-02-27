import { useData } from "@/provider/constant";
import { Navigate, Outlet } from "react-router-dom";

const Admin = () => {
  const { user, loading, role } = useData();
  if (loading) {
    return <div>Loading...</div>;
  }

  console.log("admin", role);

  if (role === "ADMIN") {
    return (
      <div className="w-full relative">
        <Outlet />
      </div>
    );
  } else {
    return <Navigate to="/log-in" />;
  }
};

export default Admin;
