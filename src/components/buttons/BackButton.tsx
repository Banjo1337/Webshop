import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, SxProps, Theme, Typography } from "@mui/material";

interface Props {
  sx?: SxProps<Theme> | undefined;
}
export default function BackButton(props: Props) {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        ...props?.sx,
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
      }}
      onClick={() => {
        navigate(-1);
      }}
    >
      <ArrowBackIcon sx={{ fontSize: "1.5rem" }} />
      <Typography sx={{ fontWeight: "500", fontSize: "1.5rem" }}>Tillbaka</Typography>
    </Box>
  );
}
