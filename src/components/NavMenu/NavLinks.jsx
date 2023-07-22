import { Link } from "react-router-dom";

const NavLinks = ({ handleOpenLogin }) => {
  return (
    <div className="hidden md:flex items-center gap-16">
      <ul className="flex items-center gap-4">
        <li>
          <Link
            to="/blogs"
            className="text-sm font-medium text-black hover:text-xl"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            to="/listings"
            className="text-sm font-medium text-black hover:text-xl"
          >
            Listings
          </Link>
        </li>
      </ul>
      <div className="flex items-center gap-4 p-8">
        <button
          onClick={handleOpenLogin}
          className=" bg-customPurple px-4 py-2 rounded-md text-white text-sm font-medium"
        >
          Log in
        </button>
        <button className=" border border-customPurple text-customPurple px-4 py-2 rounded-md text-sm font-medium">
          Make a Posting
        </button>
      </div>
    </div>
  );
};

export default NavLinks;
