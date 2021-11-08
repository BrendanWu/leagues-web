import * as React from "react";
import { FlexDiv } from "../../../react-design-system/FlexDiv";
import { Text } from "../../../react-design-system/Text";
import { Avatar } from "../../../react-design-system/Avatar";
import { Input } from "../../../react-design-system/Input";
import { Button2 } from "../../../react-design-system/Button2";

const EditProfile = () => {
  return (
    <FlexDiv style={{ marginLeft: "5%" }} vert align="flex-start">
      <Text style={{ color: "blueviolet", margin: 20 }}> Profile Update </Text>
      <FlexDiv align="center" justify="space-between">
        {" "}
        <Input
          style={{
            border: "2px solid lightgray",
            borderRadius: 10,
            margin: 20,
            width: "120%",
          }}
          label="Name"
          altTheme
        />
        <Input
          style={{
            border: "2px solid lightgray",
            borderRadius: 10,
            margin: 20,
          }}
          label="Email"
          altTheme
        />
      </FlexDiv>
      <FlexDiv justify="space-between">
        {" "}
        <Input
          style={{
            border: "2px solid lightgray",
            borderRadius: 10,
            margin: 20,
          }}
          label="Phone Number"
          altTheme
        />
        <Input
          style={{
            border: "2px solid lightgray",
            borderRadius: 10,
            margin: 20,
          }}
          label="Town"
          altTheme
        />
      </FlexDiv>
      <FlexDiv justify="space-between">
        {" "}
        <Input
          style={{
            border: "2px solid lightgray",
            borderRadius: 10,
            margin: 20,
          }}
          label="City"
          altTheme
        />
        <Input
          style={{
            border: "2px solid lightgray",
            borderRadius: 10,
            margin: 20,
          }}
          label="Country"
          altTheme
        />
      </FlexDiv>
      {/* <Input
        style={{
          border: "2px solid lightgray",
          borderRadius: 10,
          margin: 20,
          width: "200%",
        }}
        width="400%"
        label="Address"
        altTheme
      /> */}
      <FlexDiv align="center" justify="center">
        <Button2
          style={{
            color: "blueviolet",
            border: "2px solid lightgray",
            borderRadius: 10,
            margin: 20,
            width: "120%",
          }}
          label="Save Changes"
        />{" "}
      </FlexDiv>
    </FlexDiv>
  );
};

export { EditProfile };
