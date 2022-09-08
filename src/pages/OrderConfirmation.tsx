import { useCart } from "../contexts/CartContext";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import { User } from "../components/Models";
import { CSSProperties } from "react";

function OrderConfirmation() {
  const user: User = JSON.parse(window.localStorage.getItem("user") || "{}");
  const { cart } = useCart();
  const totalPrice = cart.reduce(
    (totalPrice, product) => (totalPrice = totalPrice + product.price * product.number),
    0,
  );
  const totalNumberOfItem = cart.reduce(
    (totalNumberOfItem, product) => (totalNumberOfItem = totalNumberOfItem + product.number),
    0,
  );
  const formatter = new Intl.NumberFormat("sv-SE", {
    style: "currency",
    currency: "SEK",
  });
  return (
    <main style={{ display: "flex", flexDirection: "column" }}>
      <h2>Checkout</h2>
      <h3>Här är bekräftelse på din beställning</h3>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell align='right'></TableCell>
              <TableCell>Title</TableCell>
              <TableCell align='right'>Author</TableCell>
              <TableCell align='right'>Genre</TableCell>
              <TableCell align='right'>Price</TableCell>
              <TableCell align='right'>Quantity</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.map((product) => (
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
                <TableCell component='th' scope='row'>
                  {product.title}
                </TableCell>
                <TableCell align='right'>{product.author}</TableCell>
                <TableCell align='right'>{product.category}</TableCell>
                <TableCell align='right'>{formatter.format(product.price)}</TableCell>
                <TableCell align='right'>{product.number}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell align='right'>Total Price</TableCell>
              <TableCell align='right'>Number of Item</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell align='right'>{formatter.format(totalPrice)}</TableCell>
              <TableCell align='right'>{totalNumberOfItem}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <div style={confirmationStyle}>
        <h3>Tack för din beställning {user.firstName}! </h3>
        <p>
          En orderbekräftelse kommer skickas till: <b>{user.email}</b>
        </p>
        <p>
          Din order levereras till:{" "}
          <b>
            {user.address}, {user.postcode} {user.city}
          </b>
        </p>
      </div>
    </main>
  );
}

const confirmationStyle: CSSProperties = {
  boxShadow: "1px 2px 9px #F4AAB9",
  margin: "4em",
  padding: "1em",
  fontFamily: "Roboto, Helvetica, Arial, sans-serif",
  alignSelf: "center",
};

export default OrderConfirmation;
