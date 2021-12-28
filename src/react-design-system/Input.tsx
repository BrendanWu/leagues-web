import * as React from "react";
import styled from "styled-components";

const StyledInput = styled.input.attrs<
  { altTheme: boolean; label: string; border: boolean; image: string },
  { altTheme: boolean; border: boolean; image: string }
>((props) => ({
  placeholder: props.label,
  altTheme: props.altTheme,
  border: props.border,
  image: props.image,
}))((props) => ({
  flex: 1,
  height: 50,
  background: props.altTheme ? "white" : "#1c1c1c",
  color: props.altTheme ? "black" : "white",
  border: props.border ? "2px solid lightgray" : "0px solid white",
  paddingLeft: "1em",
  fontFamily: "Montserrat",
}));

const StyledTextArea = styled.textarea.attrs<
  {
    label: string;
    lines: number;
    altTheme: boolean;
    width: string;
  },
  { lines: number; altTheme: boolean; width: string }
>((props) => ({
  placeholder: props.label,
  lines: props.lines,
  altTheme: props.altTheme,
  width: props?.width,
}))((props) => ({
  flex: 1,
  height: 20 * props.lines,
  width: props?.width ? props?.width : "100%",
  background: props.altTheme ? "white" : "#1c1c1c",
  color: props.altTheme ? "black" : "white",
  border: props.altTheme ? "2px solid lightgray" : "2px solid white",
  paddingLeft: "1em",
  // fontFamily: "Montserrat",
  paddingTop: "1em",

  marginRight: 40,
}));

interface Props {
  width?: string;
  label?: any;
  lines?: number;
  altTheme?: boolean;
  border?: boolean;
  style?: React.CSSProperties;
  image?: string;
  ref?: any;
}

export const Input: React.FC<
  Props & React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>
> = (props) => {
  if (props.lines) {
    return <StyledTextArea {...props} />;
  }
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <StyledInput {...props} />

    </div>
  );
};
