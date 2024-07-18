import React from "react";
import AuthForm from "../auth";

const LogIn = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <AuthForm type={"login"} />
    </div>
  );
};

export default LogIn;
