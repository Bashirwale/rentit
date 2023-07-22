import { Link } from "react-router-dom";
const MobileLink = ({ setOpenMenu, handleOpenLogin }) => {
  return (
    <div className="md:hidden fixed top-0 right-0 z-50 flex flex-col justify-between h-full bg-white w-full p-16">
      <ul className="flex flex-col items-center gap-10">
        <li>
          <Link
            to="/blogs"
            onClick={() => setOpenMenu(false)}
            className="text-sm font-medium text-black hover:text-xl"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            to="/listings"
            onClick={() => setOpenMenu(false)}
            className="text-sm font-medium text-black hover:text-xl"
          >
            Listings
          </Link>
        </li>
      </ul>
      <div className="flex items-center justify-between p-2 md:p-8">
        <button
          onClick={handleOpenLogin}
          className=" bg-customPurple px-2 py-1 md:px-4 md:py-2 rounded-md text-white text-sm font-medium hover:p-1"
        >
          Log in
        </button>
        <button className="border border-customPurple text-customPurple px-2 py-1 md:px-4 md:py-1 rounded-md text-sm font-medium">
          Make a Posting
        </button>
      </div>
      <span
        onClick={() => setOpenMenu(false)}
        className="absolute top-2 right-4 text-2xl text-customPurple font-bold cursor-pointer"
      >
        x
      </span>
    </div>
  );
};

export default MobileLink;
