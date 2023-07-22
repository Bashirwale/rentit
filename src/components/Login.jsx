import React from "react";
import { FaGoogle } from "react-icons/fa";
import Logo from "./NavMenu/Logo";

const Login = ({ setOpenLogin }) => {
  return (
    <div className="fixed top-0 left-0 bg-white flex items-center justify-center w-full h-screen py-8 md:py-10 bg-opacity-50">
      <div className="bg-gray-100 flex flex-col items-center gap-2 h-full p-4 rounded-md w-96">
        <Logo />
        <div className="bg-white p-4 rounded-md w-full shadow-md h-full">
          <div>
            <p className="text-base font-bold text-center">
              Sign into your account
            </p>
            <p className="text-sm text-neutral-500 text-center my-2">
              sign in to take action
            </p>
            <div className="bg-yellow-200 text-customPurple text-xs md:text-sm p-2 flex items-center justify-center gap-2 rounded">
              <FaGoogle />
              <p>Sign in with Google Account</p>
            </div>
          </div>
          <p className="text-sm text-neutral-500 text-center my-3">or</p>
          <form>
            <div className="flex flex-col">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                value="Enter your email address"
                className="border border-gray-400 p-2 rounded-md text-sm text-neutral-500"
              />
            </div>
            <div className="flex flex-col mt-4">
              <label htmlFor="email">Password</label>
              <input
                type="email"
                value="Enter your password"
                className="border border-gray-400 p-2 rounded-md text-sm text-neutral-500"
              />
            </div>
            <button
              onClick={() => setOpenLogin(false)}
              className="bg-customPurple text-white text-base w-full px-6 py-2 mt-6 rounded-md"
            >
              Sign in now
            </button>
          </form>
          <p className="text-sm text-neutral-500 text-center my-4">
            new user? <span className="text-black font-bold">Register</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
