import React, { useState, useEffect } from "react";
import axios from "axios";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";
import UrbanTorontoListings from "../../components/UrbanTorontoListings";
import { Button2 } from "../../design-system/Button2";
import Button from "../../design-system/Button";
import { FlexDiv } from "../../design-system/FlexDiv";
import styled from "styled-components";
import Stars from "../../components/StarsComponent";
import hero from "../../assets/hero-bg.svg";
import LeaguesMap from "../../components/LeaguesMap";
import LeaguesTableMap from "./components/LeaguesTableMap";
import NavBar from "./components/Navbar";
import GameFeedCarousel from "./components/GameFeedCarousel";
import { Text } from "../../design-system/Text";
const MapContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const HomeScreen = () => {
  return (
    <>
      {/* <Stars number={4} /> */}
      <div
        style={{
          backgroundImage: `url(${hero})`,
          backgroundRepeat: "repeat",
          height: 400,
        }}
      >
        <Container style={{ color: "white" }}>
          <NavBar />
          <div style={{ width: 500, paddingTop: 10 }}>
            <Text>FIND RECREATIONAL GAMES HAPPENING AROUND YOU RIGHT NOW</Text>
            <Button label="Get Started"></Button>
          </div>
        </Container>
      </div>
      <Container>
        <FlexDiv container>
          <MapContainer>
            <LeaguesMap />
          </MapContainer>

          <FlexDiv
            style={{
              color: "white",
              backgroundColor: "#282828",
              maxHeight: "80vh",
            }}
          >
            <LeaguesTableMap />
          </FlexDiv>
        </FlexDiv>

        {/* <h1>IO</h1>  */}
        {/* <h3>Games in my area table view</h3>
        <FlexDiv container style={{ background: "lightgray" }}>
          <FlexDiv vert justify="center" align="center">
            <h2>Title</h2>
            <p>Description</p>
          </FlexDiv>
          <FlexDiv vert justify="center" align="center">
            <h2>Title</h2>
            <p>Description</p>
          </FlexDiv>
          <FlexDiv vert justify="center" align="center">
            <h2>Title</h2>
            <p>Description</p>
          </FlexDiv>
        </FlexDiv> */}
        {/* <Button onClick={() => getQR()}> Send Qr </Button> */}
        {/* <ul>
          {allUsers.map((user) => (
            <li key={user._id}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                  width: "40vw",
                }}
              >
                <Typography>Name:</Typography>
                <Typography>{user?.name}</Typography>
                <Typography>Email:</Typography>
                <Typography>{user?.email}</Typography>
              </div>
            </li>
          ))}
        </ul> */}
        {/* <Card className={classes.card}>
          <ul>
            <li>Dashboard</li>
            <li>your organization : companyX</li>
            <li>api calls : 100</li>
            <li>billing: 100 *0.01 = $1</li>
          </ul>
        </Card>
        <Card className={classes.card}>
          QR api
          <FlexDiv></FlexDiv>
        </Card>
        <Card className={classes.card}>Bitcoin api</Card>
        <Card className={classes.card}>
          Webscraper api
          <ul>
            <li>method: GET</li>
            <li>url: 192.102.242.12:5000/listings/getListings</li>
            <li>input: website url</li>
            <li>output: array </li>
          </ul>
          <FlexDiv>
            <input placeholder="urbantoronto.ca" />

            <Button label="test api route" />
          </FlexDiv>
        </Card> */}
        {/* <Card className={classes.card}>
          <a href="https://docs.google.com/document/d/1JIxKVWgTZQfvTQptMpX99IgvBK31qXLiQ9ytCW0UE-Q/edit?usp=sharing">
            Design system
          </a>
          React Modal React Burger Menu (Mobile Navs) Framer Motions
          (Animations) AOS (Animations) React Currency Format React Select React
          Toastify React Toolkit React Carousel Custom Cards* Forms, Buttons,
          Input Fields* Navs, Footers* Heroes, Page Headers * About AppRoot
          AppSwitcherMenu Avatar AvatarSelector BadgeButton Banner Breadcrumb
          BusyStateDialog BusyStateIndicator Button Calendar Checkbox CodeEditor
          ColorPicker DatePicker Dialog Divider Draggable Dropdown DualSelector
          Heading HelpPopup Icon Image ImageSelector Input Label Landmark
          Layouts SegmentedButton Select Settings Slider SplashScreen
          SplitButton SVG Splitter TabBar Table Text TextArea Tile TileCarousel
          ToggleButton Token TokenInput TokenInputDialog Tokenizer Toolbar Tree
          WindowShade withLabels ZeroState
        </Card> */}
      </Container>
      {/* <h1>api documentation</h1> */}
    </>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      padding: 16,
      display: "flex",
      flexDirection: "column",
    },
  })
);

export default HomeScreen;
