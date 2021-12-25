import React, { useEffect, useState } from "react";
import { FlexDiv } from "../../react-design-system/FlexDiv";
import { Text } from "../../react-design-system/Text";
import Button from "../../react-design-system/Button";
import { Link } from "react-router-dom";
import { BasketballCourtT } from "../../basketballCourts";
import { Container, Grid } from "@material-ui/core";
import LeaguesMap from "../Home/map/LeaguesMap";
import LeaguesTableMap from "../Home/map/LeaguesTableMap";
import { IProfile } from "../../interfaces/pages/Auth";
const LockerRoom = (props: { court: BasketballCourtT }) => {
  const [court, selectCourt] = React.useState<BasketballCourtT>();
  const [availableTimeSlots, setTimeSlots] = React.useState<string[]>([]);

  const getTimeSlotsToday = () => {
    //api call to /api/basketballCourts/:id/timeSlots
    const res = [
      "1:00 pm",
      "2:00 pm",
      "3:00 pm",
      "4:00 pm",
      "5:00 pm",
      "6:00 pm",
    ];
    setTimeSlots(res);
  };
  React.useEffect(() => {
    getTimeSlotsToday();
  }, []);
  const calculateDatesTimeslot = (timeSlot: string) => {
    let timeStart: Date = new Date();
    let timeEnd: Date = new Date();
    //return [timeStart:Date, timeEnd: Date]
    return [timeStart, timeEnd];
  };
  const selectGameTime = (timeslot: string) => {
    //api call to /api/basketballCourts/:id/timeSlots/:timeSlotId/reserve
    const [timeStart, timeEnd] = calculateDatesTimeslot(timeslot);
  };
  return (
    <Container>
      <FlexDiv vert style={{ marginTop: 40 }}>
        <Text size="large">Locker room</Text>
        {props.court == undefined ? (
          <>
            <Text>No court selected</Text>
            <FlexDiv container>
              <LeaguesMap />

              <FlexDiv
                style={{
                  color: "white",
                  backgroundColor: "white",
                  maxHeight: "80vh",
                  overflow: "scroll",
                  marginRight: 32,
                }}
              >
                <LeaguesTableMap />
              </FlexDiv>
            </FlexDiv>
          </>
        ) : (
          <Text>{props.court.title}</Text>
        )}
      </FlexDiv>
      <Text>Please select a time</Text>
      <Text>January 1 2022</Text>

      <Grid container spacing={3}>
        {availableTimeSlots?.map((timeSlot) => (
          <Grid item xs={6}>
            <Button onClick={() => selectGameTime(timeSlot)} label={timeSlot} />
          </Grid>
        ))}
      </Grid>
      <TeamsComponent />
      <Link to="/team-stat">
        {" "}
        <Button alt label="Ready up"></Button>
      </Link>
    </Container>
  );
};

const TeamsComponent = () => {
  const [profileList, setProfileList] = React.useState<IProfile[]>([]);
  return (
    <>
      <Text>Invite your friends</Text>
      <Text>
        You will be able to arrange your teams after you check in on game day
      </Text>
    </>
  );
};

export { LockerRoom };
