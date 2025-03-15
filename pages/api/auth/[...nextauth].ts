import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "Логин", type: "text", placeholder: "testuser" },
        password: { label: "Пароль", type: "password", placeholder: "password123" },
      },
      async authorize(credentials) {
        // Здесь вы можете добавить свою логику аутентификации
        const testUser  = {
          username: 'testuser',
          password: 'password123',
        };

        if (credentials.username === testUser .username && credentials.password === testUser .password) {
          return { name: credentials.username };
        } else {
          return null; // Возвращаем null, если аутентификация не удалась
        }
      },
    }),
  ],
  pages: {
    signIn: '/login', // Укажите путь к вашей странице входа
  },
  session: {
    strategy: 'jwt',
  },
});