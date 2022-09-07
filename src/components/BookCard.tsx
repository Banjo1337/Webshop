import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Book } from "./Models";

interface Props {
  book: Book;
  children: ReactNode;
}

const BookCard = ({ book, children }: Props) => {
  return (
    <Card
      sx={{
        height: "400px",
      }}
    >
      <Link to={`/book/${book.id}`}>
        <CardMedia component='img' height='250px' image={book.image} alt={book.title + " cover"} />
      </Link>
      <CardContent
        sx={{
          padding: "5px",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          height: "150px",
        }}
      >
        <Typography gutterBottom variant='body2'>
          {book.title}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {book.author}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flex: "1",
            alignItems: "flex-end",
            justifyContent: "center",
            marginBottom: "10px",
          }}
        >
          {children}
        </Box>
      </CardContent>
    </Card>
  );
};

export default BookCard;
