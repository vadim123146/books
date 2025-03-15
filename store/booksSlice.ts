import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
  image?: string;
}

export interface BooksState {
  books: Book[];
}

// Тестовые данные о книгах
const initialBooks: Book[] = [
  {
    id: '1',
    title: '1984',
    author: 'Джордж Оруэлл',
    price: 500,
    image: '/book.jpg', // Путь к изображению в папке public
  },
  {
    id: '2',
    title: 'Убить пересмешника',
    author: 'Харпер Ли',
    price: 450,
    image: '/book.jpg', // Путь к изображению в папке public
  },
  {
    id: '3',
    title: 'Гордость и предубеждение',
    author: 'Джейн Остин',
    price: 400,
    image: '/book.jpg', // Путь к изображению в папке public
  },
  {
    id: '4',
    title: 'Моби Дик',
    author: 'Герман Мелвилл',
    price: 600,
    image: '/book.jpg', // Путь к изображению в папке public
  },
  {
    id: '5',
    title: 'Великий Гэтсби',
    author: 'Фрэнсис Скотт Фицджеральд',
    price: 550,
    image: '/book.jpg', // Путь к изображению в папке public
  },
  {
    id: '6',
    title: 'Преступление и наказание',
    author: 'Федор Достоевский',
    price: 700,
    image: '/book.jpg', // Путь к изображению в папке public
  },
  {
    id: '7',
    title: 'Анна Каренина',
    author: 'Лев Толстой',
    price: 650,
    image: '/book.jpg', // Путь к изображению в папке public
  },
  {
    id: '8',
    title: '451 градус по Фаренгейту',
    author: 'Рэй Брэдбери',
    price: 480,
    image: '/book.jpg', // Путь к изображению в папке public
  },
  {
    id: '9',
    title: 'Старик и море',
    author: 'Эрнест Хемингуэй',
    price: 520,
    image: '/book.jpg', // Путь к изображению в папке public
  },
  {
    id: '10',
    title: 'Маленький принц',
    author: 'Антуан де Сент-Экзюпери',
    price: 300,
    image: '/book.jpg', // Путь к изображению в папке public
  },
  {
    id: '11',
    title: 'Три товарища',
    author: 'Эрих Мария Ремарк',
    price: 550,
    image: '/book.jpg', // Путь к изображению в папке public
  },
  {
    id: '12',
    title: 'Сияние',
    author: 'Стивен Кинг',
    price: 600,
    image: '/book.jpg', // Путь к изображению в папке public
  },
];

const initialState: BooksState = {
  books: initialBooks, // Инициализируем состояние тестовыми данными
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setBooks: (state, action: PayloadAction<Book[]>) => {
      state.books = action.payload;
    },
  },
});

// Экспортируем действия и редюсер
export const { setBooks } = booksSlice.actions;
export default booksSlice.reducer;
