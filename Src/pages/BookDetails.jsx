import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getBookDetails } from "../services/api"; // Fetch book details
import useStore from "../stores/store";
import LoadingSpinner from "../components/LoadingSpinner";

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const { searchQuery, currentPage } = useStore();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const bookData = await getBookDetails(id); // Fetch book details
        setBook(bookData);
      } catch (error) {
        console.error("Error fetching book data: ", error);
        setError("Failed to fetch book details. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchBookData();
  }, [id]);

  const handleGoBack = () => {
    if (searchQuery) {
      navigate(`/search?query=${encodeURIComponent(searchQuery)}&page=${currentPage}`);
    } else {
      navigate("/");
    }
  };

  if (isLoading) return <LoadingSpinner size={48} className="mt-8" />;
  if (error) return <div className="container mx-auto px-4 py-8 text-red-500">{error}</div>;
  if (!book) return <div className="container mx-auto px-4 py-8">No book found</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={handleGoBack}
        className="mb-4 text-blue-500 hover:text-blue-700"
      >
        &larr; Back to {searchQuery ? "Search Results" : "Home"}
      </button>

      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3">
          {book.cover ? (
            <img
              src={book.cover}
              alt={book.title}
              className="w-full rounded-lg shadow-lg"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-200">
              No cover available
            </div>
          )}
        </div>

        <div className="md:w-2/3 md:pl-8 mt-4 md:mt-0">
          <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
          <p className="text-lg mb-4">{book.description}</p>
          <p className="text-sm text-gray-600 mb-4">Author: {book.author}</p>
          <p className="text-sm text-gray-600 mb-4">Published: {book.published}</p>
          <p className="text-sm text-gray-600 mb-4">ISBN: {book.isbn}</p>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
