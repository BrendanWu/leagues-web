import React from "react";
import basketballCourts, { BasketballCourtT } from "../../../basketballCourts";
import { FlexDiv } from "../../../react-design-system/FlexDiv";
import { useDispatch } from "react-redux";
import { setLocation } from "../../../redux/actions/location";
import { setCourt } from "../../../redux/actions/court";
import { Text } from "../../../react-design-system/Text";
import moment from "moment";

interface Hours {
  hours: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
  };
}
const LeaguesTableMap = (props: { type?: string }) => {
  const dispatch = useDispatch();
  const getTimeSlotsToday = (hours: Hours) => {
    const days = [
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
      "sunday",
    ];
    const currentDayOfWeek = moment().day();
    //@ts-ignore
    return hours[days[currentDayOfWeek]];
  };

  const dispatchCourtData = (court: any) => {
    dispatch(
      setLocation({
        lat: court?.location?.latitude,
        lng: court?.location?.longitude,
        title: court?.title
      })
    );
    dispatch(
      setCourt({
        title: court?.title,
        description: court?.description,
        timing: getTimeSlotsToday(court?.hours),
        website: court?.website,
        imageUrl: court?.imageUrl
      })
    );
  }

  const tableData =
    props.type === "in" ?
      basketballCourts.filter((item: any) => item?.description === "Indoor") :
      props.type === "out" ?
        basketballCourts.filter((item: any) => item?.description !== "Indoor") :
        basketballCourts;

  return (
    <FlexDiv vert>
      {tableData.map((court: BasketballCourtT) => {
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
            onClick={() => dispatchCourtData(court)}
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
