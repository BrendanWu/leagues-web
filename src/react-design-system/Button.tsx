import * as React from "react";
import styled from "styled-components";
import { FlexDiv } from "./FlexDiv";
import { RippleWrapper } from "./WithRipple";
import { VariantOptions, Icon } from "./Icon";
import { Text } from "./Text";

const StyledButton = styled.button<Props>`
  background-color: ${({ alt }) => (alt ? "#000" : "white")};
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
      background-color: ${!alt ? "#000" : "white"};
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
  
     cursor: auto;
  `}
`;

interface Props {
  label?: string;
  alt?: boolean;
  color?: string;
  className?: string;
  icon?: VariantOptions | null;
  disabled?: boolean;
  onClick?: any;
  style?: React.CSSProperties;
}

const Button: React.FC<Props> = (props) => {
  if (props.disabled) {
    return (
      <StyledButton {...props}>
        <FlexDiv container justify="center" align="center">
          <p style={{ margin: 0 }}>{props.label}</p>
          {props.icon ? <Icon variant={props.icon} size={10} /> : null}
        </FlexDiv>
      </StyledButton>
    );
  } else {
    return (
      <RippleWrapper className="rippleWrapper">
        <StyledButton {...props}>
          <FlexDiv container justify="center" align="center">
            <Text style={{ margin: 0 }}>{props.label}</Text>
            {props.icon ? <Icon variant={props.icon} size={10} /> : null}
          </FlexDiv>
        </StyledButton>
      </RippleWrapper>
    );
  }
};

export default Button;
