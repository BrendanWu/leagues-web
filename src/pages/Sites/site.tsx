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
      <div className={classes.root}>
        <FlexDiv justify="space-between">
          <h3>Game</h3>
          <AddGatewayDialog handleClose={handleClose} />
        </FlexDiv>

        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>GatewayID</TableCell>
                <TableCell align="right">Log</TableCell>
                <TableCell align="right">Last heartbeat(time)</TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"> Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {gateways.length > 0 ? (
                gateways.map((gateway: any) => (
                  <TableRow
                    key={gateway._id}
                    hover
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      //   history.push("/site/"+site._id)
                    }}
                  >
                    <TableCell>{gateway.identifier}</TableCell>
                    {/* <TableCell align="right">{gateway.identifier}</TableCell> */}
                    <TableCell align="right">4800 psi</TableCell>
                    <TableCell align="right">{gateway.updatedAt}</TableCell>
                    <TableCell align="right">
                      <FlexDiv justify="center">
                        <Button label="Restart Gateway" />
                        <Button label="Clear Cache" />
                      </FlexDiv>
                    </TableCell>
                    <TableCell align="right">
                      <div
                        style={{
                          width: 10,
                          height: 10,
                          borderRadius: 100,
                          background: "orange",
                          float: "right",
                        }}
                      ></div>
                    </TableCell>
                    {/* <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell> */}
                  </TableRow>
                ))
              ) : (
                <FlexDiv style={{ padding: 16 }}>
                  No gateways registered at this site
                </FlexDiv>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        {/* <Card className={classes.card}>
          <ul>
            <li>Dashboard</li>
            <li>your organization : companyX</li>
            <li>api calls : 100</li>
            <li>billing: 100 *0.01 = $1</li>
          </ul>
        </Card>
        <Card className={classes.card}>
          QR api
          <FlexDiv></FlexDiv>
        </Card>
        <Card className={classes.card}>Bitcoin api</Card>
        <Card className={classes.card}>
          Webscraper api
          <ul>
            <li>method: GET</li>
            <li>url: 192.102.242.12:5000/listings/getListings</li>
            <li>input: website url</li>
            <li>output: array </li>
          </ul>
          <FlexDiv>
            <input placeholder="urbantoronto.ca" />

            <Button label="test api route" />
          </FlexDiv>
        </Card> */}
        {/* <Card className={classes.card}>
          <a href="https://docs.google.com/document/d/1JIxKVWgTZQfvTQptMpX99IgvBK31qXLiQ9ytCW0UE-Q/edit?usp=sharing">
            Design system
          </a>
          React Modal React Burger Menu (Mobile Navs) Framer Motions
          (Animations) AOS (Animations) React Currency Format React Select React
          Toastify React Toolkit React Carousel Custom Cards* Forms, Buttons,
          Input Fields* Navs, Footers* Heroes, Page Headers * About AppRoot
          AppSwitcherMenu Avatar AvatarSelector BadgeButton Banner Breadcrumb
          BusyStateDialog BusyStateIndicator Button Calendar Checkbox CodeEditor
          ColorPicker DatePicker Dialog Divider Draggable Dropdown DualSelector
          Heading HelpPopup Icon Image ImageSelector Input Label Landmark
          Layouts SegmentedButton Select Settings Slider SplashScreen
          SplitButton SVG Splitter TabBar Table Text TextArea Tile TileCarousel
          ToggleButton Token TokenInput TokenInputDialog Tokenizer Toolbar Tree
          WindowShade withLabels ZeroState
        </Card> */}
      </div>
      {/* <h1>api documentation</h1> */}
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
