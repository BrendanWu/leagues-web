import React, { useEffect } from "react";
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
import Button from 'lifted-design-system/dist/Button';
import { useMutation } from "@apollo/client";
import { CREATE_GAME } from "../../../graphql/mutations";

export default function FormDialog(props: any) {
  const [open, setOpen] = React.useState(false);
  const [address, setAddress] = React.useState("");
  const token = useSelector<any>((state) => state?.auth?.token) as string;
  const [hasuraCreateGame, errors] = useMutation(CREATE_GAME)
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const createGame = async () => {
    try {
      hasuraCreateGame()
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
      <Button label="Create Game" onClick={handleClickOpen}/>
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
        <Button alt label="Create game" onClick={createGame}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" label="Cancel"/>
          {/* <Button onClick={submitSite} color="primary">
            Create a game
          </Button> */}
        </DialogActions>
      </Dialog>
    </Container>
  );
}
