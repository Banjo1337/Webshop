import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import RemoveIcon from "@mui/icons-material/Remove";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import { Link, Outlet } from "react-router-dom";
import { Book } from "../../components/Models";
import { useProduct } from "../../contexts/ProductContext";

const linkStyle = {
  display: "flex",
  textDecoration: "none",
  color: "white",
};

function Row(product: Book) {
  const [open, setOpen] = React.useState(false);
  const { removeProduct } = useProduct();
  const formatter = new Intl.NumberFormat("sv-SE", {
    style: "currency",
    currency: "SEK",
  });

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton aria-label='expand row' size='small' onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component='th' scope='row'>
          <Box
            component='img'
            sx={{
              width: "40px",
            }}
            src={product.image}
          />
        </TableCell>
        <TableCell>{product.title}</TableCell>
        <TableCell>
          <Link
            to='updatebookadmin'
            state={{ id: product.id }}
            style={linkStyle}
          >
            <EditIcon sx={{ color: "#F5425D", cursor: "pointer" }} />
          </Link>
          <DeleteIcon
            sx={{ color: "#F5425D", cursor: "pointer" }}
            onClick={() => removeProduct(product)}
          />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size='small'>
                <TableHead>
                  <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Author</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow key={product.id}>
                    <TableCell component='th' scope='row'>
                      {product.id}
                    </TableCell>
                    <TableCell>{formatter.format(product.price)}</TableCell>
                    <TableCell>{product.author}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Table size='small'>
              <TableHead>
                <TableRow>
                  <TableCell>Description</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>{product.description}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function AdminCMS() {
  const { products } = useProduct();

  return (
    <main style={{ display: "flex", flexDirection: "column" }}>
      <Outlet />
      <TableContainer component={Paper} sx={{ pt: "5rem" }}>
        <Table aria-label='collapsible table'>
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Cover</TableCell>
              <TableCell>Title</TableCell>
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
              <Row
                key={product.id}
                id={product.id}
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
    </main>
  );
}
