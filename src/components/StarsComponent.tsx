import React from "react";
import ReactStars from "react-stars";

const Stars = (props: { number: number }) => {
  const [numberOfStars, setNumberOfStars] = React.useState<number>(
    props.number
  );

  

  const ratingChanged = (val: any) => {
    // console.log(e);
    if (typeof val == "number") {
      setNumberOfStars(val);
    }
  };

  return (
    <div>
      <p>Stars component goes here</p>
      {numberOfStars}
      <ReactStars
        //   count={props.number}
        onChange={ratingChanged}
        value={numberOfStars}
        size={24}
        color2={"#ffd700"}
      />
    </div>
  );
};

export default Stars;
