import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => createStyles({
    paper: {
        paddingTop: theme.spacing(10),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    avatar: {
        margin: theme.spacing(1),
        width: "250px",
        height: "70px",

        // backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    }
}));

const useSiteStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      //   display: "flex",
      //   flexDirection: "column",
      // flexWrap: "wrap",
      //   justifyContent: "space-around",
      overflow: "hidden",
      // backgroundColor: theme.palette.background.paper,
      width: "60vw",
      padding: 16,
    },
    card: {
      padding: 16,
      display: "flex",
      flexDirection: "column",
    },
  })
);

const useProtectedNavStyles = makeStyles((theme: Theme) => createStyles({
    root: {
      display: "flex",
    },
    toolbar: {
      paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: "0 8px",
      ...theme.mixins.toolbar,
    },
    appBar: {
      backgroundColor: "#1b1b1b",
      boxShadow: "none",
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      backgroundColor: "#1b1b1b",
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    menuButtonHidden: {
      display: "none",
    },
    title: {
      flexGrow: 1,
    },
    drawerPaper: {
      overflowX: "hidden",
      position: "relative",
      whiteSpace: "nowrap",
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    avatarContainer: {
      display: "flex",
      flexDirection: "row",
    },
    drawerPaperClose: {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: "100vh",
      overflow: "auto",
    },
    avatar: {
      margin: theme.spacing(1),
      width: "180px",
      height: "50px",

      // backgroundColor: theme.palette.secondary.main,
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    paper: {
      padding: theme.spacing(2),
      display: "flex",
      overflow: "auto",
      flexDirection: "column",
    },
    fixedHeight: {
      height: 240,
    },
  })
);

const mapStyles = [
    {
      featureType: "landscape.man_made",
      elementType: "geometry",
      stylers: [
        {
          color: "#f7f1df",
        },
      ],
    },
    {
      featureType: "landscape.natural",
      elementType: "geometry",
      stylers: [
        {
          color: "#d0e3b4",
        },
      ],
    },
    {
      featureType: "landscape.natural.terrain",
      elementType: "geometry",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "labels",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "poi.business",
      elementType: "all",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "poi.medical",
      elementType: "geometry",
      stylers: [
        {
          color: "#fbd3da",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [
        {
          color: "#bde6ab",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry.stroke",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "labels",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#ffe15f",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#efd151",
        },
      ],
    },
    {
      featureType: "road.arterial",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#ffffff",
        },
      ],
    },
    {
      featureType: "road.local",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "black",
        },
      ],
    },
    {
      featureType: "transit.station.airport",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#cfb2db",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        {
          color: "#a2daf2",
        },
      ],
    },
  ];
  //   = [
  //   {
  //     featureType: "all",
  //     elementType: "labels",
  //     stylers: [
  //       {
  //         visibility: "on",
  //       },
  //     ],
  //   },
  //   {
  //     featureType: "all",
  //     elementType: "labels.text.fill",
  //     stylers: [
  //       {
  //         saturation: 36,
  //       },
  //       {
  //         color: "#cec6c6d8",
  //       },
  //       {
  //         lightness: 40,
  //       },
  //     ],
  //   },
  //   {
  //     featureType: "all",
  //     elementType: "labels.text.stroke",
  //     stylers: [
  //       {
  //         visibility: "on",
  //       },
  //       {
  //         color: "#000000",
  //       },
  //       {
  //         lightness: 16,
  //       },
  //     ],
  //   },
  //   {
  //     featureType: "all",
  //     elementType: "labels.icon",
  //     stylers: [
  //       {
  //         visibility: "off",
  //       },
  //     ],
  //   },
  //   {
  //     featureType: "administrative",
  //     elementType: "geometry.fill",
  //     stylers: [
  //       {
  //         color: "#000000",
  //       },
  //       {
  //         lightness: 20,
  //       },
  //     ],
  //   },
  //   {
  //     featureType: "administrative",
  //     elementType: "geometry.stroke",
  //     stylers: [
  //       {
  //         color: "#000000",
  //       },
  //       {
  //         lightness: 17,
  //       },
  //       {
  //         weight: 1.2,
  //       },
  //     ],
  //   },
  //   {
  //     featureType: "administrative.country",
  //     elementType: "labels.text.fill",
  //     stylers: [
  //       {
  //         color: "#e5c163",
  //       },
  //     ],
  //   },
  //   {
  //     featureType: "administrative.locality",
  //     elementType: "labels.text.fill",
  //     stylers: [
  //       {
  //         color: "#c4c4c4",
  //       },
  //     ],
  //   },
  //   {
  //     featureType: "administrative.neighborhood",
  //     elementType: "labels.text.fill",
  //     stylers: [
  //       {
  //         color: "#e5c163",
  //       },
  //     ],
  //   },
  //   {
  //     featureType: "landscape",
  //     elementType: "geometry",
  //     stylers: [
  //       {
  //         color: "#000000",
  //       },
  //       {
  //         lightness: 20,
  //       },
  //     ],
  //   },
  //   {
  //     featureType: "poi",
  //     elementType: "geometry",
  //     stylers: [
  //       {
  //         color: "#000000",
  //       },
  //       {
  //         lightness: 21,
  //       },
  //       {
  //         visibility: "on",
  //       },
  //     ],
  //   },
  //   {
  //     featureType: "poi.business",
  //     elementType: "geometry",
  //     stylers: [
  //       {
  //         visibility: "on",
  //       },
  //     ],
  //   },
  //   {
  //     featureType: "road.highway",
  //     elementType: "geometry.fill",
  //     stylers: [
  //       {
  //         color: "#e5c163",
  //       },
  //       {
  //         lightness: "0",
  //       },
  //     ],
  //   },
  //   {
  //     featureType: "road.highway",
  //     elementType: "geometry.stroke",
  //     stylers: [
  //       {
  //         visibility: "off",
  //       },
  //     ],
  //   },
  //   {
  //     featureType: "road.highway",
  //     elementType: "labels.text.fill",
  //     stylers: [
  //       {
  //         color: "#ffffff",
  //       },
  //     ],
  //   },
  //   {
  //     featureType: "road.highway",
  //     elementType: "labels.text.stroke",
  //     stylers: [
  //       {
  //         color: "#e5c163",
  //       },
  //     ],
  //   },
  //   {
  //     featureType: "road.arterial",
  //     elementType: "geometry",
  //     stylers: [
  //       {
  //         color: "#000000",
  //       },
  //       {
  //         lightness: 18,
  //       },
  //     ],
  //   },
  //   {
  //     featureType: "road.arterial",
  //     elementType: "geometry.fill",
  //     stylers: [
  //       {
  //         color: "#575757",
  //       },
  //     ],
  //   },
  //   {
  //     featureType: "road.arterial",
  //     elementType: "labels.text.fill",
  //     stylers: [
  //       {
  //         color: "#ffffff",
  //       },
  //     ],
  //   },
  //   {
  //     featureType: "road.arterial",
  //     elementType: "labels.text.stroke",
  //     stylers: [
  //       {
  //         color: "#2c2c2c",
  //       },
  //     ],
  //   },
  //   {
  //     featureType: "road.local",
  //     elementType: "geometry",
  //     stylers: [
  //       {
  //         color: "#000000",
  //       },
  //       {
  //         lightness: 16,
  //       },
  //     ],
  //   },
  //   {
  //     featureType: "road.local",
  //     elementType: "labels.text.fill",
  //     stylers: [
  //       {
  //         color: "#999999",
  //       },
  //     ],
  //   },
  //   {
  //     featureType: "transit",
  //     elementType: "geometry",
  //     stylers: [
  //       {
  //         color: "#000000",
  //       },
  //       {
  //         lightness: 19,
  //       },
  //     ],
  //   },
  //   {
  //     featureType: "water",
  //     elementType: "geometry",
  //     stylers: [
  //       {
  //         color: "#000000",
  //       },
  //       {
  //         lightness: 17,
  //       },
  //     ],
  //   },
  // ];

export {useStyles, useSiteStyles, useProtectedNavStyles, mapStyles};