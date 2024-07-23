import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Calendar, CirclePlus, Hourglass, Pill, User2 } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import Cookies from "js-cookie";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useData } from "@/provider/constant";
import { useState } from "react";
import { toast } from "sonner";

const Navbar = () => {
  const navigate = useNavigate();
  const userToken = Cookies.get("accessToken");
  const { user, loading } = useData();
  const [sheetOpen, setSheetOpen] = useState(false);

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

  const handleLogout = async () => {
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/logout`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
    });

    const result = await res.json();
    console.log(result);

    if (result.success === true) {
      Cookies.remove("accessToken");
      toast.message(result.message);
      navigate("/");
    }
  };
  return (
    <div className="w-full bg-blue-500 z-30 fixed top-0 py-2 px-7 flex justify-between items-center">
      <User2 className="w-6 h-6 text-white" />
      <div className="flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="overflow-hidden rounded-full"
            >
              <img
                src="https://github.com/shadcn.png"
                width={36}
                height={36}
                alt="Avatar"
                className="overflow-hidden rounded-full"
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {/* {["My Account", "Setttings"].map((item) => (
            <DropdownMenuItem key={item}>{item}</DropdownMenuItem>
          ))} */}
            <DropdownMenuItem asChild>
              <Link to={"profile"}>My Account</Link>
            </DropdownMenuItem>

            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout}>Log-Out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="sm:hidden flex">
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-slate-300/80"
              >
                <HamburgerMenuIcon className="w-4 h-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side={"left"}>
              <SheetHeader>
                {user?.role === "ADMIN"
                  ? adminItems.map((item, index) => (
                      <Link
                        onClick={() => setSheetOpen(false)}
                        to={item.path}
                        className={`flex items-center gap-1 py-2 px-4 rounded-full ${
                          location.pathname === `${item.path}`
                            ? "bg-blue-500 text-white"
                            : ""
                        } `}
                        key={index}
                      >
                        {item.icon}
                        <span className="ml-2 font-semibold text-[16px] lg:block">
                          {item.name}
                        </span>
                      </Link>
                    ))
                  : doctorItems.map((item, index) => (
                      <Link
                        onClick={() => setSheetOpen(false)}
                        to={item.path}
                        className={`flex items-center gap-1 py-2 px-4 rounded-full ${
                          location.pathname === `${item.path}`
                            ? "bg-blue-500 text-white"
                            : ""
                        } `}
                        key={index}
                      >
                        {item.icon}
                        <span className="ml-2 font-semibold text-[16px] lg:block">
                          {item.name}
                        </span>
                      </Link>
                    ))}
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
