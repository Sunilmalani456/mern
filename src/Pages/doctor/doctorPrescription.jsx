/* eslint-disable no-unused-vars */
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { useData } from "@/provider/constant";

const DoctorPrescription = () => {
  const { userToken } = useData();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [prescriptionData, setPrescriptionData] = useState(null);
  const [prescription, setPrescription] = useState(null);
  const { prescriptionId, custId } = useParams();
  const navigate = useNavigate();

  console.log(prescriptionId);

  const allPrescription = async () => {
    try {
      const res = await fetch(
        `${
          import.meta.env.VITE_BASE_URL
        }/doc/prescription/sn/${prescriptionId}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${userToken}`,
          },
        }
      );

      const result = await res.json();
      console.log("prescriptionId", result);

      if (result.success === true) {
        setPrescriptionData(result.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    allPrescription();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        `${
          import.meta.env.VITE_BASE_URL
        }/doc/prescription/sn/${prescriptionId}`,
        {
          method: "PATCH",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${userToken}`,
          },
          body: JSON.stringify({
            prescription,
          }),
        }
      );

      const result = await res.json();
      console.log("Prescription Update", result);

      if (result.success === true) {
        // allPrescription();
        setOpen(false);
        navigate(`/doctor/dashboard/prescription/${custId}`);
      }

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="">
      {prescriptionData ? (
        <div className="flex flex-col gap-2">
          <div className="border rounded-md shadow-md border-gray-300 p-4 my-2">
            <h1 className="text-xl font-semibold">
              Prescription {prescriptionData?.prescriptionId}
            </h1>
            <p className="font-semibold">
              Booking Id: {prescriptionData?.ofBookingId}
            </p>
            <p className="font-semibold">
              Customer Id: {prescriptionData?.custId}
            </p>
            <p className="font-semibold">
              Doctor Id: {prescriptionData?.docId}
            </p>
            <p className="font-semibold whitespace-normal">
              Prescription: {prescriptionData?.prescription}
            </p>

            <div className="flex justify-center sm:justify-end pt-3 gap-2">
              <Button onClick={() => navigate(-1)} variant="ghost" size="sm">
                Back
              </Button>
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button className="button" size="sm">
                    Edit
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Are you sure?</DialogTitle>
                    <DialogDescription>
                      Are you sure you want to cancel this appointment? This
                      action cannot be undone.
                    </DialogDescription>

                    <div className="flex flex-col pt-3 items-center gap-3">
                      <Textarea
                        className="textarea"
                        placeholder="Enter Prescription"
                        value={
                          prescription
                            ? prescription
                            : prescriptionData?.prescription
                        }
                        onChange={(e) => setPrescription(e.target.value)}
                      />
                      <Button
                        type="submit"
                        onClick={handleSubmit}
                        size="sm"
                        variant="secondary"
                        disabled={loading}
                      >
                        {loading ? "Loading..." : "Update"}
                      </Button>
                    </div>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1 className="text-xl font-semibold">No Prescription Found</h1>
        </div>
      )}
    </div>
  );
};

export default DoctorPrescription;
