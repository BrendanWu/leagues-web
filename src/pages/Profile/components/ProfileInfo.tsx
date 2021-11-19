import * as React from "react";
import { FlexDiv } from "../../../react-design-system/FlexDiv";
import { Text } from "../../../react-design-system/Text";
import { Avatar } from "../../../react-design-system/Avatar";
import image from "../../../assets/player.png";
import { IUserRegister } from "../../../interfaces/pages/Auth";
import { Input } from "../../../react-design-system/Input";
import Button from "../../../react-design-system/Button";
import axios from "axios";
import { API } from "../../../constants";

const ProfileInfo = (props: {
  profile: IUserRegister;
  onImageUpload: (file: any) => void;
}) => {
  const [file, setFile] = React.useState<any>(null);
  const fileInput = React.useRef<any>(null);
  // function chooseFile() {
  //   cont { current } = fileInputs(current || { click: () => {} }).click();
  // }
  return (
    <FlexDiv
      size={0.5}
      style={{ borderRight: "1px solid lightgray" }}
      vert
      align="center"
    >
      <label htmlFor="myuploadid">
        <Avatar src={(API + props.profile.image) as string} alt="PRofile Pic" />
      </label>

      <Input
        type="file"
        id="myuploadid"
        // ref={fileInput}
        style={{ display: "none" }}
        onChange={(e: any) => props.onImageUpload(e.target.files[0])}
      />
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
