//TODO: implement in Checkout.tsx
import { useFormik } from "formik";
import * as Yup from "yup";
import { User, UserCreate } from "./Models";

type UserRecord = Record<keyof UserCreate, Yup.AnySchema>;

const UserSchema = Yup.object().shape<UserRecord>({
  name: Yup.string().min(3).required(),
  email: Yup.string().min(5).required(),
  phone: Yup.string().min(6).required(),
  address: Yup.string().min(10).required(),
});

interface Props {
  user?: User;
}

function UserForm(props: Props) {
  const formik = useFormik<UserCreate>({
    initialValues: props.user || {
      name: "",
      email: "",
      phone: "",
      address: "",
    },
    validateOnChange: true,
    validationSchema: UserSchema,
    onSubmit: (values) => {
      //TODO: Save to ... and/or or bring to checkout window
      console.log("Submitting", values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        placeholder="name"
        type="text"
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
      />
      {formik.touched.name && formik.errors.name}

      <input
        placeholder="email"
        type="text"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
      />
      {formik.touched.email && formik.errors.email}

      <input
        placeholder="phone"
        type="text"
        name="phone"
        value={formik.values.phone}
        onChange={formik.handleChange}
      />
      {formik.touched.phone && formik.errors.phone}

      <input
        placeholder="address"
        type="text"
        name="address"
        value={formik.values.address}
        onChange={formik.handleChange}
      />
      {formik.touched.address && formik.errors.address}

      <button>Place Order</button>
    </form>
  );
}

export default UserForm;
