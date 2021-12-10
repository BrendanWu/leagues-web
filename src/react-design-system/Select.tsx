import * as React from "react";
import styled from "styled-components";

const StyledSelect = styled.select`
 
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid lightgray;
  border-radius: 8px;
  padding: 16px;
  opacity: 1;
`;

interface Props {
  style?: React.CSSProperties;
  children?: any;
  onChange?: any;
}

export const Select: React.FC<Props> = (props) => {
  return (
    <>
      <StyledSelect {...props}></StyledSelect>
    </>
  );
};
