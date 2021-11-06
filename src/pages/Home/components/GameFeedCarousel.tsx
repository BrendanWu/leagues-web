import React from "react";
// import { useSubscription } from "@apollo/react-hooks";
// import { SSCB_ALL_QUESTIONS } from "../../graphql/subscriptions";
// import {FlexDiv} from 'lifted-design-system/dist/FlexDiv'
// import Button from 'lifted-design-system'

import {
  Chip,
  Card,
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
import {
  AttachFile,
  CachedOutlined,
  CheckBox,
  CheckBoxOutlineBlank,
  CheckCircle,
  CheckCircleOutline,
  DoneOutlineOutlined,
} from "@material-ui/icons";
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

  //   if (loading) {
  //     return (
  //       <div
  //         style={{
  //           display: "flex",
  //           flexDirection: "column",
  //           alignItems: "center",
  //           justifyContent:"center",
  //           marginTop: 50,
  //           marginBottom: 100,
  //         }}
  //       >
  //         <CircularProgress />
  //       </div>
  //     );
  //   }

  //   if (error) return <div>Error fetching quesitons list...</div>;

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
                    width: 400,
                    height: 200,
                    borderRadius: 0,
                    padding: 16,
                    background: "white",
                    border: "1px solid rgb(56, 151, 240)ellow",
                  }}
                >
                  <p>Click to join</p>
                  <Divider style={{ marginTop: 8 }} />
                  <h3 style={{ color: "gray" }}>{q.text}</h3>
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