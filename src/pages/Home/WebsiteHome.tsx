import React, { useState } from "react";
import { Text } from "../../react-design-system/Text";
import { Container } from "@material-ui/core";
import Button from "../../react-design-system/Button";
import { FlexDiv } from "../../react-design-system/FlexDiv";
import { Input } from "../../react-design-system/Input";
import { Select } from "../../react-design-system/Select";
import hero from "../../assets/hero-bg.svg";
import leg from "../../assets/whatleg.png";
import LeaguesMap from "./map/LeaguesMap";
import LeaguesTableMap from "./map/LeaguesTableMap";
import GameFeedCarousel from "./components/GameFeedCarousel";
import NavBar from "./components/Navbar";
import styled from "styled-components";

const BackgroundImage = styled.div`
  background-image: url(${hero});
  background-repeat: repeat;
  height: 65vh;
`;
const HappeningText = styled(Text)`
  text-align: left;
  font: normal normal bold 30px Oswald;
  letter-spacing: 0px;
  color: #da3e17;
  text-transform: uppercase;
  opacity: 1;
`;
const LocationText = styled(Text)`
  text-align: right;
  font: normal normal normal 12px Circular Std;
  letter-spacing: 0px;
  color: #909298;
  text-transform: capitalize;
  opacity: 1;
  align-self: center;
`;
const MainTitle = styled(Text)`
  text-align: center;
  font: normal normal bold 36px Oswald;
  letter-spacing: 0px;
  color: #ffffff;
  text-transform: uppercase;
  opacity: 1;
`;
const TitleText = styled(Text)`
  text-align: center;
  font: normal normal normal 16px Circular Std;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
`;
const ImageTitle = styled(Text)`
  text-align: left;
  font: normal normal 600 28px Oswald;
  letter-spacing: 0px;
  color: #1d1d1d;
  text-transform: uppercase;
  opacity: 1;
`;
const DetailText = styled(Text)`
  text-align: left;
  font: normal normal normal 16px Circular Std;
  letter-spacing: 0px;
  color: #1d1d1d;
  opacity: 1;
`;
const HomeScreen = () => {
  const [selected, setSelected] = useState<string>("All");
  return (
    <>
      <BackgroundImage>
        <Container style={{ color: "white", padding: 20 }}>
          <NavBar />
          <MainTitle>FIND RECREATIONAL GAMES HAPPENING</MainTitle>
          <MainTitle>AROUND YOU RIGHT NOW</MainTitle>
          {/* <TitleText>
            All sports, recreational events at your fingertips.
          </TitleText>
          <TitleText>
            Create a league, invite your friends and level up.
          </TitleText> */}
          <FlexDiv justify="center">
            <Button
              style={{ width: 400, alignSelf: "center" }}
              label="Get Started"
            />
          </FlexDiv>
        </Container>
      </BackgroundImage>
      <FlexDiv
        style={{ marginLeft: "8vw", marginRight: "10vw" }}
        vert
        container
      >
        <FlexDiv container justify="space-between">
          <HappeningText>HAPPENING RIGHT NOW</HappeningText>
          <LocationText>
            You Are Currently Located In Mississauga, Ontario
          </LocationText>
        </FlexDiv>
        <GameFeedCarousel />
      </FlexDiv>
      <FlexDiv container>
        <FlexDiv>
          <img width={"100%"} src={leg} alt="league" />
        </FlexDiv>
        <FlexDiv vert justify="center">
          <ImageTitle>WHAT IS LEAGUES?</ImageTitle>
          <DetailText>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
            <br />
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta.{" "}
          </DetailText>
        </FlexDiv>
      </FlexDiv>
      <BackgroundImage style={{ paddingTop: 60 }}>
        <MainTitle>SED UT PERSPICIATIS UNDE OMNIS ISTE</MainTitle>
        <MainTitle>NATUS ERROR SIT VOLUPTATEM.</MainTitle>
        <TitleText>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        </TitleText>
        <TitleText>
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.
        </TitleText>
        <FlexDiv justify="center">
          <Button
            style={{ width: 400, alignSelf: "center" }}
            label="Get Started"
          />
        </FlexDiv>
      </BackgroundImage>
      <MainTitle style={{ color: "#1D1D1D" }}>ADVANCED SEARCH </MainTitle>
      <TitleText style={{ color: "#1D1D1D" }}>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
      </TitleText>{" "}
      <TitleText style={{ color: "#1D1D1D" }}>
        ab illo inventore veritatis et quasi architecto beatae vitae dicta.
      </TitleText>
      <Container>
        <FlexDiv
          align="center"
          style={{ width: "60%" }}
          justify="space-between"
          container
        >
          <Input
            // style={{ width: 200 }}
            altTheme
            label="Enter state name"
            image="https://thumbs.dreamstime.com/z/red-maps-pin-location-map-icon-location-pin-pin-icon-vector-red-maps-pin-location-map-icon-location-pin-pin-icon-vector-vector-144267433.jpg"
          />
          <Select onChange={(e: any) => setSelected(e.target.value)}>
            <option value="">Outdoor/Indoor</option>
            <option value="in">Indoor</option>
            <option value="out">Outdoor</option>
          </Select>
          <Select style={{ width: 97 }}>
            <option value="">Price</option>
            <option value="">$100-200</option>
            <option value="">$200-300</option>
            <option value="">$300-500</option>
            <option value="">$500-1000</option>
          </Select>
          <Select style={{ width: 97 }}>
            <option value="">Time</option>
            <option value="">3 pm</option>
            <option value="">4 pm</option>
            <option value="">5 pm</option>
            <option value="">6 pm</option>
            <option value="">7 pm</option>
          </Select>
        </FlexDiv>

        <FlexDiv container>
          <LeaguesMap />

          <FlexDiv
            style={{
              color: "white",
              backgroundColor: "white",
              maxHeight: "80vh",
              overflow: "scroll",
              borderLeft: 0,
            }}
          >
            <LeaguesTableMap type={selected} />
          </FlexDiv>
        </FlexDiv>
      </Container>
    </>
  );
};

export default HomeScreen;
