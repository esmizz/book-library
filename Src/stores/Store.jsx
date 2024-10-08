// src/stores/store.js
import { create } from 'zustand';

const useStore = create((set) => ({
  theme: 'light', // Default state
  toggleTheme: () => set((state) => ({
    theme: state.theme === 'light' ? 'dark' : 'light'
  })),
}));

export default useStore;
