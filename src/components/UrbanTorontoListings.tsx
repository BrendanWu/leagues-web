import Axios from "axios";
import React, { useEffect, useState } from "react";
import { API } from "../constants";

const UrbanTorontoListings = () => {
  const [listings, setListings] = useState([]);
  const [numberOfListings, setNumberOfListings] = useState(10);
  useEffect(() => {
    Axios.get(API + "listings/getListings").then((res: any) => {
      console.log(res);
      if (res.data.success) {
        setListings(res.data.listings);
      }
    });
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", maxWidth: 1024 }}>
        <h1>News</h1>

        {listings &&
          listings.slice(0, numberOfListings).map((listing: any) => {
            return (
              <div>
                <img
                  style={{ width: 100 }}
                  alt="listing"
                  src={listing.imageUri}
                />
                <p style={{ fontWeight: "bold" }}>{listing.title}</p>
                <p>{listing.description}</p>
              </div>
            );
          })}
        <button
          onClick={() => {
            setNumberOfListings(numberOfListings + 10);
          }}
        >
          Show more
        </button>
      </div>
    </div>
  );
};

export default UrbanTorontoListings;
