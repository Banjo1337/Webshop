import { Box, Button } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Link } from "react-router-dom";
import ShoppingCartRow from "../components/ShoppingCartRow";
import { useCart } from "../contexts/CartContext";

export default function ShoppingCart() {
  const { cart } = useCart();
  const totalPrice = cart.reduce(
    (totalPrice, product) => (totalPrice = totalPrice + product.price * product.number),
    0,
  );

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
              <ShoppingCartRow
                key={product.id}
                id={product.id}
                number={product.number}
                price={product.price}
                title={product.title}
                description={product.description}
                author={product.author}
                image={product.image}
                category={product.category}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ alignSelf: "center", paddingTop: "1rem" }}>Totalt: {totalPrice} kr</Box>
      <Link to='/checkout' style={{ alignSelf: "flex-end", textDecoration: "none" }}>
        <Button variant='contained' color='success' size='large'>
          Check out
        </Button>
      </Link>
    </main>
  );
}
