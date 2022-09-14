import ProductForm from "../productForm/ProductForm";
import { CSSProperties } from "react";
import React from "react";

const divStyle: CSSProperties = {
  maxWidth: "1500px",
  margin: "0 auto",
  marginTop: "55px",
};

export default function AddBookAdmin() {
  return (
    <div style={divStyle}>
      <ProductForm />
    </div>
  );
}
