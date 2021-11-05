import React, { useState, useEffect } from "react";
import axios from "axios";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { IHomeUser } from "../../interfaces/pages/Home";
import { API } from "../../constants";
// import GameFeedCarousel from './components'
import { Text } from "../../react-design-system/Text";
import { RootState } from "../../interfaces/redux/store";
import { useSelector } from "react-redux";
import { Container } from "@material-ui/core";
import UrbanTorontoListings from "../../components/UrbanTorontoListings";
// import { Button2 } from "../../react-react-design-system/src/Button2";
import { Button2 } from "../../react-design-system/Button2";
import Button from "../../react-design-system/Button";
import { FlexDiv } from "../../react-design-system/FlexDiv";
import { Input } from "../../react-design-system/Input";
import Stars from "../../components/StarsComponent";
import hero from "../../assets/hero-bg.svg";
import LeaguesMap from "../../components/LeaguesMap";
import LeaguesTableMap from "./components/LeaguesTableMap";
import data from "../../basketballdata";
import GameFeedCarousel from "./components/GameFeedCarousel";
const Home = () => {
  const [allUsers, setAllUsers] = useState<IHomeUser[]>([]);
  const classes = useStyles();
  const [selected, setSelected] = useState(0);
  const token = useSelector<RootState>((state) => state?.auth?.token);
  const profile_Id = useSelector<RootState>((state) => state?.auth?.user_id);
  const getUsersProfiles = async () => {
    try {
      const { data } = await axios.get(`${API}getprofiles`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      setAllUsers(data);

      // console.log(auth);
    } catch (error) {}
  };

  const getQR = async () => {
    try {
      const { data } = await axios.get(
        `${API}getqrdata`,

        {
          params: {
            profile_Id,
          },
          headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log(data);
    } catch (error) {}
  };

  useEffect(() => {
    getUsersProfiles();
    getQR();
  }, []);
  console.log(allUsers);
  return (
    <>
      {/* <Stars number={4}/> */}
      <div
        style={{
          backgroundImage: `url(${hero})`,
          backgroundRepeat: "repeat",
          height: 300,
        }}
      >
        <Container style={{ color: "white", marginTop: -20 }}>
          <div style={{ width: 400, paddingTop: 50 }}>
            <Text>FIND RECREATIONAL GAMES HAPPENING AROUND YOU RIGHT NOW</Text>

            <Button label="Get Started"></Button>
          </div>
        </Container>
      </div>

      <GameFeedCarousel />

      <Container>
        <div style={{ width: 200 }}>
          <Input
            // style={{ width: 200 }}
            altTheme
            label="Enter state name"
            image="https://thumbs.dreamstime.com/z/red-maps-pin-location-map-icon-location-pin-pin-icon-vector-red-maps-pin-location-map-icon-location-pin-pin-icon-vector-vector-144267433.jpg"
          />
        </div>

        <FlexDiv container>
          <LeaguesMap />

          <FlexDiv
            style={{
              color: "white",
              backgroundColor: "#282828",
              maxHeight: "80vh",
              overflow: "scroll",
              borderLeft: 0,
            }}
          >
            <LeaguesTableMap />
          </FlexDiv>
        </FlexDiv>
      </Container>
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

export { Home };
