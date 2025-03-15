import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import Link from 'next/link';


const Header = () => {
  return (
    <AppBar position="static" className={styles.body}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Книжный мир Краснодара
        </Typography>
        <Link href="/" passHref>
          <Button color="inherit">Главная</Button>
        </Link>
        <Link href="/books" passHref>
          <Button color="inherit">Книги</Button>
        </Link>
        <Link href="/cart" passHref>
          <Button color="inherit">Корзина</Button>
        </Link>
        <Link href="/profile" passHref>
          <Button color="inherit">Профиль</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;