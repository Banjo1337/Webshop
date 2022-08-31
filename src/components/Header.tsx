import { NavLink, Outlet } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import bokmal from "../assets/bokmal.png";

export default function ResponsiveAppBar () {

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
              <NavLink to="/">
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
              </NavLink>
            <NavLink to="shoppingcart" style={{ textDecoration: 'none' }}>
              <ShoppingCartIcon sx={{
                alignSelf: "center",
                fontSize: "2rem"
              }}/>  
            </NavLink>
          </Box>
        </Container>
      </AppBar>
      <Outlet />
    </>
  );
};


// function Header() {
//   return (
//     <>
//       <header style={{ display: "flex", height: "4rem" }}>
//         <NavLink to="/">
//           <h1>Home</h1>
//         </NavLink>
//         <NavLink to="shoppingcart">ShoppingCart</NavLink>
//         <NavLink to="admincms">Admin CMS</NavLink>
//       </header>
//       <Outlet />
//     </>
//   );
// }

// export default Header;
