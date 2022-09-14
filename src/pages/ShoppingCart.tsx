import { Box, Button } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Link } from "react-router-dom";
import EmptyShoppingCart from "../components/EmptyShoppingCart";
import ShoppingCartRow from "../components/ShoppingCartRow";
import { useCart } from "../contexts/CartContext";

export default function ShoppingCart() {
  const { cart } = useCart();
  const totalPrice = cart.reduce(
    (totalPrice, product) => (totalPrice = totalPrice + product.price * product.number),
    0,
  );

  if (cart.length === 0) {
    return <EmptyShoppingCart />;
  }

  return (
    <main style={{ display: "flex", flexDirection: "column" }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 360 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell align='right'></TableCell>
              <TableCell>Din kundvagn</TableCell>
              <TableCell align='center'></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.map((product) => (
              <ShoppingCartRow key={product.id} product={product} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box
        sx={{ padding: ".5rem .5rem 0 .5rem", display: "flex", justifyContent: "space-between" }}
      >
        <Box sx={{ alignSelf: "center" }}>Totalt: {totalPrice} kr</Box>
        <Link to='/checkout' style={{ alignSelf: "flex-end", textDecoration: "none" }}>
          <Button variant='contained' color='success' size='large'>
            Check out
          </Button>
        </Link>
      </Box>
    </main>
  );
}
