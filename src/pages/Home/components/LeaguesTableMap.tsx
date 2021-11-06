import React, { useState } from "react";
import basketballdata from "../../../basketballdata";
import { FlexDiv } from "../../../react-design-system/FlexDiv";
import BasketballCourtT from "../../../../src/basketballdata";
import { useDispatch } from "react-redux";
import { setLocation } from "../../../redux/actions/location";

const LeaguesTableMap = () => {
  const dispatch = useDispatch();
  // const [rowId, setRowId] = useState < number || null > null;
  return (
    <FlexDiv vert>
      {basketballdata.map((court: any) => {
        return (
          <FlexDiv
            container
            style={{
              padding: 10,
              border: "1px solid orange",
              cursor: "pointer",
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
            <p style={{ fontWeight: "bold" }}>{court.title}</p>
            <p style={{ textAlign: "right" }}>{court.description}</p>
          </FlexDiv>
        );
      })}
    </FlexDiv>
  );
};

export default LeaguesTableMap;
