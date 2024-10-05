import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import BookCard from "./BookCard"; // Component for displaying individual book details
import LoadingSpinner from "./LoadingSpinner"; // Spinner component for loading state
import Pagination from "./Pagination"; // Pagination component

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const searchQuery = searchParams.get("query") || "";
  const resultsPerPage = 10;

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `https://openlibrary.org/search.json?q=${searchQuery}&page=${currentPage}`
        );
        const booksData = response.data.docs.map((book) => ({
          id: book.key,
          title: book.title,
          author: book.author_name?.join(", ") || "Unknown",
          cover_url: book.cover_i
            ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
            : null,
          published_year: book.first_publish_year || "N/A",
          rating: book.ratings_average || "N/A",
        }));

        setBooks(booksData);
        setTotalPages(Math.ceil(response.data.numFound / resultsPerPage));
      } catch (error) {
        setError("Failed to fetch books. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    if (searchQuery) {
      fetchBooks();
    }
  }, [searchQuery, currentPage]);

  return (
    <div className="container mx-auto px-4">
      {loading && <LoadingSpinner />}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && books.length === 0 && !error && <p>No books found.</p>}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default BookList;
