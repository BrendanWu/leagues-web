import React from "react";
// import { useSubscription } from "@apollo/react-hooks";
// import { SSCB_ALL_QUESTIONS } from "../../graphql/subscriptions";
// import {FlexDiv} from 'lifted-design-system/dist/FlexDiv'
// import Button from 'lifted-design-system'

import {
  Chip,
  Card,
  CardActions,
  CardMedia,
  CardContent,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  Typography,
} from "@material-ui/core";
// import { formatDateToNow } from "../../utils/formatDate";
import Button from "../../../react-design-system/Button";
import { Text } from "../../../react-design-system/Text";
import {
  ArrowForward,
  AttachFile,
  CachedOutlined,
  CheckBox,
  CheckBoxOutlineBlank,
  CheckCircle,
  CheckCircleOutline,
  DoneOutlineOutlined,
} from "@material-ui/icons";
import courtImage from "../../../assets/court.jpg";
import ReactStars from "react-stars";
import NaturePeopleIcon from "@material-ui/icons/NaturePeople";
// import Button from "@material-ui/core/Button";
import RadioGroup from "@material-ui/core/RadioGroup";
import { useHistory } from "react-router-dom";
// import { useComponentQuestionListStyles } from "../../styles";
import TimerOffIcon from "@material-ui/icons/TimerOff";
import Carousel from "react-multi-carousel";
// import Logo from "../../images/logo.png"
import "react-multi-carousel/lib/styles.css";
import { FlexDiv } from "../../../react-design-system/FlexDiv";
// function ConfirmationDialogRaw(props) {
//   const { onClose, value: valueProp, open, ...other } = props;
//   const [value, setValue] = React.useState(valueProp);
//   const radioGroupRef = React.useRef(null);

//   React.useEffect(() => {
//     if (!open) {
//       setValue(valueProp);
//     }
//   }, [valueProp, open]);

//   const handleEntering = () => {
//     if (radioGroupRef.current != null) {
//       radioGroupRef.current.focus();
//     }
//   };

//   const handleCancel = () => {
//     onClose();
//   };

//   const handleOk = () => {
//     onClose(value);
//   };

//   const handleChange = (event) => {
//     setValue(event.target.value);
//   };

//   return (
//     <Dialog
//       disableBackdropClick
//       disableEscapeKeyDown
//       maxWidth="xs"
//       onEntering={handleEntering}
//       aria-labelledby="confirmation-dialog-title"
//       open={open}
//       {...other}
//     >
//       <DialogTitle id="confirmation-dialog-title">
//         This problem has been engaged by an instructor
//       </DialogTitle>
//       <DialogContent dividers>
//         <RadioGroup
//           ref={radioGroupRef}
//           aria-label="ringtone"
//           name="ringtone"
//           value={value}
//           onChange={handleChange}
//         >
//           If you were the instructor for this problem. Please access this
//           problem from your profile task list in the upper right corner and
//           double check it has been completed to receive your credits
//         </RadioGroup>
//       </DialogContent>
//       <DialogActions>
//         <Button onClick={handleOk} color="primary">
//           Ok
//         </Button>
//       </DialogActions>
//     </Dialog>
//   );
// }

function QuestionList() {
  //   const classes = useComponentQuestionListStyles();
  //   const { data, loading, error } = useSubscription(SSCB_ALL_QUESTIONS);
  //   const isInstructor = me && me.role === "instructor";
  //   const currentUseId = me && me.currentUseId;
  //   const [open, setOpen] = React.useState(false);
  //   const [value, setValue] = React.useState("Dione");

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

  return (
    <div>
      {/* <h2
        style={{
          margin: 0,
          // marginBottom: 16,
          textAlign: "center",
          fontSize: "2.8em",
          color: "black",
        }}
      >
        Recent reviews
      </h2> */}

      <Carousel
        swipeable={false}
        draggable={false}
        // showDots={true}
        responsive={responsive}
        // ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay
        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={1000}
        // keyBoardControl={true}
        // customTransition="ease-in-out"
        transitionDuration={1000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {carouselData.map((q) => {
          //console.log(q)
          return (
            <div
              style={{ padding: 16, display: "flex", justifyContent: "center" }}
            >
              {
                <Card
                  style={{
                    width: 270,
                    height: 320,

                    // padding: 16,
                    background: "#FFFFFF 0% 0% no-repeat padding-box",
                    boxShadow: "2px 2px 4px #27272733",
                    borderRadius: "2px",
                    opacity: 1,
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "column",
                    // background: "white",
                    // border: "1px solid rgb(56, 151, 240)ellow",
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
                        // fontWeight: "400",
                        height: 5,
                        fontSize: `12px`,
                      }}
                    >
                      Today @ 2:00pm - 4:00pm
                    </Text>{" "}
                    <Text
                      style={{
                        color: "#4695C6",
                        // fontWeight: "400",
                        height: 5,
                        fontSize: `12px`,
                      }}
                    >
                      HoopDome | North York, ON{" "}
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
                    />
                  </CardActions>
                </Card>
              }
            </div>
          );
        })}
      </Carousel>
      {/* {data.dm_questions.map((q, index) => (
        <Question
          key={index}
          question={q}
          isEngaged={q.status === "engaged"}
          isInstructor={isInstructor}
          instructorId={isInstructor && q.instructorId}
          currentUserId={currentUseId}
          isCurrentInstructor={isInstructor && q.instructorId === currentUseId}
          openDialog={handleClickInstructor}
        />
      ))} */}
      {/* <ConfirmationDialogRaw
        classes={{
          paper: classes.paper,
        }}
        id="ringtone-menu"
        keepMounted
        open={open}
        onClose={handleClose}
        value={value}
      /> */}
    </div>
  );
}

export default QuestionList;
