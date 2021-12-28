import React, { useEffect } from "react";
import axios from "axios";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import { API } from "../../constants";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Button from "../../react-design-system/Button";
import { FlexDiv } from "../../react-design-system/FlexDiv";
import AddGatewayDialog from "./components/AddGatewayDialog";
import { useLocation } from "react-router";
import { LockerRoom } from "../LockerRoom";

const Site = () => {
  const classes = useStyles();
  const location = useLocation();
  const [gateways, setGateways] = React.useState<any>([]);

  const handleClose = (doc: any) => {
    setGateways([...gateways, doc]);
  };

  useEffect(() => {
    const p = location.pathname.split("/")[2];
    axios.get(`${API}site/getGateways/${p}`).then((res) => {
      setGateways(res.data.gateways);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
  
        <FlexDiv justify="space-between">
          <h3>Game</h3>
          <AddGatewayDialog handleClose={handleClose} />
        </FlexDiv>
        <LockerRoom/>
   

    </Container>
  );
};
const useStyles = makeStyles((theme: Theme) =>
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

export { Site };
