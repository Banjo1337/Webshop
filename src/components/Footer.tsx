import FacebookIcon from "@mui/icons-material/Facebook";
import Twitter from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { CSSProperties } from "react";

export default function Footer() {
  return (
    <footer>
      <div style={{ alignSelf: "center" }}>
        <p>Tel: +46 725 56 55</p>
      </div>
      <div>
        <ul style={ulStyle}>
          <li style={{ paddingRight: "1rem" }}>
            <Twitter />
          </li>
          <li>
            <FacebookIcon />
          </li>
          <li style={{ paddingLeft: "1rem" }}>
            <LinkedInIcon />
          </li>
        </ul>
      </div>
      <div style={{ alignSelf: "center" }}>
        <p>Mail: contact@bokmal.se</p>
      </div>
    </footer>
  );
}

const ulStyle: CSSProperties = {
  display: "flex",
  listStyle: "none",
  alignSelf: "center",
};
