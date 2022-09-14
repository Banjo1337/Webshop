import ProductForm from "../ProductForm";
import { CSSProperties } from "react";

const divStyle: CSSProperties = {
  maxWidth: "1500px",
  margin: "0 auto",
  marginTop: "55px",
};

export default function AddBookAdmin() {
  return (
    <div style={divStyle}>
      <ProductForm formName='newbook' />
    </div>
  );
}
