import axios from 'axios';

// Create an instance of Axios with default base URL
const apiClient = axios.create({
    baseURL: 'https://openlibrary.org',
});

// Fetch books based on search query
export const searchBooks = async (query, page = 1) => {
    const response = await apiClient.get('/search.json', {
        params: { q: query, page },
    });
    return response.data; // Ensure the structure of data is compatible
};

// Fetch book details by ID
export const getBookDetails = async (id) => {
    const response = await apiClient.get(`/books/${id}.json`);
    return response.data; // Ensure the structure of data is compatible
};

// Fetch trending books (or new arrivals, as Open Library may not have a 'trending' endpoint)
export const getTrendingBooks = async (page = 1) => {
    const response = await apiClient.get('/new.json', {
        params: { page }, // New books can be fetched as "new"
    });
    return response.data; // Ensure the structure of data is compatible
};

// Fetch book covers using Open Library cover API
export const getBookCover = (coverId) => {
    return `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`;
};

// Fetch author details (if needed)
export const getAuthorDetails = async (authorId) => {
    const response = await apiClient.get(`/authors/${authorId}.json`);
    return response.data; // Ensure the structure of data is compatible
};
