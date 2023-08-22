import { useState, useEffect } from "react";
import { getDatabase, ref as databaseRef, onValue } from "firebase/database";
import ListingsFilter from "../components/listings/ListingsFilter";
import Listing from "../components/listings/Listing";
import map from "../components/assets/maplist.png";

const Listings = () => {
  const [userListings, setUserListings] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const usersRef = databaseRef(db, "users");
    onValue(usersRef, (snapshot) => {
      const userListings = [];

      snapshot.forEach((userSnapshot) => {
        const userId = userSnapshot.key;
        const listingData = userSnapshot.child("listings").val() || {};

        Object.keys(listingData).forEach((listingId) => {
          userListings.push({ userId, listingId, ...listingData[listingId] });
        });
      });

      setUserListings(userListings);
    });
  }, []);
  return (
    <div className="py-6">
      <ListingsFilter />
      <div className=" lg:flex">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full lg:w-2/4 px-6 md:px-10 lg:px-16 py-6 md:py-12 gap-6">
          {userListings.map((listing) => (
            <Listing key={listing.listingId} listing={listing} />
          ))}
        </div>
        <div className="px-6 md:px-16 py-6 md:py-12">
          <img src={map} alt="map" />
        </div>
      </div>
    </div>
  );
};

export default Listings;
