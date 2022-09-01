import { Link, Outlet } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import bokmal from "../assets/bokmal.png";
import Badge from '@mui/material/Badge';
import { useCart } from "../contexts/CartContext";

export default function ResponsiveAppBar () {
  const { cart } = useCart();
  const linkStyle = {
    display: "flex",
    textDecoration: "none",
    color: "white"
  }
  return (
    <>
      <AppBar position="static"
        elevation={15}
        sx={{
        background: "linear-gradient(0deg, rgba(172,172,172,0.7903536414565826) 0%, rgba(40,221,255,0.7791491596638656) 2%, rgba(40,130,255,1) 71%)",

      }}>
        <Container maxWidth="xl" sx={{height: "55px"}}>
          <Box sx={{
              height: "100%",
              display: "flex",
              justifyContent: "space-between"
            }}>
              <Link to="/" style={linkStyle}>
                  <Box sx={{
                    display: "flex",
                    alignItems: "center"
                  }}>
                    <Box
                      component="img"
                      sx={{
                        width: "40px"
                      }}
                      src={bokmal}
                    />
                    <Typography
                      variant="h6"
                      component="p"
                      sx={{
                        fontWeight: "300",
                        letterSpacing: '.3rem',
                        marginLeft: "0.3rem"
                      }}
                    >
                      bokmal.se
                    </Typography>
                  </Box>
              </Link>
            <Link to="shoppingcart" style={linkStyle}>
              <Badge color="secondary" overlap="circular" badgeContent={cart.length}>
                <ShoppingCartIcon sx={{
                  alignSelf: "center",
                  fontSize: "2rem"
                }}/>  
              </Badge>
              
            </Link>
          </Box>
        </Container>
      </AppBar>
      <Outlet />
    </>
  );
};
