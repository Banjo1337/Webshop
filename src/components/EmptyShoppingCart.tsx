import { Box, Typography } from "@mui/material";
import BackButton from "./buttons/BackButton";

export default function EmptyShoppingCart() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "8vh",
      }}
    >
      <Typography variant='h2'>Kundvagnen är tom</Typography>
      <BackButton />
    </Box>
  );
}
