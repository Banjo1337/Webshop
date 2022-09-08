import { useFormik, Field, FormikErrors, FormikTouched } from "formik";
import { Book, ProductCreate } from "./Models";
import { Grid } from "@mui/material";

/* type ProductRecord = Record<keyof ProductCreate, Yup.AnySchema>;

const ProductSchema = Yup.object().shape<ProductRecord>({
  price: Yup.number().strict().required(),
  title: Yup.string().required(),
  description: Yup.string().required(),
  author: Yup.string().required(),
  image: Yup.string().required(),
  category: Yup.string().required(),
}); */

interface Props {
  book?: Book;
  formName: string;
  errors?: FormikErrors<ProductCreate>;
  touched?: FormikTouched<ProductCreate>;
}

function ProductForm(props: Props) {
  const formik = useFormik<ProductCreate>({
    initialValues: {
      price: 0,
      title: "",
      description: "",
      author: "",
      image: "",
      category: "",
    },
    /* validateOnChange: true, */
    /* validationSchema: ProductSchema, */
    onSubmit: (values) => {
      console.log("On SUBMIT", values);
    },
  });
  return (
    // eslint-disable-next-line no-inline-comments
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {/* {" "} */}
      {/*   onSubmit={formik.handleSubmit} */}
      <Grid item xs={12} sm={6}>
        <Field
          placeholder='Title'
          type='text'
          label='Title'
          name={`${props.formName}.title`}
          variant='outlined'
          //value={formik.values.title}
          //onChange={formik.handleChange}
          error={formik.touched?.title && !!formik.errors?.title}
          //helpertext={props.touched?.title && props.errors?.title}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Field
          type='text'
          placeholder='Author'
          label='Author'
          name={`${props.formName}.author`}
          variant='outlined'
          //value={formik.values.author}
          //onChange={formik.handleChange}
          error={formik.touched?.author && !!formik.errors?.author}
          //helpertext={props.touched?.author && props.errors?.author}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Field
          as='textarea'
          placeholder='Description'
          label='Description'
          name={`${props.formName}.description`}
          variant='outlined'
          //value={formik.values.description}
          //onChange={formik.handleChange}
          error={formik.touched?.description && !!formik.errors?.description}
          //helpertext={props.touched?.description && props.errors?.description}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Field
          type='text'
          placeholder='Price in kr'
          label='Price'
          name={`${props.formName}.price`}
          variant='outlined'
          //value={formik.values.price}
          //onChange={(e) => formik.setFieldValue("price", Number(e.target.value))}
          error={formik.touched?.price && !!formik.errors?.price}
          //helpertext={props.touched?.price && props.errors?.price}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Field
          type='text'
          placeholder='Image URL'
          label='Image'
          name={`${props.formName}.image`}
          variant='outlined'
          //value={formik.values.image}
          //onChange={formik.handleChange}
          error={formik.touched?.image && !!formik.errors?.image}
          //helpertext={props.touched?.image && props.errors?.image}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Field
          as='select'
          placeholder='Genre'
          label='Genre'
          name={`${props.formName}.genre`}
          variant='outlined'
        >
          <option value='Roman'>Roman</option>
          <option value='Deckare'>Deckare</option>
          <option value='Kokbok'>Kokbok</option>
          <option value='Barnbok'>Barnbok</option>
          <option value='Träning'>Träning</option>
          <option value='Fakta'>Fakta</option>
          {/*           value={formik.values.category}
          onChange={formik.handleChange} */}
          error={formik.touched?.category && !!formik.errors?.category}
          {/* helpertext={props.touched?.category && props.errors?.category} */}
        </Field>
      </Grid>
    </Grid>
  );
}

export default ProductForm;
