/* eslint-disable no-unused-vars */
import { useData } from "@/provider/constant";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const PrescriptionDetails = () => {
  const { userToken } = useData();
  const [prescriptionData, setPrescriptionData] = useState(null);
  const { custId } = useParams();

  //   console.log("Id", custId);
  const allPrescription = async () => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_BASE_URL}/doc/prescription/${custId}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${userToken}`,
          },
        }
      );

      const result = await res.json();
      //   console.log("Prescription Details", result);

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

  return (
    <div className="">
      {prescriptionData?.length > 0 ? (
        <div className="flex flex-col gap-2 pt-2">
          <div className="font-bold text-center gap-1">
            <p>
              For This Customer Id:{" "}
              <span className="decoration-dashed underline underline-offset-2">
                {custId}
              </span>
            </p>
            <p>Total Prescription Is : {prescriptionData.length}</p>
          </div>
          {prescriptionData?.map((prescription, index) => {
            return (
              <Link key={index} to={prescription?.prescriptionId}>
                <div className="border rounded-md shadow-md border-gray-300 p-4 my-2">
                  <h1 className="text-xl font-semibold">
                    Prescription {index + 1}
                  </h1>
                  <p className="font-semibold">
                    Booking Id: {prescription?.ofBookingId}
                  </p>
                  <p className="font-semibold">
                    Customer Id: {prescription?.custId}
                  </p>
                  <p className="font-semibold">
                    Doctor Id: {prescription?.docId}
                  </p>
                  <p className="font-semibold whitespace-normal">
                    Prescription: {prescription?.prescription}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <div>
          <h1 className="text-xl font-semibold">No Prescription Found</h1>
        </div>
      )}
    </div>
  );
};

export default PrescriptionDetails;
