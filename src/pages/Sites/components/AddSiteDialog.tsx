import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import axios from "axios";
import { useSelector } from "react-redux";
import { API } from "../../../constants";
import { LockerRoom } from "../../LockerRoom";
import { Container } from "@material-ui/core";

export default function FormDialog(props: any) {
  const [open, setOpen] = React.useState(false);
  const [address, setAddress] = React.useState("");
  const token = useSelector<any>((state) => state?.auth?.token) as string;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const submitSite = async () => {
    try {
      const res = await axios.post(
        `${API}site/addSite`,
        {
          address,
        },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      props.handleClose(res.data.site);
    } catch (error) {
      console.log("error", error);
    } finally {
      handleClose();
    }
  };
  useEffect(() => {
    axios.get(`${API}site/getSites`).then((res) => {
      console.log(res.data);
    });
  }, []);
  return (
    <Container>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Create game
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        fullScreen
      >
        <DialogTitle id="form-dialog-title">Create a game</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To create a game, please enter the address of the court or select a court from the list below
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Address"
            name="address"
            value={address}
            onChange={(e: any) => {
              setAddress(e.target.value);
            }}
            type="string"
            fullWidth
          />
          <LockerRoom/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          {/* <Button onClick={submitSite} color="primary">
            Create a game
          </Button> */}
        </DialogActions>
      </Dialog>
    </Container>
  );
}
