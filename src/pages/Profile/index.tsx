import * as React from "react";
import { FlexDiv } from "../../react-design-system/FlexDiv";
import { ProfileInfo } from "./components/ProfileInfo";
import { EditProfile } from "./components/EditProfile";

const Profile = () => {
  return (
    <FlexDiv style={{ marginTop: 40 }} justify="space-between">
      <ProfileInfo />
      <EditProfile />
    </FlexDiv>
  );
};

export { Profile };
