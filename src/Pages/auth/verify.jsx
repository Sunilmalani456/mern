import React, { useState } from "react";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

const Verify = () => {
  const nevigate = useNavigate();
  const formSchema = z.object({
    email: z.string().email(),
    otp: z
      .string({
        message: "Please Enter a Valid OTP",
      })
      .min(6, {
        message: "Your One time password must be 6 characters.",
      }),
  });
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const handleVerify = async (data) => {
    const res = await fetch(
      "https://backend-sush-vineets-projects-44621f19.vercel.app/api/v1/verify-account",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    const newData = await res.json();

    if (newData.success === true) {
      nevigate("/sign-in");
    }
    console.log(newData);
  };

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center gap-2">
      <form
        onSubmit={handleSubmit(handleVerify)}
        className="flex flex-col gap-4"
      >
        <div className="w-full max-w-md flex font-bold text-3xl items-center flex-col">
          <p>Please Enter Your</p>
          <p className="underline decoration-dashed underline-offset-2">
            One Time Password
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <Input
            className="outline-none bg-neutral-100 focus-visible:border-none border-sky-500 h-[50px] focus-visible:ring-sky-500"
            {...register("email", {
              required: true,
            })}
            id="email"
            type="email"
            placeholder="m@example.com"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
          <InputOTP
            maxLength={6}
            {...register("otp", {
              required: true,
            })}
            id="otp"
            type="otp"
          >
            <InputOTPGroup>
              <InputOTPSlot
                className="sm:h-20 sm:w-16 text-2xl bg-neutral-100 border-sky-500 ring-sky-500"
                index={0}
              />
              <InputOTPSlot
                className="sm:h-20 sm:w-16 text-2xl bg-neutral-100 border-sky-500 ring-sky-500"
                index={1}
              />
              <InputOTPSlot
                className="sm:h-20 sm:w-16 text-2xl bg-neutral-100 border-sky-500 ring-sky-500"
                index={2}
              />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot
                className="sm:h-20 sm:w-16 text-2xl bg-neutral-100 border-sky-500 ring-sky-500"
                index={3}
              />
              <InputOTPSlot
                className="sm:h-20 sm:w-16 text-2xl bg-neutral-100 border-sky-500 ring-sky-500"
                index={4}
              />
              <InputOTPSlot
                className="sm:h-20 sm:w-16 text-2xl bg-neutral-100 border-sky-500 ring-sky-500"
                index={5}
              />
            </InputOTPGroup>
          </InputOTP>
          {errors.otp && (
            <span className="text-red-500 text-sm">{errors.otp.message}</span>
          )}
          <div className="w-full">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full button"
            >
              {isSubmitting ? "verifying" : "verify"}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Verify;
