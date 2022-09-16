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
import { CSSProperties, Fragment, useState } from "react";
import { Link } from "react-router-dom";
import useFallBackImage from "../../hooks/useFallBackImage";
import getFormattedCurrency from "../../utils/getFormattedCurrency";
import DialogPopupDeleteBook from "../dialogs/DialogPopupDeleteBook";
import { Book } from "../Models";

interface Props {
  product: Book;
  linkStyle: CSSProperties;
}

function AdminRow({ product, linkStyle }: Props) {
  const [open, setOpen] = React.useState(false);

  return (
    <Fragment>
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
            src={useFallBackImage(product.image)}
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
                    <TableCell>Pris</TableCell>
                    <TableCell>Författare</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow key={product.id}>
                    <TableCell component='th' scope='row'>
                      {product.id}
                    </TableCell>
                    <TableCell>{getFormattedCurrency(product.price)}</TableCell>
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
                  <TableCell>Beskrivning</TableCell>
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
    </Fragment>
  );
}

export default AdminRow;
