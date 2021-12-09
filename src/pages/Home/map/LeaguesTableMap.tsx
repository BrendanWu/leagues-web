import React from "react";
import basketballCourts from "../../../basketballCourts";
import { FlexDiv } from "../../../react-design-system/FlexDiv";
import { useDispatch } from "react-redux";
import { setLocation } from "../../../redux/actions/location";
import { Text } from "../../../react-design-system/Text";

const LeaguesTableMap = (props: { type?: string }) => {
  const dispatch = useDispatch();
  const tableData =
    props.type === "in"
      ? basketballCourts.filter((item: any) => item?.description === "Indoor")
      : props.type === "out"
      ? basketballCourts.filter((item: any) => item?.description !== "Indoor")
      : basketballCourts;
  return (
    <FlexDiv vert>
      {tableData.map((court: any) => {
        return (
          <FlexDiv
            container
            style={{
              padding: 10,
              border: "1px solid #EFEFEF",
              cursor: "pointer",
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
            <FlexDiv>
              <p style={{ fontWeight: "bold", color: "#282828" }}>
                {court.title}
              </p>
            </FlexDiv>
            <FlexDiv justify="flex-end">
              <div style={{ textAlign: "right" }}>
                <Text style={{ color: "#DA3E17" }}> Free Entry </Text>
                <p style={{ color: "#282828" }}>{court.description}</p>
              </div>
            </FlexDiv>
          </FlexDiv>
        );
      })}
    </FlexDiv>
  );
};

export default LeaguesTableMap;
