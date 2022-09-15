import { CSSProperties } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import Twitter from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <footer style={footerStyle}>
      <div style={divStyle}>
        <ul style={ulStyle}>
          <li style={liStyle}>
            <Twitter />
          </li>
          <li style={liStyle}>
            <FacebookIcon />
          </li>
          <li style={liStyle}>
            <LinkedInIcon />
          </li>
        </ul>
        <ul style={ulStyle}>
          <li style={liStyle}>Tel: +46 725 56 55</li>
        </ul>
        <ul style={ulStyle}>
          <li style={liStyle}>Mail: contact@bokmal.se</li>
        </ul>
      </div>
    </footer>
  );
}

const footerStyle: CSSProperties = {
  display: "flex",
  width: "100%",
  alignContent: "space-between",
  background: "linear-gradient(rgba(40,130,255,1), rgba(40,130,255,0.7))",
  color: "#f5f5f5",
  flexDirection: "column",
  fontFamily: "Roboto, Helvetica, Arial, sans-serif",
  fontSize: "14px",
};

const divStyle: CSSProperties = {
  alignSelf: "center",
};

const ulStyle: CSSProperties = {
  display: "flex",
  justifyContent: "space-around",
  alignContent: "center",
  alignItems: "center",
};

const liStyle: CSSProperties = {
  listStyle: "none",
};
