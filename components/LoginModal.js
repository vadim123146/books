import React, { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { signIn } from 'next-auth/react';
import '../styles/ModalGlobal.css';

const LoginModal = ({ isOpen, onRequestClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    const result = await signIn('credentials', {
      redirect: false,
      username,
      password,
    });

    if (result.error) {
      alert('Неверный логин или пароль');
    } else {
      onRequestClose(); // Закрыть модальное окно после успешного входа
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="ReactModal__Content"
      overlayClassName="ReactModal__Overlay"
      ariaHideApp={false}
    >
      <div className="close-button" onClick={onRequestClose}>×</div>
      <h2>Вход</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Логин:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='Тестовый логин - testuser'
            required
          />
        </div>
        <div>
          <label htmlFor="password">Пароль:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
             placeholder='Тестовый логин - password123'
            required
          />
        </div>
        <button type="submit">Войти</button>
      </form>
    </Modal>
  );
};

export default LoginModal;