import React, { ChangeEventHandler, useEffect, useState } from "react";
import { FlexDiv } from "../../react-design-system/FlexDiv";
import { Text } from "../../react-design-system/Text";
import Button from "../../react-design-system/Button";
import { Link } from "react-router-dom";
import data, { BasketballCourtT } from "../../basketballCourts";
import {
  Container,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import LeaguesMap from "../Home/map/LeaguesMap";
import LeaguesTableMap from "../Home/map/LeaguesTableMap";
import { IProfile } from "../../interfaces/pages/Auth";
import { useSubscription } from "@apollo/client";
import { MY_SECOND_QUERY } from "../../graphql/queries";
import { Input } from "../../react-design-system/Input";
const LockerRoom = (props: { court?: BasketballCourtT }) => {
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
    <>
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
                  // marginRight: 32,
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
   
      
    </>
  );
};

const TeamsComponent = () => {
  const [profileList, setProfileList] = React.useState<IProfile[]>([]);
  const {data,error,loading} = useSubscription(MY_SECOND_QUERY);
  return (
    <>
      <Text>Invite your friends</Text>
      <Grid container>
        <Grid xs={12} sm={6}>
        <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Court</TableCell>
              <TableCell align="right">Address</TableCell>
              <TableCell align="right"> Messages</TableCell>
              <TableCell align="right"> Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.game_player?.map((game: any) => (
              <TableRow
                key={game.id}
                hover
                style={{ cursor: "pointer" }}
                onClick={() => {
                  // history.push("/site/" + game.id);
                }}
              >
                <TableCell>{game.players[0].name}</TableCell>
                <TableCell align="right">
                  {game.players[0].weight}
                </TableCell>
                <TableCell align="right">{game.players[0].height}</TableCell>
                <TableCell align="right">Point guard</TableCell>
      
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
        </Grid>
        <Grid xs={12} sm={6}>
        <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Court</TableCell>
              <TableCell align="right">Address</TableCell>
              <TableCell align="right"> Messages</TableCell>
              <TableCell align="right"> Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.game_player?.map((game: any) => (
              <TableRow
                key={game.id}
                hover
                style={{ cursor: "pointer" }}
                onClick={() => {
                  // history.push("/site/" + game.id);
                }}
              >
                <TableCell>{game.players[0].name}</TableCell>
                <TableCell align="right">
                  {game.players[0].weight}
                </TableCell>
                <TableCell align="right">{game.players[0].height}</TableCell>
                <TableCell align="right">Point guard</TableCell>
      
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
        </Grid>
      </Grid>
                <LobbyChat/>
      <Text>
        You will be able to arrange your teams after you check in on game day
      </Text>
    </>
  );
};

const LobbyChat = () => {
  const [message, setMessage] = React.useState<string>('');
  // const [hasuraGetMessagesFromLobby, errors] = useMutation();
  // const [hasuraSendMessage, errors] = useMutation();
  const handleMessageChange = (message: string) => {
    // console.log(e);
    setMessage(message);
  }
  const handleSendMessage = () => {
    //mutation
  }
  return (
    <>
     
      <Text>Lobby chat</Text>
      <FlexDiv justify="space-between">
       
      <Input altTheme placeholder="Message" onChange={(e: React.ChangeEvent<HTMLInputElement>): void => handleMessageChange(e.target.value)}/>
      <Button label="Send" onClick={handleSendMessage} />
      </FlexDiv>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Player</TableCell>
     
              <TableCell align="right"> Messages</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {[].map((game: any) => (
              <TableRow
                key={game.id}
                hover
                style={{ cursor: "pointer" }}
                onClick={() => {
                  // history.push("/site/" + game.id);
                }}
              >
                <TableCell>{game.players[0].name}</TableCell>
                
                <TableCell align="right">Point guard</TableCell>
      
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}


export { LockerRoom };
