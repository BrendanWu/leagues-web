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
// import MenuItem from "@material-ui/core/MenuItem";
// import Select from "@material-ui/core/Select";
import UrbanTorontoListings from "../../components/UrbanTorontoListings";
// import { Button2 } from "../../react-react-design-system/src/Button2";
import { Button2 } from "../../react-design-system/Button2";
import Button from "../../react-design-system/Button";
import { FlexDiv } from "../../react-design-system/FlexDiv";
import { Input } from "../../react-design-system/Input";
import { Select } from "../../react-design-system/Select";
import Stars from "../../components/StarsComponent";
import hero from "../../assets/hero-bg.svg";
import LeaguesMap from "../../components/LeaguesMap";
import LeaguesTableMap from "./components/LeaguesTableMap";
import data from "../../basketballdata";
import GameFeedCarousel from "./components/GameFeedCarousel";
const Home = () => {
  const [allUsers, setAllUsers] = useState<IHomeUser[]>([]);
  const classes = useStyles();
  const [selected, setSelected] = useState<string>("All");
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
            <Text style={{ fontSize: 28 }}>
              FIND RECREATIONAL GAMES HAPPENING AROUND YOU RIGHT NOW
            </Text>

            <Button label="Get Started"></Button>
          </div>
        </Container>
      </div>

      <GameFeedCarousel />

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
          <Select>
            <option onChange={(i) => console.log(i)} value="">
              Indoor/OutDoor
            </option>
            <option value="">Indoor</option>
            <option value="">OutDoor</option>
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
