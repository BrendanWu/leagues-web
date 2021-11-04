import React, { useState, MouseEvent } from "react";
import clsx from "clsx";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Popover from "@material-ui/core/Popover";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Content from "./Contents";
import Axios from "axios";
import { Link } from "react-router-dom";
import { API } from "../../constants";
import { useHistory } from "react-router-dom";
import { logout } from "../../redux/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../interfaces/redux/store";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ReceiptIcon from "@material-ui/icons/Receipt";
import ListItemText from "@material-ui/core/ListItemText";
import { Icon } from "@material-ui/core";
import { TableChartOutlined } from "@material-ui/icons";
import logo from "../../assets/leagues-logo.svg";
const drawerWidth = 240;

const AppRouter = () => {
  const [open, setOpen] = useState(true);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const classes = useStyles();
  const close = Boolean(anchorEl);
  const name = useSelector<RootState>(
    (state) => state?.profile?.name
  ) as string;
  const dispatch = useDispatch();
  const handleMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = async () => {
    dispatch(logout());
    await Axios.get(API + "logout");
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          {/* {open === false ? "React Typescript Template" : null} */}
          <img
            src={logo}
            style={{ height: 50, marginTop: 8, marginBottom: 8 }}
          />
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          ></Typography>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Typography style={{ margin: "13px" }}>{name}</Typography>
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Popover
                open={close}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
              >
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Popover>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        {" "}
        <div className={classes.avatarContainer}>
          <div className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
        </div>
        <Divider />
        <List style={{ marginLeft: 7 }}>
          <Link style={{ textDecoration: "none", color: "black" }} to="/">
            {" "}
            <ListItem button>
              <ListItemIcon>
                <TableChartOutlined />
              </ListItemIcon>
              <ListItemText primary="MyPlayer" />
            </ListItem>
          </Link>
          <Link style={{ textDecoration: "none", color: "black" }} to="/sites">
            {" "}
            <ListItem button>
              <ListItemIcon>
                <TableChartOutlined />
              </ListItemIcon>
              <ListItemText primary="Play 3v3" />
            </ListItem>
          </Link>
          <Link style={{ textDecoration: "none", color: "black" }} to="/docs">
            {" "}
            <ListItem button>
              <ListItemIcon>
                <TableChartOutlined />
              </ListItemIcon>
              <ListItemText primary="Docs" />
            </ListItem>
          </Link>
          {/* <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/bitcoin-transactions"
          >
            {" "}
            <ListItem button>
              <ListItemIcon>
                <ReceiptIcon />
              </ListItemIcon>
              <ListItemText primary="Send Coins" />
            </ListItem>
          </Link>

          <Link style={{ textDecoration: "none", color: "black" }} to="/news">
            {" "}
            <ListItem button>
              <ListItemIcon>
                <ReceiptIcon />
              </ListItemIcon>
              <ListItemText primary="News" />
            </ListItem>
          </Link> */}
        </List>
        {/* <Divider /> */}
        {/* <List>{secondaryListItems}</List> */}
      </Drawer>

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Content />

        <Container maxWidth="lg" className={classes.container}>
          <footer>
            <Box pt={4}>
              <Copyright />
            </Box>
          </footer>
        </Container>
      </main>
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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

const Copyright = () => {
  return (
    <div style={{ background: "ghostwhite", paddingTop: 20 }}>
      <div className="container">
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <div
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "column",
              padding: 10,
            }}
          >
            <p style={{ fontWeight: "bold" }}>LiftedSolutions ®</p>
            <p>Elevate your business to the next level</p>
          </div>
          <div style={{ display: "flex", flex: 1 }}>
            <div
              style={{
                display: "flex",
                flex: 1,
                flexDirection: "column",
                padding: 10,
              }}
            >
              <p style={{ fontWeight: "bold" }}>Links</p>

              <Link
                to="/courses"
                style={{
                  justifyContent: "flex-start",
                  textAlign: "left",
                  textTransform: "none",
                  fontFamily: "Helvetica",
                }}
              >
                <p>Courses</p>
              </Link>
              <Link
                to="/teach"
                style={{
                  justifyContent: "flex-start",
                  textAlign: "left",
                  textTransform: "none",
                  fontFamily: "Helvetica",
                }}
              >
                <p>Teach</p>
              </Link>
              <Link
                to="/dashboard"
                style={{
                  justifyContent: "flex-start",
                  textAlign: "left",
                  textTransform: "none",
                  fontFamily: "Helvetica",
                }}
              >
                <p>Dashboard</p>
              </Link>
              <Link
                to="/tos"
                style={{
                  justifyContent: "flex-start",
                  textAlign: "left",
                  textTransform: "none",
                  fontFamily: "Helvetica",
                }}
              >
                <p>Terms of use</p>
              </Link>
            </div>
            <div
              style={{
                display: "flex",
                flex: 1,
                flexDirection: "column",
                padding: 10,
              }}
            >
              <p style={{ fontWeight: "bold" }}></p>
              <div style={{ display: "flex", alignItems: "center" }}>
                <p style={{ margin: 0, marginLeft: 5 }}>
                  hiring@liftedsolutions.com
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "1em",
                }}
              >
                <p style={{ margin: 0, marginLeft: 5 }}>905-299-1933</p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "1em",
                }}
              >
                <p style={{ margin: 0, marginLeft: 5 }}>
                  Toronto: 240 Richmond St W, Toronto, ON
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "1em",
                }}
              >
                <p style={{ margin: 0, marginLeft: 5 }}>
                  Los Angeles: 312 Santa Monica, California 90401, USA
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div style={{ display: "flex" }}>
          <div
            style={{ display: "flex", flex: 1, flexDirection: "column" }}
          ></div>
          <div style={{ display: "flex", flex: 1 }}></div>
        </div>
      </div>
    </div>
  );
};

export { AppRouter };
