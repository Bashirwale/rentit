import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, onValue } from "firebase/database";
import { CiEdit } from "react-icons/ci";

const UserProfile = () => {
  const [userData, setUserData] = useState([]);

  const auth = getAuth();

  useEffect(() => {
    const db = getDatabase();
    const userId = auth.currentUser.uid;
    const userRef = ref(db, `users/${userId}`);

    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setUserData(data);
      } else {
        console.log("error fetching user details");
      }
    });
  }, [auth]);
  console.log(userData);
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="p-4 md:p-8 shadow-md max-w-screen-lg w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-customPurple">
            {userData.displayName}
          </h2>
          <button className="bg-customPurple transform hover:scale-105 transition rounded-full p-2">
            <CiEdit className="text-xl text-white font-bold" />
          </button>
        </div>

        <div className="w-72 h-72 mt-6 mx-auto flex justify-center items-center">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            alt="Avatar"
            className="w-full h-full rounded-full mb-4 md:mb-0"
          />
        </div>

        <hr className="my-6" />

        <div className="mt-6 md:ml-4">
          <h3 className="text-lg font-bold text-customPurple mb-2">
            Contact Information
          </h3>
          <p className="text-sm text-gray-500">Email: {userData.email} </p>
          <p className="text-sm text-gray-500">Phone: (123) 456-7890</p>
        </div>

        <div className="mt-8 md:ml-4">
          <h3 className="text-lg font-bold text-customPurple mb-2">Bio</h3>
          <p className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            vulputate, sapien nec dictum dignissim, tellus lectus tristique
            nunc, sit amet efficitur est diam nec ex.
          </p>
        </div>

        <div className="mt-10 flex flex-col md:flex-row md:space-x-4">
          <button className="bg-customPurple hover:bg-indigo-950 rounded-md mb-4 md:mb-0 p-2 text-white transform hover:scale-105 transition">
            Create Posting
          </button>
          <button className="bg-white shadow-md text-customPurple rounded-md border border-slate-600 p-2 transform hover:scale-105 hover:bg-slate-100 transition">
            Create Blog Post
          </button>
        </div>

        <div className="mt-16">
          <div className="bg-customPurple text-white p-4 rounded-lg grid grid-cols-2 gap-4">
            <div className="text-center">
              <p className="text-lg font-semibold">Total Listings</p>
              <p className="text-2xl">15</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold">Total Posts</p>
              <p className="text-2xl">8</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
