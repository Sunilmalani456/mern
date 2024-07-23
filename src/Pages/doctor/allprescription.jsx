/* eslint-disable no-unused-vars */
import { useData } from "@/provider/constant";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllPrescription = () => {
  const { userToken } = useData();
  const [loading, setLoading] = useState(false);
  const [prescriptionData, setPrescriptionData] = useState(null);

  const allPrescription = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `${import.meta.env.VITE_BASE_URL}/doc/prescription`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${userToken}`,
          },
        }
      );

      const result = await res.json();
      //   console.log("All Prescription Data", result);

      if (result.success === true) {
        setPrescriptionData(result.data);
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    allPrescription();
  }, []);

  if (loading) {
    return <p>Loading..</p>;
  }

  return (
    <div className="">
      {prescriptionData?.length > 0 ? (
        <div className="flex flex-col gap-2">
          {prescriptionData?.map((prescription, index) => {
            return (
              <Link key={index} to={prescription?.custId}>
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

export default AllPrescription;
