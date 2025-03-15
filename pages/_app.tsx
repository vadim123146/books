import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from '../store/store';
import { SessionProvider } from 'next-auth/react';
import { hydrate, clearCart } from '../store/cartSlice'; // Импортируйте действия
import '../styles/globals.css';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Загрузка состояния корзины из localStorage
    if (typeof window !== 'undefined') {
      const cartData = localStorage.getItem('bookshop-cart');
      if (cartData) {
        store.dispatch(hydrate(JSON.parse(cartData))); // Диспатч действия hydrate
      }
    }
  }, []);

  const handleLogout = () => {
    // Очистка состояния корзины
    store.dispatch(clearCart());
    localStorage.removeItem('bookshop-cart');
  };

  return (
    <Provider store={store}>
      <SessionProvider session={pageProps.session}>
        <Navbar onLogout={handleLogout} /> {/* Передаем функцию выхода в Navbar */}
        <Component {...pageProps} />
      </SessionProvider>
    </Provider>
  );
}

export default MyApp;
