import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getBookDetails, getTrendingBooks } from "../services/api"; // Change to book-related API
import BookList from "../components/BookList"; // Change from MovieList to BookList
import useStore from "../stores/store";
import LoadingSpinner from "../components/LoadingSpinner";

// Example developer picks (book IDs)
const developerPicks = ["OL7353617M", "OL1234567M", "OL9876543M"]; // Sample Open Library book IDs
const TRENDING_PREVIEW_COUNT = 8;

const Home = () => {
  const { clearSearch } = useStore();
  const [trendingBooks, setTrendingBooks] = useState([]);
  const [devPicks, setDevPicks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDeveloperPicks();
    fetchTrendingBooksPreview();
    clearSearch(); // Clear previous search when returning to home
  }, []);

  const fetchDeveloperPicks = async () => {
    try {
      const picks = await Promise.all(
        developerPicks.map((id) => getBookDetails(id)) // Fetch book details by IDs
      );
      setDevPicks(picks);
    } catch (error) {
      console.error("Error fetching Developer's Picks: ", error);
      setError("Failed to fetch developer picks. Please try again.");
    }
  };

  const fetchTrendingBooksPreview = async () => {
    try {
      const result = await getTrendingBooks(1); // Fetch trending books
      setTrendingBooks(result.books.slice(0, TRENDING_PREVIEW_COUNT)); // Use `books` key instead of `results`
    } catch (error) {
      console.error("Error fetching trending books: ", error);
      setError("Failed to fetch trending books. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <LoadingSpinner size={48} className="mt-8" />;
  }

  if (error) {
    return <div className="text-red-500 mt-8 text-center">{error}</div>;
  }

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Trending Books</h2>
        <Link
          to="/trending"
          className="text-blue-500 hover:text-blue-700 flex items-center"
        >
          See all trending
          <svg
            className="ml-1 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </Link>
      </div>
      <BookList books={trendingBooks} /> {/* Change to BookList */}

      <h2 className="text-xl font-bold mt-8 mb-4">Developer's Pick</h2>
      <BookList books={devPicks} /> {/* Change to BookList */}
    </div>
  );
};

export default Home;
