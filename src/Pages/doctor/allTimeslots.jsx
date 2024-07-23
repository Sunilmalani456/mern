import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useFetcher } from "@/hooks/fetch";
import { convertTime, getFormattedDate } from "@/lib/utils";
import { CalendarDays, Clock, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const AllTimeSlots = () => {
  const { userData, loading } = useFetcher("doc/timeslots", "GET");

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      <Link
        to={userData?.timeslotId}
        className="w-full max-w-[300px] overflow-clip relative border-slate-200 border px-3 py-3.5 rounded-lg shadow-md"
      >
        <div className={`w-full absolute h-2 top-0 left-0 bg-red-500`} />

        <div className="w-full flex justify-end py-1">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                {/* <Link to={`${item.bookingId}`}> */}
                <Settings className="w-4 h-4" />
                {/* </Link> */}
              </TooltipTrigger>{" "}
              <TooltipContent className="p-2">
                <p className="text-xs text-slate-950 font-bold">Edit</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <div className="flex flex-col gap-1 py-1">
          <div className="flex gap-1 items-center">
            <CalendarDays className="w-4 h-4" />
            <p className="text-xs font-bold">
              {userData?.availableDay} at{" "}
              {userData?.createdAt && getFormattedDate(userData?.createdAt)}
            </p>
          </div>
          <div className="flex gap-1 items-center">
            <p className="text-xs font-bold">
              Session Time-Interval: {userData?.sessionTimeInterval}
            </p>
          </div>
          <Separator className="my-2" />
        </div>

        <p className="text-center py-2 font-bold text-xs underline">
          Available Time
        </p>
        <div className="flex items-center justify-between">
          <div className="flex gap-1 items-center">
            <Clock className="w-4 h-4" />{" "}
            <span className="text-xs font-bold">
              {" "}
              From{" "}
              {userData?.availableFromTime &&
                convertTime(userData.availableFromTime)}
            </span>
          </div>
          <div className="flex gap-1 items-center">
            <Clock className="w-4 h-4" />{" "}
            <span className="text-xs font-bold">
              To{" "}
              {userData?.availableToTime &&
                convertTime(userData?.availableToTime)}
            </span>
          </div>
        </div>

        <Separator className="my-2" />

        <p className="text-center py-1 font-bold text-xs underline">
          Time Slots
        </p>
        <div className="flex flex-col gap-2.5 py-2">
          {userData?.timeslots.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex gap-1 items-center">
                <Clock className="w-4 h-4" />{" "}
                <span className="text-xs font-bold">
                  {" "}
                  From {item?.startFrom && convertTime(item.startFrom)}
                </span>
              </div>
              <div className="flex gap-1 items-center">
                <Clock className="w-4 h-4" />{" "}
                <span className="text-xs font-bold">
                  To {item?.endAt && convertTime(item?.endAt)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Link>

      {/* <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently change your
              time slots ⌛.
            </DialogDescription>
          </DialogHeader> */}

      {/* <div className="flex flex-col justify-around gap-3">
            <form>
              <div className="w-full flex justify-center pt-2">
                <div className="flex flex-col items-center gap-1 w-full max-w-sm">
                  Start From:
                  <input
                    // {...register(`startFrom[${index}]`, { required: true })}
                    className="input max-w-[140px] w-full rounded-lg"
                    aria-label="Time"
                    type="time"
                    format="h:m:s a"
                  />
                </div>
                <div className="flex flex-col items-center gap-1 w-full max-w-sm">
                  Start To:
                  <input
                    // {...register(`endAt[${index}]`, { required: true })}
                    className="input w-full max-w-[140px] rounded-lg"
                    aria-label="Time"
                    type="time"
                    format="h:m:s a"
                  />
                </div>
              </div>
            </form>
            <button className="btn btn-primary">Yes</button>
            <button className="btn btn-secondary">No</button>
          </div> */}
    </div>
  );
};

export default AllTimeSlots;
