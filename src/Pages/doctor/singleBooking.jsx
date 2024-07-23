/* eslint-disable no-unused-vars */
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { findTimeInterval, getFormattedDate } from "@/lib/utils";
import { useData } from "@/provider/constant";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Calendar, Clock } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const SingleBooking = () => {
  const { userToken } = useData();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const [open, setOpen] = useState(false);

  const [singleBooking, setSingleBooking] = useState(null);

  const allBookings = async () => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_BASE_URL}/doc/dashboard/${id}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${userToken}`,
          },
        }
      );

      const result = await res.json();
      console.log("Single Bookings", result);

      if (result.success === true) {
        setSingleBooking(result.data[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `${import.meta.env.VITE_BASE_URL}/doc/dashboard/${id}`,
        {
          method: "PATCH",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${userToken}`,
          },
        }
      );

      const result = await res.json();
      console.log("Cancel", result);

      if (result.success === true) {
        setOpen(false);
        navigate("/doctor/dashboard", {
          replace: true,
        });
      }

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    allBookings();
  }, []);

  return (
    <div className="w-full">
      <div className="w-full flex gap-1 font-bold">
        <p className="">Booking Id :</p> <span>{singleBooking?.bookingId}</span>
      </div>

      <div className="flex flex-col gap-2 pt-3">
        <div className="flex gap-1 items-center">
          <Clock className="w-4 h-4" />{" "}
          <span className="text-xs font-bold">
            {findTimeInterval(singleBooking?.fromTime, singleBooking?.toTime)}{" "}
            Metting Time
          </span>
        </div>
        <div className="flex gap-1 items-center">
          <Calendar className="w-4 h-4" />{" "}
          <span className="text-xs font-bold">
            <p className="text-sm font-bold">
              {getFormattedDate(singleBooking?.fromTime)}
            </p>
          </span>
        </div>
        <div className="flex gap-2 items-center">
          <span className="font-bold">Status :</span>
          <span className="text-xs font-bold">
            {singleBooking?.isCancelled === true ? (
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
          </span>
        </div>

        <div className="flex gap-2 items-center font-bold">
          <p>Cancel Appointment :</p>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button size="sm" variant="destructive" className="gap-1">
                <Cross2Icon className="w-4 h-4" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you sure?</DialogTitle>
                <DialogDescription>
                  Are you sure you want to cancel this appointment? This action
                  cannot be undone.
                </DialogDescription>
                <div className="flex pt-3 justify-center gap-3">
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() => setOpen(false)}
                  >
                    {singleBooking?.isCancelled === true
                      ? "Already Cancelled"
                      : "No, Don't Cancel"}
                  </Button>
                  {singleBooking?.isCancelled === false && (
                    <Button
                      disabled={loading}
                      size="sm"
                      variant="destructive"
                      onClick={handleCancel}
                    >
                      {loading ? "Cancelling..." : "Yes, Cancel"}
                    </Button>
                  )}
                </div>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default SingleBooking;
