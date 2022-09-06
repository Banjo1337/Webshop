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

function Checkout() {
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
      <h3>Här är din beställning</h3>
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
      <UserForm />
    </main>
  );
}

export default Checkout;
