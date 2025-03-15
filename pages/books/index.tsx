import React from 'react';
import { Button, Container, Typography, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../../store/cartSlice';

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Корзина
      </Typography>
      {cartItems.length === 0 ? (
        <Typography variant="h6">Ваша корзина пуста.</Typography>
      ) : (
        <>
          <Typography variant="h6">Товары в корзине:</Typography>
          {/* Здесь можно отобразить список товаров в корзине */}
          <Typography variant="h6">Итого: {total} ₽</Typography>
          <Box mt={2}>
            <Button 
              variant="contained" 
              color="secondary" 
              onClick={handleClearCart} 
              fullWidth
            >
              Очистить корзину
            </Button>
          </Box>
          <Box mt={2}>
            <Button 
              variant="contained" 
              color="primary" 
              fullWidth
            >
              Перейти к оформлению заказа
            </Button>
          </Box>
        </>
      )}
    </Container>
  );
};

export default CartPage;
