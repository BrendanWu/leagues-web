import React from "react";
import hero from "../../../assets/leagues-logo.svg";
import { NavContainer, ImageContainer, TextStyled } from "./StyledComponents";
import Link from "@material-ui/core/Link";

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
