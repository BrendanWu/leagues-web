import React, { useState } from "react";
import { Text } from "../../react-design-system/Text";
import { Container } from "@material-ui/core";
import Button from "../../react-design-system/Button";
import { FlexDiv } from "../../react-design-system/FlexDiv";
import { Input } from "../../react-design-system/Input";
import { Select } from "../../react-design-system/Select";
import hero from "../../assets/hero-bg.svg";
import LeaguesMap from "./map/LeaguesMap";
import LeaguesTableMap from "./map/LeaguesTableMap";
import GameFeedCarousel from "./components/GameFeedCarousel";
import styled from "styled-components";
import leg from "../../assets/whatleg.png";
import iconProfile from "../../assets/iconProfile.png";
import calendar from "../../assets/calendar.png";
import basket from "../../assets/basket.png";
import arrow from "../../assets/arrow.png";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import NavBar from "./components/Navbar";
import { useSelector } from "react-redux";
import { RootState } from "../../interfaces/redux/store";
import { useHistory } from "react-router-dom";

const BackgroundImage = styled.div`
  background-image: url(${hero});
  background-repeat: repeat;
  height: 65vh;
`;
const HappeningText = styled(Text)`
  text-align: left;
  font: normal normal bold 30px OswaldVariable;
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
  font: normal normal bold 4em OswaldVariable;
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

const Home = () => {
  const [selected, setSelected] = useState<string>("All");
  const isLoggedIn = useSelector<RootState>((state) => state?.auth?.isLoggedIn) as boolean;
  const history = useHistory();
  function goToLocker() {
    history.push("/locker");
  }
  return (
    <>
      <BackgroundImage>
          <Container style={{ color: "white", padding: 20 }}>
            {!isLoggedIn && <NavBar />}
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
        // style={{ marginLeft: "8vw", marginRight: "10vw" }}
        vert
        container
      >
        <FlexDiv container justify="space-between" style={{ marginRight: "6em", marginLeft: "6em" }}>
          <HappeningText>BASKETBALL COURTS IN TORONTO</HappeningText>
          <LocationText>
            You Are Currently Located In Mississauga, Ontario
          </LocationText>
        </FlexDiv>
        <GameFeedCarousel />
      </FlexDiv>
      <FlexDiv style={{ backgroundColor: "white" }} container>
        <FlexDiv>
          <img width={"100%"} src={leg} alt="league" />
        </FlexDiv>
        <FlexDiv vert justify="center">
          <ImageTitle>INVITE YOUR FRIENDS</ImageTitle>
          <DetailText>
            Invite up to 9 friends and create a recurring link to your next basketball meetup
          </DetailText>
          <Button alt onClick={()=>goToLocker()} label="Create a basketball meetup link for you and your friends"/>

        </FlexDiv>
      </FlexDiv>
      <BackgroundImage style={{ paddingTop: 60 }}>
        <FlexDiv vert style={{width:"100%"}} justify="center" align="center">
      <FlexDiv style={{width:"66%"}}>
        <MainTitle>Read reviews on the latest in Toronto Basketball</MainTitle>
        </FlexDiv>
        <FlexDiv vert style={{width:"66%"}} justify="center" align="center">
        {/* <MainTitle></MainTitle> */}
        <TitleText>
Basketball courts, leagues, and exclusive memberships   </TitleText>
     
        <FlexDiv justify="center">
          <Button
            style={{ width: 400, alignSelf: "center" }}
            label="Get Started"
          />
        </FlexDiv>
        </FlexDiv>
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
          style={{ width: "60%", marginBottom:16 }}
          justify="space-between"
          container
        >
          <Input
            // style={{ width: 200 }}
            altTheme
            label="Enter state name"
            style={{
              border: "1px solid lightgray",
              padding: "16px",
              borderRadius: "12px",
            }}
            image="https://thumbs.dreamstime.com/z/red-maps-pin-location-map-icon-location-pin-pin-icon-vector-red-maps-pin-location-map-icon-location-pin-pin-icon-vector-vector-144267433.jpg"
          />
          <Select
            onChange={(e: any) => setSelected(e.target.value)}
            style={{ marginRight: 16, marginLeft: 16 }}
          >
            <option value="">Outdoor/Indoor</option>
            <option value="in">Indoor</option>
            <option value="out">OutDoor</option>
          </Select>
          <Select style={{ width: 97, marginRight: 16 }}>
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
      </Container>
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
          <LeaguesTableMap type={selected} />
        </FlexDiv>
      </FlexDiv>
      <FlexDiv vert justify="center">
        <MainTitle style={{ color: "#DA3E17" }}>THE LOCKER ROOM </MainTitle>
        <TitleText
          style={{ color: "#1D1D1D", maxWidth: "70vw", alignSelf: "center" }}
        >
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </TitleText>{" "}
      </FlexDiv>
      <FlexDiv vert align="center" justify="center">
        <FlexDiv style={{ maxWidth: "70vw", marginTop: 20 }}>
          <FlexDiv
            size={0.5}
            style={{
              background: "#70777A 0% 0% no-repeat padding-box",
              opacity: 1,
              minHeight: 220,
            }}
          ></FlexDiv>
          <FlexDiv
            size={0.5}
          // style={{
          //   background: "#70777A 0% 0% no-repeat padding-box",
          //   opacity: 1,
          // }}
          >
            <FlexDiv style={{ paddingLeft: 20 }} justify="center" vert>
              <img width={60} height={60} src={iconProfile} alt="Icon" />
              <Text
                style={{
                  color: "#DA3E17",
                  fontSize: 16,
                  fontWeight: "bold",
                  padding: 0,
                  marginTop: 0,
                  marginLeft: 10,
                }}
              >
                BUILD YOUR PROFILE
              </Text>
              <Text
                style={{
                  marginLeft: 10,
                  marginTop: 0,
                }}
              >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </Text>
            </FlexDiv>
          </FlexDiv>
        </FlexDiv>
        <FlexDiv style={{ maxWidth: "70vw", marginTop: 20 }}>
          <FlexDiv
            size={0.5}
          // style={{
          //   background: "#70777A 0% 0% no-repeat padding-box",
          //   opacity: 1,
          // }}
          >
            <FlexDiv style={{ paddingLeft: 20 }} justify="center" vert>
              <img width={60} height={60} src={calendar} alt="Icon" />
              <Text
                style={{
                  color: "#DA3E17",
                  fontSize: 16,
                  fontWeight: "bold",
                  padding: 0,
                  marginTop: 0,
                  marginLeft: 10,
                }}
              >
                CREATE + JOIN LOCAL EVENTS
              </Text>
              <Text
                style={{
                  marginLeft: 10,
                  marginTop: 0,
                }}
              >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </Text>
            </FlexDiv>
          </FlexDiv>
          <FlexDiv
            size={0.5}
            style={{
              background: "#70777A 0% 0% no-repeat padding-box",
              opacity: 1,
              minHeight: 220,
            }}
          ></FlexDiv>
        </FlexDiv>
        <FlexDiv container style={{ maxWidth: "70vw", marginTop: 20 }}>
          <FlexDiv
            size={0.5}
            style={{
              background: "#70777A 0% 0% no-repeat padding-box",
              opacity: 1,
              minHeight: 220,
            }}
          ></FlexDiv>
          <FlexDiv
            size={0.5}
          // style={{
          //   background: "#70777A 0% 0% no-repeat padding-box",
          //   opacity: 1,
          // }}
          >
            <FlexDiv style={{ paddingLeft: 20 }} justify="center" vert>
              <img width={60} height={60} src={basket} alt="Icon" />
              <Text
                style={{
                  color: "#DA3E17",
                  fontSize: 16,
                  fontWeight: "bold",
                  padding: 0,
                  marginTop: 0,
                  marginLeft: 10,
                }}
              >
                CHECK IN AND START HOOPING.
              </Text>
              <Text
                style={{
                  marginLeft: 10,
                  marginTop: 0,
                }}
              >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </Text>
            </FlexDiv>
          </FlexDiv>
        </FlexDiv>
        <FlexDiv style={{ paddingTop: 30 }} justify="center">
          <Text
            style={{
              color: "#DA3E17",
              fontSize: 20,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            GO TO THE LOCKER ROOM
          </Text>
          <img
            style={{ marginTop: 17, marginLeft: 10 }}
            width={30}
            height={30}
            src={arrow}
            alt="arrow"
          />
        </FlexDiv>
      </FlexDiv>
      <MainTitle style={{ color: "#1D1D1D", fontSize: 24 }}>
        FREQUENTLY ASKED QUESTIONS
      </MainTitle>
      <FlexDiv vert align="center">
        {[1, 2, 3, 4, 5, 6, 7].map((item) => (
          <Accordion key={item} style={{ maxWidth: "50vw" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "#DA3E00" }} />}
            // aria-controls={doc.title}
            >
              <TitleText style={{ color: "#1D1D1D" }}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam?
              </TitleText>
            </AccordionSummary>
            <AccordionDetails>
              <TitleText style={{ color: "#1D1D1D" }}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </TitleText>
            </AccordionDetails>
          </Accordion>
        ))}
      </FlexDiv>
    </>
  );
};

export { Home };
