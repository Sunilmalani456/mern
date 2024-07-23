/* eslint-disable no-unused-vars */
import { useFetcher } from "@/hooks/fetch";
import Details from "./details";
import { convertTimeslots } from "@/lib/utils";

const EditTimeSlot = () => {
  const { userData, loading } = useFetcher("doc/timeslots", "GET");

  if (loading) {
    return <div>Loading...</div>;
  }

  const { startFrom, endAt } = userData?.timeslots
    ? convertTimeslots(userData.timeslots)
    : [];

  console.log({ startFrom, endAt });

  return (
    <div>
      <Details
        userData={userData}
        startFrom={startFrom}
        endAt={endAt}
        type="edit"
      />
    </div>
  );
};

export default EditTimeSlot;
