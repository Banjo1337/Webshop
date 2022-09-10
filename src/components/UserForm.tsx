import { Button } from "@mui/material";
import { useFormik } from "formik";
import { CSSProperties, useEffect, useState } from "react";
import * as Yup from "yup";
import { User, UserCreate } from "./Models";
import DialogPopup from "./DialogPopup";
import Toast from "./Toast";

type UserRecord = Record<keyof UserCreate, Yup.AnySchema>;

const UserSchema = Yup.object().shape<UserRecord>({
  firstName: Yup.string().min(2, "*Minst 2 bokstäver").required("*Obligatoriskt"),
  lastName: Yup.string().min(2, "*Minst 2 bokstäver").required("*Obligatoriskt"),
  email: Yup.string().email("*Ej giltig email").required("*Obligatoriskt"),
  phone: Yup.string().min(6, "*Ej giltigt telefonnummer").required("*Obligatoriskt"),
  address: Yup.string().min(3, "*Ej giltig adress").required("*Obligatoriskt"),
  postcode: Yup.string()
    .min(5, "*Ej giltigt postnummer")
    .max(6, "*Ej giltigt postnummer")
    .required("*Obligatoriskt"),
  city: Yup.string().min(2).required("*Obligatoriskt"),
});

interface Props {
  user?: User;
}

function UserForm(props: Props) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    return setOpen(false);
  }, []);

  function handleClick() {
    if (formik.isValid) setOpen(true);
    else setOpen(false);
  }
  const formik = useFormik<UserCreate>({
    initialValues: props.user || {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      postcode: "",
      city: "",
    },
    validateOnChange: true,
    validationSchema: UserSchema,
    onSubmit: (values) => {
      window.localStorage.setItem("user", JSON.stringify(values));
      handleClick();
    },
  });

  return (
    <form style={formStyle} onSubmit={formik.handleSubmit}>
      <h4>Fyll i dina uppgifter</h4>
      <div style={userInfoStyle}>
        <div style={flexColumn}>
          <input
            placeholder='Förnamn'
            type='text'
            name='firstName'
            value={formik.values.firstName}
            onChange={formik.handleChange}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div style={errorMessageStyle}>{formik.errors.firstName}</div>
          ) : null}
        </div>

        <div style={flexColumn}>
          <input
            placeholder='Efternamn'
            type='text'
            name='lastName'
            value={formik.values.lastName}
            onChange={formik.handleChange}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div style={errorMessageStyle}>{formik.errors.lastName}</div>
          ) : null}
        </div>
      </div>

      <div style={userInfoStyle}>
        <div style={flexColumn}>
          <input
            placeholder='Email'
            type='text'
            name='email'
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.touched.email && formik.errors.email ? (
            <div style={errorMessageStyle}>{formik.errors.email}</div>
          ) : null}
        </div>

        <div style={flexColumn}>
          <input
            placeholder='Telefon'
            type='text'
            name='phone'
            value={formik.values.phone}
            onChange={formik.handleChange}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <div style={errorMessageStyle}>{formik.errors.phone}</div>
          ) : null}
        </div>
      </div>

      <div style={userInfoStyle}>
        <div style={flexColumn}>
          <input
            placeholder='Adress'
            type='text'
            name='address'
            value={formik.values.address}
            onChange={formik.handleChange}
          />
          {formik.touched.address && formik.errors.address ? (
            <div style={errorMessageStyle}>{formik.errors.address}</div>
          ) : null}
        </div>

        <div style={flexColumn}>
          <input
            placeholder='Postnummer'
            type='text'
            name='postcode'
            value={formik.values.postcode}
            onChange={formik.handleChange}
          />
          {formik.touched.postcode && formik.errors.postcode ? (
            <div style={errorMessageStyle}>{formik.errors.postcode}</div>
          ) : null}
        </div>
      </div>

      <div style={userInfoStyle}>
        <div style={flexColumn}>
          <input
            placeholder='Stad'
            type='text'
            name='city'
            value={formik.values.city}
            onChange={formik.handleChange}
          />
          {formik.touched.city && formik.errors.city ? (
            <div style={errorMessageStyle}>{formik.errors.city}</div>
          ) : null}
        </div>
      </div>
      <div style={flexRow}>
        <Button
          style={{ marginLeft: "0.4rem", marginRight: "3.9rem", marginBottom: "0.5rem" }}
          type='submit'
          variant='contained'
          color='success'
          size='large'
        >
          Lägg till
        </Button>
        <Toast
          message={`${""} Dina uppgifter har sparats 🐸`}
          severity='success'
          open={open}
          setOpen={setOpen}
        />
        <DialogPopup />
      </div>
    </form>
  );
}

//TODO: Move to separate file??
const formStyle: CSSProperties = {
  alignSelf: "center",
  textAlign: "center",
  boxShadow: "1px 2px 9px #F4AAB9",
};

const userInfoStyle: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  padding: "0.4rem",
};

const flexColumn: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  padding: "0.1rem",
};

const flexRow: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  padding: "0.1rem",
};

const errorMessageStyle: CSSProperties = {
  color: "red",
  fontSize: "0.6rem",
};

export default UserForm;
