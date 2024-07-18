import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BiLike } from "react-icons/bi";
import { BsCollectionPlay } from "react-icons/bs";
import { FaRegCommentDots } from "react-icons/fa";
import { GoDeviceCameraVideo } from "react-icons/go";
import { LiaUserCheckSolid } from "react-icons/lia";
import { LuHistory } from "react-icons/lu";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import {
  Briefcase,
  Calendar,
  CirclePlus,
  LogIn,
  Settings,
  User,
} from "lucide-react";

const LeftSidebar = () => {
  const location = useLocation();
  const sidebarItems = [
    {
      name: "Create",
      path: "/admin/dashboard",
      icon: <CirclePlus size={22} />,
      onMobile: true,
    },
    {
      name: "Metting Type",
      path: "meeting-type",
      icon: <Briefcase size={22} />,
      onMobile: true,
    },
    {
      name: "Appointments",
      path: `appointments`,
      icon: <Calendar size={22} />,
      onMobile: false,
    },
    {
      name: "Settings",
      path: "settings",
      icon: <Settings size={22} />,
      onMobile: true,
    },
  ];

  return (
    <section className="custom-scrollbar sticky left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-r border-slate-500 pt-20 dark:shadow-none max-sm:hidden lg:w-[266px] px-10 py-3">
      <div className="flex flex-col gap-2">
        {sidebarItems.map((item, index) => (
          <Link
            to={item.path}
            className={`flex items-center gap-1 py-2 px-4 rounded-full ${
              location.pathname === `/admin/dashboard/${item.path}`
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
