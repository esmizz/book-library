// src/pages/SearchPage.jsx
import React, { useState } from "react";
import axios from "axios"; // Axios to fetch data from Open Library API
import BookCard from "../components/BookCard"; // Import BookCard component to display search results

const SearchPage = () => {
  // State to track search query, results, and potential errors
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  // Function to perform the book search using Open Library API
  const searchBooks = async (query) => {
    try {
      // Make API request to search books based on the query
      const response = await axios.get(
        `https://openlibrary.org/search.json?q=${query}`
      );
      // Update results state with books from the API response
      setResults(response.data.docs);
    } catch (err) {
      // Handle any errors that occur during the API request
      setError("Error fetching books");
    }
  };

  return (
    <div>
      {/* Input field for the user to enter their search query */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)} // Update query state when the user types
        placeholder="Search for books"
        className="border p-2 mb-4"
      />
      {/* Button to trigger the search */}
      <button onClick={() => searchBooks(query)} className="btn-primary">
        Search
      </button>

      {/* Display error message if any */}
      {error && <p>{error}</p>}

      {/* Display search results in a grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {results.map((book) => (
          // Render a BookCard for each search result, passing book data as props
          <BookCard key={book.key} book={book} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
