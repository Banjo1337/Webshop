import EditIcon from "@mui/icons-material/Edit";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import {
  Box,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { CSSProperties } from "react";
import { Link } from "react-router-dom";
import DialogPopupDeleteBook from "../dialogs/DialogPopupDeleteBook";
import { Book } from "../Models";

interface Props {
  product: Book;
  linkStyle: CSSProperties;
}

function AdminRow({ product, linkStyle }: Props) {
  const [open, setOpen] = React.useState(false);
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
          <Link to='updatebookadmin' state={{ id: product.id }} style={linkStyle}>
            <EditIcon sx={{ color: "#F5425D", cursor: "pointer" }} />
          </Link>
          <DialogPopupDeleteBook id={product.id} />
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

export default AdminRow;
