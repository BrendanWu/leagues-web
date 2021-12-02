import * as React from "react";
import styled from "styled-components";
// import { useBreakpoint } from 'gatsby-plugin-breakpoints'

type JustifyOptions =
  | "center"
  | "space-between"
  | "space-evenly"
  | "flex-start"
  | "flex-end";
type AlignOptions =
  | "center"
  | "flex-start"
  | "flex-end"
  | "stretch"
  | "base-line";

interface Props {
  vert?: boolean;
  style?: React.CSSProperties;
  container?: boolean;
  className?: string;
  justify?: JustifyOptions;
  align?: AlignOptions;
  size?: number;
  xs?: number;
  sm?: number;
  md?: number;
  l?: number;
  card?: boolean;
  children?: any;
  onClick?: (e?: React.MouseEvent) => void;
}

const StyledFlexDiv = styled.div<Props>((props) => ({
  display: "flex",
  flexWrap: props.container && !props.xs && !props.sm ? "nowrap" : "wrap",
  flex: props.size ? props.size : 1,
  justifyContent: props.justify && props.justify,
  alignItems: props.align && props.align,
  flexDirection: props.vert ? "column" : "row",
  boxShadow: props?.card ? "4px 4px 4px 4px #27272733" : "0px",
}));

export const FlexDiv: React.FC<Props> = (props) => {
  // const breakpoints = useBreakpoint()
  // if (breakpoints.xs) {
  //   return <StyledFlexDiv {...props} size={props.xs}></StyledFlexDiv>
  // }
  // if (breakpoints.sm) {
  //   return <StyledFlexDiv {...props} size={props.sm}></StyledFlexDiv>
  // }
  // if (breakpoints.md) {
  //   return <StyledFlexDiv {...props} size={props.md}></StyledFlexDiv>
  // }
  // if (breakpoints.l) {
  //   return <StyledFlexDiv {...props} size={props.l}></StyledFlexDiv>
  // }
  return <StyledFlexDiv {...props}></StyledFlexDiv>;
};
