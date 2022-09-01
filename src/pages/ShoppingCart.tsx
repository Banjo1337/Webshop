import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useCart } from '../contexts/CartContext';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';

export default function BasicTable() {
  const { cart, removeFromCart } = useCart();
  var formatter = new Intl.NumberFormat('sv-SE', {
    style: 'currency',
    currency: 'SEK',
  })

  return (
    <main style={{maxWidth: "1000px", margin: "0 auto"}}>
      <TableContainer component={Paper} sx={{display: "flex", flexDirection: "column"}}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell align="right">Author</TableCell>
              <TableCell align="right">Genre</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Remove</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.map((product) => (
              <TableRow
                key={product.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {product.title}
                </TableCell>
                <TableCell align="right">{product.author}</TableCell>
                <TableCell align="right">{product.category}</TableCell>
                <TableCell align="right">{formatter.format(product.price)}</TableCell>
                <TableCell align="right">
                  <DeleteIcon 
                    sx={{color: "#F5425D"}}
                    onClick={() => removeFromCart(product)}
                  />
                  </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Button variant="contained" color="success" size="large">
          Check out
        </Button>
      </TableContainer>

    </main>
  );
}