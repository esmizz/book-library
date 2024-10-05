import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Create a Zustand store with persistence
const useStore = create(
    persist(
        (set, get) => ({
            // State variables
            favorites: [], // Array to store favorite books
            currentPage: 1, // Current page of search results
            totalPages: 1, // Total number of pages for search results
            books: [], // Array to store book data
            searchQuery: '', // Current search query
            searchResults: [], // Array to store search results
            isDarkMode: false, // Boolean to toggle dark mode

            // Actions
            addFavorite: (book) => set((state) => ({
                favorites: [...state.favorites, book] // Add a book to favorites
            })),
            removeFavorite: (bookId) => set((state) => ({
                favorites: state.favorites.filter((book) => book.id !== bookId) // Remove a book from favorites by ID
            })),
            isFavorite: (bookId) => get().favorites.some((book) => book.id === bookId),
            setCurrentPage: (page) => set({ currentPage: page }), // Set current page
            setTotalPages: (pages) => set({ totalPages: pages }), // Set total pages
            setBooks: (books) => set({ books }), // Set books from API
            setSearchQuery: (query) => set({ searchQuery: query }), // Set search query
            setSearchResults: (results) => set({ searchResults: results }), // Set search results from API
            clearSearch: () => set({ searchQuery: '', searchResults: [] }), // Clear search
            toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })), // Toggle dark mode
        }),
        {
            name: 'book-library-storage', // Name of the storage key
            getStorage: () => localStorage, // Use localStorage for persistence
        }
    )
);

export default useStore;
