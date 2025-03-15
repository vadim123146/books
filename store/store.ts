import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import booksReducer from './booksSlice'; // Импортируем редюсер книг

const store = configureStore({
  reducer: {
    cart: cartReducer,
    books: booksReducer, // Добавляем редюсер книг
  },
});

export default store;