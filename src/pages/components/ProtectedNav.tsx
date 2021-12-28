import React, { useState, MouseEvent } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../interfaces/redux/store";
import { logout } from "../../redux/actions/auth";
import {
    AppBar,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    MenuItem,
    Popover,
    Toolbar,
    Typography
} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import MenuIcon from "@material-ui/icons/Menu";
import { TableChartOutlined } from "@material-ui/icons";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import logo from "../../assets/leagues-logo.svg";
import { API } from "../../constants";
import { useProtectedNavStyles as useStyles } from "../styles";


const ProtectedNav = () => {
    const [open, setOpen] = useState(true);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const classes = useStyles();
    const close = Boolean(anchorEl);
    const name = useSelector<RootState>((state) => state?.profile?.name) as string;
    const dispatch = useDispatch();
    const history = useHistory();

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
        await axios.get(API + "logout");
    };

    return (
        <>
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
                        alt="logo"
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
                                <MenuItem onClick={() => history.push("/profile")}>
                                    My Profile
                                </MenuItem>
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
                            <ListItemText primary="Find Arenas" />
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
                    <Link style={{ textDecoration: "none", color: "black" }} to="/posts">
                        {" "}
                        <ListItem button>
                            <ListItemIcon>
                                <TableChartOutlined />
                            </ListItemIcon>
                            <ListItemText primary="Posts" />
                        </ListItem>
                    </Link>

                    <Link style={{ textDecoration: "none", color: "black" }} to="/playgrounds">
                        {" "}
                        <ListItem button>
                            <ListItemIcon>
                                <TableChartOutlined />
                            </ListItemIcon>
                            <ListItemText primary="Playgrounds" />
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
        </>
    );
}

export default ProtectedNav;