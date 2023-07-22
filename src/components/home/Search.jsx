import { AiFillTag } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import main from "../assets/main.png";

const Search = () => {
  return (
    <div className="md:mt-20 px-6 md:px-10 md:relative ">
      <img
        src={main}
        alt="building"
        className="hidden md:block md: md:w-full md:mx-auto"
      />
      <form className="flex flex-col md:flex-row md:items-center p-6 rounded-lg gap-6 md:absolute md:top-16 right-2/4 md:translate-x-2/4 md:bg-opacity-20 md:bg-white md:p-4 md:shadow-none shadow-xl">
        <div className="">
          <label
            htmlFor="price"
            className="flex items-center gap-2 mb-2 font-medium text-sm text-blue-950"
          >
            <AiFillTag />
            Price Range
          </label>
          <select
            name="price"
            id="price"
            className="text-gray-500  w-full p-4 md:p-2 focus:outline-none bg-gray-200 rounded-md"
          >
            <option value="">Select Price Range</option>
          </select>
        </div>
        <div className="">
          <label
            htmlFor="price"
            className="flex items-center gap-2 mb-2 font-medium text-sm text-blue-950"
          >
            <CiLocationOn />
            Location
          </label>
          <select
            name="price"
            id="price"
            className="text-gray-500 text-sm p-4 md:p-2 focus:outline-none w-full bg-gray-200 rounded-md"
          >
            <option value="">Search Location</option>
          </select>
        </div>
        <button className="rounded-md text-base self-end p-2 md:px-4 text-white bg-customPurple cursor-pointer">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
