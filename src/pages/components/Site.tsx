import React, { useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@material-ui/core";
import Button from "../../react-design-system/Button";
import { FlexDiv } from "../../react-design-system/FlexDiv";
import AddGatewayDialog from "./AddGatewayDialog";
import { LockerRoom } from "../../pages";
import { API } from "../../constants";
import { useSiteStyles as useStyles } from "../styles";


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

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       //   display: "flex",
//       //   flexDirection: "column",
//       // flexWrap: "wrap",
//       //   justifyContent: "space-around",
//       overflow: "hidden",
//       // backgroundColor: theme.palette.background.paper,
//       width: "60vw",
//       padding: 16,
//     },
//     card: {
//       padding: 16,
//       display: "flex",
//       flexDirection: "column",
//     },
//   })
// );

export default Site;
