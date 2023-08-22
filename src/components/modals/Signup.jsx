import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase.config";
import { getDatabase, ref, set } from "firebase/database";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";
import Logo from "../NavMenu/Logo";

const Signup = ({ setOpenSignUp, handleOpenLogin }) => {
  const [loading, setLoading] = useState(false);
  const [signUpCredentials, setSignUpCredentials] = useState({
    name: "",
    address: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { name, address, email, password } = signUpCredentials;

  const onChange = (e) => {
    setSignUpCredentials((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredentials.user;
      const db = getDatabase();
      set(ref(db, "users/" + user.uid), {
        displayName: name,
        email: email,
        address: address,
      });
      setLoading(false);
      setOpenSignUp(false);
      navigate("/listings");
      toast.success("account successfully created");
      console.log("account successfully created");
    } catch (error) {
      console.log(error);
      toast.error("account could not be created");
    }
  };

  return (
    <div className="fixed top-0 left-0 bg-black flex items-center justify-center w-full h-screen py-2 bg-opacity-50">
      <div className="bg-gray-100 flex flex-col items-center gap-2 h-full px-4 rounded-md w-96 py-6">
        <span
          onClick={() => setOpenSignUp(false)}
          className="absolute top-2 right-4 text-2xl text-black font-bold cursor-pointer"
        >
          x
        </span>
        <Logo />
        <div className="bg-white p-2 rounded-md w-full shadow-md h-full">
          <div>
            <p className="text-base font-bold text-center">
              Sign Up to create an account
            </p>
            <p className="text-sm text-neutral-500 text-center my-2">
              sign up to take action
            </p>
            <div className="bg-yellow-200 text-customPurple text-xs md:text-sm p-2 flex items-center justify-center gap-2 rounded">
              <FaGoogle />
              <p>Sign up with Google Account</p>
            </div>
          </div>
          <p className="text-sm text-neutral-500 text-center my-3">or</p>
          <form onSubmit={onSubmit}>
            <div className="flex flex-col">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your full name"
                onChange={onChange}
                value={name}
                className="border border-gray-400 p-2 rounded-md text-sm text-neutral-500 outline-customPurple"
              />
            </div>
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
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                placeholder="address"
                value={address}
                onChange={onChange}
                className="border border-gray-400 p-2 rounded-md text-sm text-neutral-500 outline-customPurple"
              />
            </div>
            <div className="flex flex-col mt-4">
              <label htmlFor="email">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                id="password"
                value={password}
                onChange={onChange}
                className="border border-gray-400 p-2 rounded-md text-sm text-neutral-500 outline-customPurple"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="bg-customPurple flex items-center justify-center text-white text-base w-full px-6 py-2 mt-6 rounded-md disabled:bg-opacity-75"
            >
              {loading ? (
                <AiOutlineLoading3Quarters className="animate-spin transition" />
              ) : (
                "Sign up now"
              )}
            </button>
          </form>
          <p className="text-sm text-neutral-500 text-center mt-4">
            registered user?
            <button
              className="text-customPurple font-bold cursor-pointer"
              onClick={handleOpenLogin}
            >
              sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
