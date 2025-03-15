import React, { useState } from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import LoginModal from './LoginModal';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const { data: session } = useSession();
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>Книжный мир Краснодара</h1>
      <ul className={styles.links}>
        <li className={styles.navlink}>
          <Link href="/">Главная</Link>
        </li>
        <li className={styles.navlink}>
          <Link href="/cart">Корзина</Link>
        </li>
        {session ? (
          <>
            <li className={styles.navlink}>
              <Link href="/profile">Профиль</Link>
            </li>
            <li className={styles.navlink}>
              <button className={styles.btn} onClick={() => signOut()}>Выйти</button>
            </li>
            <div>
            <div className={styles.navlink}>
              <span>Приветствуем, {session.user.name}!</span> {/* Приветственное сообщение */}
            </div>
            </div>
          </>
        ) : (
          <li className={styles.navlink}>
            <button className={styles.btn} onClick={openModal}>Войти</button>
          </li>
        )}
      </ul>
      <LoginModal isOpen={isModalOpen} onRequestClose={closeModal} />
    </nav>
  );
};

export default Navbar;