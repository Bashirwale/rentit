import { NavLink } from "react-router-dom";

const NavLinks = ({ handleOpenLogin, user }) => {
  return (
    <div className="hidden md:flex items-center gap-16">
      <ul className="flex items-center gap-4">
        <li>
          <NavLink
            to="/blogs"
            className="text-sm font-medium text-black hover:text-base hover:border-b-2  hover:border-customPurple hover:pb-2 transition"
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/listings"
            className="text-sm font-medium text-black hover:text-base hover:border-b-2  hover:border-customPurple hover:pb-2 transition"
          >
            Listings
          </NavLink>
        </li>
      </ul>
      <div className="flex items-center gap-4 p-8">
        {!user && (
          <button
            onClick={handleOpenLogin}
            className=" bg-customPurple px-4 py-2 rounded-md text-white text-sm font-medium transform hover:scale-105 transition"
          >
            Log in
          </button>
        )}

        <NavLink
          to="/createPost"
          className=" border border-customPurple text-customPurple px-4 py-2 rounded-md text-sm font-medium transform hover:scale-105 transition"
        >
          Make a Posting
        </NavLink>
      </div>
    </div>
  );
};

export default NavLinks;
