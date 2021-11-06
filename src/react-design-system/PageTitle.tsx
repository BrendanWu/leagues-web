import * as React from "react";
import styled from "styled-components";

const StyledTitle = styled.h1`
  font-family: "CentraNo2-Thin";
  font-size: 54px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.3;
  letter-spacing: -0.81px;
  text-align: center;
  color: #1c1c1c;
`;

interface Props {
  label?: string;
}

export const PageTitle: React.FC<Props> = (props) => {
  return <StyledTitle>{props.label}</StyledTitle>;
};
