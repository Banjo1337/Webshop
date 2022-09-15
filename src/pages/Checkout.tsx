import UserForm from "../components/UserForm";
import { useCart } from "../contexts/CartContext";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import EmptyShoppingCart from "../components/EmptyShoppingCart";
import useFallBackImage from "../hooks/useFallBackImage";

function Checkout() {
  const { cart } = useCart();

  const totalPrice = cart.reduce(
    (totalPrice, product) => (totalPrice = totalPrice + product.price * product.number),
    0,
  );

  const formatter = new Intl.NumberFormat("sv-SE", {
    style: "currency",
    currency: "SEK",
  });

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
              <TableRow key={product.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell align='right'>
                  <Box
                    component='img'
                    sx={{
                      width: "40px",
                    }}
                    // eslint-disable-next-line react-hooks/rules-of-hooks
                    src={useFallBackImage(product.image)}
                  />
                </TableCell>
                <TableCell component='th' scope='row'>
                  <b>{product.title}</b> ({product.category}) <br />
                  {product.author}
                  <br />
                  Antal: {product.number}
                </TableCell>
                <TableCell align='left'>{formatter.format(product.price)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Table sx={{ minWidth: 360 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align='right'>Totalt: {formatter.format(totalPrice)}</TableCell>
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
