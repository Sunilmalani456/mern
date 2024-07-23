/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { formatTime, RemoveZeros } from "@/lib/utils";
import { useData } from "@/provider/constant";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Details = ({ type, userData, startFrom, endAt }) => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, setValue, watch } = useForm({
    defaultValues:
      type === "edit"
        ? {
            availableDay: userData?.availableDay || "",
            availableFromTime: userData?.availableFromTime || "",
            availableToTime: userData?.availableToTime || "",
            sessionTimeInterval: userData?.sessionTimeInterval || 0,
            sessionCountOfDay: userData?.sessionCountOfDay || 0,
            startFrom: startFrom || [],
            endAt: endAt || [],
          }
        : undefined,
  });
  const { userToken } = useData();

  const [slot, setSlot] = useState(null);
  const sessionTimIntervel = [
    { title: "Select Time Intervel", value: 0 },
    { title: "30 min", value: 30 },
    { title: "45 min", value: 45 },
    { title: "75 min", value: 75 },
    { title: "90 min", value: 90 },
    { title: "105 min", value: 105 },
    { title: "120 min", value: 120 },
  ];

  const days = [
    {
      title: "SUNDAY",
      value: "SUNDAY",
    },
    {
      title: "MONDAY",
      value: "MONDAY",
    },
    {
      title: "TUESDAY",
      value: "TUESDAY",
    },
    {
      title: "WEDNESDAY",
      value: "WEDNESDAY",
    },
    {
      title: "THRUSDAY",
      value: "THRUSDAY",
    },
    {
      title: "FRIDAY",
      value: "FRIDAY",
    },
    {
      title: "SATURDAY",
      value: "SATURDAY",
    },
  ];

  const sessionCount = [
    { title: "Select Session Count", value: 0 }, // Placeholder or default option
    { title: "1 Slot", value: 1 },
    { title: "2 Slot", value: 2 },
    { title: "3 Slot", value: 3 },
    { title: "4 Slot", value: 4 },
    { title: "5 Slot", value: 5 },
    { title: "6 Slot", value: 6 },
  ];

  const onSubmit = async (data) => {
    // console.log({
    //   availableFromTime: newAvailableFromTime
    //     ? newAvailableFromTime
    //     : data.availableFromTime,
    //   availableToTime: newAvailableToTime
    //     ? newAvailableToTime
    //     : data.availableToTime,
    //   sessionTimeInterval: data?.sessionTimeInterval,
    //   sessionCountOfDay: data?.sessionCountOfDay,
    //   startFrom: formattedTimes.formattedStartFrom,
    //   endAt: formattedTimes.formattedEndAt,
    // }); // Handle form submission data here

    const timeObj = {
      startFrom: [...data.startFrom],
      endAt: [...data.endAt],
    };

    const formattedTimes = RemoveZeros(timeObj);
    const availableFromTime = formatTime(data.availableFromTime);
    const availableToTime = formatTime(data.availableToTime);
    console.log(availableFromTime);
    let res;
    try {
      setLoading(true);
      if (type === "edit") {
        res = await fetch(
          `${import.meta.env.VITE_BASE_URL}/doc/timeslots?timeslotId=${
            userData.timeslotId
          }`,
          {
            method: "PATCH",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${userToken}`,
            },
            body: JSON.stringify({
              availableFromTime,
              availableToTime,
              sessionTimeInterval: data.sessionTimeInterval,
              sessionCountOfDay: data.sessionCountOfDay,
              startFrom: formattedTimes.formattedStartFrom,
              endAt: formattedTimes.formattedEndAt,
            }),
          }
        );
      } else {
        res = await fetch(`${import.meta.env.VITE_BASE_URL}/doc/timeslots`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${userToken}`,
          },
          body: JSON.stringify(data),
        });
      }
      const result = await res.json();

      console.log(result);
    } catch (error) {
      setLoading(false);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSlotChange = (value) => {
    const selectedValue = parseInt(value); // Ensure value is parsed to integer
    setValue("sessionCountOfDay", selectedValue); // Set value in form state
  };

  const handleTimeIntervel = (value) => {
    const selectedValue = parseInt(value); // Ensure value is parsed to integer
    setValue("sessionTimeInterval", selectedValue); // Set value in form state
  };

  const handleSessionDays = (value) => {
    const selectedValue = value; // Ensure value is parsed to integer
    setValue("availableDay", selectedValue); // Set value in form state
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      {type === "edit" ? (
        <div className="pt-2 flex flex-col items-center font-bold">
          <p className="text-3xl">Hi Doctor 👋</p>
          <p className="text-slate-500 text-sm">
            Want to be Update Your Slots...
          </p>
        </div>
      ) : (
        <div className="pt-2 flex flex-col items-center font-bold">
          <p className="text-3xl">Hi Doctor 👋</p>
          <p className="text-slate-500 text-sm">Add Your Time Slots...</p>
        </div>
      )}
      <div className="pt-5 w-full flex flex-col gap-2">
        {/*  */}
        {/* Session Time-Intervel || Session Day */}
        {/*  */}
        <div className="w-full flex justify-around max-sm:flex-col max-sm:gap-5">
          <div className="flex flex-col items-center gap-2">
            <p>Session Time-Intervel: </p>{" "}
            <Select
              onChange={(e) => handleTimeIntervel(e.target.value)}
              value={watch("sessionTimeInterval")}
              onValueChange={handleTimeIntervel}
              defaultValue={slot ? slot : 0} // Set default value
              className=""
            >
              <SelectTrigger className="w-[240px] focus:ring-sky-500 border-sky-500 focus-within:border-none">
                <SelectValue placeholder="Time Interval Gap" />
              </SelectTrigger>
              <SelectContent>
                {sessionTimIntervel.map((item) => (
                  <SelectItem
                    {...register("sessionTimeInterval")}
                    key={item.title}
                    value={item.value}
                  >
                    {item.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p>Session Day: </p>{" "}
            <Select
              onChange={(e) => handleSessionDays(e.target.value)}
              value={watch("availableDay")}
              onValueChange={handleSessionDays}
              // defaultValue={slot ? slot : 0} // Set default value
              className=""
            >
              <SelectTrigger className="w-[240px] focus:ring-sky-500 border-sky-500 focus-within:border-none">
                <SelectValue placeholder="Select Session Day" />
              </SelectTrigger>
              <SelectContent>
                {days.map((item) => (
                  <SelectItem
                    {...register("availableDay")}
                    key={item.title}
                    value={`${item.value}`}
                  >
                    {item.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Available FROM - TO */}
        <div className="w-full flex flex-col items-center gap-3 justify-around py-4">
          <p className="text-xl font-bold underline">
            Select Your Available Time
          </p>
          <div className="w-full flex justify-around items-center max-sm:flex-col max-sm:gap-5">
            <div className="flex flex-col w-full items-center max-w-sm">
              Available From:
              <input
                {...register("availableFromTime", { required: true })}
                className="input max-w-[240px] w-full rounded-lg"
                aria-label="Time"
                type="time"
                format="h:m:s a"
              />
            </div>
            <div className="flex flex-col w-full items-center max-w-sm">
              Available To:
              <input
                {...register("availableToTime", { required: true })}
                className="input w-full max-w-[240px] rounded-lg"
                aria-label="Time"
                type="time"
                format="h:m:s a"
              />
            </div>
          </div>
        </div>

        <div className="w-full pt-3 flex flex-col gap-4 justify-center items-center">
          <p className="text-xl font-bold underline">
            Select Your Number Of Slots
          </p>
          <div className="flex flex-col items-center gap-2">
            Session Count
            <Select
              disabled={type === "edit" ? true : false}
              onChange={(e) => handleSlotChange(e.target.value)}
              value={watch("sessionCountOfDay")}
              onValueChange={handleSlotChange} // Handle value change
              //   value={slot ? slot : 0} // Bind value prop to state
              defaultValue={slot ? slot : 0} // Set default value
              className=""
            >
              <SelectTrigger className="w-[180px] focus:ring-sky-500 border-sky-500 focus-within:border-none">
                <SelectValue placeholder="Select Session Count" />
              </SelectTrigger>
              <SelectContent>
                {sessionCount.map((item) => (
                  <SelectItem
                    {...register("sessionCountOfDay")}
                    key={item.title}
                    value={item.value}
                  >
                    {item.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {watch("sessionCountOfDay") > 0 &&
          Array.from({ length: watch("sessionCountOfDay") }, (_, index) => (
            <div key={index} className="w-full flex justify-center pt-2">
              <div className="flex flex-col items-center gap-1 w-full max-w-sm">
                Start From: {index}
                <input
                  {...register(`startFrom[${index}]`, { required: true })}
                  className="input max-w-[240px] max-sm:w-[140px] w-full rounded-lg"
                  aria-label="Time"
                  type="time"
                  format="h:m:s a"
                />
              </div>
              <div className="flex flex-col items-center gap-1 w-full max-w-sm">
                Ended At: {index}
                <input
                  {...register(`endAt[${index}]`, { required: true })}
                  className="input w-full max-w-[240px] max-sm:w-[140px] rounded-lg"
                  aria-label="Time"
                  type="time"
                  format="h:m:s a"
                />
              </div>
            </div>
          ))}
      </div>

      {/* SUBMIT */}
      <div className="w-full flex justify-center">
        <Button type="submit" className="button mt-5 w-full max-w-[240px]">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default Details;
