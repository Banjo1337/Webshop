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
        maxWidth: "12rem",
        minHeight: "30rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Link to={`/book/${book.id}`}>
        <CardMedia component='img' height='300' image={book.image} alt={book.title + " cover"} />
      </Link>
      <CardContent>
        <Typography gutterBottom variant='body2'>
          {book.title}
        </Typography>
        <Typography variant='body2' color='text.secondary' style={{ paddingBottom: ".3rem" }}>
          {book.author}
        </Typography>
        {children}
      </CardContent>
    </Card>
  );
};

export default BookCard;
