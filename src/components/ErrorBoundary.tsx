import { Box, Typography } from "@mui/material";
import { Component } from "react";

import ReplayIcon from "@mui/icons-material/Replay";
import lostMoth from "../assets/lost_moth.png";
import BackButton from "./buttons/BackButton";

interface Props {
  children: JSX.Element | JSX.Element[];
}
interface State {
  hasError: boolean;
}
export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "5rem",
          }}
        >
          <Typography variant='h4' component='p'>
            Något gick fel
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "500px",
              marginTop: "1rem",
            }}
          >
            <BackButton />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={() => location.reload()}
            >
              <ReplayIcon sx={{ fontSize: "1.5rem" }} />
              <Typography sx={{ fontWeight: "500", fontSize: "1.5rem" }}>Ladda om</Typography>
            </Box>
          </Box>
          <Box
            component='img'
            sx={{
              width: "500px",
            }}
            src={lostMoth}
          />
        </Box>
      );
    }

    return this.props.children;
  }
}
