import UserForm from "../components/UserForm";
import { useCart } from "../contexts/CartContext";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EmptyShoppingCart from "../components/EmptyShoppingCart";
import getFormattedCurrency from "../utils/getFormattedCurrency";
import CheckoutRow from "../components/CheckoutRow";

function Checkout() {
  const { cart } = useCart();

  const totalPrice = getFormattedCurrency(
    cart.reduce(
      (totalPrice, product) => (totalPrice = totalPrice + product.price * product.number),
      0,
    ),
  );

  if (cart.length === 0) {
    return <EmptyShoppingCart />;
  }

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        fontFamily: "Roboto, Helvetica, Arial, sans-serif",
      }}
    >
      <h3 style={{ alignSelf: "center" }}>Här är din beställning</h3>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 360 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell align='right'></TableCell>
              <TableCell>Info</TableCell>
              <TableCell>Pris á</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.map((product) => (
              <CheckoutRow key={product.id} product={product} />
            ))}
          </TableBody>
        </Table>
        <Table sx={{ minWidth: 360 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align='right'>Totalt: {totalPrice}</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
      <UserForm />
    </main>
  );
}

export default Checkout;
