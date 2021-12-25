import React, { useState } from "react";
import { Card, CardActions, CardMedia, CardContent } from "@material-ui/core";
import Button from "../../../react-design-system/Button";
import { Text } from "../../../react-design-system/Text";
import courtImage from "../../../assets/court.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FlexDiv } from "../../../react-design-system/FlexDiv";
import MapDrawer from "../map/MapDrawer";
import basketballCourts, { BasketballCourtT } from "../../../basketballCourts";
import moment from "moment";


const QuestionList = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const getTimeSlotsToday = (hours: any) => {
    const days = [
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
      "sunday",
    ];
    const currentDayOfWeek = moment().day();
    //@ts-ignore
    return hours[days[currentDayOfWeek]];
  };

  const [selectedCourt, setSelectedCourt] = React.useState<BasketballCourtT>();
  const selectCourt = (court: BasketballCourtT) => {
    setIsVisible(true);
    setSelectedCourt(court)
  };
  return (
    <>
      {isVisible && (
        <MapDrawer
          text={"name"}
          court={selectedCourt}
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
        {basketballCourts.map((court:BasketballCourtT) => {
          return (
            <FlexDiv style={{ padding: 16 }}>
              {
                <Card
                  style={{
                    width: 270,
                 
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
                    image={courtImage}
                    alt="Court"
                  />
                  <CardContent>
                    <FlexDiv justify="space-between">
                      <Text style={{ color: "gray" }}>{court.description}</Text>
                      <Text style={{ color: "#DA3E17" }}>Open today</Text>
                    </FlexDiv>
                    <Text>
                      {court.title}
                    </Text>
           
                    <Text
                      style={{
                        color: "#4695C6",
                
                        fontSize: `12px`,
                      }}
                    >
                      {getTimeSlotsToday(court.hours)}
                    </Text>{" "}
                    <Button
                      style={{
                        color: "#DA3E17",
                        fontWeight: "bold",
                        // height: 20, 
                      }}
                      label="Create a game here"
                      onClick={() => selectCourt(court)}
                    />
                  </CardContent>
            
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
    breakpoint: { max: 3000, min: 1920 },
    items: 5,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1920, min: 1080 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  small: {
    breakpoint: { max: 1080, min: 400 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },

  mobile: {
    breakpoint: { max: 400, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};


export default QuestionList;
