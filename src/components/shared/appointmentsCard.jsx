import {
  ClipboardPlus,
  Clock,
  Edit,
  MapPin,
  Settings,
  User,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

const AppointmentsCard = () => {
  return (
    <div className="w-full max-w-[300px] overflow-clip relative border-slate-200 border px-3 py-4 rounded-lg shadow-md">
      <div className="w-full bg-green-500 absolute h-2 top-0 left-0" />
      <div className="w-full flex justify-end py-1">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Link to={"details"}>
                <Settings className="w-4 h-4" />
              </Link>
            </TooltipTrigger>{" "}
            <TooltipContent className="p-2">
              <p className="text-xs text-slate-950 font-bold">Edit</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <div className="flex flex-col gap-1 pt-1">
        <p className="text-sm font-bold">60 Mins Metting</p>
        <div className="flex gap-1 items-center justify-between">
          <div className="flex gap-1 items-center">
            <Clock className="w-4 h-4" />{" "}
            <span className="text-xs">60 Mins</span>
          </div>
          <div className="flex gap-1 items-center">
            <MapPin className="w-4 h-4" />{" "}
            <span className="text-xs">60 Mins</span>
          </div>
        </div>
      </div>

      <Separator className="my-4" />

      <div className="flex justify-between items-center">
        <div>
          <p className="flex gap-1 items-center">
            <ClipboardPlus className="w-4 h-4" />{" "}
            <span className="text-sm font-bold">Jhon</span>
          </p>
        </div>
        <div>
          <p className="flex gap-1 items-center">
            <User className="w-4 h-4" />{" "}
            <span className="text-sm font-bold">Jhon</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppointmentsCard;
