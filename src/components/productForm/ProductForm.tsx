import { useFormik } from "formik";
import { CSSProperties, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Book, ProductCreate } from "../Models";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import { useProduct } from "../../contexts/ProductContext";
import { Button } from "@mui/material";
import Toast from "../Toast";
import React from "react";

type ProductRecord = Record<keyof ProductCreate, Yup.AnySchema>;

const ProductSchema = Yup.object().shape<ProductRecord>({
  price: Yup.number().strict().required("*Obligatoriskt"),
  title: Yup.string().required("*Obligatoriskt"),
  description: Yup.string().required("*Obligatoriskt"),
  author: Yup.string().required("*Obligatoriskt"),
  image: Yup.string().required("*Obligatoriskt"),
  category: Yup.string().required("*Obligatoriskt"),
});

function ProductForm() {
  const { addProduct } = useProduct();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    return setOpen(false);
  }, []);

  function handleClick() {
    if (formik.isValid) setOpen(true);
    else setOpen(false);
  }

  const options = [
    { value: "Roman", label: "Roman", id: 1 },
    { value: "Deckare", label: "Deckare", id: 2 },
    { value: "Kokbok", label: "Kokbok", id: 3 },
    { value: "Barnbok", label: "Barnbok", id: 4 },
    { value: "Träning", label: "Träning", id: 5 },
    { value: "Fakta", label: "Fakta", id: 6 },
  ];

  const formik = useFormik<ProductCreate>({
    initialValues: {
      price: 0,
      title: "",
      description: "",
      author: "",
      image: "",
      category: "",
    },
    validateOnChange: true,
    validationSchema: ProductSchema,
    onSubmit: (value) => {
      const Id = nanoid();
      const newBook: Book = {
        id: Id,
        author: value.author,
        title: value.title,
        price: value.price,
        description: value.description,
        image: value.image,
        category: value.category,
      };
      addProduct(newBook);
      handleClick();
      navigate("/admincms");
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <div>
          <input
            placeholder='Title'
            type='text'
            name={"title"}
            value={formik.values.title}
            onChange={formik.handleChange}
          />
          {formik.touched.title && formik.errors.title ? (
            <div style={errorMessageStyle}>{formik.errors.title}</div>
          ) : null}
        </div>
        <div>
          <input
            type='text'
            placeholder='Author'
            name={"author"}
            value={formik.values.author}
            onChange={formik.handleChange}
          />
          {formik.touched.author && formik.errors.author ? (
            <div style={errorMessageStyle}>{formik.errors.author}</div>
          ) : null}
        </div>
        <div>
          <textarea
            placeholder='Description'
            name={"description"}
            value={formik.values.description}
            onChange={formik.handleChange}
            rows={12}
            cols={20}
          ></textarea>
          {formik.touched.description && formik.errors.description ? (
            <div style={errorMessageStyle}>{formik.errors.description}</div>
          ) : null}
        </div>
        <div>
          <input
            type='text'
            placeholder='Price in kr'
            name={"price"}
            value={formik.values.price}
            onChange={(e) => formik.setFieldValue("price", Number(e.target.value))}
          />
          {formik.touched.price && formik.errors.price ? (
            <div style={errorMessageStyle}>{formik.errors.price}</div>
          ) : null}
        </div>
        <div>
          <input
            type='text'
            placeholder='Image URL'
            name={"image"}
            value={formik.values.image}
            onChange={formik.handleChange}
          />
          {formik.touched.image && formik.errors.image ? (
            <div style={errorMessageStyle}>{formik.errors.image}</div>
          ) : null}
        </div>
        <div>
          <select name={"category"} value={formik.values.category} onChange={formik.handleChange}>
            {options.map((option) => (
              <option key={option.id} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {formik.touched.category && formik.errors.category ? (
            <div style={errorMessageStyle}>{formik.errors.category}</div>
          ) : null}
        </div>
      </div>
      <Button type='submit' variant='contained' color='success' size='large'>
        Lägg till boken
      </Button>
      <Toast
        message={`${""} Din bok har sparats 🐸`}
        severity='success'
        open={open}
        setOpen={setOpen}
      />
    </form>
  );
}

export default ProductForm;

const errorMessageStyle: CSSProperties = {
  color: "red",
  fontSize: "0.6rem",
};
