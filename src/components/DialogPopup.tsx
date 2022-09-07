import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { User } from "./Models";
import { Link } from "react-router-dom";

const user: User = JSON.parse(window.localStorage.getItem("user") || "{}");

export default function ResponsiveDialog() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant='contained' color='success' size='large' onClick={handleClickOpen}>
        Bekräfta dina uppgifter
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby='responsive-dialog-title'
      >
        <DialogTitle id='responsive-dialog-title'>{"Stämmer dina uppgifter?"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <h4>Namn: </h4>
            <p>
              {user.firstName} {user.lastName}
            </p>
            <h4>Adress: </h4>
            {user.address} <br />
            {user.postcode} {user.city} <br />
            <h4>Kontaktuppgifter: </h4>
            {user.email}
            <br />
            {user.phone}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Link to='/orderconfirmation'>
            <Button autoFocus onClick={handleClose}>
              Ja
            </Button>
          </Link>
          <Button onClick={handleClose} autoFocus>
            Nej
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
