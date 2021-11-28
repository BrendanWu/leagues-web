import React, { useEffect, useState } from "react";
import { FlexDiv } from "../react-design-system/FlexDiv";
import { Text } from "../react-design-system/Text";
import { Title } from "../react-design-system/Title";
import makeApiRequest from "../services/makeApiRequest";
const UrbanTorontoListings = () => {
  const [listings, setListings] = useState([]);
  const [numberOfListings, setNumberOfListings] = useState(10);
  const fetchData = async () => {
    try {
      const { data } = await makeApiRequest(
        "listings/getListings",
        "GET",
        {},
        null
      );
      setListings(data.listings);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <FlexDiv
      style={{ maxWidth: "90vw", marginLeft: "10vw" }}
      vert
      justify="flex-start"
      align="flex-start"
    >
      <Title label="News" />

      {listings &&
        listings.slice(0, numberOfListings).map((listing: any) => {
          return (
            <FlexDiv vert justify="flex-start" align="flex-start">
              <img
                style={{ width: 100 }}
                alt="listing"
                src={listing.imageUri}
              />
              <Text style={{ fontWeight: "bold" }}>{listing.title}</Text>
              <Text>{listing.description}</Text>
            </FlexDiv>
          );
        })}
      <button
        onClick={() => {
          setNumberOfListings(numberOfListings + 10);
        }}
      >
        Show more
      </button>
    </FlexDiv>
  );
};

export default UrbanTorontoListings;
