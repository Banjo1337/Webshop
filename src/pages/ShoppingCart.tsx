import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useCart } from "../contexts/CartContext";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import useWindowWidth from "../hooks/useWindowWidth";
import ShoppingCartItemMobile from "../components/ShoppingCartItemMobile";
import ShoppingCartItemDesktop from "../components/ShoppingCartItemDesktop";

export default function ShoppingCart() {
  const { cart } = useCart();
  const windowWidth = useWindowWidth();
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
      {windowWidth > 600 ? (
        <TableContainer component={Paper}>
          <Table sx={{ tableLayout: "fixed" }} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell align='right'></TableCell>
                <TableCell>Title</TableCell>
                <TableCell align='right'>Author</TableCell>
                <TableCell align='right'>Genre</TableCell>
                <TableCell align='right'>Price</TableCell>
                <TableCell align='right'>Quantity</TableCell>
                <TableCell align='right'>Remove</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.map((product) => (
                <ShoppingCartItemDesktop key={product.id} product={product} />
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
      ) : (
        <>
          {cart.map((product) => (
            <>
              <ShoppingCartItemMobile key={product.id} product={product} />
              <hr style={{ width: "100%" }} />
            </>
          ))}
        </>
      )}
      <Link to='/checkout' style={{ alignSelf: "flex-end", textDecoration: "none" }}>
        <Button variant='contained' color='success' size='large'>
          Check out
        </Button>
      </Link>
    </main>
  );
}
