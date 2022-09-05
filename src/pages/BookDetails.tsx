import { Box, Typography } from "@mui/material";
import { CSSProperties } from "react";
import { Link, useParams } from "react-router-dom";
import ShopButton from "../components/ShopButton";
import { useProduct } from "../contexts/ProductContext";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "../styles/BookDetails.css"



function BookDetails() {
  const { id } = useParams();
  const { products, getProduct} = useProduct();
  const product = getProduct(id!);
  
  const boxStyle : CSSProperties = {
    flex: "1",
    minHeight: "500px",
    display: "flex"
  }

  return (
    <main>
      <Box className="bookDetailsContainer" sx={{display: "flex"}}>
        <Box sx={{...boxStyle, justifyContent: "center", alignItems: "center", position: "relative"}}>
            <Link to="/" style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "black",
              position: "absolute",
              top: "2rem",
              left: "2rem",
            }}>
              <ArrowBackIcon sx={{fontSize: "1.5rem"}}/>
              <Typography sx={{fontWeight: "500", fontSize: "1.5rem"}}>Tillbaka</Typography>
            </Link>
          <Box component="img" src={product.image} />
        </Box>
        <Box sx={{...boxStyle, flex: "2"}}>
          <Box sx={{padding: "2rem", justifyContent: "space-around", ...boxStyle, flexDirection: "column"}}>
            <Box>
              <Typography
                variant="h4"
                component="h2"
                sx={{fontWeight: "500", letterSpacing: "0.2rem"}}

              >
                {product.title}
              </Typography>
              <Typography
                variant="h5"
                component="p"
                

              >
                {product.author}
              </Typography>
            </Box>
            <Typography
              variant="subtitle1"
              component="p"
            >
              {product.category}
            </Typography>
            <Typography
              variant="subtitle1"
              component="p"
              sx={{}}
            >
              {product.description}
            </Typography>

          <ShopButton product={product}>{product.price} kr</ShopButton>
          </Box>
        </Box>
      </Box>
      <Typography variant="h5" sx={{textAlign: "center", padding: "2rem 0", letterSpacing: ".2rem"}}>
        Liknande titlar
      </Typography>
      <Box 
        className="similarTitlesContainer"
        sx={{
        display: "flex",
        justifyContent: "space-around"
      }}>
        {
          products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 5).
          map(p =>
          <Link to={"/book/" + p.id}>
            <Box component="img" src={p.image} sx={{maxHeight: "200px"}}/>
          </Link> 
        )}
      </Box>
    </main>
  )
}

export default BookDetails;
