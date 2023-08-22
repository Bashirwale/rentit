import { NavLink } from "react-router-dom";

const MobileLink = ({ setOpenMenu, handleOpenLogin, user }) => {
  return (
    <div className="md:hidden fixed top-0 right-0 z-50 flex flex-col justify-between h-full bg-white w-full p-16">
      <ul className="flex flex-col items-center gap-10">
        <li>
          <NavLink
            to="/blogs"
            onClick={() => setOpenMenu(false)}
            className="text-sm font-medium text-black hover:text-base hover:border-b-2  hover:border-customPurple hover:pb-2 transition"
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/listings"
            onClick={() => setOpenMenu(false)}
            className="text-sm font-medium text-black hover:text-base hover:border-b-2  hover:border-customPurple hover:pb-2 transition"
          >
            Listings
          </NavLink>
        </li>
      </ul>
      <div
        className={
          user
            ? "flex items-center justify-center p-2 md:p-8"
            : "flex items-center justify-between p-2 md:p-8"
        }
      >
        {!user && (
          <button
            onClick={() => {
              handleOpenLogin();
              setOpenMenu(false);
            }}
            className=" bg-customPurple px-2 py-1 md:px-4 md:py-2 rounded-md text-white text-sm font-medium transform hover:scale-105 transition"
          >
            Log in
          </button>
        )}

        <NavLink
          to="/createPost"
          onClick={() => setOpenMenu(false)}
          className="border border-customPurple text-customPurple px-2 py-1 md:px-4 md:py-1 rounded-md text-sm font-medium transform hover:scale-105 transition"
        >
          Make a Posting
        </NavLink>
      </div>
      <button
        onClick={() => setOpenMenu(false)}
        className="absolute top-2 right-4 text-2xl text-customPurple font-bold cursor-pointer"
      >
        x
      </button>
    </div>
  );
};

export default MobileLink;
