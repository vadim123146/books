import React from 'react';
import { Container, Typography, Grid, Button } from '@mui/material';
import BookCard from '../components/BookCard';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice'; 
import styles from '../styles/Home.module.css';

const HomePage = () => {
  // Получаем книги из Redux Store
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  // Функция для добавления книги в корзину
  const handleAddToCart = (book) => {
    dispatch(addToCart(book));
  };

  return (
    <Container>
      <Typography variant="h2" gutterBottom className={styles.title}>
        Добро пожаловать в Книжный мир Краснодара
      </Typography>
      <Typography variant="h5" gutterBottom>
        Популярные книги
      </Typography>
      <Grid container spacing={4}>
        {books.map((book) => (
          <Grid item xs={12} sm={6} md={4} key={book.id}>
            <BookCard book={book} />
            <Button 
              variant="contained" 
              color="primary" 
              onClick={() => handleAddToCart(book)} 
              style={{ marginTop: '10px' }} // Добавляем отступ сверху
            >
              Добавить в корзину
            </Button>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HomePage;