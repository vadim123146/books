'use client';
import { CartProvider as CartContextProvider } from 'react-use-cart';

export default function CartProvider({ children }) {
  return <CartContextProvider>{children}</CartContextProvider>;
}