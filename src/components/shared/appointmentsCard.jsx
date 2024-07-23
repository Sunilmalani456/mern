/* eslint-disable react/prop-types */
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  extractTimeFromTimestamp,
  findTimeInterval,
  getFormattedDate,
} from "@/lib/utils";
import { Clock, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "../ui/badge";

const AppointmentsCard = ({ item }) => {
  return (
    <Link
      to={`${item.bookingId}`}
      className="w-full max-w-[300px] overflow-clip relative border-slate-200 border px-3 py-4 rounded-lg shadow-md"
    >
      <div
        className={`w-full absolute h-2 top-0 left-0 ${
          item.isCancelled === true ? "bg-red-500" : "bg-green-500"
        }`}
      />
      <div className="w-full flex justify-end py-1">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Link to={`${item.bookingId}`}>
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
        <p className="text-sm font-bold">{getFormattedDate(item?.fromTime)}</p>
        <div className="flex font-bold items-center gap-2">
          <p className="text-xs">Duration</p>
          <p className="flex gap-1 text-xs items-center">
            <span>{extractTimeFromTimestamp(item?.fromTime)} </span>-
            <span> {extractTimeFromTimestamp(item?.toTime)}</span>
          </p>
        </div>
        <Separator className="my-2" />

        <div className="flex items-center justify-between">
          <div className="flex gap-1 items-center">
            <Clock className="w-4 h-4" />{" "}
            <span className="text-xs font-bold">
              {findTimeInterval(item?.fromTime, item?.toTime)} Metting
            </span>
          </div>
          <div className="flex items-center">
            {item?.isCancelled === true ? (
              <Badge
                className="border-red-500 border border-1 text-red-500"
                variant="outline"
              >
                Cancelled
              </Badge>
            ) : (
              <Badge
                className="border border-green-500 border-1 text-green-500"
                variant="outline"
              >
                Active
              </Badge>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppointmentsCard;
