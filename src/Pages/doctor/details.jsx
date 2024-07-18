import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CalendarDays, Clock } from "lucide-react";
import { TimePickerDemo } from "@/components/ui/time-picker.demo";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";

const Details = () => {
  const { register, handleSubmit, setValue, watch } = useForm();

  const [slot, setSlot] = useState(null);
  const sessionTimIntervel = [
    {
      title: 30,
      value: 30,
    },
    {
      title: 45,
      value: 45,
    },
    {
      title: 75,
      value: 75,
    },
    {
      title: 90,
      value: 90,
    },
    {
      title: 105,
      value: 105,
    },
    {
      title: 120,
      value: 120,
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

  const onSubmit = (data) => {
    console.log(data); // Handle form submission data here
  };

  //   const handleSlotChange = (value) => {
  //     const selectedValue = parseInt(value); // Ensure value is parsed to integer
  //     setSlot(selectedValue); // Update state with selected value
  //   };

  const handleSlotChange = (value) => {
    const selectedValue = parseInt(value); // Ensure value is parsed to integer
    setValue("sessionCount", selectedValue); // Set value in form state
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <div className="pt-2 space-y-2">
        <p className="flex items-center font-bold gap-2">
          <Clock className="w-4 h-4" />
          Time-Slot Id: <span> 12s3235a2a</span>
        </p>
        <p className="flex items-center font-bold gap-2">
          <CalendarDays className="w-4 h-4" />
          Available Day: <span>Sunday</span>
        </p>
      </div>
      <div className="pt-5 w-full justify-center">
        <div className="flex items-center gap-2">
          <p>Session Time-Intervel: </p>{" "}
          <Select className="">
            <SelectTrigger className="w-[180px] focus:ring-sky-500 border-sky-500 focus-within:border-none">
              <SelectValue placeholder="Time Interval Gap" />
            </SelectTrigger>
            <SelectContent>
              {sessionTimIntervel.map((item) => (
                <SelectItem
                  //   {...register("sessionTimeInterval")}
                  key={item.title}
                  value={`${item.value}`}
                >
                  {item.title} min
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="w-full flex justify-center items-center pt-5">
          <div className="flex flex-col w-full max-w-sm">
            Available From:
            <input
              {...register("availableFrom", { required: true })}
              className="input max-w-[240px] w-full rounded-lg"
              aria-label="Time"
              type="time"
            />
          </div>
          <div className="flex flex-col w-full max-w-sm">
            Available To:
            <input
              {...register("availableTo", { required: true })}
              className="input max-w-[240px] rounded-lg"
              aria-label="Time"
              type="time"
            />
          </div>
        </div>

        <div className="pt-5 w-full justify-center items-center">
          <div className="flex items-center gap-2">
            Session Count
            <Select
              onChange={(e) => handleSlotChange(e.target.value)}
              value={watch("sessionCount")}
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
                    {...register("sessionCount")}
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

        {watch("sessionCount") > 0 &&
          Array.from({ length: watch("sessionCount") }, (_, index) => (
            <div key={index} className="w-full flex justify-center pt-5">
              <div className="flex flex-col gap-1 w-full max-w-sm">
                Start From:
                <input
                  {...register(`startFrom[${index}]`, { required: true })}
                  className="input max-w-[240px] w-full rounded-lg"
                  aria-label="Time"
                  type="time"
                />
              </div>
              <div className="flex flex-col gap-1 w-full max-w-sm">
                Start To:
                <input
                  {...register(`startTo[${index}]`, { required: true })}
                  className="input max-w-[240px] rounded-lg"
                  aria-label="Time"
                  type="time"
                />
              </div>
            </div>
          ))}
      </div>
      <Button type="submit" className="button mt-5">
        Submit
      </Button>
    </form>
  );
};

export default Details;
