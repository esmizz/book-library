import React, { useState } from "react";
import { Link } from "react-router-dom";
import useStore from "../stores/store"; // Import store for state management
import { Heart, Star, Calendar, Image } from "lucide-react";

const BookCard = ({ book }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addFavorite, removeFavorite, isFavorite } = useStore();
  const favorite = isFavorite(book.id); // Check if book is favorite

  const handleFavoriteToggle = (e) => {
    e.preventDefault(); // Prevent navigation to details when clicking favorite button
    if (favorite) {
      removeFavorite(book.id);
    } else {
      addFavorite(book);
    }
  };

  return (
    <div
      className="book-card relative bg-background rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 dark:bg-gray-800"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/book/${book.id}`} className="block h-full">
        <div className="relative aspect-w-2 aspect-h-3">
          {book.cover_url ? (
            <img
              src={book.cover_url}
              alt={book.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-200 dark:bg-gray-700">
              <Image size={28} />
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-lg font-bold">{book.title}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{book.author}</p>
          <div className="flex items-center mt-2 space-x-2">
            <Star size={16} className="text-yellow-500" />
            <span>{book.rating || "N/A"}</span>
            <Calendar size={16} className="text-gray-400 dark:text-gray-500" />
            <span>{book.published_year || "Unknown"}</span>
          </div>
        </div>
      </Link>
      <button
        onClick={handleFavoriteToggle}
        className={`absolute top-2 right-2 p-2 rounded-full bg-white text-red-500 shadow-md ${
          favorite ? "text-red-500" : "text-gray-500"
        }`}
        aria-label="Add to favorites"
      >
        <Heart size={24} />
      </button>
    </div>
  );
};

export default BookCard;
