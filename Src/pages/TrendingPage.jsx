import React, { useState, useEffect } from "react";
import { getTrendingBooks } from "../services/api"; // Change to book-related API
import BookList from "../components/BookList"; // Change from MovieList to BookList
import LoadingSpinner from "../components/LoadingSpinner";

const TrendingPage = () => {
  const [trendingBooks, setTrendingBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendingBooks = async () => {
      try {
        const result = await getTrendingBooks(); // Fetch trending books
        setTrendingBooks(result.books); // Use `books` key instead of `results`
      } catch (error) {
        console.error("Error fetching trending books: ", error);
        setError("Failed to fetch trending books. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchTrendingBooks();
  }, []);

  if (isLoading) {
    return <LoadingSpinner size={48} className="mt-8" />;
  }

  if (error) {
    return <div className="container mx-auto px-4 py-8 text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-xl font-bold mb-4">Trending Books</h2>
      <BookList books={trendingBooks} /> {/* Change to BookList */}
    </div>
  );
};

export default TrendingPage;
