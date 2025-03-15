import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import style from '../styles/Book.module.css'

const BookCard = ({ book }) => {
  const defaultImage = '/book.jpg'; // Путь к изображению по умолчанию

  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={book.image || defaultImage} // Используем изображение по умолчанию, если его нет
        alt={book.title}
        className={style.img}

      />
      <CardContent>
        <Typography variant="h5">{book.title}</Typography>
        <Typography variant="subtitle1">{book.author}</Typography>
        <Typography variant="body2">{book.price} ₽</Typography>
      </CardContent>
    </Card>
  );
};

export default BookCard;