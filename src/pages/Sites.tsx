import React, { useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import {
  Container,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { FlexDiv} from "../react-design-system/FlexDiv";
import { Text } from "../react-design-system/Text";
import AddSiteDialog from "./components/AddSiteDialog";
import { useQuery, useSubscription } from "@apollo/client";
import { MY_FIRST_QUERY } from "../graphql/queries";
import Button from "lifted-design-system/dist/Button";
import { API } from "../constants";


const Sites = () => {
  const [sites, setSites] = React.useState<any>([]);
  const history = useHistory();

  const { loading, error, data } = useSubscription(MY_FIRST_QUERY)
    // const {loading, error, data} = useQuery(MY_SECOND_QUERY)
    ;

  const handleClose = (doc: any) => {
    setSites([...sites, doc]);
  };

  useEffect(() => {
    axios.get(`${API}site/getSites`).then((res) => {
      setSites(res.data.sites);
    });
    console.log(data);
    console.log(error);
  }, [data, error]);

  return (
    <Container>
      <FlexDiv justify="space-between">
        <h3>Games</h3>
        {/* This is the add games dialog */}
        <AddSiteDialog handleClose={handleClose} />
      </FlexDiv>
      {loading ? <Text>Loading</Text> : error ? <Text>Error</Text> : data?.games?.length}

      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Court</TableCell>
              <TableCell align="right">Address</TableCell>
              <TableCell align="right"> Messages</TableCell>
              <TableCell align="right"> Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.game?.map((game: any) => (
              <TableRow
                key={game.id}
                hover
                style={{ cursor: "pointer" }}
                onClick={() => {
                  history.push("/site/" + game.id);
                }}
              >
                <TableCell>{game.basketballCourt.title}</TableCell>
                <TableCell align="right">{game.timeslot_date} @ {game.timeslot}</TableCell>
                <TableCell align="right">{game.status}</TableCell>
                <TableCell align="right">
                  <FlexDiv justify="flex-end" align="center">

                    <Text style={{ marginRight: 16 }}>6/6</Text>
                    <div
                      style={{
                        width: 10,
                        height: 10,
                        borderRadius: 100,
                        background: "green",
                        float: "right",
                      }}
                    ></div>
                  </FlexDiv>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Sites;
