/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Cookies from "js-cookie";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { z } from "zod";
import { useData } from "@/provider/constant";
import { toast } from "sonner";

const AuthForm = ({ type }) => {
  const [show, isShow] = useState(false);
  const nevigate = useNavigate();
  const location = useLocation();
  const { userToken, setRole } = useData();
  // const token = Cookies.get("accesssToken");
  let schema;

  if (location.state?.token) {
    schema = z.object({
      email: z.string().email(),
      password: z.string().min(6),
    });
  } else {
    if (type === "login") {
      schema = z.object({
        email: z.string().email(),
        password: z.string().min(6),
      });
    } else if (type === "forgot") {
      schema = z.object({ email: z.string().email() });
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
  }

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  console.log(location.state?.token);

  const createAccount = async (data) => {
    let res;

    try {
      if (location.state?.token) {
        console.log("reset password", data);
        res = await fetch(`${import.meta.env.VITE_BASE_URL}/chng-pswd`, {
          method: "PATCH",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${location.state?.token}`,
          },
          body: JSON.stringify({
            email: data.email,
            newPassword: data.password,
            confirmNewPassword: data.password,
          }),
        });
      } else {
        if (type === "login") {
          console.log("log data", data);

          res = await fetch(`${import.meta.env.VITE_BASE_URL}/sign-in`, {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });
        } else if (type === "signup") {
          console.log("sign data", data);

          res = await fetch(`${import.meta.env.VITE_BASE_URL}/sign-up`, {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              ...data,
              role: "ADMIN",
            }),
          });
        } else if (type === "forgot") {
          console.log("forgot", {
            ...data,
          });
          res = await fetch(`${import.meta.env.VITE_BASE_URL}/req-pswd-chng`, {
            method: "PATCH",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });
        } else {
          console.log("doctor", {
            ...data,
            role: "DOCTOR",
          });
          res = await fetch(
            `${import.meta.env.VITE_BASE_URL}/admin/doc/sign-up`,
            {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${userToken}`,
              },
              body: JSON.stringify({
                ...data,
                role: "DOCTOR",
              }),
            }
          );
        }
      }
      const result = await res.json();
      console.log(result);

      if (result.success === true) {
        Cookies.set("accessToken", result.data.accessToken);
        setRole(result.data.role);
        toast.message(result.message);
        if (type === "login") {
          if (result.data.role === "ADMIN") {
            nevigate("/admin/dashboard");
          } else if (result.data.role === "DOCTOR") {
            nevigate("/doctor/dashboard");
          } else {
            nevigate("/");
          }
        } else if (type === "forgot") {
          nevigate("/verify", {
            state: { type: "forgot" },
          });
        } else {
          nevigate("/verify");
        }
      }
    } catch (error) {
      console.log(error);
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
          ) : type === "signup" ? (
            <>
              <CardTitle className="text-2xl">Sign Up</CardTitle>
              <CardDescription>
                Enter your email below to register your account
              </CardDescription>
            </>
          ) : (
            <>
              <CardTitle className="text-2xl">Register Doctor</CardTitle>
              <CardDescription>
                Enter your email below to register your account
              </CardDescription>
            </>
          )}
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(createAccount)}>
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
              {(type === "signup" || type === "doctor") && (
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
              {type !== "forgot" && (
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
              )}
              <Button
                disabled={isSubmitting}
                type="submit"
                className="w-full button"
              >
                {type === "login"
                  ? isSubmitting
                    ? "Logging..."
                    : "LogIn"
                  : type === "signup"
                  ? isSubmitting
                    ? "Loading..."
                    : "Sig-Up"
                  : type === "forgot"
                  ? isSubmitting
                    ? "Loading..."
                    : "Get OTP"
                  : isSubmitting
                  ? "Loading..."
                  : "Register User"}
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
            <div className="mt-1 flex gap-1 justify-center text-sm">
              Forgot Password?{" "}
              <Link to="/forgotpassword" className="underline">
                Click Here
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthForm;

let obj = {
  availableFrom: "12:12",
  availableTo: "02:12",
  sessionCount: 4,
  sessionTimeInterval: 45,
  startFrom: ["12:01", "01:33", "03:44", "02:33"],
  startTo: ["14:12", "02:23", "04:54", "05:55"],
};
