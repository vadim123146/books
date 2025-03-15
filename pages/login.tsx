import { useState } from 'react';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();

    // Тестовые данные для логина
    const testUser  = {
      username: 'testuser',
      password: 'password123',
    };

    if (username === testUser .username && password === testUser .password) {
      // Если логин успешен, перенаправляем на главную страницу
      signIn('credentials', { username, password });
      router.push('/');
    } else {
      alert('Неверный логин или пароль');
    }
  };

  return (
    <div>
      <h1>Вход в систему</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Логин:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
            required
          />
        </div>
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default LoginPage;
