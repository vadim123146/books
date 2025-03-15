import React from 'react';
import { useSession } from 'next-auth/react';
import { useSelector } from 'react-redux';
import styles from '../styles/ProfilePage.module.css';

const ProfilePage = () => {
  const { data: session } = useSession();
  const cartItems = useSelector((state) => state.cart.items);

  const totalBooks = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  if (!session) {
    return <div>Пожалуйста, войдите в систему.</div>;
  }

  return (
    <div className={styles.profile}>
      <h1>Приветствуем вас, {session.user.name}!</h1>
      <h2>Вы добавили в корзину {totalBooks} книг на сумму {totalPrice}₽.</h2>
    </div>
  );
};

export default ProfilePage;