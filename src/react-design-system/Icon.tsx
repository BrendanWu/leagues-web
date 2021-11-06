import * as React from "react";
import styled from "styled-components";

export type VariantOptions =
  | "Arrow.svg"
  | "area.svg"
  | "bag.svg"
  | "bath.svg"
  | "bed.svg"
  | "binocular.svg"
  | "bus.svg"
  | "bycicle.svg"
  | "calendar (1).svg"
  | "calendar.svg"
  | "call.svg"
  | "Check.svg"
  | "company.svg"
  | "compare.svg"
  | "cross.svg"
  | "crystal-ball.svg"
  | "company.svg"
  | "compare.svg"
  | "cross.svg"
  | "crystal-ball.svg"
  | "email.svg"
  | "Eye.svg"
  | "fashion.svg"
  | "file.svg"
  | "film.svg"
  | "flash (1).svg"
  | "flash.svg"
  | "foot.svg"
  | "gear.svg"
  | "graduation-hat.svg"
  | "heart.svg"
  | "home.svg"
  | "key.svg"
  | "line-chart.svg"
  | "list.svg"
  | "menu.svg"
  | "messenger.svg"
  | "mls-logo-footer.svg"
  | "museum.svg"
  | "person.svg"
  | "phone.svg"
  | "pin.svg"
  | "pine-tree.svg"
  | "print.svg"
  | "search.svg"
  | "share.svg"
  | "shoes.svg"
  | "sydney-opera-house.svg"
  | "tag.svg"
  | "tick.svg"
  | "user.svg"
  | "walk.svg";

const StyledIcon = styled.img.attrs<
  {
    variant: VariantOptions;
    size: number;
  },
  { size: number }
>((props) => ({
  src: "https://ellicotimages.s3.us-east-2.amazonaws.com/" + props.variant,
  size: props.size,
}))((props) => ({
  height: props.size,
  width: props.size,
}));

interface Props {
  size?: number;
  variant: VariantOptions;
  style?: React.CSSProperties;
}

export const Icon: React.FC<Props> = (props) => {
  if (props.variant) {
    return <StyledIcon {...props} />;
  } else {
    return <div></div>;
  }
};
