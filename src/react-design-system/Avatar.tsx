import * as React from "react";
import styled from "styled-components";
import "./assets/index.css";

const StyledAvatar = styled.img`
  width: 100;
  height: 100;
  border-radius: 75;
`;

interface Props {
  src: string;
  alt?: string;
  style?: React.CSSProperties;
  children?: any;
  onClick?: any;
}

export const Avatar: React.FC<Props> = (props) => {
  return (
    <>
      <StyledAvatar
        height={150}
        width={150}
        style={{ borderRadius: 75, border: "2px solid lightgray" }}
        {...props}
      ></StyledAvatar>
    </>
  );
};
