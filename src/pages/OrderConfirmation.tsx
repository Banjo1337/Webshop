import { User } from "../components/Models";
import { CSSProperties } from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function OrderConfirmation() {
  const user: User = JSON.parse(window.localStorage.getItem("user") || "{}");
  const boxStyle: CSSProperties = {
    flex: "1",
    minHeight: "100px",
    display: "flex",
  };

  return (
    <main style={{ display: "flex", flexDirection: "column" }}>
      <Box
        sx={{ ...boxStyle, justifyContent: "center", alignItems: "center", position: "relative" }}
      >
        <Link
          to='/'
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            color: "black",
            position: "absolute",
            top: "2rem",
            left: "2rem",
          }}
        >
          <ArrowBackIcon sx={{ fontSize: "1.5rem" }} />
          <Typography sx={{ fontWeight: "500", fontSize: "1.5rem" }}>
            Tillbaka till våra böcker...
          </Typography>
        </Link>
      </Box>
      <div style={confirmationStyle}>
        <h3>Tack för din beställning {user.firstName}! </h3>
        <p>
          En orderbekräftelse kommer skickas till: <b>{user.email}</b>
        </p>
        <p>
          Din order levereras till:{" "}
          <b>
            {user.address}, {user.postcode} {user.city}
          </b>
        </p>
      </div>
    </main>
  );
}

const confirmationStyle: CSSProperties = {
  boxShadow: "1px 2px 9px #F4AAB9",
  margin: "4em",
  padding: "1em",
  fontFamily: "Roboto, Helvetica, Arial, sans-serif",
  alignSelf: "center",
};

export default OrderConfirmation;
