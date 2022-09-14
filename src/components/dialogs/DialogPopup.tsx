import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { User } from "../Models";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import { Typography } from "@mui/material";

export default function ResponsiveDialog() {
  const user: User = JSON.parse(window.localStorage.getItem("user") || "{}");
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const { clearCart } = useCart();

  function isValidUser(obj: User) {
    return Object.keys(obj).length > 0;
  }

  const handleClickOpen = () => {
    if (isValidUser(user)) setOpen(true);
    else setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClear = () => {
    clearCart();
    handleClose();
  };

  return (
    <div>
      <Button variant='contained' color='success' size='large' onClick={handleClickOpen}>
        Bekräfta
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby='responsive-dialog-title'
      >
        <DialogTitle id='responsive-dialog-title'>{"Stämmer dina uppgifter?"}</DialogTitle>
        <DialogContent>
          <Typography variant='h6' component='p'>
            Namn:
          </Typography>
          <br />
          <Typography variant='subtitle1' component='p'>
            {user.firstName} {user.lastName}
          </Typography>
          <br />

          <Typography variant='h6' component='p'>
            Adress:
          </Typography>
          <br />
          <Typography variant='subtitle1' component='p'>
            {user.address}
          </Typography>
          <Typography variant='subtitle1' component='p'>
            {user.postcode} {user.city}
          </Typography>
          <br />

          <Typography variant='h6' component='p'>
            Kontaktuppgifter:
          </Typography>
          <br />
          <Typography variant='subtitle1' component='p'>
            {user.email}
          </Typography>
          <Typography variant='subtitle1' component='p'>
            {user.phone}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Link to='/orderconfirmation'>
            <Button autoFocus onClick={handleClear}>
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
