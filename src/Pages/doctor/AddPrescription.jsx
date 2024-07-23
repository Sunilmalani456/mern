import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";

const AddPrescription = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    bookingId: "",
    prescription: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch(
        `${import.meta.env.VITE_BASE_URL}/doc/prescription`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: type === "doctor" ? `Bearer ${userToken}` : "",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await res.json();

      console.log(result);
      // if (result.success) {
      // }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  console.log(data);
  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-bold">Hi Doctor 👋.</h2>
        <p className="text-xs text-gray-600 font-bold underline decoration-dashed underline-offset-2">
          Add Prescription...
        </p>
      </div>

      <div className="w-full flex flex-col gap-3 max-w-sm pt-6">
        <div className="flex flex-col gap-2">
          <Label className="">Booking Id</Label>
          <Input
            className="input"
            placeholder="Add booking id.."
            onChange={(e) => setData({ ...data, bookingId: e.target.value })}
          />
        </div>
        <div>
          <Label>Prescription Details</Label>
          <Textarea
            className="input"
            placeholder="Add your prescription"
            onChange={(e) => setData({ ...data, prescription: e.target.value })}
          />
        </div>
        <Button
          size="sm"
          className="button w-full"
          disabled={loading}
          onClick={handleSubmit}
        >
          {loading ? "Adding..." : "Add Prescription"}
        </Button>
      </div>
    </div>
  );
};

export default AddPrescription;
