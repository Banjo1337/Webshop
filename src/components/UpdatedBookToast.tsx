import { Alert, Snackbar } from "@mui/material";

interface Props {
  message: string;
  severity: "error" | "warning" | "info" | "success";
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function UpdatedBookToast({ message, severity, open, setOpen }: Props) {
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
}
