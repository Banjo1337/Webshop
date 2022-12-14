import { Link, Outlet } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import bokmal from "../assets/bokmal.png";
import Badge from "@mui/material/Badge";
import { useCart } from "../contexts/CartContext";
import getFormattedCurrency from "../utils/getFormattedCurrency";

export default function ResponsiveAppBar() {
  const { cart } = useCart();

  const totalPrice = getFormattedCurrency(
    cart.reduce(
      (totalPrice, product) => (totalPrice = totalPrice + product.price * product.number),
      0,
    ),
  );

  const linkStyle = {
    display: "flex",
    textDecoration: "none",
    color: "white",
  };

  return (
    <>
      <AppBar
        position='fixed'
        elevation={15}
        sx={{
          background:
            "linear-gradient(0deg, rgba(172,172,172,0.7903536414565826) 0%, rgba(40,221,255,0.7791491596638656) 2%, rgba(40,130,255,1) 18%)",
        }}
      >
        <Container maxWidth='xl' sx={{ height: "55px" }}>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Link to='/' style={linkStyle}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box
                  component='img'
                  sx={{
                    width: "40px",
                  }}
                  src={bokmal}
                />
                <Typography
                  variant='h6'
                  component='p'
                  sx={{
                    fontWeight: "300",
                    letterSpacing: ".3rem",
                    marginLeft: "0.3rem",
                  }}
                >
                  bokmal.se
                </Typography>
              </Box>
            </Link>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: "150px",
                justifyContent: "right",
                flex: "1",
                marginRight: "1rem",
              }}
            >
              <Box
                sx={{
                  fontSize: "0.8rem",
                  marginLeft: "1.5rem",
                }}
              >
                {cart.length > 0 && (
                  <>
                    <Box>Totalt: </Box>
                    <Box>{totalPrice}</Box>
                  </>
                )}
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: "100px",
                justifyContent: "space-between",
              }}
            >
              <Link to='shoppingcart' style={linkStyle}>
                <Badge
                  color='secondary'
                  overlap='circular'
                  badgeContent={cart.reduce((sum, p) => sum + p.number, 0)}
                >
                  <ShoppingCartIcon
                    sx={{
                      alignSelf: "center",
                      fontSize: "2rem",
                    }}
                  />
                </Badge>
              </Link>
              <Link to='admincms' style={linkStyle}>
                <AdminPanelSettingsIcon
                  sx={{
                    alignSelf: "center",
                    fontSize: "2rem",
                  }}
                />
              </Link>
            </Box>
          </Box>
        </Container>
      </AppBar>
      <Outlet />
    </>
  );
}
