import { useData } from "@/provider/constant";
import {
  Calendar,
  CirclePlus,
  Hourglass,
  LogIn,
  Pill,
  Tablets,
  User2,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/button";

const LeftSidebar = () => {
  const { user, loading } = useData();
  // console.log(user);
  const location = useLocation();
  const adminItems = [
    {
      name: "Create",
      path: "/admin/dashboard",
      icon: <CirclePlus size={22} />,
      onMobile: true,
    },
    {
      name: "All Doctor",
      path: "/admin/dashboard/all-doctor",
      icon: <User2 size={22} />,
      onMobile: true,
    },
  ];

  const doctorItems = [
    {
      name: "Add Slots",
      path: "/doctor/dashboard",
      icon: <CirclePlus size={22} />,
      onMobile: true,
    },
    {
      name: "Add Prescriptions",
      path: "/doctor/dashboard/add-prescription",
      icon: <Tablets size={22} />,
      onMobile: true,
    },
    {
      name: "All Timeslots",
      path: "/doctor/dashboard/timeslots",
      icon: <Hourglass size={22} />,
      onMobile: true,
    },
    {
      name: "Appointments",
      path: `/doctor/dashboard/appointments`,
      icon: <Calendar size={22} />,
      onMobile: false,
    },
    {
      name: "Prescriptions",
      path: "/doctor/dashboard/prescription",
      icon: <Pill size={22} />,
      onMobile: true,
    },
  ];

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <section className="custom-scrollbar sticky left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-r border-slate-500 pt-20 dark:shadow-none max-sm:hidden lg:w-[266px] px-10 py-3">
      <div className="flex flex-col gap-2">
        {user?.role === "ADMIN"
          ? adminItems.map((item, index) => (
              <Link
                to={item.path}
                className={`flex items-center gap-1 py-2 px-4 rounded-full ${
                  location.pathname === `${item.path}`
                    ? "bg-blue-500 text-white"
                    : ""
                } `}
                key={index}
              >
                {item.icon}
                <span className="hidden ml-2 font-semibold text-[16px] lg:block">
                  {item.name}
                </span>
              </Link>
            ))
          : doctorItems.map((item, index) => (
              <Link
                to={item.path}
                className={`flex items-center gap-1 py-2 px-4 rounded-full ${
                  location.pathname === `${item.path}`
                    ? "bg-blue-500 text-white"
                    : ""
                } `}
                key={index}
              >
                {item.icon}
                <span className="hidden ml-2 font-semibold whitespace-nowrap text-[14px] lg:block">
                  {item.name}
                </span>
              </Link>
            ))}
      </div>
      <div className="flex flex-col gap-3 pt-8">
        <Button className="small-medium min-h-[41px] bg-blue-500 hover:bg-blue-500/90 w-full px-4 py-3 shadow-none border border-slate-500">
          <LogIn size={20} className="invert-colors lg:hidden" />
          <span className="primary-text-gradient max-lg:hidden">Log Out</span>
        </Button>
      </div>
    </section>
  );
};

export default LeftSidebar;
