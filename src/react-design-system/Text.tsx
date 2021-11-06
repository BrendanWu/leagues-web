import * as React from "react";
import styled from "styled-components";
import "./assets/index.css";

const StyledText = styled.p`
  font-size: 14px;
  font-weight: 400;

  color: white;
`;

interface Props {
  text?: string;
  style?: React.CSSProperties;
  children?: any;
}

export const Text: React.FC<Props> = (props) => {
  return (
    <>
      <StyledText className="text" {...props}></StyledText>
    </>
  );
};
