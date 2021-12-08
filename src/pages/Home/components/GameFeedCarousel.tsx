import React, { useState } from "react";
import { Card, CardActions, CardMedia, CardContent } from "@material-ui/core";
import Button from "../../../react-design-system/Button";
import { Text } from "../../../react-design-system/Text";
import courtImage from "../../../assets/court.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FlexDiv } from "../../../react-design-system/FlexDiv";
import MapDrawer from "../map/MapDrawer";

const QuestionList = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const onVisible = () => {
    setIsVisible(true);
  };
  return (
    <>
      {isVisible && (
        <MapDrawer
          text={"name"}
          isVisible={isVisible}
          onClose={() => setIsVisible(false)}
        />
      )}
      <Carousel
        swipeable={false}
        draggable={false}
        responsive={responsive}
        infinite={true}
        autoPlay
        autoPlaySpeed={1000}
        transitionDuration={1000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-10-px"
      >
        {carouselData.map((q) => {
          return (
            <FlexDiv style={{ padding: 16 }}>
              {
                <Card
                  style={{
                    width: 270,
                    height: 320,
                    background: "#FFFFFF 0% 0% no-repeat padding-box",
                    boxShadow: "2px 2px 4px #27272733",
                    borderRadius: "2px",
                    opacity: 1,
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="130"
                    image={courtImage}
                    alt="Court"
                  />
                  <CardContent style={{ height: 130 }}>
                    <FlexDiv style={{ height: 27 }} justify="space-between">
                      <Text style={{ color: "gray" }}>BasketBall</Text>
                      <Text style={{ color: "#DA3E17" }}>$10 Entry Fee</Text>
                    </FlexDiv>
                    <Text
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        fontSize: 16,
                        height: 10,
                      }}
                    >
                      Pick-Up Game
                    </Text>
                    <Text
                      style={{
                        color: "#4695C6",
                        fontWeight: "lighter",
                        fontSize: 12,
                        height: 5,
                      }}
                    >
                      Indoor Gym | Full-Court{" "}
                    </Text>{" "}
                    <Text
                      style={{
                        color: "#4695C6",
                        height: 5,
                        fontSize: `12px`,
                      }}
                    >
                      Today @ 2:00pm - 4:00pm
                    </Text>{" "}
                    <Text
                      style={{
                        color: "#4695C6",
                        height: 5,
                        fontSize: `12px`,
                      }}
                    >
                      HoopDome | North York, ON S
                    </Text>
                  </CardContent>
                  <CardActions>
                    <Button
                      style={{
                        color: "#DA3E17",
                        fontWeight: "bold",
                        height: 20,
                      }}
                      label="HOP IN"
                      onClick={onVisible}
                    />
                  </CardActions>
                </Card>
              }
            </FlexDiv>
          );
        })}
      </Carousel>
    </>
  );
};
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 400 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 400, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const carouselData = [
  { text: "Leagues is holding 3v3 tournament at singer crt" },
  {
    text: "Ramen Bros swept the Brampton Fangs in a BO5 game series at Hoopdome",
  },
  {
    text: "Bayview Villagers are dominating North York, bounty is 2x multiplier",
  },
  {
    text: "Community food drive this holiday szn, sign up with your friends to donate or volunteer in Leagues 1st annual food drive",
  },
];

export default QuestionList;
