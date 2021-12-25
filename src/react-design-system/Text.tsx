import * as React from "react";
import styled from "styled-components";
import "./assets/index.css";

const StyledText = styled.p`
  font-size: 14px;
  font-weight: 400;

`;

interface Props {
  text?: string;
  style?: React.CSSProperties;
  children?: any;
  size?: sizeT
}

const sizes = {
  small: "12px",
  medium: "16px",
  large: "20px",
}

type sizeT = "small" | "medium" | "large";

export const Text: React.FC<Props> = (props) => {
  return (
    <>
      <StyledText className="text" {...props}></StyledText>
    </>
  );
};
