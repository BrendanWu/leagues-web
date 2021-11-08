import * as React from "react";
import { FlexDiv } from "../../../react-design-system/FlexDiv";
import { Text } from "../../../react-design-system/Text";
import { Avatar } from "../../../react-design-system/Avatar";
import image from "../../../assets/player.png";

const ProfileInfo = () => {
  return (
    <FlexDiv
      size={0.5}
      style={{ borderRight: "1px solid lightgray" }}
      vert
      align="center"
    >
      <Avatar src={image} alt="PRofile Pic" />
      <Text style={{ color: "black" }}>Ishaq Ali</Text>
      <Text style={{ color: "black" }}>johari9292@gmail.com</Text>
    </FlexDiv>
  );
};

export { ProfileInfo };
