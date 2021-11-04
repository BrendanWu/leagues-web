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
  },
  { lines: number; altTheme: boolean }
>((props) => ({
  placeholder: props.label,
  lines: props.lines,
  altTheme: props.altTheme,
}))((props) => ({
  flex: 1,
  height: 20 * props.lines,
  background: props.altTheme ? "white" : "#1c1c1c",
  color: props.altTheme ? "black" : "white",
  border: props.altTheme ? "2px solid lightgray" : "2px solid white",
  paddingLeft: "1em",
  fontFamily: "Montserrat",
  paddingTop: "1em",

  marginRight: 40,
}));

interface Props {
  label?: string;
  lines?: number;
  altTheme?: boolean;
  border?: boolean;
  style?: React.CSSProperties;
  image?: string;
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

      {props?.image ? (
        <img
          style={{
            borderRadius: 20,
            marginTop: 7,
            marginLeft: -30,
            width: 30,
            height: 30,
            zIndex: 2,
          }}
          src={props?.image}
          alt=""
        />
      ) : null}
    </div>
  );
};
