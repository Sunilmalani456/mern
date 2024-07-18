import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { EyeOff } from "lucide-react";
import { Eye } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const AuthForm = ({ type }) => {
  const [show, isShow] = useState(false);
  const nevigate = useNavigate();
  let schema;
  if (type === "login") {
    schema = z.object({
      email: z.string().email(),
      password: z.string().min(6),
    });
  } else {
    schema = z.object({
      email: z.string().email(),
      name: z
        .string()
        .min(4)
        .refine((value) => !value.includes(" "), {
          message: "Username must not contain spaces",
        })
        .refine((value) => value === value.toLowerCase(), {
          message: "Username must be all lowercase",
        }),
      password: z.string().min(6),
    });
  }

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const createAccount = async (data) => {
    let res;

    try {
      if (type === "login") {
        console.log("log data", data);

        res = await fetch(
          "https://backend-sush-vineets-projects-44621f19.vercel.app/api/v1/sign-in",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );
      } else {
        console.log("sign data", data);

        res = await fetch(
          "https://backend-sush-vineets-projects-44621f19.vercel.app/api/v1/sign-up",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              ...data,
              role: "DOCTOR",
            }),
          }
        );
      }
    } catch (error) {
      console.log(error);
    }

    const result = await res?.json();
    console.log(result);

    if (result.success === true) {
      if (type === "login") {
        nevigate("/admin/dashboard");
      } else {
        nevigate("/verify");
      }
    }
  };

  return (
    <div className="w-full max-w-sm">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          {type === "login" ? (
            <>
              {" "}
              <CardTitle className="text-2xl">Log In</CardTitle>
              <CardDescription>
                Enter your email below to login to your account
              </CardDescription>{" "}
            </>
          ) : (
            <>
              <CardTitle className="text-2xl">Sign Up</CardTitle>
              <CardDescription>
                Enter your email below to register your account
              </CardDescription>
            </>
          )}
        </CardHeader>
        <CardContent>
          <form action="submit" onSubmit={handleSubmit(createAccount)}>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <label htmlFor="email">Email</label>
                <Input
                  {...register("email", {
                    required: true,
                  })}
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  className="input"
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">
                    {errors.email.message}
                  </span>
                )}
              </div>
              {type === "signup" && (
                <div className="grid gap-2">
                  <label htmlFor="username">UserName</label>
                  <Input
                    {...register("name", {
                      required: true,
                    })}
                    className="input"
                    id="name"
                    type="text"
                    placeholder="m@example.com"
                  />
                  {errors.name && (
                    <span className="text-red-500 text-sm">
                      {errors.name.message}
                    </span>
                  )}
                </div>
              )}
              <div className="grid gap-2">
                <div className="flex items-center">
                  <label htmlFor="password">Password</label>
                </div>
                <div className="relative">
                  <Input
                    {...register("password", {
                      required: true,
                    })}
                    className="input"
                    id="password"
                    type={!show ? "password" : "word"}
                  />
                  {show ? (
                    <Eye
                      onClick={() => isShow(false)}
                      className="w-4 h-4 absolute right-2 cursor-pointer top-3"
                    />
                  ) : (
                    <EyeOff
                      onClick={() => isShow(true)}
                      className="w-4 h-4 absolute right-2 cursor-pointer top-3"
                    />
                  )}
                </div>
                {errors.password && (
                  <span className="text-red-500 text-sm">
                    {errors.password.message}
                  </span>
                )}
              </div>
              <Button
                disabled={isSubmitting}
                type="submit"
                className="w-full button"
              >
                {type === "login"
                  ? isSubmitting
                    ? "Logging..."
                    : "LogIn"
                  : isSubmitting
                  ? "Loading..."
                  : "Sig-Up"}
              </Button>
            </div>
            {type === "login" ? (
              <div className="mt-4 text-center text-sm">
                Don&apos;t have an account?{" "}
                <Link to="/sign-up" className="underline">
                  Sign up
                </Link>
              </div>
            ) : (
              <div className="mt-4 text-center text-sm">
                Already have an account?{" "}
                <Link to="/sign-in" className="underline">
                  Sign up
                </Link>
              </div>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthForm;
