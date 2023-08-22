import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, onValue } from "firebase/database";
import { PiSignOutFill } from "react-icons/pi";

import { toast } from "react-toastify";

const UserProfileModal = ({ setOpenModal }) => {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState([]);

  const auth = getAuth();

  const navigate = useNavigate();

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

  const signOut = () => {
    setLoading(true);
    try {
      auth.signOut();
      setOpenModal(false);
      navigate("/");
      toast.success("signed out");
      console.log("signed out");
      setLoading(false);
    } catch (error) {
      toast.error("unable to log out");
    }
  };
  return (
    <div className="absolute right-6 w-80 h-80 md:w-96 flex flex-col items-center bg-white rounded-lg shadow-md shadow-gray-400 p-3 border mt-2 z-10">
      <p className="text-base text-slate-500 mb-6">{userData.email}</p>
      <img
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        alt="avatar"
        className="h-20 w-20 rounded-full mb-4"
      />
      <p className="text-slate-500 text-xl font-semibold">
        hi!, {userData.displayName}{" "}
      </p>
      <Link
        to="/profile"
        onClick={() => setOpenModal(false)}
        className="bg-customPurple px-6 py-2 text-white mt-4 rounded-xl"
      >
        View profile
      </Link>
      <button
        disabled={loading}
        onClick={signOut}
        className="flex items-center py-2 px-4 text-base text-customPurple  bg-slate-100 mt-6 rounded-lg disabled:opacity-75"
      >
        <PiSignOutFill />
        sign out
      </button>
    </div>
  );
};

export default UserProfileModal;
