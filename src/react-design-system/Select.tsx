import * as React from "react";
import styled from "styled-components";

const StyledSelect = styled.select`
  width: 157px;
  height: 35px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #909298;
  border-radius: 2px;
  padding: 5px;
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
