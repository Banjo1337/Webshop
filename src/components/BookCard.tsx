import { Card, CardContent, CardMedia, Typography } from "@mui/material";
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
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Link to={`/book/${book.id}`}>
        <CardMedia component='img' height='100%' image={book.image} alt={book.title + " cover"} />
      </Link>
      <CardContent
        sx={{
          padding: "5px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography gutterBottom variant='body2'>
          {book.title}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {book.author}
        </Typography>
        {children}
      </CardContent>
    </Card>
  );
};

export default BookCard;
