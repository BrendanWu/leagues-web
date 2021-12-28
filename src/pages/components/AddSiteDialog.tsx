import React, { useEffect } from "react";
import axios from "axios";
import { useMutation } from "@apollo/client";
import { useSelector } from "react-redux";
import {
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField
} from "@material-ui/core";
import Button from 'lifted-design-system/dist/Button';
import { LockerRoom } from "../../pages";
import { CREATE_GAME } from "../../graphql/mutations";
import { API } from "../../constants";


const AddSiteDialog = (props: any) => {
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
      <Button label="Create Game" onClick={handleClickOpen} />
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
          <LockerRoom />
          <Button alt label="Create game" onClick={createGame} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" label="Cancel" />
          {/* <Button onClick={submitSite} color="primary">
            Create a game
          </Button> */}
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default AddSiteDialog;
