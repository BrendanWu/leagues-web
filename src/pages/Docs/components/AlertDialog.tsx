import React from 'react';
import Button from '@material-ui/core/Button';
import LDButton from "lifted-design-system/dist/Button";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const AlertDialog = (props: any) => {
    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAction = () => {
    props.action();
    setOpen(false);
  }

  return (
    <>
      <LDButton label={props.openDialogText} onClick={handleClickOpen} />
        
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{props.titleText}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {props.contentText}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            {props.closeButtonText}
          </Button>
          <Button onClick={handleAction} color="primary">
            {props.actionButtonText}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AlertDialog;
