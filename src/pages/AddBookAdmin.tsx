import ProductForm from "../components/ProductForm";
import { Book, initialCreateProductFormValues } from "../components/Models";
import { Box, Button, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import * as Yup from "yup";
import { ProductCreate } from "../components/Models";
import { useProduct } from "../contexts/ProductContext";
import { nanoid } from "nanoid";

export default function AddBookAdmin() {
  const goBack = () => {
    history.back();
  };

  type ProductRecord = Record<keyof ProductCreate, Yup.AnySchema>;

  const ProductSchema = Yup.object().shape<ProductRecord>({
    price: Yup.number().strict().required("Field is required"),
    title: Yup.string().required("Field is required"),
    description: Yup.string().required("Field is required"),
    author: Yup.string().required("Field is required"),
    image: Yup.string().required("Field is required"),
    category: Yup.string().required("Field is required"),
  });

  const { addProduct } = useProduct();

  return (
    <main>
      <Formik
        //validationSchema={ProductSchema}
        initialValues={initialCreateProductFormValues}
        onSubmit={(value: any) => {
          const Id = nanoid();
          const newBook: Book = {
            id: Id,
            author: value.newbook.author,
            title: value.newbook.title,
            price: value.newbook.price,
            description: value.newbook.description,
            image: value.newbook.image,
            category: value.newbook.category,
          };
          addProduct(newBook);
        }}
      >
        {() => (
          <Form>
            <Typography variant='h5' gutterBottom>
              Add a new book
            </Typography>
            <ProductForm formName='newbook' />
            <Box
              textAlign='left'
              display='flex'
              marginBottom='2rem'
              justifyContent='space-between'
              mt={2}
            >
              <Button
                type='button'
                variant='contained'
                color='secondary'
                endIcon={<ArrowBackIcon />}
                size='small'
                onClick={goBack}
              >
                Back to Books
              </Button>
              <Button
                type='submit'
                variant='contained'
                color='secondary'
                endIcon={<ArrowRightAltIcon />}
                size='small'
              >
                Save Book
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </main>
  );
}
