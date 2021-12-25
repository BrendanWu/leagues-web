import * as React from "react";
import Drawer from "@material-ui/core/Drawer";
import { FlexDiv } from "../../../react-design-system/FlexDiv";
import { Text } from "../../../react-design-system/Text";
import courtImage from "../../../assets/court.jpg";
import styled from "styled-components";
import Button from "../../../react-design-system/Button";
import { Link } from "react-router-dom";
import { BasketballCourtT } from "../../../basketballCourts";

const StyledImg = styled.img`
  width: 20vw;
  height: 100;
`;

const MapDrawer = (props: {
  text: string;
  isVisible: boolean;
  court?: BasketballCourtT;
  onClose: () => void;
}) => {
  const { isVisible, onClose, text } = props;
  console.log(text);
  return (
    <Drawer anchor={"right"} open={isVisible} onClose={onClose}>
      <FlexDiv style={{ margin: 20 }} vert>
        <StyledImg src={courtImage} alt="Basket Court" />
        <Text style={{ color: "gray" }}>Basketball</Text>
        <Text style={{ color: "#DA3E17" }}>  Indoor Gym | Full-Court{" "}</Text>
        <Text
          style={{
            color: "black",
            fontWeight: "bold",
            fontSize: 16,
            height: 10,
          }}
        >
          {props?.court?.title}
        </Text>
      
       
        <Text
          style={{
            color: "#4695C6",
            height: 5,
            fontSize: `12px`,
          }}
        >
          TODO display availability today and all other metadata please
        </Text>{" "}
        <Text
          style={{
            color: "#4695C6",
            height: 5,
            fontSize: `12px`,
            marginBottom: 30,
          }}
        >
          
        </Text>
        <Link to="/locker">
          <Button alt label="Join " />
        </Link>
      </FlexDiv>
    </Drawer>
  );
};
export default MapDrawer;
