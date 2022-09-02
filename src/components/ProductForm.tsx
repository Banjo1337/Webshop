import { useFormik } from "formik";
import { Product, ProductCreate } from "./Models";
import * as Yup from "yup";
import { mockedProducts } from "../data";

type ProductRecord = Record<keyof ProductCreate, Yup.AnySchema>;

const ProductSchema = Yup.object().shape<ProductRecord>({
  price: Yup.number().strict().required(),
  title: Yup.string().required(),
  description: Yup.string().required(),
  author: Yup.string().required(),
  image: Yup.string().required(),
  category: Yup.string().required(),
});

interface Props {
  product?: Product;
}

function ProductForm(props: Product) {
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
    onSubmit: (values) => {
      console.log("On SUBMIT", values);
      mockedProducts.push(values as Product);
      // to modify later on
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        placeholder="Title"
        type="text"
        name="title"
        value={formik.values.title}
        onChange={formik.handleChange}
      />
      {formik.touched.title && formik.errors.title}
      <input
        placeholder="Author"
        type="text"
        name="author"
        value={formik.values.author}
        onChange={formik.handleChange}
      />
      {formik.touched.author && formik.errors.author}
      <input
        placeholder="Description"
        type="text"
        name="description"
        value={formik.values.description}
        onChange={formik.handleChange}
      />
      {formik.touched.description && formik.errors.description}
      <input
        placeholder="Price"
        type="text"
        name="price"
        value={formik.values.price}
        onChange={(e) => formik.setFieldValue("price", Number(e.target.value))}
      />
      {formik.touched.price && formik.errors.price}
      <input
        placeholder="Image"
        type="text"
        name="image"
        value={formik.values.image}
        onChange={formik.handleChange}
      />
      {formik.touched.image && formik.errors.category}
      <input
        placeholder="Category"
        type="text"
        name="category"
        value={formik.values.category}
        onChange={formik.handleChange}
      />
      {formik.touched.category && formik.errors.category}
      <button>Save Book</button>
    </form>
  );
}

export default ProductForm;
