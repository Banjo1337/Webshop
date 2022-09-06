import ProductForm from "../components/ProductForm";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import { Box} from "@mui/material";
import { useProduct } from "../contexts/ProductContext";

export default function AdminCMS() {
  const { products, addProduct, removeProduct, editProduct } = useProduct();
  const formatter = new Intl.NumberFormat("sv-SE", {
    style: "currency",
    currency: "SEK",
  });

  return (
    <main style={{ display: "flex", flexDirection: "column" }}>
      <h2>Bokmal.se - Admin page</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell align='center'></TableCell>
              <TableCell align='center'>Id</TableCell>
              <TableCell align='center'>Title</TableCell>
              <TableCell align='center'>Author</TableCell>
              <TableCell align='center'>Genre</TableCell>
              <TableCell align='center'>Price</TableCell>
              <TableCell align='center'>Description</TableCell>
              <TableCell align='right'>
                <AddIcon
                  sx={{ color: "#F5425D", cursor: "pointer" }}
                  onClick={() => addProduct()}
                />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell align='right'>
                  <Box
                    component='img'
                    sx={{
                      width: "40px",
                    }}
                    src={product.image}
                  />
                </TableCell>
                <TableCell align='center'>{product.id}</TableCell>
                <TableCell align='center'>{product.title}</TableCell>
                <TableCell align='center'>{product.author}</TableCell>
                <TableCell align='center'>{product.category}</TableCell>
                <TableCell align='center'>{formatter.format(product.price)}</TableCell>
                <TableCell align='left'>{product.description}</TableCell>
                <TableCell align='right'>
                  <EditIcon
                    sx={{ color: "#F5425D", cursor: "pointer" }}
                    onClick={() => editProduct(product)}
                  />
                  <DeleteIcon
                    sx={{ color: "#F5425D", cursor: "pointer" }}
                    onClick={() => removeProduct(product)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ProductForm />
    </main>
  );
}
