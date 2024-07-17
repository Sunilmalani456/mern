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
import { LogIn, User } from "lucide-react";

const LeftSidebar = () => {
  const location = useLocation();

  const sidebarItems = [
    {
      name: "Home",
      path: "/",
      icon: <AiOutlineHome size={22} />,
      onMobile: true,
    },
    {
      name: "Liked Videos",
      path: "/liked-videos",
      icon: <BiLike size={22} />,
      onMobile: false,
    },
    {
      name: "History",
      path: "/history",
      icon: <LuHistory size={22} />,
      onMobile: true,
    },
    {
      name: "My Channel",
      path: `/channel`,
      icon: <GoDeviceCameraVideo size={22} />,
      onMobile: false,
    },
    {
      name: "My Studio",
      path: "/my-studio",
      icon: <BsCollectionPlay size={22} />,
      onMobile: true,
    },
    {
      name: "Subscriptions",
      path: "/subscriptions",
      icon: <LiaUserCheckSolid size={22} />,
      onMobile: true,
    },
    {
      name: "Tweets",
      path: "/tweets",
      icon: <FaRegCommentDots size={22} />,
      onMobile: true,
    },
  ];
  return (
    <section className="custom-scrollbar sticky left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-r border-slate-500 pt-20 dark:shadow-none max-sm:hidden lg:w-[266px] px-10 py-3">
      {sidebarItems.map((item, index) => (
        <Link
          to={item.path}
          className={`rounded-lg flex items-center gap-1 py-4 px-6 ${
            location.pathname === `${item.path}` ? "bg-blue-500 text-white" : ""
          } `}
          key={index}
        >
          {item.icon}
          <span className="hidden ml-2 font-semibold text-[16px] lg:block">
            {item.name}
          </span>
        </Link>
      ))}
      <div className="flex flex-col gap-3 pt-8">
        {/* {!authStatus && ( */}
        <>
          <Link to="/sign-in">
            <Button className="small-medium min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none border border-slate-500">
              <LogIn size={20} className="invert-colors lg:hidden" />
              <span className="primary-text-gradient max-lg:hidden">
                Log In
              </span>
            </Button>
          </Link>
          <Link to="/sign-up">
            <Button className="small-medium min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
              <User size={20} className="invert-colors lg:hidden" />
              <span className="max-lg:hidden">Sign Up</span>
            </Button>
          </Link>{" "}
        </>
        {/* )} */}
      </div>
    </section>
  );
};

export default LeftSidebar;
