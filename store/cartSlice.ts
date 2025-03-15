import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
  image?: string;
  quantity?: number;
}

export interface CartState {
  items: Book[];
  total: number;
}

const initialState: CartState = {
  items: [],
  total: 0
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    hydrate: (state, action: PayloadAction<CartState>) => {
      return {
        ...state,
        ...action.payload
      };
    },
    addToCart: (state, action: PayloadAction<Book>) => {
      const { id, title, author, price } = action.payload; // Получаем все необходимые свойства
      const existingItem = state.items.find(item => item.id === id);
      
      if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 1) + 1; // Увеличиваем количество
      } else {
        state.items.push({ id, title, author, price, quantity: 1 }); // Добавляем новый товар
      }
      
      state.total = state.items.reduce(
        (sum, item) => sum + item.price * (item.quantity || 1),
        0
      );
      
      // Сохраняем в localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('bookshop-cart', JSON.stringify(state));
      }
    },
    
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload); // Удаляем товар
      state.total = state.items.reduce(
        (sum, item) => sum + item.price * (item.quantity || 1),
        0
      );
      
      // Сохраняем в localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('bookshop-cart', JSON.stringify(state));
      }
    },
    
    updateQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
      const { id, quantity } = action.payload;
      const item = state.items.find(item => item.id === id);
      
      if (item) {
        item.quantity = quantity;
        
        if (quantity <= 0) {
          state.items = state.items.filter(item => item.id !== id); // Удаляем товар, если количество <= 0
        }
      }
      
      state.total = state.items.reduce(
        (sum, item) => sum + item.price * (item.quantity || 1),
        0
      );
      
      // Сохраняем в localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('bookshop-cart', JSON.stringify(state));
      }
    },
    
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
      
      // Сохраняем в localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('bookshop-cart', JSON.stringify(state));
      }
    },
  },
});

// Экспортируем действия и редюсер
export const { hydrate, addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;