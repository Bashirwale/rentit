import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { FaGoogle } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Logo from "../NavMenu/Logo";
import { toast } from "react-toastify";

const Login = ({ setOpenLogin, handleOpenSignUp }) => {
  const [loading, setLoading] = useState(false);
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = loginCredentials;

  const navigate = useNavigate();

  const onChange = (e) => {
    setLoginCredentials((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
      console.log("successfully logged in");
      toast.success("successfully logged in");
      setOpenLogin(false);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      toast.error("invalid login credentials");
      setLoading(false);
    }
  };
  return (
    <div className="fixed top-0 left-0 bg-white flex items-center justify-center w-full h-screen py-8 md:py-10 bg-opacity-50">
      <div className="bg-gray-100 flex flex-col items-center gap-2 h-full p-4 rounded-md w-96">
        <span
          onClick={() => setOpenLogin(false)}
          className="absolute top-2 right-4 text-2xl text-black font-bold cursor-pointer"
        >
          x
        </span>
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
          <form onSubmit={onSubmit}>
            <div className="flex flex-col">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email address"
                onChange={onChange}
                value={email}
                className="border border-gray-400 p-2 rounded-md text-sm text-neutral-500 outline-customPurple"
              />
            </div>
            <div className="flex flex-col mt-4">
              <label htmlFor="email">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={onChange}
                placeholder="Enter your password"
                className="border border-gray-400 p-2 rounded-md text-sm text-neutral-500 outline-customPurple"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-customPurple text-white text-base w-full flex items-center justify-center  text-center px-6 py-2 mt-6 rounded-md disabled:bg-opacity-75"
            >
              {loading ? (
                <AiOutlineLoading3Quarters className="animate-spin transition" />
              ) : (
                "Sign in now"
              )}
            </button>
          </form>
          <p className="text-sm text-neutral-500 text-center my-4">
            new user?
            <button
              onClick={handleOpenSignUp}
              className="text-customPurple font-bold cursor-pointer"
            >
              Register
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
