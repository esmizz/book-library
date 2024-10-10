// src/stores/store.js
import { create } from 'zustand';

// Define Zustand store to manage global state
const useStore = create((set) => ({
  // Array to store favorite books
  favorites: [],
  // Function to add a book to the favorites array
  addFavorite: (book) => set((state) => ({ favorites: [...state.favorites, book] })),
  // Function to remove a book from the favorites array based on its ID
  removeFavorite: (id) => set((state) => ({
    favorites: state.favorites.filter((book) => book.id !== id),
  })),
  // Boolean to track dark mode state
  isDarkMode: false,
  // Function to toggle dark mode
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}));

// Export the Zustand store hook to use in components
export default useStore;
