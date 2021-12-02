import React, { useEffect } from "react";
import axios from "axios";
import { API } from "../../constants";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import { FlexDiv } from "../../react-design-system/FlexDiv";
import AddSiteDialog from "./components/AddSiteDialog";
import { useHistory } from "react-router";

export const Sites = () => {
  const [sites, setSites] = React.useState<any>([]);
  const history = useHistory();

  const handleClose = (doc: any) => {
    setSites([...sites, doc]);
  };

  useEffect(() => {
    axios.get(`${API}site/getSites`).then((res) => {
      setSites(res.data.sites);
    });
  }, []);

  return (
    <Container>
      <FlexDiv justify="space-between">
        <h3>Games</h3>
        <AddSiteDialog handleClose={handleClose} />
      </FlexDiv>

      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Court</TableCell>
              <TableCell align="right">Address</TableCell>
              <TableCell align="right"> Schedule</TableCell>
              <TableCell align="right"> Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sites &&
              sites.length &&
              sites.map((site: any) => (
                <TableRow
                  key={site._id}
                  hover
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    history.push("/site/" + site._id);
                  }}
                >
                  <TableCell>{site.address}</TableCell>
                  <TableCell align="right">{site.gateways?.length}</TableCell>
                  <TableCell align="right">{site.updatedAt}</TableCell>
                  <TableCell align="right">
                    <div
                      style={{
                        width: 10,
                        height: 10,
                        borderRadius: 100,
                        background: "green",
                        float: "right",
                      }}
                    ></div>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};
