import React, { useState } from "react";
import basketballdata from "../../../basketballdata";
import { FlexDiv } from "../../../react-design-system/FlexDiv";
import BasketballCourtT from "../../../../src/basketballdata";
import { useDispatch } from "react-redux";
import { setLocation } from "../../../redux/actions/location";
import { Text } from "../../../react-design-system/Text";

const LeaguesTableMap = () => {
  const dispatch = useDispatch();
  // const [rowId, setRowId] = useState < number || null > null;
  return (
    <FlexDiv vert>
      {basketballdata.map((court: any) => {
        return (
          <FlexDiv
            style={{
              padding: 10,
              border: "1px solid orange",
              cursor: "pointer",
              height: 60,
            }}
            justify="space-between"
            onClick={() =>
              dispatch(
                setLocation({
                  lat: court?.location?.latitude,
                  lng: court?.location?.longitude,
                  title: court?.title,
                })
              )
            }
          >
            {/* <FlexDiv container> */}
            <div style={{ height: 60 }}>
              <p style={{ fontWeight: "bold" }}>{court.title}</p>
              <p style={{ color: "#909298" }}>{court.description}</p>
              {/* <p style={{}}>Time Slots Available: N/A</p> */}
            </div>
            <Text style={{ color: "#DA3E17" }}> Free Entry </Text>
            {/* </FlexDiv> */}
          </FlexDiv>
        );
      })}
    </FlexDiv>
  );
};

export default LeaguesTableMap;