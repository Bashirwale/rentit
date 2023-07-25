import React from "react";
import { AiFillTag } from "react-icons/ai";

const ListingsFilter = () => {
  return (
    <div className=" border-gray-100 border-y-2 py-2">
      <form className="flex flex-col md:flex-row gap-3 px-6 md:px-16 ">
        <div className="flex items-center gap-1 p-2 bg-gray-300 w-full md:w-1/3 rounded">
          <AiFillTag className="text-base text-gray-600" />
          <input
            type="search"
            className="w-full bg-gray-300 text-neutral-500 text-xs p-2"
            value="search by price range, location or apartment type"
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          <div className="flex items-center bg-gray-100 shadow">
            <select
              name="rent"
              id="rent"
              className=" text-sm font-medium bg-gray-100 rounded"
            >
              <option value="">For Rent</option>
            </select>
          </div>
          <div className="flex items-center gap-1 bg-gray-100 shadow p-1">
            <label htmlFor="type" className="text-neutral-500 text-xs">
              type:
            </label>
            <select
              name="price"
              id="price"
              className="text-sm font-medium bg-gray-100 rounded"
            >
              <option value="">Apartment</option>
            </select>
          </div>
          <div className="flex items-center gap-1 bg-gray-100 shadow p-1">
            <label htmlFor="type" className="text-neutral-500 text-xs">
              min price:
            </label>
            <select
              name="price"
              id="price"
              className="text-sm font-medium bg-gray-100 rounded"
            >
              <option value="">200k</option>
            </select>
          </div>
          <div className="flex items-center gap-1 bg-gray-100 shadow p-1">
            <label htmlFor="type" className="text-neutral-500 text-xs">
              max price:
            </label>
            <select
              name="price"
              id="price"
              className="text-sm font-medium bg-gray-100"
            >
              <option value="">200k</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ListingsFilter;
