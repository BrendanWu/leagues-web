import React from "react";
import hero from "../../../assets/leagues-logo.svg";
import styled from "styled-components";
import Link from "@material-ui/core/Link";
const NavContainer = styled.div`
  /* flex: 1; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ImageContainer = styled.img`
  width: 100px;
  height: 70px;
`;

const TextStyled = styled.h5`
  color: white;
  font-size: 38;
  font-weight: bold;
  margin-right: 10;
`;
const NavBar = () => {
  return (
    <NavContainer>
      <ImageContainer src={hero} />
      <Link href="/login" variant="body2">
        <TextStyled>LogIn </TextStyled>
      </Link>
    </NavContainer>
  );
};

export default NavBar;
