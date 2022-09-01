import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import Button from "@mui/material/Button";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ShopButton = ({ children }: Props) => {
  return (
    <div>
      <Button
        endIcon={<LocalGroceryStoreIcon />}
        variant="contained"
        color="error"
        size="large"
      >
        {children}
      </Button>
    </div>
  );
};

export default ShopButton;
