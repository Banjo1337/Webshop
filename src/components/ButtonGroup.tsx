import { Box, ButtonGroup as BG } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ButtonGroup = ({ children }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        "& > *": {
          m: 1,
        },
      }}
    >
      <BG
        orientation="vertical"
        aria-label="vertical contained button group"
        variant="text"
      >
        {children}
      </BG>
    </Box>
  );
};

export default ButtonGroup;
