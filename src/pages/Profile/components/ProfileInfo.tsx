import * as React from "react";
import { FlexDiv } from "../../../react-design-system/FlexDiv";
import { Text } from "../../../react-design-system/Text";
import { Avatar } from "../../../react-design-system/Avatar";
import image from "../../../assets/player.png";
import { IUserRegister } from "../../../interfaces/pages/Auth";

const ProfileInfo = (props: { profile: IUserRegister }) => {
  return (
    <FlexDiv
      size={0.5}
      style={{ borderRight: "1px solid lightgray" }}
      vert
      align="center"
    >
      <Avatar src={image} alt="PRofile Pic" />
      <Text style={{ color: "black" }}>
        {props?.profile?.name || " User Name"}
      </Text>
      <Text style={{ color: "black" }}>
        {props?.profile?.email || " User Email"}
      </Text>
    </FlexDiv>
  );
};

export { ProfileInfo };
