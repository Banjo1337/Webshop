import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Book } from "../Models";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import { useProduct } from "../../contexts/ProductContext";
import Typography from "@mui/material/Typography";

interface Props {
  id: string;
}

export default function ResponsiveDialog(props: Props) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const { products, removeProduct } = useProduct();
  const bookToDelete = products.find((product) => product.id === props.id) || ({} as Book);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    removeProduct(bookToDelete);
    handleClose();
  };

  return (
    <div>
      <DeleteIcon sx={{ color: "#F5425D", cursor: "pointer" }} onClick={handleClickOpen} />
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby='responsive-dialog-title'
      >
        <DialogTitle id='responsive-dialog-title'>{"Vill du verkligen ta bort boken?"}</DialogTitle>
        <DialogContent>
          <Typography variant='h6'>Title:</Typography>
          <br />
          <Typography variant='subtitle1'>{bookToDelete.title}</Typography>
          <br />
          <Typography variant='h6'>Author:</Typography>
          <br />
          <Typography variant='subtitle1'>{bookToDelete.author}</Typography>
          <br />
        </DialogContent>
        <DialogActions>
          <Link to='/admincms'>
            <Button autoFocus onClick={handleDelete}>
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
