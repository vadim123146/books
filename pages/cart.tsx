import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../store/cartSlice';
import Link from 'next/link';
import styles from '../styles/CartPage.module.css';

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

    const handleRemove = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const handleClear = () => {
    dispatch(clearCart());
  };

  if (cartItems.length === 0) {
    return <div>Ваша корзина пуста.</div>;
  }

  return (
    <div>
      <h1>Ваша корзина</h1>
      <div className={styles.cartWrapper}> 
        {cartItems.map((item) => (
          <div key={item.id} className={styles.cartItem}>
            <h2>
              {item.title} ({item.author}) * {item.quantity} = {item.price * item.quantity}₽
            </h2>
            <button className={styles.btn} onClick={() => handleRemove(item.id)}>Удалить</button>
          </div>
        ))}
      </div>
      <h2 className={styles.end}>
        Итого: {cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}₽
      </h2>
      <button className={styles.btn} onClick={handleClear}>Очистить корзину</button>

      <Link href="/checkout"><button className={styles.btn}>Перейти к оформлению заказа</button></Link>
    </div>
  );
};

export default CartPage;