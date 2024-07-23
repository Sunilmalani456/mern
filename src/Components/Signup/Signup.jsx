import React, { useState } from "react";
import "./Signup.css";
import { NavLink, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [signup, setSignup] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSignupInput = (e) => {
    const { name, value } = e.target;
    setSignup({ ...signup, [name]: value });
  };

  const signupSubmit = async (e) => {
    e.preventDefault();
    console.log(signup);
    try {
      const response = await fetch(
        "https://backend-sush-vineets-projects-44621f19.vercel.app/api/v1/sign-up",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(signup),
        }
      );

      const res = await response.json();
      console.log(res);
      if (res.statusCode === 400 && res.success === false) {
        toast.error("Please provide all details");
      } else if (res.statusCode === 409 && res.success === false) {
        toast.error("User with this email or username already registered");
      } else if (res.statusCode === 500 && res.success === false) {
        toast.error("Internal Server Error");
      } else if (res.statusCode === 201 && res.success === true) {
        navigate("/Verification");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="loginForm">
        <form className="loginFormBox" onSubmit={signupSubmit}>
          <div className="loginHeading">
            <h2>Signup</h2>
          </div>

          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={signup.name}
              onChange={handleSignupInput}
              id="username"
              aria-describedby="emailHelp"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={signup.email}
              onChange={handleSignupInput}
              id="email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={signup.password}
              onChange={handleSignupInput}
              id="password"
            />
          </div>

          <button type="submit" className="loginSubmitBtn">
            Register
          </button>

          <div className="signupLinkDiv">
            <p>
              Don't have an account?{" "}
              <NavLink to="/login">
                <span>Login</span>
              </NavLink>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
