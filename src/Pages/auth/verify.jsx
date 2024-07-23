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
import { useLocation, useNavigate } from "react-router-dom";
import { useData } from "@/provider/constant";

const Verify = () => {
  const { user } = useData();
  const nevigate = useNavigate();
  const location = useLocation();
  console.log(location.state.type);
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
    let res;

    try {
      if (location.state.type == "forgot") {
        res = await fetch(
          `${import.meta.env.VITE_BASE_URL}/vrfy-chng-pswd-otp`,
          {
            method: "PATCH",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );
      } else {
        res = await fetch(`${import.meta.env.VITE_BASE_URL}/verify-account`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
      }

      const newData = await res.json();

      if (newData.success === true) {
        if (user?.role === "ADMIN") {
          nevigate("/admin/dashboard/all-doctor");
        }

        nevigate("/log-in", {
          state: { token: newData.data },
        });
      }

      console.log(newData);
    } catch (error) {
      console.log(error);
    }
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
