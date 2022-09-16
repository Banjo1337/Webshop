import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Button } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Link, Outlet } from "react-router-dom";
import AdminRow from "../components/Admin_Components/AdminRow";
import { useProduct } from "../contexts/ProductContext";
import { useSortableData } from "../hooks/useSortableData";

const linkStyle = {
  display: "flex",
  textDecoration: "none",
  color: "white",
};

export default function AdminCMS() {
  const { products } = useProduct();

  const { items, requestSort } = useSortableData(products, {
    key: "title",
    direction: "descending",
  });

  return (
    <main style={{ display: "flex", flexDirection: "column" }}>
      <Outlet />
      <TableContainer component={Paper} sx={{ pt: "5rem" }}>
        <Table aria-label='collapsible table'>
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Omslag</TableCell>
              <TableCell>
                <Button
                  onClick={() => requestSort("title")}
                  sx={{ textTransform: "capitalize", color: "black" }}
                >
                  Titel
                </Button>
              </TableCell>
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
            {items.map((product) => (
              <AdminRow key={product.id} product={product} linkStyle={linkStyle} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </main>
  );
}
