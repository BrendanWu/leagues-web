import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { IBiCoinSendData } from "../../interfaces/pages/BitcoinTransaction";
import { API } from "../../constants/index";
import { useSelector } from "react-redux";
import { RootState } from "../../interfaces/redux/store";

const BitCoinTranscations = () => {
  const token = useSelector<RootState>((state) => state?.auth?.token);
  const [address, setAddress] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isMessageOpen, setIsMessageOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const classes = useStyles();
  const onSendBitcoin = async () => {
    try {
      setIsLoading(true);
      const res = await axios.post(
        `${API}sendcoin`,
        {
          address,
          amount,
        },
        {
          headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      setIsLoading(false);
      setMessage("Successfully transfer with txid" + res?.data?.txid);
      setIsMessageOpen(true);
      // console.log(auth);
    } catch (error: any) {
      setIsLoading(false);
      setMessage(error);
      setIsMessageOpen(true);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Send BitCoin using User address
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="address"
            label="Sender  Address"
            name="address"
            autoComplete="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="amount"
            label="Amount in Satoshi"
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            autoComplete="current-amount"
          />
          {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={onSendBitcoin}
            disabled={isLoading}
          >
            Send
          </Button>
        </form>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMessageOpen}
        onClose={() => setIsMessageOpen(false)}
        message={message}
        autoHideDuration={3000}
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            onClick={() => setIsMessageOpen(false)}
          >
            <CloseIcon />
          </IconButton>
        }
      />
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  paper: {
    paddingTop: theme.spacing(10),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    width: "250px",
    height: "70px",

    // backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
export { BitCoinTranscations };
