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
import RemoveIcon from "@mui/icons-material/Remove";
import { Box } from "@mui/material";
import { useProduct } from "../../contexts/ProductContext";
import { Link, Outlet } from "react-router-dom";

export default function AdminCMS() {
  const { products, removeProduct, editProduct } = useProduct();
  const formatter = new Intl.NumberFormat("sv-SE", {
    style: "currency",
    currency: "SEK",
  });
  const linkStyle = {
    display: "flex",
    textDecoration: "none",
    color: "white",
  };

  return (
    <main style={{ display: "flex", flexDirection: "column" }}>
      <h2>Bokmal.se - Admin page</h2>
      <Outlet />
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
                <Link to='addbookadmin' style={linkStyle}>
                  <AddIcon sx={{ color: "#F5425D", cursor: "pointer" }} />
                </Link>
                <Link to='../admincms' style={linkStyle}>
                  <RemoveIcon sx={{ color: "#F5425D", cursor: "pointer" }} />
                </Link>
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
                  <Link to='updatebookadmin' state={{ id: product.id }} style={linkStyle}>
                    <EditIcon sx={{ color: "#F5425D", cursor: "pointer" }} />
                  </Link>
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
    </main>
  );
}
