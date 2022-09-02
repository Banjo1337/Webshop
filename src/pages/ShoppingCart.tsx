import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useCart } from '../contexts/CartContext';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Button } from '@mui/material';
import { Link } from "react-router-dom";

export default function ShoppingCart() {
  const { cart, removeFromCart } = useCart();
  var formatter = new Intl.NumberFormat('sv-SE', {
    style: 'currency',
    currency: 'SEK',
  })

  return (
    <main style={{display: "flex", flexDirection: "column"}}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right"></TableCell>
              <TableCell>Title</TableCell>
              <TableCell align="right">Author</TableCell>
              <TableCell align="right">Genre</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Remove</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.map((product) => (
              <TableRow
                key={product.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="right">
                  <Box
                    component="img"
                    sx={{
                      width: "40px"
                    }}
                    src={product.image}
                  />
                </TableCell>
                <TableCell component="th" scope="row">
                  {product.title}
                </TableCell>
                <TableCell align="right">{product.author}</TableCell>
                <TableCell align="right">{product.category}</TableCell>
                <TableCell align="right">{formatter.format(product.price)}</TableCell>
                <TableCell align="right">{product.number}</TableCell>
                <TableCell align="right">
                  <DeleteIcon 
                    sx={{color: "#F5425D", cursor: "pointer"}}
                    onClick={() => removeFromCart(product)}
                  />
                  </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Link to="/checkout" style={{alignSelf: "flex-end", textDecoration: "none"}}>
        <Button variant="contained" color="success" size="large">
          Check out
        </Button>
      </Link>

    </main>
  );
}