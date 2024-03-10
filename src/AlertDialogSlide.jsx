import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function AlertDialogSlide({ open, onClose }) {
  const handleClose = () => {
    onClose(); // Call the onClose callback to update parent state
  };

  return (
    <React.Fragment>
      {/* Remove the button trigger */}
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Добро пожаловать!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            На нашем сайте представлены обучающие материалы для изучения основ
            инвестирования.
            <br />
            Важно отметить, что все материалы, представленные на нашем сайте,
            предназначены исключительно для образовательных целей. Мы не
            предоставляем инвестиционных советов или рекомендаций. Вся
            информация здесь служит лишь для ознакомления.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Ok</Button>
          {/* <Button onClick={handleClose}>Agree</Button> */}
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
export default AlertDialogSlide;
