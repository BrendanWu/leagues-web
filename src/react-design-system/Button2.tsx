import * as React from "react";
import styled from "styled-components";
import { FlexDiv } from "./FlexDiv";
import { VariantOptions, Icon } from "./Icon";
import { Text } from "./Text";

const StyledButton = styled.button<Props>`
  background-color: ${({ alt }) => (alt ? "#1c1c1c" : "white")};
  color: ${({ alt }) => (alt ? "white" : "black")};
  width: 100%;
  height: 50px;
  cursor: pointer;
  border: solid 2px white;
  font-size: 12px;
  ${({ alt, disabled }) =>
    !disabled &&
    `
    &:hover {
      background-color: ${!alt ? "#1c1c1c" : "white"};
      color: ${!alt ? "white" : "black"};
      border: solid 1px black;
    }
  `}

  &:focus {
    outline: 0;
  }
  ${({ disabled }) =>
    disabled &&
    `
     background: gray;
     cursor: auto;
  `}
`;

interface Props {
  label?: string;
  alt?: boolean;
  color?: string;
  icon?: VariantOptions | null;
  disabled?: boolean;
  onClick?: any;
  style?: React.CSSProperties;
}

export const Button2: React.FC<Props> = (props) => {
  if (props.disabled) {
    return (
      <StyledButton {...props}>
        <FlexDiv container justify="center" align="center">
          <Text style={{ margin: 0, marginRight: 10 }}>{props.label}</Text>
          {props.icon ? <Icon variant={props.icon} size={10} /> : null}
        </FlexDiv>
      </StyledButton>
    );
  } else {
    return (
      <StyledButton {...props}>
        <FlexDiv container justify="center" align="center">
          <Text style={{ margin: 0, marginRight: 10 }}>{props.label}</Text>
          {props.icon ? <Icon variant={props.icon} size={10} /> : null}
        </FlexDiv>
      </StyledButton>
    );
  }
};
