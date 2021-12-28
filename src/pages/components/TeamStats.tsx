import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../react-design-system/Button";
import { FlexDiv } from "../../react-design-system/FlexDiv";
import { Text } from "../../react-design-system/Text";


const TeamStats = () => {
  return (
    <>
      <FlexDiv vert style={{ marginTop: 40 }} align="center" justify="center">
        <FlexDiv justify="space-between">
          {" "}
          <Text>Team 1</Text> <Text>Team 2</Text>
        </FlexDiv>
        <FlexDiv justify="space-between">
          {" "}
          <Text>5</Text> <Text>2</Text>
        </FlexDiv>
        <FlexDiv justify="space-between">
          {" "}
          <Link to="leg">
            <Button alt label="Ishaq"></Button> <Text>3</Text>
          </Link>
        </FlexDiv>
        <FlexDiv justify="space-between">
          {" "}
          <Link to="leg">
            {" "}
            <Button alt label="Brendan"></Button> <Text>5</Text>
          </Link>
        </FlexDiv>
      </FlexDiv>
    </>
  );
};

export default TeamStats;
