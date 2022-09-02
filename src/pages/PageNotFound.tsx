import { Box, Typography } from "@mui/material";
import lostMoth from "../assets/lost_moth.png";

export default function PageNotFound() {
    return (
        <main>
            <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginTop: "5rem"
                }}>
                <Typography
                    variant="h2"
                    component="p"
                >
                    404 Page not found
                </Typography>
                <Box
                  component="img"
                  sx={{
                    width: "500px"
                  }}
                  src={lostMoth}
                />
            </Box>

        </main>
    )   
}