import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@material-ui/core";
import { API } from "../../constants";


const AddGatewayDialog = (props: any) => {
  const [open, setOpen] = React.useState(false);
  const [address, setAddress] = React.useState("");
  const token = useSelector<any>((state) => state?.auth?.token) as string;
  const location = useLocation();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const submitSite = async () => {
    // console.log('api call', data);
    try {
      const p = location.pathname.split("/")[2];
      console.log(p);
      const res = await axios.post(
        `${API}site/addGateway`,
        {
          identifier: address,
          site: p,
        },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("data send to backend Succesfully");
      //   console.log(doc);
      console.log(res.data);
      props.handleClose(res.data.gateway);
    } catch (error) {
      console.log("error", error);
    } finally {
      handleClose();
      // navigation.navigate('Dashboard');
    }
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Register a gateway
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>Enter gateway identifier</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Identifier code"
            name="address"
            value={address}
            onChange={(e: any) => {
              setAddress(e.target.value);
            }}
            type="string"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={submitSite} color="primary">
            Register gateway
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddGatewayDialog;
