import React, { useEffect, useState } from "react";
import { FlexDiv } from "../../react-design-system/FlexDiv";
import { Text } from "../../react-design-system/Text";
import Button from "../../react-design-system/Button";
import { Link } from "react-router-dom";
const LockerRoom = () => {
  return (
    <>
      <FlexDiv vert style={{ marginTop: 40 }} align="center" justify="center">
        <Text>Locker room</Text>

        <Link to="/team-stat">
          {" "}
          <Button alt label="Start"></Button>
        </Link>
      </FlexDiv>
    </>
  );
};

export { LockerRoom };
