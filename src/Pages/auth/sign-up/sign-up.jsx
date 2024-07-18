import React from "react";
import AuthForm from "../auth";

const SignUp = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <AuthForm type={"signup"} />
    </div>
  );
};

export default SignUp;
