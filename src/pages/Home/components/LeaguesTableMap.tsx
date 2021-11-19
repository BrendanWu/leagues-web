import React, { useState } from "react";
import basketballdata from "../../../basketballdata";
import { FlexDiv } from "../../../react-design-system/FlexDiv";
import BasketballCourtT from "../../../../src/basketballdata";
import { useDispatch } from "react-redux";
import { setLocation } from "../../../redux/actions/location";
import { Text } from "../../../react-design-system/Text";

const LeaguesTableMap = (props: { type?: string }) => {
  const dispatch = useDispatch();
  // const [rowId, setRowId] = useState < number || null > null;
  const tableData =
    props.type === "in"
      ? basketballdata.filter((item: any) => item?.description === "Indoor")
      : props.type === "out"
      ? basketballdata.filter((item: any) => item?.description !== "Indoor")
      : basketballdata;
  return (
    <FlexDiv vert>
      {tableData.map((court: any) => {
        return (
          <FlexDiv
            container
            style={{
              padding: 10,
              border: "1px solid orange",
              cursor: "pointer",
              // height: 60,
            }}
            justify="space-between"
            align="center"
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
            <FlexDiv>
              <p style={{ fontWeight: "bold" }}>{court.title}</p>
              {/* <p style={{}}>Time Slots Available: N/A</p> */}
            </FlexDiv>
            <FlexDiv justify="flex-end">
              <div style={{ textAlign: "right" }}>
                <Text style={{ color: "#DA3E17" }}> Free Entry </Text>
                <p style={{ color: "#909298" }}>{court.description}</p>
              </div>
            </FlexDiv>
          </FlexDiv>
        );
      })}
    </FlexDiv>
  );
};

export default LeaguesTableMap;
