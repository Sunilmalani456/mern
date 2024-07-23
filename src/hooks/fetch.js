/* eslint-disable no-unused-vars */
import { useData } from "@/provider/constant";
import { useEffect, useState } from "react";

export const useFetcher = (url, method) => {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(null);
  const { userToken } = useData();

  const fetchData = async () => {
    console.log(userToken);
    setLoading(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}/${url}`, {
        method,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
      });

      const newData = await res.json();

      console.log("New Data", newData);

      if (newData.success === true) {
        const { data } = newData;
        setUserData(data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const refetchData = async () => {
    await fetchData(); // Call the same fetchData function to refetch
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { loading, userData, refetchData };
};
