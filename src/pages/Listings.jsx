import React from "react";
import ListingsFilter from "../components/listings/ListingsFilter";
import Listing from "../components/listings/Listing";
import map from "../components/assets/maplist.png";

const Listings = () => {
  return (
    <div className="py-6">
      <ListingsFilter />
      <div className=" lg:flex">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full lg:w-2/4 px-6 md:px-10 lg:px-16 py-6 md:py-12 gap-6">
          <Listing />
          <Listing />
          <Listing />
          <Listing />
          <Listing />
          <Listing />
          <Listing />
          <Listing />
        </div>
        <div className="px-6 md:px-16 py-6 md:py-12">
          <img src={map} alt="map" />
        </div>
      </div>
    </div>
  );
};

export default Listings;
